webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ \"./src/components/index.js\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Card: _components__WEBPACK_IMPORTED_MODULE_3__[\"Card\"],\n    NTable: _components__WEBPACK_IMPORTED_MODULE_3__[\"Table\"],\n    NProgress: _components__WEBPACK_IMPORTED_MODULE_3__[\"Progress\"],\n    AnimatedNumber: _components__WEBPACK_IMPORTED_MODULE_3__[\"AnimatedNumber\"],\n    TimeLine: _components__WEBPACK_IMPORTED_MODULE_3__[\"TimeLine\"],\n    TimeLineItem: _components__WEBPACK_IMPORTED_MODULE_3__[\"TimeLineItem\"]\n  },\n  data: function data() {\n    return {\n      loadingTodos: true,\n      todoData: [],\n      prevChapter: [],\n      nextChapter: [],\n      chapters: [],\n      chapterData: {\n        id: 0,\n        title: {\n          rendered: ''\n        },\n        elements: [{\n          content: {\n            rendered: ''\n          }\n        }]\n      },\n      studyData: {\n        id: 0,\n        name: '',\n        slug: '',\n        title: {\n          rendered: ''\n        },\n        avatar_urls: {\n          full: '',\n          thumb: ''\n        },\n        description: {\n          rendered: ''\n        }\n      },\n      activityData: []\n    };\n  },\n  mounted: function mounted() {\n    this.getCurrentStudy();\n    this.getChapterItems();\n    this.getStudyChapters();\n  },\n  computed: {},\n  methods: {\n    getCurrentStudy: function getCurrentStudy() {\n      var _this = this;\n\n      this.$http.get('/wp-json/studychurch/v1/studies/?status=any&slug[]=' + this.$route.params.study).then(function (response) {\n        console.log(response);\n        _this.studyData = response.data[0];\n      }).finally(function () {\n        return _this.loadingTodos = false;\n      });\n    },\n    getStudyChapters: function getStudyChapters() {\n      var _this2 = this;\n\n      this.$http.get('/wp-json/studychurch/v1/studies/' + this.$route.params.study + '/chapters').then(function (response) {\n        console.log(response);\n        _this2.chapters = response.data;\n      }).finally(function () {\n        return _this2.loadingTodos = false;\n      });\n    },\n    getChapterItems: function getChapterItems() {\n      for (var _i = 0; _i < this.chapters.count; _i++) {\n        if (this.chapters[_i].slug === this.$route.params.chapter) {\n          this.chapterData = this.chapters[_i];\n          break;\n        }\n      }\n\n      if (i > this.chapters.count) {\n        return;\n      }\n\n      if (i > 0) {\n        this.prevChapter = this.chapters[i - 1];\n      }\n\n      if (i < this.chapters.count) {\n        this.nextChapter = this.chapters[i + 1];\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvU3R1ZGllcy9TdHVkeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1N0dWR5LnZ1ZT9kOWM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cInRpdGxlXCIgdi1odG1sPVwic3R1ZHlEYXRhLnRpdGxlLnJlbmRlcmVkXCI+Tm93IFVpIFRhYmxlIEhlYWRpbmc8L2g1PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImNhdGVnb3J5XCI+Q3JlYXRlZCB1c2luZyBNb250c2VycmF0IEZvbnQgRmFtaWx5PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IHYtZm9yPVwiZGF0YSBpbiBjaGFwdGVyRGF0YS5lbGVtZW50c1wiIHYtaHRtbD1cImRhdGEuY29udGVudC5yZW5kZXJlZFwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IHtcbiAgICBDYXJkLFxuICAgIFRhYmxlIGFzIE5UYWJsZSxcbiAgICBQcm9ncmVzcyBhcyBOUHJvZ3Jlc3MsXG4gICAgQW5pbWF0ZWROdW1iZXIsXG4gICAgVGltZUxpbmUsXG4gICAgVGltZUxpbmVJdGVtXG4gIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIENhcmQsXG4gICAgICBOVGFibGUsXG4gICAgICBOUHJvZ3Jlc3MsXG4gICAgICBBbmltYXRlZE51bWJlcixcbiAgICAgIFRpbWVMaW5lLFxuICAgICAgVGltZUxpbmVJdGVtXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZ1RvZG9zICAgOiB0cnVlLFxuICAgICAgICB0b2RvRGF0YSAgICAgICA6IFtdLFxuXHRcdHByZXZDaGFwdGVyICAgIDogW10sXG5cdFx0bmV4dENoYXB0ZXIgICAgOiBbXSxcblx0XHRjaGFwdGVycyAgICAgICA6IFtdLFxuICAgICAgICBjaGFwdGVyRGF0YSAgICA6IHtcbiAgICAgICAgICBpZCAgICAgIDogMCxcbiAgICAgICAgICB0aXRsZSAgIDoge1xuICAgICAgICAgICAgcmVuZGVyZWQ6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgIHJlbmRlcmVkOiAnJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgc3R1ZHlEYXRhICAgICAgOiB7XG4gICAgICAgICAgaWQgICAgICAgICA6IDAsXG4gICAgICAgICAgbmFtZSAgICAgICA6ICcnLFxuICAgICAgICAgIHNsdWcgICAgICAgOiAnJyxcbiAgICAgICAgICB0aXRsZSAgICAgIDoge1xuICAgICAgICAgICAgcmVuZGVyZWQ6ICcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdmF0YXJfdXJsczoge1xuICAgICAgICAgICAgZnVsbCA6ICcnLFxuICAgICAgICAgICAgdGh1bWI6ICcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgcmVuZGVyZWQ6ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhY3Rpdml0eURhdGEgICA6IFtdLFxuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuZ2V0Q3VycmVudFN0dWR5KCk7XG4gICAgICB0aGlzLmdldENoYXB0ZXJJdGVtcygpO1xuICAgICAgdGhpcy5nZXRTdHVkeUNoYXB0ZXJzKCk7XG4gICAgfSxcbiAgICBjb21wdXRlZCAgOiB7fSxcbiAgICBtZXRob2RzICAgOiB7XG4gICAgICBnZXRDdXJyZW50U3R1ZHkgKCkge1xuICAgICAgICB0aGlzLiRodHRwXG4gICAgICAgICAgLmdldChcbiAgICAgICAgICAgICcvd3AtanNvbi9zdHVkeWNodXJjaC92MS9zdHVkaWVzLz9zdGF0dXM9YW55JnNsdWdbXT0nICsgdGhpcy4kcm91dGUucGFyYW1zLnN0dWR5KVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuc3R1ZHlEYXRhID0gcmVzcG9uc2UuZGF0YVswXTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZ1RvZG9zID0gZmFsc2UpXG4gICAgICB9LFxuICAgICAgZ2V0U3R1ZHlDaGFwdGVycyAoKSB7XG4gICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgJy93cC1qc29uL3N0dWR5Y2h1cmNoL3YxL3N0dWRpZXMvJyArIHRoaXMuJHJvdXRlLnBhcmFtcy5zdHVkeSArICcvY2hhcHRlcnMnKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlcnMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5sb2FkaW5nVG9kb3MgPSBmYWxzZSlcblx0ICB9LFxuICAgICAgZ2V0Q2hhcHRlckl0ZW1zICgpIHtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hhcHRlcnMuY291bnQ7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLmNoYXB0ZXJzW2ldLnNsdWcgPT09IHRoaXMuJHJvdXRlLnBhcmFtcy5jaGFwdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXB0ZXJEYXRhID0gdGhpcy5jaGFwdGVyc1tpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID4gdGhpcy5jaGFwdGVycy5jb3VudCkge1xuICAgICAgICAgIHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoaSA+IDApIHtcbiAgICAgICAgICB0aGlzLnByZXZDaGFwdGVyID0gdGhpcy5jaGFwdGVyc1tpIC0gMV07XG5cdFx0fVxuXG5cdFx0aWYgKGkgPCB0aGlzLmNoYXB0ZXJzLmNvdW50KSB7XG4gICAgICAgICAgdGhpcy5uZXh0Q2hhcHRlciA9IHRoaXMuY2hhcHRlcnNbaSArIDFdO1xuXHRcdH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGU+XG5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBTkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBWEE7QUFlQTtBQWxDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUExQ0E7QUFyREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Studies/Study.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvU3R1ZGllcy9TdHVkeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRGFzaGJvYXJkL1N0dWRpZXMvU3R1ZHkudnVlPzllZDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=style&index=0&lang=css&\n");

/***/ })

})