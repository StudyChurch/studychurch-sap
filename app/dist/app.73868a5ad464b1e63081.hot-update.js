webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Members.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Groups/Views/Members.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components */ \"./src/components/index.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nfunction getDefaultData() {\n  return {\n    loadingActivity: true,\n    loadingMoreActivity: false,\n    activityData: [],\n    activityPage: 1\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Card: _components__WEBPACK_IMPORTED_MODULE_1__[\"Card\"],\n    NTable: _components__WEBPACK_IMPORTED_MODULE_1__[\"Table\"]\n  },\n  props: {\n    groupData: {\n      id: 0\n    }\n  },\n  data: getDefaultData,\n  computed: {\n    leaders: function leaders() {\n      return this.groupData.members.filter(function (member) {\n        return member.admin;\n      });\n    },\n    members: function members() {\n      return this.groupData.members.filter(function (member) {\n        return !member.admin;\n      });\n    }\n  },\n  methods: {\n    reset: function reset(keep) {\n      var def = getDefaultData();\n      def[keep] = this[keep];\n      Object.assign(this.$data, def);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9Hcm91cHMvVmlld3MvTWVtYmVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL01lbWJlcnMudnVlPzM5ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG5cdDxkaXYgY2xhc3M9XCJzYy1ncm91cC0tbWVtYmVyc1wiPlxuXG5cdFx0PGNhcmQgY2xhc3M9XCJjYXJkLWNoYXJ0XCI+XG5cdFx0XHQ8aDM+TGVhZGVyczwvaDM+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuXHRcdFx0XHQ8bi10YWJsZSA6ZGF0YT1cImxlYWRlcnNcIj5cblx0XHRcdFx0XHQ8dGVtcGxhdGUgc2xvdC1zY29wZT1cIntyb3d9XCI+XG5cdFx0XHRcdFx0XHQ8dGQgdi1odG1sPVwicm93LmF2YXRhci5pbWdcIj48L3RkPlxuXHRcdFx0XHRcdFx0PHRkIHYtaHRtbD1cInJvdy5uYW1lXCI+PC90ZD5cblx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHQ8L24tdGFibGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2NhcmQ+XG5cblx0XHQ8Y2FyZCBjbGFzcz1cImNhcmQtY2hhcnRcIj5cblx0XHRcdDxoMz5NZW1iZXJzPC9oMz5cblx0XHRcdDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG5cdFx0XHRcdDxuLXRhYmxlIDpkYXRhPVwibWVtYmVyc1wiPlxuXHRcdFx0XHRcdDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwie3Jvd31cIj5cblx0XHRcdFx0XHRcdDx0ZCB2LWh0bWw9XCJyb3cuYXZhdGFyLmltZ1wiPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQgdi1odG1sPVwicm93Lm5hbWVcIj48L3RkPlxuXHRcdFx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHRcdDwvbi10YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvY2FyZD5cblxuXHQ8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7XG4gICAgQ2FyZCxcbiAgICBUYWJsZSBhcyBOVGFibGUsXG5cdEJ1dHRvblxuICB9IGZyb20gJ3NyYy9jb21wb25lbnRzJ1xuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHREYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZ0FjdGl2aXR5ICAgIDogdHJ1ZSxcbiAgICAgIGxvYWRpbmdNb3JlQWN0aXZpdHk6IGZhbHNlLFxuICAgICAgYWN0aXZpdHlEYXRhICAgICAgIDogW10sXG4gICAgICBhY3Rpdml0eVBhZ2UgICAgICAgOiAxLFxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBDYXJkLFxuICAgICAgTlRhYmxlXG4gICAgfSxcbiAgICBwcm9wcyAgICAgOiB7XG4gICAgICBncm91cERhdGE6IHtpZDogMH0sXG4gICAgfSxcbiAgICBkYXRhICAgICAgOiBnZXREZWZhdWx0RGF0YSxcblx0Y29tcHV0ZWQgIDoge1xuICAgICAgbGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBEYXRhLm1lbWJlcnMuZmlsdGVyKG1lbWJlciA9PiBtZW1iZXIuYWRtaW4pO1xuXHQgIH0sXG5cdCAgbWVtYmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBEYXRhLm1lbWJlcnMuZmlsdGVyKG1lbWJlciA9PiAhIG1lbWJlci5hZG1pbik7XG5cdCAgfVxuXHR9LFxuICAgIG1ldGhvZHMgICA6IHtcbiAgICAgIHJlc2V0IChrZWVwKSB7XG4gICAgICAgIGxldCBkZWYgPSBnZXREZWZhdWx0RGF0YSgpO1xuICAgICAgICBkZWZba2VlcF0gPSB0aGlzW2tlZXBdO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJGRhdGEsIGRlZik7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQWpCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Members.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Members.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Groups/Views/Members.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvR3JvdXBzL1ZpZXdzL01lbWJlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9Hcm91cHMvVmlld3MvTWVtYmVycy52dWU/MDFjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Members.vue?vue&type=style&index=0&lang=css&\n");

/***/ })

})