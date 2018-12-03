<template>

	<div class="sc-dashboard--groups sc-group">

		<div class="text-right">
			<n-button type="primary">Create Group</n-button>
		</div>

		<div class="d-flex flex-wrap row">
			<router-link v-for="group in $root.$data.userData.groups" class="col-md-6 d-block" :to="$root.cleanLink(group.link)">
				<card class="card-user" style="padding: 0;">
					<div slot="image" class="image">
						<img src="@/assets/img/bg-bible.jpg" alt="...">
					</div>
					<div>
						<div class="author">
							<font-awesome-icon icon="users" class="avatar border-gray"></font-awesome-icon>

							<h5 class="title">{{group.name}}</h5>
							<p class="description" v-show="showGroupDesc" v-html="group.description.rendered"></p>
						</div>
					</div>
				</card>
			</router-link>
		</div>

	</div>

</template>
<script>
  import {
    Card,
	Button
  } from 'src/components'

  function getDefaultData () {
    return {
      loading            : true,
      loadingMoreActivity: false,
      activityData       : [],
      activityPage       : 1,
      showGroupDesc      : false
    }
  }

  export default {
    components: {
      Card,
	  Button
    },
    data      : getDefaultData,
    mounted() {
    },
    methods   : {
      getUserGroups () {
        this.loading = true;
        this.$http
          .get('/wp-json/buddypress/v1/groups/?show_hidden=true&user_id=2')
          .then(response => {
            this.groupData = response.data;
            this.getUserGroupsActivity()
          })
          .finally(() => this.loadingGroups = false)
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