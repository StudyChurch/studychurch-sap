<template>
	<div class="sc-answer">
		<img class="avatar border-gray" :src="$root.$data.userData.avatar.full" alt="..." style="position: absolute;">
		<div class="el-textarea" @mouseenter="hovering = true" @mouseleave="hovering = false" style="width: calc( 100% - 40px );margin-left: 40px;">
			<textarea
				v-show="! answer.content.raw"
				:tabindex="tabindex"
				class="el-textarea__inner"
				:value="currentValue"
				@keydown="handleKeydown"
				@compositionstart="handleComposition"
				@compositionupdate="handleComposition"
				@compositionend="handleComposition"
				@input="handleInput"
				ref="textarea"
				v-bind="$attrs"
				:style="textareaStyle"
				@change="handleChange"
				:aria-label="label"
				placeholder="Enter your answer..."
				:name="'question_' + questionData.id"
			>
			</textarea>
			<div v-show="answer.content.raw" @click="handleEditAnswer" style="cursor: pointer;">
				<div class="category">{{ answer.date | dateFormat }} | <a href="#">Edit Your Answer</a></div>
				<p style="white-space: pre-wrap;" v-html="answer.content.raw"></p>
			</div>
		</div>

		<div v-if="groupAnswers.length" class="sc-answer--group" style="margin-top:1rem;">
			<hr />
			<div v-for="gAnswer in groupAnswers" class="sc-question--group-answers--answer" style="padding-left: 40px;position:relative;">
				<img class="avatar border-gray" :src="gAnswer.user_avatar.full" alt="..." style="position: absolute;left:0;">
				<div class="category">{{ gAnswer.date | dateFormat }} | {{ gAnswer._embedded.user[0].name }} Answered</div>
				<p style="white-space: pre-wrap;" v-html="gAnswer.content.raw"></p>

				<div v-for="comment in gAnswer.comments" class="sc-answer--comment">
					<img class="avatar border-gray" :src="comment.user_avatar.full" alt="..." style="position: absolute;left:0;">
					<p style="white-space: pre-wrap;" v-html="comment.content.raw"></p>
				</div>

				<answer-comment></answer-comment>
			</div>
		</div>
	</div>
</template>
<script>
  import calcTextareaHeight from 'element-ui/packages/input/src/calcTextareaHeight';
  import merge from 'element-ui/src/utils/merge';
  import AnswerComment from './AnswerComment.vue';

  export default {
    name: 'sc-answer',

    components: {
      AnswerComment
    },

    data() {
      return {
        answer                : {
          date   : 0,
          content: {
            raw: ''
          }
        },
        groupAnswers          : [],
        currentValue          : this.value === undefined || this.value === null
          ? ''
          : this.value,
        textareaCalcStyle     : {},
        hovering              : false,
        focused               : false,
        isOnComposition       : false,
        valueBeforeComposition: null
      };
    },

    props: {
      value       : [String, Number],
      resize      : {
        type   : String,
        default: 'none'
      },
      autosize    : {
        type   : [Boolean, Object],
        default: true
      },
      label       : String,
      tabindex    : String,
      questionData: Object,
    },

    computed: {
      textareaStyle() {
        return merge({}, this.textareaCalcStyle, {resize: this.resize});
      },
    },

    watch: {
      value(val, oldValue) {
        this.setCurrentValue(val);
      },
      '$route' () {
        this.resetAnswer();
        this.resetGroupAnswers();

        this.getGroupAnswers();
      }
    },

    methods: {
      focus() {
        (
          this.$refs.textarea
        ).focus();
      },
      blur() {
        (
          this.$refs.textarea
        ).blur();
      },
      handleBlur(event) {
        this.focused = false;
        this.$emit('blur', event);
      },
      handleKeydown(event) {
        if (event.keyCode === 13 && !event.shiftKey) {
          event.preventDefault();
          this.submitAnswer();
        }
      },
      submitAnswer() {
        let date = new Date();
        this.answer.date = date.toISOString();
        this.answer.content.raw = this.currentValue;

        this.$http
          .post('/wp-json/studychurch/v1/answers/', {
            id                   : this.answer.id,
            component            : 'study',
            type                 : 'answer_update',
            user                 : this.$root.$data.userData.id,
            prime_association    : this.$root.getCurrentGroup(),
            secondary_association: this.questionData.id,
            content              : this.currentValue
          })
          .then(response => {
            console.log(response);

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
      resizeTextarea() {
        if (this.$isServer) return;
        const {autosize} = this;
        if (!autosize) {
          this.textareaCalcStyle = {
            minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
          };
          return;
        }
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;

        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
      handleEditAnswer(event) {
        this.currentValue = this.answer.content.raw;
        this.answer.content.raw = '';
        this.$nextTick(() => {
          this.$refs.textarea.focus();
        })

      },
      handleFocus(event) {
        this.focused = true;
        this.$emit('focus', event);
      },
      handleComposition(event) {
        if (event.type === 'compositionend') {
          this.isOnComposition = false;
          this.currentValue = this.valueBeforeComposition;
          this.valueBeforeComposition = null;
          this.handleInput(event);
        } else {
          const text = event.target.value;
          const lastCharacter = text[text.length - 1] || '';
          this.isOnComposition = true;
          if (this.isOnComposition && event.type === 'compositionstart') {
            this.valueBeforeComposition = text;
          }
        }
      },
      handleInput(event) {
        const value = event.target.value;
        this.setCurrentValue(value);
        if (this.isOnComposition) return;
        this.$emit('input', value);
      },
      handleChange(event) {
        this.$emit('change', event.target.value);
      },
      setCurrentValue(value) {
        if (this.isOnComposition && value === this.valueBeforeComposition) return;
        this.currentValue = value;
        if (this.isOnComposition) return;
        this.$nextTick(this.resizeTextarea);
      },
      clear() {
        this.$emit('input', '');
        this.$emit('change', '');
        this.$emit('clear');
        this.setCurrentValue('');
        this.focus();
      },
      getGroupAnswers() {
        this.$http
          .get(
            '/wp-json/studychurch/v1/answers/?context=edit&_embed=true&display_comments=threaded&per_page=20&secondary_id=' + this.questionData.id + '&primary_id=' + this.$root.getCurrentGroup())
          .then(response => {
            console.log(response);

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
      resetAnswer() {
        this.answer = {
          date   : 0,
          content: {
            raw: ''
          }
        };
      },
      resetGroupAnswers() {
        this.groupAnswers = [];
      },
    },
    mounted() {
      this.resizeTextarea();
      this.getGroupAnswers();
    },
  };
</script>
