webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ \"./src/components/index.js\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Card: _components__WEBPACK_IMPORTED_MODULE_3__[\"Card\"],\n    NTable: _components__WEBPACK_IMPORTED_MODULE_3__[\"Table\"],\n    NProgress: _components__WEBPACK_IMPORTED_MODULE_3__[\"Progress\"],\n    AnimatedNumber: _components__WEBPACK_IMPORTED_MODULE_3__[\"AnimatedNumber\"],\n    TimeLine: _components__WEBPACK_IMPORTED_MODULE_3__[\"TimeLine\"],\n    TimeLineItem: _components__WEBPACK_IMPORTED_MODULE_3__[\"TimeLineItem\"]\n  },\n  data: function data() {\n    return {\n      loadingGroups: false,\n      loadingStudies: false,\n      loadingActivity: true,\n      loadingTodos: true,\n      todoData: [],\n      studyData: {\n        id: 0,\n        name: '',\n        slug: '',\n        title: {\n          rendered: ''\n        },\n        avatar_urls: {\n          full: '',\n          thumb: ''\n        },\n        description: {\n          rendered: ''\n        }\n      },\n      activityData: []\n    };\n  },\n  mounted: function mounted() {\n    this.getCurrentStudy();\n    this.getChapterItems();\n  },\n  computed: {},\n  methods: {\n    getCurrentStudy: function getCurrentStudy() {\n      var _this = this;\n\n      this.$http.get('/wp-json/studychurch/v1/studies/?status=any&slug[]=' + this.$route.params.study).then(function (response) {\n        console.log(response);\n        _this.studyData = response.data[0];\n      }).finally(function () {\n        return _this.loadingTodos = false;\n      });\n    },\n    getStudyChapters: function getStudyChapters() {},\n    getChapterItems: function getChapterItems() {\n      var _this2 = this;\n\n      this.$http.get('/wp-json/studychurch/v1/studies/' + this.$route.params.study + '/chapters/' + this.$route.params.chapter).then(function (response) {\n        console.log(response);\n        _this2.studyData = response.data[0];\n      }).finally(function () {\n        return _this2.loadingTodos = false;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvU3R1ZGllcy9TdHVkeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1N0dWR5LnZ1ZT9kOWM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRpdGxlXCIgdi1odG1sPVwic3R1ZHlEYXRhLnRpdGxlLnJlbmRlcmVkXCI+Tm93IFVpIFRhYmxlIEhlYWRpbmc8L2g1PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhdGVnb3J5XCI+Q3JlYXRlZCB1c2luZyBNb250c2VycmF0IEZvbnQgRmFtaWx5PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQge1xuICAgIENhcmQsXG4gICAgVGFibGUgYXMgTlRhYmxlLFxuICAgIFByb2dyZXNzIGFzIE5Qcm9ncmVzcyxcbiAgICBBbmltYXRlZE51bWJlcixcbiAgICBUaW1lTGluZSxcbiAgICBUaW1lTGluZUl0ZW1cbiAgfSBmcm9tICdzcmMvY29tcG9uZW50cydcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgQ2FyZCxcbiAgICAgIE5UYWJsZSxcbiAgICAgIE5Qcm9ncmVzcyxcbiAgICAgIEFuaW1hdGVkTnVtYmVyLFxuICAgICAgVGltZUxpbmUsXG4gICAgICBUaW1lTGluZUl0ZW1cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2FkaW5nR3JvdXBzOiBmYWxzZSxcbiAgICAgICAgbG9hZGluZ1N0dWRpZXM6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nQWN0aXZpdHk6IHRydWUsXG4gICAgICAgIGxvYWRpbmdUb2RvczogdHJ1ZSxcbiAgICAgICAgdG9kb0RhdGE6IFtdLFxuICAgICAgICBzdHVkeURhdGE6IHtcbiAgICAgICAgICBpZDogMCxcbiAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICBzbHVnOiAnJyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgcmVuZGVyZWQ6ICcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdmF0YXJfdXJsczoge1xuICAgICAgICAgICAgZnVsbDogJycsXG4gICAgICAgICAgICB0aHVtYjogJydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICByZW5kZXJlZDogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2aXR5RGF0YTogW10sXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpcy5nZXRDdXJyZW50U3R1ZHkoKTtcbiAgICAgIHRoaXMuZ2V0Q2hhcHRlckl0ZW1zKCk7XG4gICAgfSxcbiAgICBjb21wdXRlZCA6IHt9LFxuICAgIG1ldGhvZHMgOiB7XG4gICAgICBnZXRDdXJyZW50U3R1ZHkgKCkge1xuICAgICAgICB0aGlzLiRodHRwXG4gICAgICAgICAgLmdldChcbiAgICAgICAgICAgICcvd3AtanNvbi9zdHVkeWNodXJjaC92MS9zdHVkaWVzLz9zdGF0dXM9YW55JnNsdWdbXT0nICsgdGhpcy4kcm91dGUucGFyYW1zLnN0dWR5KVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCByZXNwb25zZSApO1xuICAgICAgICAgICAgdGhpcy5zdHVkeURhdGEgPSByZXNwb25zZS5kYXRhWzBdO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5sb2FkaW5nVG9kb3MgPSBmYWxzZSlcbiAgICAgIH0sXG4gICAgICBnZXRTdHVkeUNoYXB0ZXJzICgpIHt9LFxuICAgICAgZ2V0Q2hhcHRlckl0ZW1zICgpIHtcbiAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAnL3dwLWpzb24vc3R1ZHljaHVyY2gvdjEvc3R1ZGllcy8nICsgdGhpcy4kcm91dGUucGFyYW1zLnN0dWR5ICArICcvY2hhcHRlcnMvJyArIHRoaXMuJHJvdXRlLnBhcmFtcy5jaGFwdGVyIClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggcmVzcG9uc2UgKTtcbiAgICAgICAgICAgIHRoaXMuc3R1ZHlEYXRhID0gcmVzcG9uc2UuZGF0YVswXTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZ1RvZG9zID0gZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBWEE7QUFlQTtBQXJCQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXJCQTtBQXZDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Studies/Study.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvU3R1ZGllcy9TdHVkeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRGFzaGJvYXJkL1N0dWRpZXMvU3R1ZHkudnVlPzllZDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=style&index=0&lang=css&\n");

/***/ })

})