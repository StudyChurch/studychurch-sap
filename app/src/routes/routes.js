import DashboardLayout from 'src/pages/Dashboard/Layout/DashboardLayout.vue';
// GeneralViews
import NotFound from 'src/pages/GeneralViews/NotFoundPage.vue';

// Page Headers
import DefaultHeader from 'src/pages/Dashboard/DefaultHeader';

// Dashboard pages
import Dashboard     from 'src/pages/Dashboard/Dashboard/Dashboard.vue';
import DashGroups    from 'src/pages/Dashboard/Dashboard/Views/Groups.vue';
import Assignments   from 'src/pages/Dashboard/Dashboard/Views/Assignments.vue';
import Notifications from 'src/pages/Dashboard/Dashboard/Views/Notifications.vue';
import Settings      from 'src/pages/Dashboard/Dashboard/Views/Settings.vue';
import Studies       from 'src/pages/Dashboard/Dashboard/Views/Studies.vue';

import Groups             from 'src/pages/Dashboard/Groups/Groups.vue';
import GroupActivity      from 'src/pages/Dashboard/Groups/Views/Activity.vue';
import GroupAssignments   from 'src/pages/Dashboard/Groups/Views/Assignments.vue';
import GroupMembers       from 'src/pages/Dashboard/Groups/Views/Members.vue';
import GroupSettings      from 'src/pages/Dashboard/Groups/Views/Settings.vue';
import GroupStudies       from 'src/pages/Dashboard/Groups/Views/Studies.vue';

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
        components: {default: Dashboard, header: DefaultHeader},
        children  : [
          {path: '', component: DashGroups},
          {path: 'assignments', component: Assignments},
          {path: 'notifications', component: Notifications},
          {path: 'settings', component: Settings},
          {path: 'studies', component: Studies}
        ]
      },
      {
        path      : 'studies/:study/:chapter?',
        name      : 'Studies',
        components: {default: Study, header: DefaultHeader}
      },
      {
        path      : 'groups/:slug/',
        components: {default: Groups, header: DefaultHeader},
        children  : [
          {path: '', component: GroupActivity},
          {path: 'assignments', component: GroupAssignments},
          {path: 'members', component: GroupMembers},
          {path: 'settings', component: GroupSettings},
          {path: 'studies', component: GroupStudies},
          {
            path     : 'studies/:study/:chapter?',
            name     : 'Group Studies',
            component: Study,
          }
        ]
      },
    ]
  },

  {path: '*', component: NotFound}
];

export default routes;
