<template>
	<div class="sc-answer" v-loading="loading">
		<activity-form
			v-if="this.$root.getCurrentGroup() && ! answer.content.raw"
			ref="answerForm"
			elClass="sc-activity--answer"
			component="groups"
			type="answer_update"
			v-on:activitySaved="addAnswer"
			placeholder="Enter your answer..."
			:activityID="this.answer.id"
			:primaryItem="this.$root.getCurrentGroup()"
			:secondaryItem="this.questionData.id"></activity-form>

		<activity v-if="answer.content.raw" :activity="answer" :showContent="true"></activity>

		<div v-if="answer.content.raw && groupAnswers.length" class="sc-answer--group">
			<activity v-for="gAnswer in groupAnswers" class="sc-question--group-answers--answer" :activity="gAnswer" :showContent="true" :showForm="true"></activity>
		</div>
	</div>
</template>
<script>
  import { Activity, ActivityForm } from 'src/components';

  function getDefaultData () {
    return {
      loading     : true,
      answer      : {
        date   : 0,
        content: {
          raw: ''
        }
      },
      groupAnswers: [],
    };
  }

  export default {
    name: 'sc-answer',

    components: {
      ActivityForm,
      Activity
    },
    data      : getDefaultData,
    props     : {
      questionData: Object,
    },
    computed  : {},
    watch     : {
      '$route' () {
        this.reset();
        this.getGroupAnswers();
      }
    },

    methods: {
      addAnswer(answer) {
        this.answer = answer;
      },
      addComment(comment) {

      },
      handleEditAnswer(event) {
        event.preventDefault();
        let currentValue = this.answer.content.raw;
        this.answer.content.raw = '';
        this.$nextTick(() => {
          this.$refs.answerForm.updateComment(currentValue);
          this.$refs.answerForm.setFocus();
        })
      },
      getGroupAnswers() {
        this.$http
          .get(
            '/wp-json/studychurch/v1/activity/?context=edit&_embed=true&component=groups&show_hidden=true&display_comments=threaded&per_page=20&secondary_id=' + this.questionData.id + '&primary_id=' + this.$root.getCurrentGroup())
          .then(response => {
            this.loading = false;
            if (response.data.length) {
              this.groupAnswers = [];
              for (let i = 0; i < response.data.length; i++) {
                if (this.$root.$data.userData.id === response.data[i].user) {
                  this.answer = response.data[i];
                } else {
                  this.groupAnswers.push(response.data[i]);
                }
              }
            }
          })
          .finally(() => this.loading = false)
      },
      reset (keep) {
        let def = getDefaultData();
        def[keep] = this[keep];
        Object.assign(this.$data, def);
      }
    },
    mounted() {
      this.getGroupAnswers();
    },
  };
</script>
