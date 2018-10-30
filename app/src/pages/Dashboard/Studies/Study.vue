<template>
	<div>

		<div class="row">
			<div class="col-md-9 ml-auto mr-auto">
				<div class="card" v-loading="loading">
					<div class="card-header">
						<div>
							<h5 class="title" v-html="studyData.title.rendered">Now Ui Table Heading</h5>
							<h1 class="title" v-html="chapterData.title.rendered">Now Ui Table Heading</h1>
						</div>
					</div>
				</div>

				<div class="card" v-for="data in chapterData.elements">
					<div class="card-body" v-html="data.content.rendered"></div>
					<div  v-if="data['data_type'] === 'question_short' ||  data['data_type'] === 'question_long'" class="card-footer">
						<img class="avatar border-gray" :src="$root.$data.userData.avatar.full" alt="..."><el-input
							type="textarea"
							autosize
							placeholder="Please input">
						</el-input>
					</div>
				</div>

					<div>
						<router-link v-if="prevChapter.id" :to="$root.cleanLink(prevChapter.link)" tag="button" class="btn btn-default">
							<span v-html="prevChapter.title.rendered"></span>
							<span class="btn-label btn-label-right"><i class="now-ui-icons arrows-1_minimal-right"></i></span>
						</router-link>
						<router-link v-if="nextChapter.id" :to="$root.cleanLink(nextChapter.link)" tag="button" class="btn btn-default">
							<span v-html="nextChapter.title.rendered"></span>
							<span class="btn-label btn-label-right"><i class="now-ui-icons arrows-1_minimal-right"></i></span>
						</router-link>
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
        loading: true,
        todoData    : [],
        prevChapter : [],
        nextChapter : [],
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
    },
	watch : {
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
            console.log(response);
            this.studyData = response.data[0];
          })
          .finally(() => this.loading = false)
      },
      getStudyChapters () {
        this.$http
          .get(
            '/wp-json/studychurch/v1/studies/' + this.$route.params.study + '/chapters')
          .then(response => {
            console.log(response);
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
          this.prevChapter = this.chapters[i - 1];
        }

        if (i < this.chapters.length) {
          this.nextChapter = this.chapters[i + 1];
        }

      }
    }
  }
</script>
<style>

</style>
