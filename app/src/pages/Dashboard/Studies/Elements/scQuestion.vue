<template>
	<div class="sc-question">
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
				@focus="handleFocus"
				@blur="handleBlur"
				@change="handleChange"
				:aria-label="label"
				placeholder="Enter your answer..."
			>
			</textarea>
			<div v-show="answer.content.raw" @click="handleEditAnswer" style="cursor: pointer;">
				<div class="category">{{ answer.date | dateFormat }} | Your Answer</div>
				<p style="white-space: pre;" v-html="answer.content.raw"></p></div>
		</div>
	</div>
</template>
<script>
  import calcTextareaHeight from 'element-ui/packages/input/src/calcTextareaHeight';
  import merge from 'element-ui/src/utils/merge';

  export default {
    name: 'sc-question',

    data() {
      return {
        answer                : {
          date   : 0,
          content: {
            raw: ''
          }
        },
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
        this.answer = {
          date   : 0,
          content: {
            raw: ''
          }
        };

        this.getAnswer();
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
        return;
        this.answer = '<p>' + this.currentValue.split(/\n+/).join('</p>\n<p>') + '</p>';
      },
      select() {
        (
          this.$refs.textarea
        ).select();
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
      getAnswer() {
        this.$http
          .get(
            '/wp-json/studychurch/v1/answers/?context=edit&per_page=1&post[]=' + this.questionData.id + '&author[]=' + this.$root.$data.userData.id + '&group_id=' + this.$root.getCurrentGroup())
          .then(response => {
            if (response.data.length && undefined !== response.data[0].id) {
              this.answer = response.data[0];
            }
          })
          .finally(() => this.loading = false)
      },
      getGroupAnswers() {

      }
    },

    created() {
      this.$on('inputSelect', this.select);
    },

    mounted() {
      this.resizeTextarea();
      this.getAnswer();
    },
  };
</script>
