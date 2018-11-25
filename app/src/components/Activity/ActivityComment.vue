<template>
	<div class="sc-activity--comment--container">

		<div class="sc-activity--comment" v-if="!showUpdateForm">
			<a href="#" v-if="this.item.user === this.$root.$data.userData.id" @click.stop="editActivity" class="sc-activity--card--edit">Edit</a>
			<img class="avatar border-gray" :src="item.user_avatar.full">
			<p class="category" style="margin-bottom:0;">
				{{ item.date | dateFormat }} | <span v-html="item.title"></span>
			</p>
			<div v-html="item.content.rendered"></div>
		</div>

		<activity-form
			v-if="showUpdateForm"
			elClass="sc-activity--comment"
			ref="activityForm"
			:activityID="this.item.id"
			:component="this.item.component"
			:type="this.item.type"
			v-on:activitySaved="updateActivity"
			:primaryItem="this.item.prime_association"
			:secondaryItem="this.item.secondary_association"></activity-form>

	</div>
</template>
<script>
  import ActivityForm from './ActivityForm.vue';

  export default {
    components: {
      ActivityForm
    },
    data() {
      return {
        item  : this.comment,
        update: false
      }
    },
    props     : {
      comment   : {},
    },
    mounted() {

    },
    watch     : {},
    computed  : {
      showUpdateForm() {
        return this.update && this.item.user === this.$root.$data.userData.id;
      },
    },
    methods   : {
      editActivity(e) {
        e.preventDefault();
        this.update = true;
        this.$nextTick(() => {
          this.$refs.activityForm.updateComment(this.item.content.raw);
          this.$refs.activityForm.setFocus();
        })
      },
      addComment(comment) {
        this.item.comments.push(comment);
      },
      updateActivity(activity) {
        this.item.content = activity.content;
        this.item.date = activity.date;
        this.update = false;
      }
    }
  }
</script>
<style>
</style>
