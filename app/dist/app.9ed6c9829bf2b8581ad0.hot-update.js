webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Dashboard/Views/Notifications.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Dashboard/Views/Notifications.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components */ \"./src/components/index.js\");\n\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Card: _components__WEBPACK_IMPORTED_MODULE_1__[\"Card\"],\n    NTable: _components__WEBPACK_IMPORTED_MODULE_1__[\"Table\"],\n    Button: _components__WEBPACK_IMPORTED_MODULE_1__[\"Button\"]\n  },\n  data: function data() {\n    return {\n      loading: true,\n      notifications: []\n    };\n  },\n  mounted: function mounted() {\n    this.getNotifications();\n  },\n  computed: {},\n  methods: {\n    getNotificatins: function getNotificatins() {\n      var _this = this;\n\n      this.$http.get('/wp-json/buddypress/v1/notifications').then(function (response) {\n        _this.notifications = response.data;\n      }).finally(function () {\n        return _this.loading = false;\n      });\n    },\n    reset: function reset(keep) {\n      var def = getDefaultData();\n      def[keep] = this[keep];\n      Object.assign(this.$data, def);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9EYXNoYm9hcmQvVmlld3MvTm90aWZpY2F0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL05vdGlmaWNhdGlvbnMudnVlPzhkNDAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG5cdDxkaXYgY2xhc3M9XCJzYy1kYXNoYm9hcmQtLW5vdGlmaWNhdGlvbnMgc2Mtbm90aWZpY2F0aW9uc1wiIHN0eWxlPVwibWluLWhlaWdodDoyMDBweDtcIiB2LWxvYWRpbmc9XCJsb2FkaW5nXCI+XG5cblx0PC9kaXY+XG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQge1xuICAgIENhcmQsXG4gICAgVGFibGUgYXMgTlRhYmxlLFxuICAgIEJ1dHRvblxuICB9IGZyb20gJ3NyYy9jb21wb25lbnRzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBDYXJkLFxuICAgICAgTlRhYmxlLFxuICAgICAgQnV0dG9uXG4gICAgfSxcblx0ZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IFtdXG5cdCAgfVxuXHR9LFxuXHRtb3VudGVkKCkge1xuICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25zKCk7XG5cdH0sXG4gICAgY29tcHV0ZWQgIDoge30sXG4gICAgbWV0aG9kcyAgIDoge1xuICAgICAgZ2V0Tm90aWZpY2F0aW5zICgpIHtcbiAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAnL3dwLWpzb24vYnVkZHlwcmVzcy92MS9ub3RpZmljYXRpb25zJylcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpXG4gICAgICB9LFxuICAgICAgcmVzZXQgKGtlZXApIHtcbiAgICAgICAgbGV0IGRlZiA9IGdldERlZmF1bHREYXRhKCk7XG4gICAgICAgIGRlZltrZWVwXSA9IHRoaXNba2VlcF07XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kZGF0YSwgZGVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWhCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Dashboard/Views/Notifications.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Dashboard/Views/Notifications.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Dashboard/Views/Notifications.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvRGFzaGJvYXJkL1ZpZXdzL05vdGlmaWNhdGlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9EYXNoYm9hcmQvVmlld3MvTm90aWZpY2F0aW9ucy52dWU/NjE3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Dashboard/Views/Notifications.vue?vue&type=style&index=0&lang=css&\n");

/***/ })

})