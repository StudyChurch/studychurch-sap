webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Settings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Groups/Views/Settings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components */ \"./src/components/index.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nfunction getDefaultData() {\n  return {\n    group: {\n      name: this.groupData.name,\n      description: this.groupData.description.raw\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Card: _components__WEBPACK_IMPORTED_MODULE_2__[\"Card\"],\n    NTable: _components__WEBPACK_IMPORTED_MODULE_2__[\"Table\"],\n    Button: _components__WEBPACK_IMPORTED_MODULE_2__[\"Button\"]\n  },\n  props: {\n    groupData: {\n      id: 0\n    }\n  },\n  data: getDefaultData,\n  computed: {\n    leaders: function leaders() {\n      return this.groupData.members.filter(function (member) {\n        return member.admin;\n      });\n    },\n    members: function members() {\n      return this.groupData.members.filter(function (member) {\n        return !member.admin;\n      });\n    }\n  },\n  methods: {\n    reset: function reset(keep) {\n      var def = getDefaultData();\n      def[keep] = this[keep];\n      Object.assign(this.$data, def);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9Hcm91cHMvVmlld3MvU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9TZXR0aW5ncy52dWU/ZTEyZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cblx0PGRpdiBjbGFzcz1cInNjLWdyb3VwLS1zZXR0aW5nc1wiPlxuXG5cdFx0PGg2IGNsYXNzPVwidGl0bGVcIj5cblx0XHRcdDxyb3V0ZXItbGluayA6dG89XCInL2dyb3Vwcy8nICsgdGhpcy4kcm91dGUucGFyYW1zLnNsdWcgKyAnLydcIj4mbGFycjsgYmFjazwvcm91dGVyLWxpbms+XG5cdFx0PC9oNj5cblxuXHRcdDxjYXJkPlxuXHRcdFx0PGg1IHNsb3Q9XCJoZWFkZXJcIiBjbGFzcz1cInRpdGxlXCI+R3JvdXAgU2V0dGluZ3M8L2g1PlxuXHRcdFx0PGZvcm0+XG5cdFx0XHRcdDxmZy1pbnB1dCB0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHQgIGxhYmVsPVwiR3JvdXAgTmFtZVwiXG5cdFx0XHRcdFx0XHQgIHYtbW9kZWw9XCJncm91cC5uYW1lXCI+XG5cdFx0XHRcdDwvZmctaW5wdXQ+XG5cdFx0XHRcdDxmZy1pbnB1dCB0eXBlPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0ICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdCAgdi1tb2RlbD1cImdyb3VwLmRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDwvZmctaW5wdXQ+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9jYXJkPlxuXHQ8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7XG4gICAgQ2FyZCxcbiAgICBUYWJsZSBhcyBOVGFibGUsXG4gICAgQnV0dG9uXG4gIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnXG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdERhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBncm91cDoge1xuICAgICAgICBuYW1lICAgICAgIDogdGhpcy5ncm91cERhdGEubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZ3JvdXBEYXRhLmRlc2NyaXB0aW9uLnJhd1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBDYXJkLFxuICAgICAgTlRhYmxlLFxuICAgICAgQnV0dG9uXG4gICAgfSxcbiAgICBwcm9wcyAgICAgOiB7XG4gICAgICBncm91cERhdGE6IHtpZDogMH0sXG4gICAgfSxcbiAgICBkYXRhICAgICAgOiBnZXREZWZhdWx0RGF0YSxcbiAgICBjb21wdXRlZCAgOiB7XG4gICAgICBsZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cERhdGEubWVtYmVycy5maWx0ZXIobWVtYmVyID0+IG1lbWJlci5hZG1pbik7XG4gICAgICB9LFxuICAgICAgbWVtYmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBEYXRhLm1lbWJlcnMuZmlsdGVyKG1lbWJlciA9PiAhbWVtYmVyLmFkbWluKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHMgICA6IHtcbiAgICAgIHJlc2V0IChrZWVwKSB7XG4gICAgICAgIGxldCBkZWYgPSBnZXREZWZhdWx0RGF0YSgpO1xuICAgICAgICBkZWZba2VlcF0gPSB0aGlzW2tlZXBdO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJGRhdGEsIGRlZik7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFsQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Views/Settings.vue?vue&type=script&lang=js&\n");

/***/ })

})