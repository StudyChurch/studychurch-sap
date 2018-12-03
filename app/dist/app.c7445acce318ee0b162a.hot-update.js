webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Activity.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Groups/Views/Activity.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components */ \"./src/components/index.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nfunction getDefaultData() {\n  return {\n    loadingActivity: true,\n    loadingMoreActivity: false,\n    activityData: [],\n    activityPage: 1\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Card: _components__WEBPACK_IMPORTED_MODULE_1__[\"Card\"],\n    Activity: _components__WEBPACK_IMPORTED_MODULE_1__[\"Activity\"],\n    ActivityForm: _components__WEBPACK_IMPORTED_MODULE_1__[\"ActivityForm\"]\n  },\n  props: {\n    groupData: {\n      id: 0\n    }\n  },\n  data: getDefaultData,\n  watch: {\n    'groupData': function groupData(to, from) {\n      // make sure we are dealing with a new group\n      if (to.id === from.id) {\n        return;\n      }\n\n      this.reset();\n\n      if (this.groupData.id) {\n        this.getGroupActivity();\n      }\n    }\n  },\n  methods: {\n    getGroupActivity: function getGroupActivity() {\n      var _this = this;\n\n      this.$http.get('/wp-json/studychurch/v1/activity?components=groups&show_hidden=true&per_page=20&display_comments=threaded&_embed=true&primary_id=' + this.groupData.id + '&page=' + this.activityPage).then(function (response) {\n        if (!response.data.length) {\n          _this.activityPage = 0;\n        }\n\n        _this.activityData = _this.activityData.concat(response.data);\n      }).finally(function () {\n        return _this.loadingActivity = _this.loadingMoreActivity = false;\n      });\n    },\n    addActivity: function addActivity(newActivity) {\n      newActivity.comments = [];\n      this.activityData.unshift(newActivity);\n    },\n    loadMoreActivity: function loadMoreActivity() {\n      if (!this.activityPage) {\n        return false;\n      }\n\n      this.loadingMoreActivity = true;\n      this.activityPage++;\n      this.getGroupActivity();\n    },\n    reset: function reset(keep) {\n      var def = getDefaultData();\n      def[keep] = this[keep];\n      Object.assign(this.$data, def);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9Hcm91cHMvVmlld3MvQWN0aXZpdHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9BY3Rpdml0eS52dWU/ZDE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cblx0PGRpdj5cblxuXHRcdDxjYXJkIGNhcmRCb2R5Q2xhc3Nlcz1cInNjLWFjdGl2aXR5LS11cGRhdGVcIj5cblx0XHRcdDxhY3Rpdml0eS1mb3JtXG5cdFx0XHRcdGVsQ2xhc3M9XCJzYy1hY3Rpdml0eS0tdXBkYXRlLS1mb3JtXCJcblx0XHRcdFx0Y29tcG9uZW50PVwiZ3JvdXBzXCJcblx0XHRcdFx0dHlwZT1cImFjdGl2aXR5X3VwZGF0ZVwiXG5cdFx0XHRcdHYtb246YWN0aXZpdHlTYXZlZD1cImFkZEFjdGl2aXR5XCJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQb3N0IGEgbWVzc2FnZSB0byB0aGUgZ3JvdXAgLi4uXCJcblx0XHRcdFx0OnByaW1hcnlJdGVtPVwidGhpcy5ncm91cERhdGEuaWRcIlxuXHRcdFx0XHQ6c2Vjb25kYXJ5SXRlbT1cIjBcIlxuXHRcdFx0XHQ6YXV0b3NpemU9XCJ7IG1pblJvd3M6IDMgfVwiPjwvYWN0aXZpdHktZm9ybT5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPlVzZSBAIHRvIG1lbnRpb24gYSBtZW1iZXIgb2YgdGhpcyBncm91cCBvciB1c2UgQGdyb3VwIHRvIG5vdGlmeSBldmVyeW9uZS48L2Rpdj5cblx0XHQ8L2NhcmQ+XG5cblx0XHQ8ZGl2IHYtbG9hZGluZz1cImxvYWRpbmdBY3Rpdml0eVwiIHN0eWxlPVwibWluLWhlaWdodDogMjBlbVwiPlxuXHRcdFx0PGFjdGl2aXR5IHYtZm9yPVwiYWN0aXZpdHkgaW4gYWN0aXZpdHlEYXRhXCIgOmFjdGl2aXR5PVwiYWN0aXZpdHlcIiA6a2V5PVwiYWN0aXZpdHkuaWRcIj48L2FjdGl2aXR5PlxuXHRcdFx0PGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG5cdFx0XHRcdDxuLWJ1dHRvbiB2LWlmPVwiYWN0aXZpdHlQYWdlICYmIGFjdGl2aXR5RGF0YS5sZW5ndGhcIiB0eXBlPVwicHJpbWFyeVwiIHNpbXBsZT1cIlwiIHdpZGU9XCJcIiB2LWxvYWRpbmc9XCJsb2FkaW5nTW9yZUFjdGl2aXR5XCIgQGNsaWNrLm5hdGl2ZT1cImxvYWRNb3JlQWN0aXZpdHlcIj5Mb2FkIE1vcmU8L24tYnV0dG9uPlxuXHRcdFx0XHQ8cCB2LWlmPVwiISBhY3Rpdml0eVBhZ2VcIj5UaGVyZSBpcyBubyBtb3JlIGFjdGl2aXR5IHRvIGxvYWQuPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0PC9kaXY+XG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQge1xuICAgIENhcmQsXG4gICAgQWN0aXZpdHksXG4gICAgQWN0aXZpdHlGb3JtXG4gIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnXG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdERhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nQWN0aXZpdHkgICAgOiB0cnVlLFxuICAgICAgbG9hZGluZ01vcmVBY3Rpdml0eTogZmFsc2UsXG4gICAgICBhY3Rpdml0eURhdGEgICAgICAgOiBbXSxcbiAgICAgIGFjdGl2aXR5UGFnZSAgICAgICA6IDEsXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIENhcmQsXG4gICAgICBBY3Rpdml0eSxcbiAgICAgIEFjdGl2aXR5Rm9ybVxuICAgIH0sXG4gICAgcHJvcHMgICAgIDoge1xuICAgICAgZ3JvdXBEYXRhOiB7aWQ6IDB9LFxuICAgIH0sXG4gICAgZGF0YSAgICAgIDogZ2V0RGVmYXVsdERhdGEsXG4gICAgd2F0Y2ggICAgIDoge1xuICAgICAgJ2dyb3VwRGF0YScgKHRvLCBmcm9tKSB7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBuZXcgZ3JvdXBcbiAgICAgICAgaWYgKHRvLmlkID09PSBmcm9tLmlkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmdyb3VwRGF0YS5pZCkge1xuICAgICAgICAgIHRoaXMuZ2V0R3JvdXBBY3Rpdml0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzICAgOiB7XG4gICAgICBnZXRHcm91cEFjdGl2aXR5ICgpIHtcbiAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAnL3dwLWpzb24vc3R1ZHljaHVyY2gvdjEvYWN0aXZpdHk/Y29tcG9uZW50cz1ncm91cHMmc2hvd19oaWRkZW49dHJ1ZSZwZXJfcGFnZT0yMCZkaXNwbGF5X2NvbW1lbnRzPXRocmVhZGVkJl9lbWJlZD10cnVlJnByaW1hcnlfaWQ9JyArIHRoaXMuZ3JvdXBEYXRhLmlkICsgJyZwYWdlPScgKyB0aGlzLmFjdGl2aXR5UGFnZSlcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlQYWdlID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eURhdGEgPSB0aGlzLmFjdGl2aXR5RGF0YS5jb25jYXQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZ0FjdGl2aXR5ID0gdGhpcy5sb2FkaW5nTW9yZUFjdGl2aXR5ID0gZmFsc2UpXG4gICAgICB9LFxuICAgICAgYWRkQWN0aXZpdHkobmV3QWN0aXZpdHkpIHtcbiAgICAgICAgbmV3QWN0aXZpdHkuY29tbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eURhdGEudW5zaGlmdChuZXdBY3Rpdml0eSk7XG4gICAgICB9LFxuICAgICAgbG9hZE1vcmVBY3Rpdml0eSAoKSB7XG4gICAgICAgIGlmICghdGhpcy5hY3Rpdml0eVBhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmdNb3JlQWN0aXZpdHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2aXR5UGFnZSsrO1xuICAgICAgICB0aGlzLmdldEdyb3VwQWN0aXZpdHkoKTtcbiAgICAgIH0sXG4gICAgICByZXNldCAoa2VlcCkge1xuICAgICAgICBsZXQgZGVmID0gZ2V0RGVmYXVsdERhdGEoKTtcbiAgICAgICAgZGVmW2tlZXBdID0gdGhpc1trZWVwXTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRkYXRhLCBkZWYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGU+XG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQTtBQXpCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Activity.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Activity.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Groups/Views/Activity.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvR3JvdXBzL1ZpZXdzL0FjdGl2aXR5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvR3JvdXBzL1ZpZXdzL0FjdGl2aXR5LnZ1ZT83YjNkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Activity.vue?vue&type=style&index=0&lang=css&\n");

/***/ })

})