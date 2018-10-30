webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ \"./src/components/index.js\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Card: _components__WEBPACK_IMPORTED_MODULE_3__[\"Card\"],\n    NTable: _components__WEBPACK_IMPORTED_MODULE_3__[\"Table\"],\n    NProgress: _components__WEBPACK_IMPORTED_MODULE_3__[\"Progress\"],\n    AnimatedNumber: _components__WEBPACK_IMPORTED_MODULE_3__[\"AnimatedNumber\"],\n    TimeLine: _components__WEBPACK_IMPORTED_MODULE_3__[\"TimeLine\"],\n    TimeLineItem: _components__WEBPACK_IMPORTED_MODULE_3__[\"TimeLineItem\"]\n  },\n  data: function data() {\n    return {\n      loadingGroups: false,\n      loadingStudies: false,\n      loadingActivity: true,\n      loadingTodos: true,\n      todoData: [],\n      chapterData: {\n        id: 0,\n        title: {\n          rendered: ''\n        },\n        elements: [{\n          content: {\n            rendered: ''\n          }\n        }]\n      },\n      studyData: {\n        id: 0,\n        name: '',\n        slug: '',\n        title: {\n          rendered: ''\n        },\n        avatar_urls: {\n          full: '',\n          thumb: ''\n        },\n        description: {\n          rendered: ''\n        }\n      },\n      activityData: []\n    };\n  },\n  mounted: function mounted() {\n    this.getCurrentStudy();\n    this.getChapterItems();\n  },\n  computed: {},\n  methods: {\n    getCurrentStudy: function getCurrentStudy() {\n      var _this = this;\n\n      this.$http.get('/wp-json/studychurch/v1/studies/?status=any&slug[]=' + this.$route.params.study).then(function (response) {\n        console.log(response);\n        _this.studyData = response.data[0];\n      }).finally(function () {\n        return _this.loadingTodos = false;\n      });\n    },\n    getStudyChapters: function getStudyChapters() {\n      var _this2 = this;\n\n      this.$http.get('/wp-json/studychurch/v1/studies/' + this.$route.params.study + '/chapters').then(function (response) {\n        console.log(response);\n        _this2.chapters = response.data;\n      }).finally(function () {\n        return _this2.loadingTodos = false;\n      });\n    },\n    getChapterItems: function getChapterItems() {\n      var _this3 = this;\n\n      this.$http.get('/wp-json/studychurch/v1/studies/' + this.$route.params.study + '/chapters/' + this.$route.params.chapter).then(function (response) {\n        console.log(response);\n        _this3.chapterData = response.data;\n      }).finally(function () {\n        return _this3.loadingTodos = false;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvU3R1ZGllcy9TdHVkeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1N0dWR5LnZ1ZT9kOWM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cInRpdGxlXCIgdi1odG1sPVwic3R1ZHlEYXRhLnRpdGxlLnJlbmRlcmVkXCI+Tm93IFVpIFRhYmxlIEhlYWRpbmc8L2g1PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImNhdGVnb3J5XCI+Q3JlYXRlZCB1c2luZyBNb250c2VycmF0IEZvbnQgRmFtaWx5PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IHYtZm9yPVwiZGF0YSBpbiBjaGFwdGVyRGF0YS5lbGVtZW50c1wiIHYtaHRtbD1cImRhdGEuY29udGVudC5yZW5kZXJlZFwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IHtcbiAgICBDYXJkLFxuICAgIFRhYmxlIGFzIE5UYWJsZSxcbiAgICBQcm9ncmVzcyBhcyBOUHJvZ3Jlc3MsXG4gICAgQW5pbWF0ZWROdW1iZXIsXG4gICAgVGltZUxpbmUsXG4gICAgVGltZUxpbmVJdGVtXG4gIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIENhcmQsXG4gICAgICBOVGFibGUsXG4gICAgICBOUHJvZ3Jlc3MsXG4gICAgICBBbmltYXRlZE51bWJlcixcbiAgICAgIFRpbWVMaW5lLFxuICAgICAgVGltZUxpbmVJdGVtXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZ0dyb3VwcyAgOiBmYWxzZSxcbiAgICAgICAgbG9hZGluZ1N0dWRpZXMgOiBmYWxzZSxcbiAgICAgICAgbG9hZGluZ0FjdGl2aXR5OiB0cnVlLFxuICAgICAgICBsb2FkaW5nVG9kb3MgICA6IHRydWUsXG4gICAgICAgIHRvZG9EYXRhICAgICAgIDogW10sXG4gICAgICAgIGNoYXB0ZXJEYXRhICAgIDoge1xuICAgICAgICAgIGlkICAgICAgOiAwLFxuICAgICAgICAgIHRpdGxlICAgOiB7XG4gICAgICAgICAgICByZW5kZXJlZDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbGVtZW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgcmVuZGVyZWQ6ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBzdHVkeURhdGEgICAgICA6IHtcbiAgICAgICAgICBpZCAgICAgICAgIDogMCxcbiAgICAgICAgICBuYW1lICAgICAgIDogJycsXG4gICAgICAgICAgc2x1ZyAgICAgICA6ICcnLFxuICAgICAgICAgIHRpdGxlICAgICAgOiB7XG4gICAgICAgICAgICByZW5kZXJlZDogJydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF2YXRhcl91cmxzOiB7XG4gICAgICAgICAgICBmdWxsIDogJycsXG4gICAgICAgICAgICB0aHVtYjogJydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICByZW5kZXJlZDogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2aXR5RGF0YSAgIDogW10sXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpcy5nZXRDdXJyZW50U3R1ZHkoKTtcbiAgICAgIHRoaXMuZ2V0Q2hhcHRlckl0ZW1zKCk7XG4gICAgfSxcbiAgICBjb21wdXRlZCAgOiB7fSxcbiAgICBtZXRob2RzICAgOiB7XG4gICAgICBnZXRDdXJyZW50U3R1ZHkgKCkge1xuICAgICAgICB0aGlzLiRodHRwXG4gICAgICAgICAgLmdldChcbiAgICAgICAgICAgICcvd3AtanNvbi9zdHVkeWNodXJjaC92MS9zdHVkaWVzLz9zdGF0dXM9YW55JnNsdWdbXT0nICsgdGhpcy4kcm91dGUucGFyYW1zLnN0dWR5KVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuc3R1ZHlEYXRhID0gcmVzcG9uc2UuZGF0YVswXTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZ1RvZG9zID0gZmFsc2UpXG4gICAgICB9LFxuICAgICAgZ2V0U3R1ZHlDaGFwdGVycyAoKSB7XG4gICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgJy93cC1qc29uL3N0dWR5Y2h1cmNoL3YxL3N0dWRpZXMvJyArIHRoaXMuJHJvdXRlLnBhcmFtcy5zdHVkeSArICcvY2hhcHRlcnMnKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlcnMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5sb2FkaW5nVG9kb3MgPSBmYWxzZSlcblx0ICB9LFxuICAgICAgZ2V0Q2hhcHRlckl0ZW1zICgpIHtcbiAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAnL3dwLWpzb24vc3R1ZHljaHVyY2gvdjEvc3R1ZGllcy8nICsgdGhpcy4kcm91dGUucGFyYW1zLnN0dWR5ICsgJy9jaGFwdGVycy8nICsgdGhpcy4kcm91dGUucGFyYW1zLmNoYXB0ZXIpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5jaGFwdGVyRGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmluYWxseSgoKSA9PiB0aGlzLmxvYWRpbmdUb2RvcyA9IGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGU+XG5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBTkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBWEE7QUFlQTtBQWxDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTlCQTtBQXBEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js&\n");

/***/ })

})