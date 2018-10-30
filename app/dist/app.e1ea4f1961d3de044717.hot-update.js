webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ \"./src/components/index.js\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Card: _components__WEBPACK_IMPORTED_MODULE_3__[\"Card\"],\n    NTable: _components__WEBPACK_IMPORTED_MODULE_3__[\"Table\"],\n    NProgress: _components__WEBPACK_IMPORTED_MODULE_3__[\"Progress\"],\n    AnimatedNumber: _components__WEBPACK_IMPORTED_MODULE_3__[\"AnimatedNumber\"],\n    TimeLine: _components__WEBPACK_IMPORTED_MODULE_3__[\"TimeLine\"],\n    TimeLineItem: _components__WEBPACK_IMPORTED_MODULE_3__[\"TimeLineItem\"]\n  },\n  data: function data() {\n    return {\n      loadingTodos: true,\n      todoData: [],\n      prevChapter: [],\n      nextChapter: [],\n      chapters: [],\n      chapterData: {\n        id: 0,\n        title: {\n          rendered: ''\n        },\n        elements: [{\n          content: {\n            rendered: ''\n          }\n        }]\n      },\n      studyData: {\n        id: 0,\n        name: '',\n        slug: '',\n        title: {\n          rendered: ''\n        },\n        avatar_urls: {\n          full: '',\n          thumb: ''\n        },\n        description: {\n          rendered: ''\n        }\n      },\n      activityData: []\n    };\n  },\n  mounted: function mounted() {\n    this.getCurrentStudy();\n    this.getChapterItems();\n    this.getStudyChapters();\n  },\n  watch: {\n    '$route': function $route(to, from) {\n      this.getChapterItems();\n    }\n  },\n  computed: {},\n  methods: {\n    getCurrentStudy: function getCurrentStudy() {\n      var _this = this;\n\n      this.$http.get('/wp-json/studychurch/v1/studies/?status=any&slug[]=' + this.$route.params.study).then(function (response) {\n        console.log(response);\n        _this.studyData = response.data[0];\n      }).finally(function () {\n        return _this.loadingTodos = false;\n      });\n    },\n    getStudyChapters: function getStudyChapters() {\n      var _this2 = this;\n\n      this.$http.get('/wp-json/studychurch/v1/studies/' + this.$route.params.study + '/chapters').then(function (response) {\n        console.log(response);\n        _this2.chapters = response.data;\n\n        _this2.getChapterItems();\n      }).finally(function () {\n        return _this2.loadingTodos = false;\n      });\n    },\n    getChapterItems: function getChapterItems() {\n      var i = 0;\n\n      for (i = 0; i < this.chapters.length; i++) {\n        if (this.chapters[i].slug === this.$route.params.chapter) {\n          this.chapterData = this.chapters[i];\n          break;\n        }\n      }\n\n      if (i > this.chapters.length) {\n        return;\n      }\n\n      if (i > 0) {\n        this.prevChapter = this.chapters[i - 1];\n      }\n\n      if (i < this.chapters.length) {\n        this.nextChapter = this.chapters[i + 1];\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvU3R1ZGllcy9TdHVkeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1N0dWR5LnZ1ZT9kOWM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cInRpdGxlXCIgdi1odG1sPVwic3R1ZHlEYXRhLnRpdGxlLnJlbmRlcmVkXCI+Tm93IFVpIFRhYmxlIEhlYWRpbmc8L2g1PlxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3M9XCJ0aXRsZVwiIHYtaHRtbD1cImNoYXB0ZXJEYXRhLnRpdGxlLnJlbmRlcmVkXCI+Tm93IFVpIFRhYmxlIEhlYWRpbmc8L2gxPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImNhdGVnb3J5XCI+Q3JlYXRlZCB1c2luZyBNb250c2VycmF0IEZvbnQgRmFtaWx5PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IHYtZm9yPVwiZGF0YSBpbiBjaGFwdGVyRGF0YS5lbGVtZW50c1wiIHYtaHRtbD1cImRhdGEuY29udGVudC5yZW5kZXJlZFwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8cm91dGVyLWxpbmsgdi1pZj1cInByZXZDaGFwdGVyLmlkXCIgOnRvPVwidGhpcy4kcm9vdC5jbGVhbkxpbmsocHJldkNoYXB0ZXIubGluaylcIiB0YWc9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWh0bWw9XCJwcmV2Q2hhcHRlci50aXRsZS5yZW5kZXJlZFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJidG4tbGFiZWwgYnRuLWxhYmVsLXJpZ2h0XCI+PGkgY2xhc3M9XCJub3ctdWktaWNvbnMgYXJyb3dzLTFfbWluaW1hbC1yaWdodFwiPjwvaT48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3JvdXRlci1saW5rPlxuXHRcdFx0XHRcdFx0PHJvdXRlci1saW5rIHYtaWY9XCJuZXh0Q2hhcHRlci5pZFwiIDp0bz1cInRoaXMuJHJvb3QuY2xlYW5MaW5rKG5leHRDaGFwdGVyLmxpbmspXCIgdGFnPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1odG1sPVwibmV4dENoYXB0ZXIudGl0bGUucmVuZGVyZWRcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnRuLWxhYmVsIGJ0bi1sYWJlbC1yaWdodFwiPjxpIGNsYXNzPVwibm93LXVpLWljb25zIGFycm93cy0xX21pbmltYWwtcmlnaHRcIj48L2k+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7XG4gICAgQ2FyZCxcbiAgICBUYWJsZSBhcyBOVGFibGUsXG4gICAgUHJvZ3Jlc3MgYXMgTlByb2dyZXNzLFxuICAgIEFuaW1hdGVkTnVtYmVyLFxuICAgIFRpbWVMaW5lLFxuICAgIFRpbWVMaW5lSXRlbVxuICB9IGZyb20gJ3NyYy9jb21wb25lbnRzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBDYXJkLFxuICAgICAgTlRhYmxlLFxuICAgICAgTlByb2dyZXNzLFxuICAgICAgQW5pbWF0ZWROdW1iZXIsXG4gICAgICBUaW1lTGluZSxcbiAgICAgIFRpbWVMaW5lSXRlbVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRpbmdUb2RvczogdHJ1ZSxcbiAgICAgICAgdG9kb0RhdGEgICAgOiBbXSxcbiAgICAgICAgcHJldkNoYXB0ZXIgOiBbXSxcbiAgICAgICAgbmV4dENoYXB0ZXIgOiBbXSxcbiAgICAgICAgY2hhcHRlcnMgICAgOiBbXSxcbiAgICAgICAgY2hhcHRlckRhdGEgOiB7XG4gICAgICAgICAgaWQgICAgICA6IDAsXG4gICAgICAgICAgdGl0bGUgICA6IHtcbiAgICAgICAgICAgIHJlbmRlcmVkOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICByZW5kZXJlZDogJydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0dWR5RGF0YSAgIDoge1xuICAgICAgICAgIGlkICAgICAgICAgOiAwLFxuICAgICAgICAgIG5hbWUgICAgICAgOiAnJyxcbiAgICAgICAgICBzbHVnICAgICAgIDogJycsXG4gICAgICAgICAgdGl0bGUgICAgICA6IHtcbiAgICAgICAgICAgIHJlbmRlcmVkOiAnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYXZhdGFyX3VybHM6IHtcbiAgICAgICAgICAgIGZ1bGwgOiAnJyxcbiAgICAgICAgICAgIHRodW1iOiAnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgIHJlbmRlcmVkOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZpdHlEYXRhOiBbXSxcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLmdldEN1cnJlbnRTdHVkeSgpO1xuICAgICAgdGhpcy5nZXRDaGFwdGVySXRlbXMoKTtcbiAgICAgIHRoaXMuZ2V0U3R1ZHlDaGFwdGVycygpO1xuICAgIH0sXG5cdHdhdGNoIDoge1xuICAgICAgJyRyb3V0ZScgKHRvLCBmcm9tKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2hhcHRlckl0ZW1zKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZCAgOiB7fSxcbiAgICBtZXRob2RzICAgOiB7XG4gICAgICBnZXRDdXJyZW50U3R1ZHkgKCkge1xuICAgICAgICB0aGlzLiRodHRwXG4gICAgICAgICAgLmdldChcbiAgICAgICAgICAgICcvd3AtanNvbi9zdHVkeWNodXJjaC92MS9zdHVkaWVzLz9zdGF0dXM9YW55JnNsdWdbXT0nICsgdGhpcy4kcm91dGUucGFyYW1zLnN0dWR5KVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuc3R1ZHlEYXRhID0gcmVzcG9uc2UuZGF0YVswXTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZ1RvZG9zID0gZmFsc2UpXG4gICAgICB9LFxuICAgICAgZ2V0U3R1ZHlDaGFwdGVycyAoKSB7XG4gICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgJy93cC1qc29uL3N0dWR5Y2h1cmNoL3YxL3N0dWRpZXMvJyArIHRoaXMuJHJvdXRlLnBhcmFtcy5zdHVkeSArICcvY2hhcHRlcnMnKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlcnMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgdGhpcy5nZXRDaGFwdGVySXRlbXMoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZ1RvZG9zID0gZmFsc2UpXG4gICAgICB9LFxuICAgICAgZ2V0Q2hhcHRlckl0ZW1zICgpIHtcblx0XHRsZXQgaSA9IDA7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuY2hhcHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5jaGFwdGVyc1tpXS5zbHVnID09PSB0aGlzLiRyb3V0ZS5wYXJhbXMuY2hhcHRlcikge1xuICAgICAgICAgICAgdGhpcy5jaGFwdGVyRGF0YSA9IHRoaXMuY2hhcHRlcnNbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSA+IHRoaXMuY2hhcHRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgdGhpcy5wcmV2Q2hhcHRlciA9IHRoaXMuY2hhcHRlcnNbaSAtIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPCB0aGlzLmNoYXB0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMubmV4dENoYXB0ZXIgPSB0aGlzLmNoYXB0ZXJzW2kgKyAxXTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU5BO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVhBO0FBZUE7QUFsQ0E7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBNUNBO0FBMURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"46ed2be8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=template&id=601a551c&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46ed2be8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Studies/Study.vue?vue&type=template&id=601a551c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"row\" }, [\n      _c(\"div\", { staticClass: \"col-md-12\" }, [\n        _c(\"div\", { staticClass: \"card\" }, [\n          _c(\n            \"div\",\n            { staticClass: \"card-header\" },\n            [\n              _c(\"div\", [\n                _c(\n                  \"h5\",\n                  {\n                    staticClass: \"title\",\n                    domProps: {\n                      innerHTML: _vm._s(_vm.studyData.title.rendered)\n                    }\n                  },\n                  [_vm._v(\"Now Ui Table Heading\")]\n                ),\n                _c(\n                  \"h1\",\n                  {\n                    staticClass: \"title\",\n                    domProps: {\n                      innerHTML: _vm._s(_vm.chapterData.title.rendered)\n                    }\n                  },\n                  [_vm._v(\"Now Ui Table Heading\")]\n                ),\n                _c(\"p\", { staticClass: \"category\" }, [\n                  _vm._v(\"Created using Montserrat Font Family\")\n                ])\n              ]),\n              _vm._l(_vm.chapterData.elements, function(data) {\n                return _c(\"div\", {\n                  domProps: { innerHTML: _vm._s(data.content.rendered) }\n                })\n              })\n            ],\n            2\n          ),\n          _c(\n            \"div\",\n            [\n              _vm.prevChapter.id\n                ? _c(\n                    \"router-link\",\n                    {\n                      staticClass: \"btn btn-default\",\n                      attrs: {\n                        to: this.$root.cleanLink(_vm.prevChapter.link),\n                        tag: \"button\"\n                      }\n                    },\n                    [\n                      _c(\"span\", {\n                        domProps: {\n                          innerHTML: _vm._s(_vm.prevChapter.title.rendered)\n                        }\n                      }),\n                      _c(\"span\", { staticClass: \"btn-label btn-label-right\" }, [\n                        _c(\"i\", {\n                          staticClass: \"now-ui-icons arrows-1_minimal-right\"\n                        })\n                      ])\n                    ]\n                  )\n                : _vm._e(),\n              _vm.nextChapter.id\n                ? _c(\n                    \"router-link\",\n                    {\n                      staticClass: \"btn btn-default\",\n                      attrs: {\n                        to: this.$root.cleanLink(_vm.nextChapter.link),\n                        tag: \"button\"\n                      }\n                    },\n                    [\n                      _c(\"span\", {\n                        domProps: {\n                          innerHTML: _vm._s(_vm.nextChapter.title.rendered)\n                        }\n                      }),\n                      _c(\"span\", { staticClass: \"btn-label btn-label-right\" }, [\n                        _c(\"i\", {\n                          staticClass: \"now-ui-icons arrows-1_minimal-right\"\n                        })\n                      ])\n                    ]\n                  )\n                : _vm._e()\n            ],\n            1\n          )\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiNDZlZDJiZTgtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvU3R1ZGllcy9TdHVkeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjAxYTU1MWMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9TdHVkaWVzL1N0dWR5LnZ1ZT9jNjkxIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5zdHVkeURhdGEudGl0bGUucmVuZGVyZWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTm93IFVpIFRhYmxlIEhlYWRpbmdcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiaDFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uY2hhcHRlckRhdGEudGl0bGUucmVuZGVyZWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTm93IFVpIFRhYmxlIEhlYWRpbmdcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXRlZ29yeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNyZWF0ZWQgdXNpbmcgTW9udHNlcnJhdCBGb250IEZhbWlseVwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNoYXB0ZXJEYXRhLmVsZW1lbnRzLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKGRhdGEuY29udGVudC5yZW5kZXJlZCkgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0ucHJldkNoYXB0ZXIuaWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRoaXMuJHJvb3QuY2xlYW5MaW5rKF92bS5wcmV2Q2hhcHRlci5saW5rKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ucHJldkNoYXB0ZXIudGl0bGUucmVuZGVyZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuLWxhYmVsIGJ0bi1sYWJlbC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5vdy11aS1pY29ucyBhcnJvd3MtMV9taW5pbWFsLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5uZXh0Q2hhcHRlci5pZFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogdGhpcy4kcm9vdC5jbGVhbkxpbmsoX3ZtLm5leHRDaGFwdGVyLmxpbmspLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5uZXh0Q2hhcHRlci50aXRsZS5yZW5kZXJlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJidG4tbGFiZWwgYnRuLWxhYmVsLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibm93LXVpLWljb25zIGFycm93cy0xX21pbmltYWwtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"46ed2be8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=template&id=601a551c&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Studies/Study.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvU3R1ZGllcy9TdHVkeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRGFzaGJvYXJkL1N0dWRpZXMvU3R1ZHkudnVlPzllZDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=style&index=0&lang=css&\n");

/***/ })

})