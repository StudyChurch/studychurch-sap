import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPlugin from './dashboard-plugin'
import Axios from 'axios'
import DateFilter from './filters/date';

// Plugins
import App from './App.vue'

// router setup
import routes from './routes/routes'

import { setAccessToken, setUserData, getUserData } from './auth';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faUsers, faChevronRight, faComments, faList, faUser, faCogs, faBell, faEdit, faTrash, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBook, faUsers, faChevronRight, faComments, faList, faUser, faCogs, faBell, faEdit, faTrash, faEye, faEyeSlash);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.config.devtools = true;

// plugin setup
Vue.use(VueRouter);
Vue.use(DashboardPlugin);
Vue.use(require('vue-cookies'));

Vue.prototype.$http = Axios;

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
  mode: 'history'
});

// Filters
Vue.filter('dateFormat', DateFilter);
Vue.filter( 'isPrivate', function( value, isPrivate ) {
	if ( ! isPrivate ) {
		return value;
	}

	return '<strong class="private-answer">(Private)</strong>' + value;
});

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    userData: getUserData(),
    currentGroup: 0,
  },
  created() {
    this.$http.defaults.baseURL = window.location.protocol + '//' + window.location.host;
    this.$http.defaults.headers.common['X-WP-NONCE'] = this.$cookies.get( '_wpnonce' );

    this.$http.interceptors.response.use(function (response) {
      // Do something with response data
      vm.$http.defaults.headers.common['X-WP-NONCE'] = response.headers['x-wp-nonce'];
      return response;
    }, function (error) {
      // Do something with response error
      return Promise.reject(error);
    });

    this.$http
      .post('/wp-json/studychurch/v1/authenticate', {})
      .then(response => {
        setAccessToken(response.data.token);
        setUserData(response.data.user);
        this.updateUserData( getUserData() );
      });
  },
  methods : {
    setCurrentGroup (groupID) {
      this.currentGroup = groupID;
      localStorage.setItem('currentGroup', groupID);
    },
    getCurrentGroup () {
      if ( ! this.currentGroup || undefined === this.currentGroup ) {
        this.currentGroup = localStorage.getItem('currentGroup');
      }

      return this.currentGroup;
    },
    getCurrentGroupData() {
      if (! this.getCurrentGroup()) {
        return false;
      }

      for (let i = 0; i < this.$root.$data.userData.groups.length; i++) {
        if (this.getCurrentGroup() === this.$root.$data.userData.groups[i].id) {
          return this.$root.$data.userData.groups[i];
        }
      }

      return false
    },
    updateUserData (data) {
      this.userData = data;
    },
    cleanLink (link) {
      return link.replace(window.location.protocol + '//' + window.location.host, '');
    }
  }


});

/* We import element-ui variables at the end so they can override the default element-ui colors */
import './assets/sass/element_variables.scss'
