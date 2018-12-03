webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Activity.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Groups/Views/Activity.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components */ \"./src/components/index.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nfunction getDefaultData() {\n  return {\n    loadingActivity: true,\n    loadingMoreActivity: false,\n    activityData: [],\n    activityPage: 1\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Card: _components__WEBPACK_IMPORTED_MODULE_1__[\"Card\"],\n    Activity: _components__WEBPACK_IMPORTED_MODULE_1__[\"Activity\"],\n    ActivityForm: _components__WEBPACK_IMPORTED_MODULE_1__[\"ActivityForm\"]\n  },\n  props: {\n    groupData: {\n      id: 0\n    }\n  },\n  data: getDefaultData,\n  watch: {\n    'groupData': function groupData(to, from) {\n      // make sure we are dealing with a new group\n      if (to.id === from.id) {\n        return;\n      }\n\n      this.reset();\n      this.getGroupActivity();\n    }\n  },\n  mounted: function mounted() {\n    this.getGroupActivity();\n  },\n  methods: {\n    getGroupActivity: function getGroupActivity() {\n      var _this = this;\n\n      if (!this.groupData.id) {\n        return;\n      }\n\n      this.$http.get('/wp-json/studychurch/v1/activity?component=groups&show_hidden=true&per_page=20&display_comments=threaded&_embed=true&primary_id=' + this.groupData.id + '&page=' + this.activityPage).then(function (response) {\n        if (!response.data.length) {\n          _this.activityPage = 0;\n        }\n\n        _this.activityData = _this.activityData.concat(response.data);\n      }).finally(function () {\n        return _this.loadingActivity = _this.loadingMoreActivity = false;\n      });\n    },\n    addActivity: function addActivity(newActivity) {\n      newActivity.comments = [];\n      this.activityData.unshift(newActivity);\n    },\n    loadMoreActivity: function loadMoreActivity() {\n      if (!this.activityPage) {\n        return false;\n      }\n\n      this.loadingMoreActivity = true;\n      this.activityPage++;\n      this.getGroupActivity();\n    },\n    reset: function reset(keep) {\n      var def = getDefaultData();\n      def[keep] = this[keep];\n      Object.assign(this.$data, def);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9Hcm91cHMvVmlld3MvQWN0aXZpdHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9BY3Rpdml0eS52dWU/ZDE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cblx0PGRpdj5cblxuXHRcdDxjYXJkIGNhcmRCb2R5Q2xhc3Nlcz1cInNjLWFjdGl2aXR5LS11cGRhdGVcIj5cblx0XHRcdDxhY3Rpdml0eS1mb3JtXG5cdFx0XHRcdGVsQ2xhc3M9XCJzYy1hY3Rpdml0eS0tdXBkYXRlLS1mb3JtXCJcblx0XHRcdFx0Y29tcG9uZW50PVwiZ3JvdXBzXCJcblx0XHRcdFx0dHlwZT1cImFjdGl2aXR5X3VwZGF0ZVwiXG5cdFx0XHRcdHYtb246YWN0aXZpdHlTYXZlZD1cImFkZEFjdGl2aXR5XCJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQb3N0IGEgbWVzc2FnZSB0byB0aGUgZ3JvdXAgLi4uXCJcblx0XHRcdFx0OnByaW1hcnlJdGVtPVwidGhpcy5ncm91cERhdGEuaWRcIlxuXHRcdFx0XHQ6c2Vjb25kYXJ5SXRlbT1cIjBcIlxuXHRcdFx0XHQ6YXV0b3NpemU9XCJ7IG1pblJvd3M6IDMgfVwiPjwvYWN0aXZpdHktZm9ybT5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPlVzZSBAIHRvIG1lbnRpb24gYSBtZW1iZXIgb2YgdGhpcyBncm91cCBvciB1c2UgQGdyb3VwIHRvIG5vdGlmeSBldmVyeW9uZS48L2Rpdj5cblx0XHQ8L2NhcmQ+XG5cblx0XHQ8ZGl2IHYtbG9hZGluZz1cImxvYWRpbmdBY3Rpdml0eVwiIHN0eWxlPVwibWluLWhlaWdodDogMjBlbVwiPlxuXHRcdFx0PGFjdGl2aXR5IHYtZm9yPVwiYWN0aXZpdHkgaW4gYWN0aXZpdHlEYXRhXCIgOmFjdGl2aXR5PVwiYWN0aXZpdHlcIiA6a2V5PVwiYWN0aXZpdHkuaWRcIj48L2FjdGl2aXR5PlxuXHRcdFx0PGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG5cdFx0XHRcdDxuLWJ1dHRvbiB2LWlmPVwiYWN0aXZpdHlQYWdlICYmIGFjdGl2aXR5RGF0YS5sZW5ndGhcIiB0eXBlPVwicHJpbWFyeVwiIHNpbXBsZT1cIlwiIHdpZGU9XCJcIiB2LWxvYWRpbmc9XCJsb2FkaW5nTW9yZUFjdGl2aXR5XCIgQGNsaWNrLm5hdGl2ZT1cImxvYWRNb3JlQWN0aXZpdHlcIj5Mb2FkIE1vcmU8L24tYnV0dG9uPlxuXHRcdFx0XHQ8cCB2LWlmPVwiISBhY3Rpdml0eVBhZ2VcIj5UaGVyZSBpcyBubyBtb3JlIGFjdGl2aXR5IHRvIGxvYWQuPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0PC9kaXY+XG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQge1xuICAgIENhcmQsXG4gICAgQWN0aXZpdHksXG4gICAgQWN0aXZpdHlGb3JtXG4gIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnXG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdERhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nQWN0aXZpdHkgICAgOiB0cnVlLFxuICAgICAgbG9hZGluZ01vcmVBY3Rpdml0eTogZmFsc2UsXG4gICAgICBhY3Rpdml0eURhdGEgICAgICAgOiBbXSxcbiAgICAgIGFjdGl2aXR5UGFnZSAgICAgICA6IDEsXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIENhcmQsXG4gICAgICBBY3Rpdml0eSxcbiAgICAgIEFjdGl2aXR5Rm9ybVxuICAgIH0sXG4gICAgcHJvcHMgICAgIDoge1xuICAgICAgZ3JvdXBEYXRhOiB7aWQ6IDB9LFxuICAgIH0sXG4gICAgZGF0YSAgICAgIDogZ2V0RGVmYXVsdERhdGEsXG4gICAgd2F0Y2ggICAgIDoge1xuICAgICAgJ2dyb3VwRGF0YScgKHRvLCBmcm9tKSB7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBuZXcgZ3JvdXBcbiAgICAgICAgaWYgKHRvLmlkID09PSBmcm9tLmlkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmdldEdyb3VwQWN0aXZpdHkoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLmdldEdyb3VwQWN0aXZpdHkoKTtcbiAgICB9LFxuICAgIG1ldGhvZHMgICA6IHtcbiAgICAgIGdldEdyb3VwQWN0aXZpdHkgKCkge1xuICAgICAgICBpZiAoIXRoaXMuZ3JvdXBEYXRhLmlkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAnL3dwLWpzb24vc3R1ZHljaHVyY2gvdjEvYWN0aXZpdHk/Y29tcG9uZW50PWdyb3VwcyZzaG93X2hpZGRlbj10cnVlJnBlcl9wYWdlPTIwJmRpc3BsYXlfY29tbWVudHM9dGhyZWFkZWQmX2VtYmVkPXRydWUmcHJpbWFyeV9pZD0nICsgdGhpcy5ncm91cERhdGEuaWQgKyAnJnBhZ2U9JyArIHRoaXMuYWN0aXZpdHlQYWdlKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5hY3Rpdml0eVBhZ2UgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5RGF0YSA9IHRoaXMuYWN0aXZpdHlEYXRhLmNvbmNhdChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5sb2FkaW5nQWN0aXZpdHkgPSB0aGlzLmxvYWRpbmdNb3JlQWN0aXZpdHkgPSBmYWxzZSlcbiAgICAgIH0sXG4gICAgICBhZGRBY3Rpdml0eShuZXdBY3Rpdml0eSkge1xuICAgICAgICBuZXdBY3Rpdml0eS5jb21tZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2aXR5RGF0YS51bnNoaWZ0KG5ld0FjdGl2aXR5KTtcbiAgICAgIH0sXG4gICAgICBsb2FkTW9yZUFjdGl2aXR5ICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2aXR5UGFnZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGluZ01vcmVBY3Rpdml0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlQYWdlKys7XG4gICAgICAgIHRoaXMuZ2V0R3JvdXBBY3Rpdml0eSgpO1xuICAgICAgfSxcbiAgICAgIHJlc2V0IChrZWVwKSB7XG4gICAgICAgIGxldCBkZWYgPSBnZXREZWZhdWx0RGF0YSgpO1xuICAgICAgICBkZWZba2VlcF0gPSB0aGlzW2tlZXBdO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJGRhdGEsIGRlZik7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQ0E7QUF6QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Activity.vue?vue&type=script&lang=js&\n");

/***/ })

})