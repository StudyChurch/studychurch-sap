<template>
	<div>
		<card v-loading="loading" style="min-height: 200px;">
			<div class="card-header">
				<div>
					<h5 class="title" v-html="chapterData.study"></h5>
					<h1 class="title" v-html="chapterData.title.rendered"></h1>
				</div>
			</div>

			<div class="study-meta">
				<div>
					<p>
						<select>
							<option>Chapter Select</option>
							<option v-for="chapter in chapters">{{ chapter.title.rendered }}</option>
						</select>
					</p>
				</div>
				<div>
					<p>
						Print
					</p>
				</div>
			</div>

			<div v-for="data in chapterData.elements" :id="'post-' + data.id">
				<!--<div class="card-body" v-html="data.content.rendered | isPrivate( data['is_private'] )"></div>-->
				<div class="card-body" v-html="$options.filters.isPrivate( data.content.rendered, data['is_private'] )"></div>
				<div v-if="data['data_type'] === 'question_short' ||  data['data_type'] === 'question_long'" class="card-footer">
					<answer :questionData="data" :groupData="groupData"></answer>
				</div>
			</div>
		</card>

		<div>
			<router-link v-if="prevChapter.id" :to="navPrefix + $root.cleanLink(prevChapter.link)" tag="button" class="btn btn-default">
				<span class="btn-label btn-label-right"><i class="now-ui-icons arrows-1_minimal-left"></i></span>
				&nbsp;&nbsp;<span v-html="prevChapter.title.rendered"></span>
			</router-link>
			<router-link v-if="nextChapter.id" :to="navPrefix + $root.cleanLink(nextChapter.link)" tag="button" class="btn btn-default">
				<span v-html="nextChapter.title.rendered"></span>
				&nbsp;&nbsp;<span class="btn-label btn-label-right"><i class="now-ui-icons arrows-1_minimal-right"></i></span>
			</router-link>
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
        prevChapter : {
          id: 0
        },
        nextChapter : {
          id: 0
        },
        chapters    : [],
        chapterData : {
          id      : 0,
          study   : '',
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
      this.getChapterItems();
      this.getStudyChapters();
    },
    watch     : {
      '$route' (to, from) {
        this.getChapterItems();
      }
    },
    props     : {
      groupData: {
        default() {
          return {
            id     : 0,
            studies: []
          }
        }
      },
    },
    computed  : {
      navPrefix() {
        if (!this.groupData.id) {
          return '';
        }

        if (undefined === this.$route.params.slug) {
          return '';
        }

        return '/groups/' + this.$route.params.slug;
      },
    },
    methods   : {
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
<style scoped>

	.study-meta {
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
	}

	.study-meta div {
		margin: 0 .5rem;
	}
</style>
