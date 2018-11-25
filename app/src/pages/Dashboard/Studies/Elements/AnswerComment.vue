<template>
	<div class="sc-answer--comment">
		<img class="avatar border-gray" :src="$root.$data.userData.avatar.full" alt="...">
		<div class="el-textarea" @mouseenter="hovering = true" @mouseleave="hovering = false">
			<textarea
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
				placeholder="Write a reply..."
			>
			</textarea>
		</div>
	</div>
</template>
<script>
  import calcTextareaHeight from 'element-ui/packages/input/src/calcTextareaHeight';
  import merge from 'element-ui/src/utils/merge';

  export default {
    name: 'sc-answer-comment',

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
            '/wp-json/studychurch/v1/activity/?context=edit&_embed=true&display_comments=threaded&per_page=1&secondary_id=' + this.questionData.id + '&primary_id=' + this.$root.getCurrentGroup())
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
//      this.getGroupAnswers();
    },
  };
</script>
