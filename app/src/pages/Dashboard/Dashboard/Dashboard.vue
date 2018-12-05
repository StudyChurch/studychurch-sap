<template>
	<div class="sc-dashboard">

		<div class="row">
			<div class="col-lg-4">
				<card class="card-user">
					<div slot="image" class="image">
						<img src="@/assets/img/bg-bible.jpg" alt="...">
					</div>
					<div>
						<div class="author">
							<img class="avatar border-gray" :src="userData.avatar.full" alt="...">
							<h5 class="title">{{userData.name}}</h5>
							<p class="description">
								@{{userData.username}}
							</p>
						</div>
					</div>
				</card>
			</div>

			<div class="col-lg-8">

				<el-menu :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" :router="true">
					<el-menu-item :index="'/'">
						<font-awesome-icon icon="users"></font-awesome-icon>&nbsp;&nbsp;<span>Groups</span>
					</el-menu-item>
					<el-menu-item :index="'/assignments/'">
						<font-awesome-icon icon="list"></font-awesome-icon>&nbsp;&nbsp;<span>Todos</span></el-menu-item>
					<el-menu-item :index="'/studies/'">
						<font-awesome-icon icon="book"></font-awesome-icon>&nbsp;&nbsp;<span>Studies</span>
					</el-menu-item>
					<el-menu-item v-if="false" :index="'/notifications/'">
						<font-awesome-icon icon="bell"></font-awesome-icon>&nbsp;&nbsp;<span>Notifications</span>
					</el-menu-item>
					<el-menu-item :index="'/settings/'">
						<font-awesome-icon icon="cogs"></font-awesome-icon>&nbsp;&nbsp;<span>Settings</span>
					</el-menu-item>
				</el-menu>

				<br />

				<router-view></router-view>

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
    TimeLineItem,
    Activity
  } from 'src/components'

  import { Menu, MenuItem } from 'element-ui';

  export default {
    components: {
      'el-menu'     : Menu,
      'el-menu-item': MenuItem,
      Card,
      NTable,
      NProgress,
      AnimatedNumber,
      TimeLine,
      TimeLineItem,
      Activity
    },
    data() {
      return {
        loadingGroups      : false,
        loadingStudies     : false,
        loadingActivity    : true,
        loadingMoreActivity: false,
        loadingTodos       : true,
        todoData           : [],
        userData           : this.$root.$data.userData,
        groupData          : this.$root.$data.userData.groups,
        studyData          : this.$root.$data.userData.studies,
        activityData       : [],
        activityPage       : 1,
      }
    },
    created() {
    },
    computed  : {},
    methods   : {
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
      getUserGroupsActivity () {
        let groups = this.$root.$data.userData.groups.map(function (group) {
          return group.id;
        });
        this.$http
          .get(
            '/wp-json/studychurch/v1/activity?component=groups&show_hidden=true&display_comments=threaded&_embed=true&per_page=5&page=' + this.activityPage + '&primary_id[]=' + groups.join(
              '&primary_id[]='))
          .then(response => {
            if (!response.data.length) {
              this.activityPage = 0;
            }

            this.activityData = this.activityData.concat(response.data);
          })
          .finally(() => this.loadingActivity = this.loadingMoreActivity = false)
      },
      loadMoreActivity () {
        if (!this.activityPage) {
          return false;
        }

        this.loadingMoreActivity = true;
        this.activityPage++;
        this.getUserGroupsActivity();
      },
    }
  }
</script>
<style>
	.table-responsive {
		overflow: auto;
	}
</style>
