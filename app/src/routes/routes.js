import DashboardLayout from 'src/pages/Dashboard/Layout/DashboardLayout.vue';
// GeneralViews
import NotFound from 'src/pages/GeneralViews/NotFoundPage.vue';

// Page Headers
import DefaultHeader from 'src/pages/Dashboard/DefaultHeader';

// Dashboard pages
import Dashboard from 'src/pages/Dashboard/Dashboard/Dashboard.vue';
import Groups    from 'src/pages/Dashboard/Groups/Groups.vue';
import Study     from 'src/pages/Dashboard/Studies/Study.vue';

// Pages
const User = () => import('src/pages/Dashboard/Pages/UserProfile.vue');

const routes = [
//  {
//    path: '/',
//    name: 'Home'
//  },
  {
    path     : '/',
    component: DashboardLayout,
    children : [
      {
        path      : '',
        name      : 'Dashboard',
        components: {default: Dashboard, header: DefaultHeader}
      },
      {
        path      : 'studies/:study/:chapter?',
        name      : 'Studies',
        components: {default: Study, header: DefaultHeader}
      },
      {
        path      : 'groups/:slug',
        name      : 'Groups',
        components: {default: Groups, header: DefaultHeader}
      },
    ]
  },

  {path: '*', component: NotFound}
];

export default routes;
