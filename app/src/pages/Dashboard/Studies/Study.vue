<template>
	<div>

		<div class="row">
			<div class="col-md-9 ml-auto mr-auto">
				<card v-loading="loading">
					<div class="card-header">
						<div>
							<h5 class="title" v-html="studyData.title.rendered"></h5>
							<h1 class="title" v-html="chapterData.title.rendered"></h1>
						</div>
					</div>

					<div v-for="data in chapterData.elements" :id="'post-' + data.id">
						<div class="card-body" v-html="data.content.rendered"></div>
						<div v-if="data['data_type'] === 'question_short' ||  data['data_type'] === 'question_long'" class="card-footer">
							<answer :questionData="data"></answer>
						</div>
					</div>
				</card>

				<div>
					<router-link v-if="prevChapter.id" :to="$root.cleanLink(prevChapter.link)" tag="button" class="btn btn-default">
						<span class="btn-label btn-label-right"><i class="now-ui-icons arrows-1_minimal-left"></i></span>
						&nbsp;&nbsp;<span v-html="prevChapter.title.rendered"></span>
					</router-link>
					<router-link v-if="nextChapter.id" :to="$root.cleanLink(nextChapter.link)" tag="button" class="btn btn-default">
						<span v-html="nextChapter.title.rendered"></span>
						&nbsp;&nbsp;<span class="btn-label btn-label-right"><i class="now-ui-icons arrows-1_minimal-right"></i></span>
					</router-link>
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
    TimeLine,
    TimeLineItem
  } from 'src/components';

  import Answer from './Elements/Answer.vue';

  export default {
    components: {
      Card,
      NTable,
      NProgress,
      AnimatedNumber,
      TimeLine,
      TimeLineItem,
      Answer
    },
    data() {
      return {
        loading     : true,
        todoData    : [],
        prevChapter : {
          id: 0
        },
        nextChapter : {
          id: 0
        },
        chapters    : [],
        chapterData : {
          id      : 0,
          title   : {
            rendered: '',
          },
          elements: [
            {
              content: {
                rendered: ''
              }
            }
          ],
        },
        studyData   : {
          id         : 0,
          name       : '',
          slug       : '',
          title      : {
            rendered: ''
          },
          avatar_urls: {
            full : '',
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
      this.getCurrentStudy();
      this.getChapterItems();
      this.getStudyChapters();

      if (undefined !== this.$route.query['sc-group']) {
        this.$root.setCurrentGroup(this.$route.query['sc-group']);
      }
    },
    watch     : {
      '$route' (to, from) {
        this.getChapterItems();
      }
    },
    computed  : {},
    methods   : {
      getCurrentStudy () {
        this.$http
          .get(
            '/wp-json/studychurch/v1/studies/?status=any&slug[]=' + this.$route.params.study)
          .then(response => {
            this.studyData = response.data[0];
          })
          .finally(() => this.loading = false)
      },
      getStudyChapters () {
        this.$http
          .get(
            '/wp-json/studychurch/v1/studies/' + this.$route.params.study + '/chapters')
          .then(response => {
            this.chapters = response.data;
            this.getChapterItems();
          })
          .finally(() => this.loading = false)
      },
      getChapterItems () {
        let i = 0;

        for (i = 0; i < this.chapters.length; i++) {
          if (undefined === this.$route.params.chapter || this.chapters[i].slug === this.$route.params.chapter) {
            this.chapterData = this.chapters[i];
            break;
          }
        }

        if (i > this.chapters.length) {
          return;
        }

        if (i > 0) {
          if (undefined !== this.chapters[i - 1]) {
            this.prevChapter = this.chapters[i - 1];
          }
        }

        if (i < this.chapters.length) {
          if (undefined !== this.chapters[i + 1]) {
            this.nextChapter = this.chapters[i + 1];
          }
        }

      }
    }
  }
</script>
<style>

</style>
