<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card card-stats card-raised">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-primary">
                      <i class="now-ui-icons ui-2_chat-round"></i>
                    </div>
                    <h3 class="info-title">{{$root.$data.userData.groups.length}}</h3>
                    <h6 class="stats-title">Groups</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-success">
                      <i class="now-ui-icons files_paper"></i>
                    </div>
                    <h3 class="info-title">{{studyData.length}}</h3>
                    <h6 class="stats-title">Studies</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-info">
                      <i class="now-ui-icons design_bullet-list-67"></i>
                    </div>
                    <h3 class="info-title">{{todoData.length}}</h3>
                    <h6 class="stats-title">Todos</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <card class="card-user">
          <div slot="image" class="image">
            <img src="@/assets/img/bg5.jpg" alt="...">
          </div>
          <div>
            <div class="author">
              <a href="#">
                <img class="avatar border-gray" :src="userData.avatar.full" alt="...">
                <h5 class="title">{{userData.name}}</h5>
              </a>
              <p class="description">
                @{{userData.username}}
              </p>
            </div>
          </div>
        </card>

        <card class="card-chart" no-footer-line>

          <div slot="header">
            <h2 class="card-title">Groups</h2>
            <drop-down :hide-arrow="true" position="right">
              <n-button slot="title" class="dropdown-toggle no-caret" round simple icon>
                <i class="now-ui-icons loader_gear"></i>
              </n-button>

              <a class="dropdown-item" href="#">Add a Group</a>
            </drop-down>
          </div>

          <div class="table-responsive">
            <n-table :data="$root.$data.userData.groups">
              <template slot-scope="{row}">
                <td><router-link :to="$root.cleanLink(row.link)">{{row.name}}</router-link></td>
                <td class="text-right">
                  <!--{{row.members}} <i class="now-ui-icons users_single-02"></i>-->
                </td>
              </template>
            </n-table>
          </div>

          <div slot="footer" class="stats">
            <i :class="this.loadingGroups ? 'now-ui-icons arrows-1_refresh-69 spin' : 'now-ui-icons arrows-1_refresh-69'"></i> Just Updated
          </div>

        </card>

        <card class="card-chart" no-footer-line>

          <div slot="header">
            <h2 class="card-title">Studies</h2>
            <drop-down :hide-arrow="true" position="right">
              <n-button slot="title" class="dropdown-toggle no-caret" round simple icon>
                <i class="now-ui-icons loader_gear"></i>
              </n-button>

              <a class="dropdown-item" href="#">Add a Study</a>
            </drop-down>
          </div>

          <div class="table-responsive">
            <n-table :data="studyData">
              <template slot-scope="{row}">
                <td><router-link :to="$root.cleanLink(row.link)">{{row.title.rendered}}</router-link></td>
              </template>
            </n-table>
          </div>

          <div slot="footer" class="stats">
            <i :class="this.loadingStudies ? 'now-ui-icons arrows-1_refresh-69 spin' : 'now-ui-icons arrows-1_refresh-69'"></i> Just Updated
          </div>

        </card>
      </div>

      <div class="col-lg-8">

        <h3 class="title mt-4 text-center">Upcoming Todos</h3>
        <card no-footer-line>
          <ul slot="raw-content" class="list-group list-group-flush">
            <li v-for="data in todoData" :class="'list-group-item'">
              &nbsp;
              <h6>Due Date: {{data.date}}</h6>
              <p v-for="lesson in data.lessons">
                <i class="now-ui-icons design_bullet-list-67"></i>&nbsp; <span v-html="lesson.title"></span>
              </p>
              <p v-html="data.content"></p>
            </li>
          </ul>
          <div slot="footer" class="stats">
            <i :class="this.loadingTodos ? 'now-ui-icons arrows-1_refresh-69 spin' : 'now-ui-icons arrows-1_refresh-69'"></i> Just Updated
          </div>
        </card>

        <h3 class="title mt-4 text-center">Activity</h3>
        <time-line type="simple">
          <time-line-item v-for="activity in activityData" inverted="" :badge-type="getActivityBadgeType(activity.type)" :badge-image="activity.user_avatar.thumb">
            <h6 slot="header" v-html="activity.title"></h6>
            <p slot="content" v-html="activity.content.rendered"></p>

            <h6 slot="footer">
              <i class="ti-time"></i>
              {{activity.date}}
            </h6>
          </time-line-item>
        </time-line>
      </div>
    </div>

  </div>
</template>
<script>

  import { getUserData } from 'src/auth';

  import {
    Card,
    Table as NTable,
    Progress as NProgress,
    AnimatedNumber,
    TimeLine,
    TimeLineItem
  } from 'src/components'

  export default {
    components: {
      Card,
      NTable,
      NProgress,
      AnimatedNumber,
      TimeLine,
      TimeLineItem
    },
    data() {
      return {
        loadingGroups: false,
        loadingStudies: false,
        loadingActivity: true,
        loadingTodos: true,
        todoData: [],
        userData: this.$root.$data.userData,
        groupData: this.$root.$data.userData.groups,
        studyData: this.$root.$data.userData.studies,
        activityData: []
      }
    },
    created() {
//      this.getUserGroups();
//      this.getUserStudies();
      this.getUserTodos();
      this.getUserGroupsActivity();
    },
    computed : {},
    methods : {
      countUserGroups() {
        return this.groupData.length;
      },
      getActivityBadgeType (type) {
        switch(type) {
          case 'activity_comment' :
            return 'info';
          default:
            return 'success';
        }
      },
      getUserGroups () {
        this.loadingGroups = true;
        this.$http
          .get('/wp-json/buddypress/v1/groups/?show_hidden=true&user_id=2')
          .then(response => {
            this.groupData = response.data;
            this.getUserGroupsActivity()
          })
          .finally(() => this.loadingGroups = false)
      },
      getUserStudies () {
        this.loadingStudies = true;
        this.$http
          .get('/wp-json/studychurch/v1/studies?author=2&post_status=publish,pending,draft&per_page=100&orderby=title&order=asc')
          .then(response => (
            this.studyData = response.data
          ))
          .finally(() => this.loadingStudies = false)
      },
      getUserTodos () {
        this.loadingTodos = true;
        this.$http
          .get(
            '/wp-json/studychurch/v1/assignments')
          .then(response => (
            this.todoData = response.data
          ))
          .finally(() => this.loadingTodos = false)
      },
      getUserGroupsActivity () {
        this.loadingActivity = true;
        let groups = this.$root.$data.userData.groups.map(function(group){
          return group.id;
        });
        this.$http
          .get(
            '/wp-json/buddypress/v1/activity?show_hidden=true&per_page=10&primary_id=' + groups.join(','))
          .then(response => (
            this.activityData = response.data
          ))
          .finally(() => this.loadingActivity = false)
      }
    }
  }
</script>
<style>

</style>
