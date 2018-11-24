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
											<i class="now-ui-icons users_single-02"></i>
										</div>
										<h3 class="info-title">14</h3>
										<h6 class="stats-title">Members</h6>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="statistics">
									<div class="info">
										<div class="icon icon-success">
											<i class="now-ui-icons files_paper"></i>
										</div>
										<h3 class="info-title">3</h3>
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
										<h3 class="info-title">0</h3>
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
								<td>
									<router-link :to="$root.cleanLink(row.link)">{{row.title}}</router-link>
								</td>
							</template>
						</n-table>
					</div>

					<div slot="footer" class="stats">
						<i :class="this.loadingStudies ? 'now-ui-icons arrows-1_refresh-69 spin' : 'now-ui-icons arrows-1_refresh-69'"></i> Just Updated
					</div>

				</card>

				<card class="card-chart" no-footer-line>

					<div slot="header">
						<h2 class="card-title">Invite</h2>
					</div>

					<div>
						<p>Use this link to invite members to join this group.</p>
						<p><textarea>https://studychurch.local/join/?group=12345687890&key=abcdef1234567890</textarea>
						</p>
					</div>
				</card>

				<card class="card-chart" no-footer-line>

					<div slot="header">
						<h2 class="card-title">Members</h2>
					</div>

					<div class="table-responsive">
						<n-table :data="groupData.members">
							<template slot-scope="{row}">
								<td v-html="row.avatar.img"></td>
								<td v-html="row.name"></td>
							</template>
						</n-table>
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
								<i class="now-ui-icons design_bullet-list-67"></i>&nbsp;
								<span v-html="lesson.title"></span>
							</p>
							<p v-html="data.content"></p>
						</li>
					</ul>
					<div slot="footer" class="stats">
						<i :class="this.loadingTodos ? 'now-ui-icons arrows-1_refresh-69 spin' : 'now-ui-icons arrows-1_refresh-69'"></i> Just Updated
					</div>
				</card>

				<card cardBodyClasses="sc-activity--update">
					<activity-form
						elClass="sc-activity--update--form"
						component="groups"
						type="activity_update"
						v-on:activitySaved="addActivity"
						placeholder="Post a message to the group ..."
						:primaryItem="this.groupData.id"
						:secondaryItem="0"
						:autosize="{ minRows: 3 }"></activity-form>
					<div class="category">Use @ to mention a member of this group or use @group to notify everyone.</div>
				</card>

				<div v-loading="loadingActivity" style="min-height: 20em">
					<activity v-for="activity in activityData" :activity="activity"></activity>
					<div class="text-center">
						<n-button v-if="activityPage && activityData.length" type="primary" simple="" wide="" v-loading="loadingMoreActivity" @click.native="loadMoreActivity">Load More</n-button>
						<p v-if="! activityPage">There is no more activity to load.</p>
					</div>
				</div>

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
    Activity,
    ActivityForm
  } from 'src/components'

  import { Table, TableColumn } from 'element-ui';

  function getDefaultData () {
    return {
      loadingGroups      : false,
      loadingStudies     : false,
      loadingActivity    : true,
      loadingMoreActivity: false,
      loadingTodos       : true,
      todoData           : [],
      groupData          : {
        id         : 0,
        name       : '',
        slug       : '',
        avatar_urls: {
          full : '',
          thumb: ''
        },
        description: {
          rendered: ''
        },
        members    : [],
      },
      activityData       : [],
      activityPage       : 1,
      test               : [{name: 'test'}]
    }
  }

  export default {
    components: {
      Card,
      NTable,
      NProgress,
      AnimatedNumber,
      Activity,
      ActivityForm,
      Table,
      TableColumn
    },
    data      : getDefaultData,
    mounted() {
      this.setupCurrentGroup();
    },
    watch     : {
      '$route' (to, from) {
        this.setupCurrentGroup();
      }
    },
    computed  : {},
    methods   : {
      setupCurrentGroup () {

        // check for cached group data
        for (let i = 0; i < this.$root.$data.userData.groups.length; i++) {
          if (this.$route.params.slug === this.$root.$data.userData.groups[i].slug) {
            this.reset(); // reset data just to make sure we don't pull over from the previous group if there was one
            this.groupData = this.$root.$data.userData.groups[i];
            break;
          }
        }

        if (!this.groupData.id) {
          this.reset(); // this shouldn't be necessary, but better safe than sorry
          this.getCurrentGroup();
        } else {
          this.getGroupTodos();
          this.getGroupActivity();
          this.$root.setCurrentGroup(this.groupData.id);
        }
      },
      /**
       * Fetch
       */
      getCurrentGroup () {
        this.$http
          .get(
            '/wp-json/studychurch/v1/groups/' + this.$route.params.slug)
          .then(response => {
            this.groupData = response.data[0];
            this.$root.setCurrentGroup(this.groupData.id);
            this.getGroupTodos();
            this.getGroupActivity();
          })
          .finally(() => this.loadingTodos = false)
      },
      getActivityBadgeType (type) {
        switch (type) {
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
        this.$http
          .get(
            '/wp-json/buddypress/v1/activity?show_hidden=true&per_page=20&display_comments=threaded&_embed=true&primary_id=' + this.groupData.id + '&page=' + this.activityPage)
          .then(response => {
            if (!response.data.length) {
              this.loadingMoreActivity = false;
              this.activityPage = 0;
            }

            this.activityData = this.activityData.concat(response.data)
          })
          .finally(() => this.loadingActivity = this.loadingMoreActivity = false)
      },
      addActivity(newActivity) {
        newActivity.comments = [];
        this.activityData.unshift(newActivity);
      },
      loadMoreActivity () {
        console.log('click');
        if (!this.activityPage) {
          return false;
        }

        this.loadingMoreActivity = true;
        this.activityPage++;
        this.getGroupActivity();
      },
      reset (keep) {
        let def = getDefaultData();
        def[keep] = this[keep];
        Object.assign(this.$data, def);
      }
    }
  }
</script>
<style>
</style>
