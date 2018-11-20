<template>
  <div>

    <div class="row">
      <div class="col-lg-4">
        <card class="card-user">
          <div slot="image" class="image">
            <img src="@/assets/img/bg5.jpg" alt="...">
          </div>
          <div>
            <div class="author">
              <a href="#">
                <img class="avatar border-gray" :src="groupData.avatar_urls.full" alt="...">
                <h5 class="title">{{groupData.name}}</h5>
              </a>
              <p class="description" v-html="groupData.description.rendered"></p>
            </div>
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
            <n-table :data="groupData.studies">
              <template slot-scope="{row}">
                <td><router-link :to="$root.cleanLink(row.link)">{{row.title}}</router-link></td>
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
        <time-line type="simple" v-loading="this.loadingActivity">
          <time-line-item v-for="activity in activityData" inverted="" :badge-type="getActivityBadgeType(activity.type)" :badge-image="activity.user_avatar.thumb">
            <h6 slot="header" v-html="activity.title"></h6>
            <p slot="content" v-html="activity.content.rendered"></p>

            <h6 slot="footer">
              <i class="ti-time"></i>
              {{activity.date | dateFormat }}
            </h6>
          </time-line-item>
        </time-line>
      </div>
    </div>

  </div>
</template>
<script>
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
        groupData: {
          id: 0,
          name: '',
          slug: '',
          avatar_urls: {
            full: '',
            thumb: ''
          },
          description: {
            rendered: ''
          }
        },
        activityData: [],
      }
    },
    mounted() {
      this.setupCurrentGroup();
    },
    watch : {
      '$route' (to, from) {
        this.setupCurrentGroup();
      }
    },
    computed : {},
    methods : {
      setupCurrentGroup () {
        for (let i = 0; i < this.$root.$data.userData.groups.length; i++) {
          if (this.$route.params.slug === this.$root.$data.userData.groups[i].slug) {
            this.groupData = this.$root.$data.userData.groups[i];
            break;
          }
        }

        if (this.groupData.id) {
          this.getCurrentGroup();
          this.$root.setCurrentGroup(this.groupData.id);
        } else {
          this.getGroupTodos();
          this.getGroupActivity();
        }
      },
      getCurrentGroup () {
        this.$http
          .get(
            '/wp-json/buddypress/v1/groups/' + this.$route.params.slug)
          .then(response => {
            this.groupData = response.data[0];
            this.$root.setCurrentGroup(this.groupData.id);
            this.getGroupTodos();
            this.getGroupActivity();
          })
          .finally(() => this.loadingTodos = false)
      },
      getActivityBadgeType (type) {
        switch(type) {
          case 'activity_comment' :
            return 'info';
          default:
            return 'success';
        }
      },
      getGroupTodos () {
        this.loadingTodos = true;
        this.$http
          .get(
            '/wp-json/studychurch/v1/assignments?group_id=' + this.groupData.id)
          .then(response => (
            this.todoData = response.data
          ))
          .finally(() => this.loadingTodos = false)
      },
      getGroupActivity () {
        this.loadingActivity = true;
        this.$http
          .get(
            '/wp-json/buddypress/v1/activity?show_hidden=true&per_page=50&primary_id=' + this.groupData.id )
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
