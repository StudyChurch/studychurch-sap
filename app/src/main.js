import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPlugin from './dashboard-plugin'
import Axios from 'axios'

// Plugins
import App from './App.vue'

// router setup
import routes from './routes/routes'

import { setAccessToken, setUserData, getUserData } from './auth';

Vue.config.devtools = true;
// plugin setup
Vue.use(VueRouter)
Vue.use(DashboardPlugin)
Vue.use(require('vue-cookies'))

Vue.prototype.$http = Axios;

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
  mode: 'history'
});

let globalData = {
  userData: getUserData(),
  setUserData(data) {
    this.userData = data;
  }
};

let mixin = {
  methods: {}
};

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  mixins: [mixin],
  data: {
    userData: getUserData(),
  },
  created() {
    this.$http.defaults.baseURL = 'https://scpilgrim.local';
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
      .post('https://scpilgrim.local/wp-json/studychurch/v1/authenticate', {})
      .then(response => {
        setAccessToken(response.data.token);
        setUserData(response.data.user);
        this.updateUserData( getUserData() );
      });
  },
  methods : {
    updateUserData (data) {
      this.userData = data;
    }
  }


});

/* We import element-ui variables at the end so they can override the default element-ui colors */
import './assets/sass/element_variables.scss'
