webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components */ \"./src/components/index.js\");\n/* harmony import */ var _Elements_Answer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Elements/Answer.vue */ \"./src/pages/Dashboard/Studies/Elements/Answer.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Card: _components__WEBPACK_IMPORTED_MODULE_0__[\"Card\"],\n    NTable: _components__WEBPACK_IMPORTED_MODULE_0__[\"Table\"],\n    NProgress: _components__WEBPACK_IMPORTED_MODULE_0__[\"Progress\"],\n    AnimatedNumber: _components__WEBPACK_IMPORTED_MODULE_0__[\"AnimatedNumber\"],\n    TimeLine: _components__WEBPACK_IMPORTED_MODULE_0__[\"TimeLine\"],\n    TimeLineItem: _components__WEBPACK_IMPORTED_MODULE_0__[\"TimeLineItem\"],\n    Answer: _Elements_Answer_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data: function data() {\n    return {\n      loading: true,\n      prevChapter: {\n        id: 0\n      },\n      nextChapter: {\n        id: 0\n      },\n      chapters: [],\n      chapterData: {\n        id: 0,\n        study: '',\n        title: {\n          rendered: ''\n        },\n        elements: [{\n          content: {\n            rendered: ''\n          }\n        }]\n      },\n      studyData: {\n        id: 0,\n        name: '',\n        slug: '',\n        title: {\n          rendered: ''\n        },\n        avatar_urls: {\n          full: '',\n          thumb: ''\n        },\n        description: {\n          rendered: ''\n        }\n      },\n      activityData: []\n    };\n  },\n  mounted: function mounted() {\n    this.getChapterItems();\n    this.getStudyChapters();\n  },\n  watch: {\n    '$route': function $route(to, from) {\n      this.getChapterItems();\n    }\n  },\n  props: {\n    groupData: {\n      default: function _default() {\n        return {\n          id: 0,\n          studies: []\n        };\n      }\n    }\n  },\n  computed: {\n    navPrefix: function navPrefix() {\n      if (!this.groupData.id) {\n        return '';\n      }\n\n      if (undefined === this.$route.params.slug) {\n        return '';\n      }\n\n      return '/groups/' + this.$route.params.slug;\n    }\n  },\n  methods: {\n    getStudyChapters: function getStudyChapters() {\n      var _this = this;\n\n      this.$http.get('/wp-json/studychurch/v1/studies/' + this.$route.params.study + '/chapters').then(function (response) {\n        _this.chapters = response.data;\n\n        _this.getChapterItems();\n      }).finally(function () {\n        return _this.loading = false;\n      });\n    },\n    getChapterItems: function getChapterItems() {\n      var i = 0;\n\n      for (i = 0; i < this.chapters.length; i++) {\n        if (undefined === this.$route.params.chapter || this.chapters[i].slug === this.$route.params.chapter) {\n          this.chapterData = this.chapters[i];\n          break;\n        }\n      }\n\n      if (i > this.chapters.length) {\n        return;\n      }\n\n      if (i > 0) {\n        if (undefined !== this.chapters[i - 1]) {\n          this.prevChapter = this.chapters[i - 1];\n        }\n      }\n\n      if (i < this.chapters.length) {\n        if (undefined !== this.chapters[i + 1]) {\n          this.nextChapter = this.chapters[i + 1];\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9TdHVkaWVzL1N0dWR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vU3R1ZHkudnVlP2Q5YzUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxjYXJkIHYtbG9hZGluZz1cImxvYWRpbmdcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDIwMHB4O1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGg1IGNsYXNzPVwidGl0bGVcIiB2LWh0bWw9XCJjaGFwdGVyRGF0YS5zdHVkeVwiPjwvaDU+XG5cdFx0XHRcdFx0PGgxIGNsYXNzPVwidGl0bGVcIiB2LWh0bWw9XCJjaGFwdGVyRGF0YS50aXRsZS5yZW5kZXJlZFwiPjwvaDE+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJzdHVkeS1tZXRhXCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHQ8c2VsZWN0PlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uPkNoYXB0ZXIgU2VsZWN0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdi1mb3I9XCJjaGFwdGVyIGluIGNoYXB0ZXJzXCI+e3sgY2hhcHRlci50aXRsZS5yZW5kZXJlZCB9fTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFByaW50XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IHYtZm9yPVwiZGF0YSBpbiBjaGFwdGVyRGF0YS5lbGVtZW50c1wiIDppZD1cIidwb3N0LScgKyBkYXRhLmlkXCI+XG5cdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgdi1odG1sPVwiZGF0YS5jb250ZW50LnJlbmRlcmVkIHwgaXNQcml2YXRlKCBkYXRhWydpc19wcml2YXRlJ10gKVwiPjwvZGl2Pi0tPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgdi1odG1sPVwiJG9wdGlvbnMuZmlsdGVycy5pc1ByaXZhdGUoIGRhdGEuY29udGVudC5yZW5kZXJlZCwgZGF0YVsnaXNfcHJpdmF0ZSddIClcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiB2LWlmPVwiZGF0YVsnZGF0YV90eXBlJ10gPT09ICdxdWVzdGlvbl9zaG9ydCcgfHwgIGRhdGFbJ2RhdGFfdHlwZSddID09PSAncXVlc3Rpb25fbG9uZydcIiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG5cdFx0XHRcdFx0PGFuc3dlciA6cXVlc3Rpb25EYXRhPVwiZGF0YVwiIDpncm91cERhdGE9XCJncm91cERhdGFcIj48L2Fuc3dlcj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2NhcmQ+XG5cblx0XHQ8ZGl2PlxuXHRcdFx0PHJvdXRlci1saW5rIHYtaWY9XCJwcmV2Q2hhcHRlci5pZFwiIDp0bz1cIm5hdlByZWZpeCArICRyb290LmNsZWFuTGluayhwcmV2Q2hhcHRlci5saW5rKVwiIHRhZz1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnRuLWxhYmVsIGJ0bi1sYWJlbC1yaWdodFwiPjxpIGNsYXNzPVwibm93LXVpLWljb25zIGFycm93cy0xX21pbmltYWwtbGVmdFwiPjwvaT48L3NwYW4+XG5cdFx0XHRcdCZuYnNwOyZuYnNwOzxzcGFuIHYtaHRtbD1cInByZXZDaGFwdGVyLnRpdGxlLnJlbmRlcmVkXCI+PC9zcGFuPlxuXHRcdFx0PC9yb3V0ZXItbGluaz5cblx0XHRcdDxyb3V0ZXItbGluayB2LWlmPVwibmV4dENoYXB0ZXIuaWRcIiA6dG89XCJuYXZQcmVmaXggKyAkcm9vdC5jbGVhbkxpbmsobmV4dENoYXB0ZXIubGluaylcIiB0YWc9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlxuXHRcdFx0XHQ8c3BhbiB2LWh0bWw9XCJuZXh0Q2hhcHRlci50aXRsZS5yZW5kZXJlZFwiPjwvc3Bhbj5cblx0XHRcdFx0Jm5ic3A7Jm5ic3A7PHNwYW4gY2xhc3M9XCJidG4tbGFiZWwgYnRuLWxhYmVsLXJpZ2h0XCI+PGkgY2xhc3M9XCJub3ctdWktaWNvbnMgYXJyb3dzLTFfbWluaW1hbC1yaWdodFwiPjwvaT48L3NwYW4+XG5cdFx0XHQ8L3JvdXRlci1saW5rPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7XG4gICAgQ2FyZCxcbiAgICBUYWJsZSBhcyBOVGFibGUsXG4gICAgUHJvZ3Jlc3MgYXMgTlByb2dyZXNzLFxuICAgIEFuaW1hdGVkTnVtYmVyLFxuICAgIFRpbWVMaW5lLFxuICAgIFRpbWVMaW5lSXRlbVxuICB9IGZyb20gJ3NyYy9jb21wb25lbnRzJztcblxuICBpbXBvcnQgQW5zd2VyIGZyb20gJy4vRWxlbWVudHMvQW5zd2VyLnZ1ZSc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIENhcmQsXG4gICAgICBOVGFibGUsXG4gICAgICBOUHJvZ3Jlc3MsXG4gICAgICBBbmltYXRlZE51bWJlcixcbiAgICAgIFRpbWVMaW5lLFxuICAgICAgVGltZUxpbmVJdGVtLFxuICAgICAgQW5zd2VyXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZyAgICAgOiB0cnVlLFxuICAgICAgICBwcmV2Q2hhcHRlciA6IHtcbiAgICAgICAgICBpZDogMFxuICAgICAgICB9LFxuICAgICAgICBuZXh0Q2hhcHRlciA6IHtcbiAgICAgICAgICBpZDogMFxuICAgICAgICB9LFxuICAgICAgICBjaGFwdGVycyAgICA6IFtdLFxuICAgICAgICBjaGFwdGVyRGF0YSA6IHtcbiAgICAgICAgICBpZCAgICAgIDogMCxcbiAgICAgICAgICBzdHVkeSAgIDogJycsXG4gICAgICAgICAgdGl0bGUgICA6IHtcbiAgICAgICAgICAgIHJlbmRlcmVkOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICByZW5kZXJlZDogJydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0dWR5RGF0YSAgIDoge1xuICAgICAgICAgIGlkICAgICAgICAgOiAwLFxuICAgICAgICAgIG5hbWUgICAgICAgOiAnJyxcbiAgICAgICAgICBzbHVnICAgICAgIDogJycsXG4gICAgICAgICAgdGl0bGUgICAgICA6IHtcbiAgICAgICAgICAgIHJlbmRlcmVkOiAnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYXZhdGFyX3VybHM6IHtcbiAgICAgICAgICAgIGZ1bGwgOiAnJyxcbiAgICAgICAgICAgIHRodW1iOiAnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgIHJlbmRlcmVkOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZpdHlEYXRhOiBbXSxcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLmdldENoYXB0ZXJJdGVtcygpO1xuICAgICAgdGhpcy5nZXRTdHVkeUNoYXB0ZXJzKCk7XG4gICAgfSxcbiAgICB3YXRjaCAgICAgOiB7XG4gICAgICAnJHJvdXRlJyAodG8sIGZyb20pIHtcbiAgICAgICAgdGhpcy5nZXRDaGFwdGVySXRlbXMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzICAgICA6IHtcbiAgICAgIGdyb3VwRGF0YToge1xuICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZCAgICAgOiAwLFxuICAgICAgICAgICAgc3R1ZGllczogW11cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wdXRlZCAgOiB7XG4gICAgICBuYXZQcmVmaXgoKSB7XG4gICAgICAgIGlmICghdGhpcy5ncm91cERhdGEuaWQpIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLiRyb3V0ZS5wYXJhbXMuc2x1Zykge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnL2dyb3Vwcy8nICsgdGhpcy4kcm91dGUucGFyYW1zLnNsdWc7XG4gICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kcyAgIDoge1xuICAgICAgZ2V0U3R1ZHlDaGFwdGVycyAoKSB7XG4gICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgJy93cC1qc29uL3N0dWR5Y2h1cmNoL3YxL3N0dWRpZXMvJyArIHRoaXMuJHJvdXRlLnBhcmFtcy5zdHVkeSArICcvY2hhcHRlcnMnKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlcnMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgdGhpcy5nZXRDaGFwdGVySXRlbXMoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxuICAgICAgfSxcbiAgICAgIGdldENoYXB0ZXJJdGVtcyAoKSB7XG4gICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5jaGFwdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuJHJvdXRlLnBhcmFtcy5jaGFwdGVyIHx8IHRoaXMuY2hhcHRlcnNbaV0uc2x1ZyA9PT0gdGhpcy4kcm91dGUucGFyYW1zLmNoYXB0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlckRhdGEgPSB0aGlzLmNoYXB0ZXJzW2ldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPiB0aGlzLmNoYXB0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIGlmICh1bmRlZmluZWQgIT09IHRoaXMuY2hhcHRlcnNbaSAtIDFdKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZDaGFwdGVyID0gdGhpcy5jaGFwdGVyc1tpIC0gMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPCB0aGlzLmNoYXB0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIGlmICh1bmRlZmluZWQgIT09IHRoaXMuY2hhcHRlcnNbaSArIDFdKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRDaGFwdGVyID0gdGhpcy5jaGFwdGVyc1tpICsgMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cblxuXHQuc3R1ZHktbWV0YSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0anVzdGlmeS1jb250ZW50OiBsZWZ0O1xuXHR9XG5cblx0LnN0dWR5LW1ldGEgZGl2IHtcblx0XHRtYXJnaW46IDAgLjVyZW07XG5cdH1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlEQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQURBO0FBREE7QUFQQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFYQTtBQWVBO0FBdENBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBREE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFyQ0E7QUFwRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Studies/Study.vue?vue&type=script&lang=js&\n");

/***/ })

})