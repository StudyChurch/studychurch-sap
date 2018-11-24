<template>
	<card class="card-chart sc-activity--card" no-footer-line>

		<div slot="header" style="position:relative;padding-left:40px;">
			<img class="avatar border-gray" :src="activity.user_avatar.full" alt="..." style="position: absolute;left:0;">
			<div class="card-category" v-html="activity.title"></div>
			<div class="card-category">{{activity.date | dateFormat }}</div>
		</div>

		<div v-if="showActivityContent()" v-html="activity.content.rendered"></div>

		<div v-for="comment in activity.comments" class="sc-activity--comment">
			<img class="avatar border-gray" :src="comment.user_avatar.full">
			<p class="category" style="margin-bottom:0;">
				{{ comment.date | dateFormat }} | <span v-html="comment.title"></span>
			</p>
			<div v-html="comment.content.rendered"></div>
		</div>

		<activity-form
			v-if="showCommentForm()"
			elClass="sc-activity--comment"
			component="activity"
			type="activity_comment"
			v-on:activitySaved="addComment"
			:primaryItem="this.activity.id"
			:secondaryItem="this.activity.id"></activity-form>

	</card>
</template>
<script>
  import Card from '../Cards/Card.vue';
  import ActivityForm from './ActivityForm.vue';

  export default {
    components: {
      Card,
      ActivityForm
    },
    data() {
      return {}
    },
    props     : {
      activity: {}
    },
    mounted() {

    },
    watch     : {},
    computed  : {},
    methods   : {
      showActivityContent() {
        return (
          this.activity.content.rendered && (
            this.activity.comments.length > 0 || 'answer_update' !== this.activity.type
          )
        );
      },
      showCommentForm() {
        if (this.activity.comments.length > 0 && 'answer_update' === this.activity.type) {
          return true;
        }

        if ('activity_update' === this.activity.type) {
          return true;
        }

        return false;
      },
      addComment(comment) {
        this.activity.comments.push(comment);
      }
    }
  }
</script>
<style>
	.card-body {
		padding-bottom: 0;
	}

	.card-footer {
		padding-top: 0;
		margin-top: 0;
	}
</style>
