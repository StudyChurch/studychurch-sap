webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Elements/Answer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Studies/Elements/Answer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components */ \"./src/components/index.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nfunction getDefaultData() {\n  return {\n    loading: true,\n    answer: {\n      date: 0,\n      content: {\n        raw: ''\n      }\n    },\n    groupAnswers: []\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'sc-answer',\n  components: {\n    ActivityForm: _components__WEBPACK_IMPORTED_MODULE_1__[\"ActivityForm\"],\n    Activity: _components__WEBPACK_IMPORTED_MODULE_1__[\"Activity\"]\n  },\n  data: getDefaultData,\n  props: {\n    questionData: Object,\n    groupData: {\n      default: {\n        id: 0,\n        studies: []\n      }\n    }\n  },\n  computed: {},\n  watch: {\n    '$route': function $route() {\n      this.reset();\n      this.getGroupAnswers();\n    }\n  },\n  methods: {\n    addAnswer: function addAnswer(answer) {\n      this.answer = answer;\n    },\n    addComment: function addComment(comment) {},\n    handleEditAnswer: function handleEditAnswer(event) {\n      var _this = this;\n\n      event.preventDefault();\n      var currentValue = this.answer.content.raw;\n      this.answer.content.raw = '';\n      this.$nextTick(function () {\n        _this.$refs.answerForm.updateComment(currentValue);\n\n        _this.$refs.answerForm.setFocus();\n      });\n    },\n    getGroupAnswers: function getGroupAnswers() {\n      var _this2 = this;\n\n      var params = 'context=edit&_embed=true&component=groups&show_hidden=true&display_comments=threaded&per_page=20&secondary_id=' + this.questionData.id + '&primary_id=' + this.groupData.id;\n      this.$http.get('/wp-json/studychurch/v1/activity/?context=edit&_embed=true&component=groups&show_hidden=true&display_comments=threaded&per_page=20&secondary_id=' + this.questionData.id + '&primary_id=' + this.groupData.id).then(function (response) {\n        _this2.loading = false;\n\n        if (response.data.length) {\n          _this2.groupAnswers = [];\n\n          for (var i = 0; i < response.data.length; i++) {\n            if (_this2.$root.$data.userData.id === response.data[i].user) {\n              _this2.answer = response.data[i];\n            } else {\n              _this2.groupAnswers.push(response.data[i]);\n            }\n          }\n        }\n      }).finally(function () {\n        return _this2.loading = false;\n      });\n    },\n    reset: function reset(keep) {\n      var def = getDefaultData();\n      def[keep] = this[keep];\n      Object.assign(this.$data, def);\n    }\n  },\n  mounted: function mounted() {\n    this.getGroupAnswers();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9TdHVkaWVzL0VsZW1lbnRzL0Fuc3dlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0Fuc3dlci52dWU/ZWY2NSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJzYy1hbnN3ZXJcIiB2LWxvYWRpbmc9XCJsb2FkaW5nXCI+XG5cdFx0PGFjdGl2aXR5LWZvcm1cblx0XHRcdHYtaWY9XCJ0aGlzLmdyb3VwRGF0YS5pZCAmJiAhIGFuc3dlci5jb250ZW50LnJhd1wiXG5cdFx0XHRyZWY9XCJhbnN3ZXJGb3JtXCJcblx0XHRcdGVsQ2xhc3M9XCJzYy1hY3Rpdml0eS0tYW5zd2VyXCJcblx0XHRcdGNvbXBvbmVudD1cImdyb3Vwc1wiXG5cdFx0XHR0eXBlPVwiYW5zd2VyX3VwZGF0ZVwiXG5cdFx0XHR2LW9uOmFjdGl2aXR5U2F2ZWQ9XCJhZGRBbnN3ZXJcIlxuXHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGFuc3dlci4uLlwiXG5cdFx0XHQ6YWN0aXZpdHlJRD1cInRoaXMuYW5zd2VyLmlkXCJcblx0XHRcdDpwcmltYXJ5SXRlbT1cInRoaXMuZ3JvdXBEYXRhLmlkXCJcblx0XHRcdDpzZWNvbmRhcnlJdGVtPVwidGhpcy5xdWVzdGlvbkRhdGEuaWRcIj48L2FjdGl2aXR5LWZvcm0+XG5cblx0XHQ8YWN0aXZpdHkgdi1pZj1cImFuc3dlci5jb250ZW50LnJhd1wiIDphY3Rpdml0eT1cImFuc3dlclwiIDpzaG93Q29udGVudD1cInRydWVcIj48L2FjdGl2aXR5PlxuXG5cdFx0PGRpdiB2LWlmPVwiYW5zd2VyLmNvbnRlbnQucmF3ICYmIGdyb3VwQW5zd2Vycy5sZW5ndGhcIiBjbGFzcz1cInNjLWFuc3dlci0tZ3JvdXBcIj5cblx0XHRcdDxhY3Rpdml0eSB2LWZvcj1cImdBbnN3ZXIgaW4gZ3JvdXBBbnN3ZXJzXCIgY2xhc3M9XCJzYy1xdWVzdGlvbi0tZ3JvdXAtYW5zd2Vycy0tYW5zd2VyXCIgOmFjdGl2aXR5PVwiZ0Fuc3dlclwiIDpzaG93Q29udGVudD1cInRydWVcIiA6c2hvd0Zvcm09XCJ0cnVlXCI+PC9hY3Rpdml0eT5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgQWN0aXZpdHksIEFjdGl2aXR5Rm9ybSB9IGZyb20gJ3NyYy9jb21wb25lbnRzJztcblxuICBmdW5jdGlvbiBnZXREZWZhdWx0RGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRpbmcgICAgIDogdHJ1ZSxcbiAgICAgIGFuc3dlciAgICAgIDoge1xuICAgICAgICBkYXRlICAgOiAwLFxuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgcmF3OiAnJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ3JvdXBBbnN3ZXJzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdzYy1hbnN3ZXInLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgQWN0aXZpdHlGb3JtLFxuICAgICAgQWN0aXZpdHlcbiAgICB9LFxuICAgIGRhdGEgICAgICA6IGdldERlZmF1bHREYXRhLFxuICAgIHByb3BzICAgICA6IHtcbiAgICAgIHF1ZXN0aW9uRGF0YTogT2JqZWN0LFxuICAgICAgZ3JvdXBEYXRhICAgOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBpZCAgICAgOiAwLFxuICAgICAgICAgIHN0dWRpZXM6IFtdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wdXRlZCAgOiB7fSxcbiAgICB3YXRjaCAgICAgOiB7XG4gICAgICAnJHJvdXRlJyAoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5nZXRHcm91cEFuc3dlcnMoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgYWRkQW5zd2VyKGFuc3dlcikge1xuICAgICAgICB0aGlzLmFuc3dlciA9IGFuc3dlcjtcbiAgICAgIH0sXG4gICAgICBhZGRDb21tZW50KGNvbW1lbnQpIHtcblxuICAgICAgfSxcbiAgICAgIGhhbmRsZUVkaXRBbnN3ZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuYW5zd2VyLmNvbnRlbnQucmF3O1xuICAgICAgICB0aGlzLmFuc3dlci5jb250ZW50LnJhdyA9ICcnO1xuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5hbnN3ZXJGb3JtLnVwZGF0ZUNvbW1lbnQoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICB0aGlzLiRyZWZzLmFuc3dlckZvcm0uc2V0Rm9jdXMoKTtcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnZXRHcm91cEFuc3dlcnMoKSB7XG5cbiAgICAgICAgbGV0IHBhcmFtcyA9ICdjb250ZXh0PWVkaXQmX2VtYmVkPXRydWUmY29tcG9uZW50PWdyb3VwcyZzaG93X2hpZGRlbj10cnVlJmRpc3BsYXlfY29tbWVudHM9dGhyZWFkZWQmcGVyX3BhZ2U9MjAmc2Vjb25kYXJ5X2lkPScgKyB0aGlzLnF1ZXN0aW9uRGF0YS5pZCArICcmcHJpbWFyeV9pZD0nICsgdGhpcy5ncm91cERhdGEuaWQ7XG5cbiAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAnL3dwLWpzb24vc3R1ZHljaHVyY2gvdjEvYWN0aXZpdHkvP2NvbnRleHQ9ZWRpdCZfZW1iZWQ9dHJ1ZSZjb21wb25lbnQ9Z3JvdXBzJnNob3dfaGlkZGVuPXRydWUmZGlzcGxheV9jb21tZW50cz10aHJlYWRlZCZwZXJfcGFnZT0yMCZzZWNvbmRhcnlfaWQ9JyArIHRoaXMucXVlc3Rpb25EYXRhLmlkICsgJyZwcmltYXJ5X2lkPScgKyB0aGlzLmdyb3VwRGF0YS5pZClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICB0aGlzLmdyb3VwQW5zd2VycyA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcm9vdC4kZGF0YS51c2VyRGF0YS5pZCA9PT0gcmVzcG9uc2UuZGF0YVtpXS51c2VyKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlciA9IHJlc3BvbnNlLmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBBbnN3ZXJzLnB1c2gocmVzcG9uc2UuZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmluYWxseSgoKSA9PiB0aGlzLmxvYWRpbmcgPSBmYWxzZSlcbiAgICAgIH0sXG4gICAgICByZXNldCAoa2VlcCkge1xuICAgICAgICBsZXQgZGVmID0gZ2V0RGVmYXVsdERhdGEoKTtcbiAgICAgICAgZGVmW2tlZXBdID0gdGhpc1trZWVwXTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRkYXRhLCBkZWYpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuZ2V0R3JvdXBBbnN3ZXJzKCk7XG4gICAgfSxcbiAgfTtcbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFDQTtBQTRDQTtBQUNBO0FBQ0E7QUF2RUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Elements/Answer.vue?vue&type=script&lang=js&\n");

/***/ })

})