webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Groups.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Groups/Groups.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components */ \"./src/components/index.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n //  import ElMenu from 'element-ui';\n//  import ElMenuItem from 'element-ui';\n\nfunction getDefaultData() {\n  return {\n    loadingGroups: false,\n    loadingStudies: false,\n    loadingTodos: true,\n    showGroupDesc: false,\n    todoData: [],\n    groupData: {\n      id: 0,\n      name: '',\n      slug: '',\n      avatar_urls: {\n        full: '',\n        thumb: ''\n      },\n      description: {\n        rendered: ''\n      },\n      members: []\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    ElMenuItem: ElMenuItem,\n    ElMenu: ElMenu,\n    Card: _components__WEBPACK_IMPORTED_MODULE_1__[\"Card\"],\n    NTable: _components__WEBPACK_IMPORTED_MODULE_1__[\"Table\"]\n  },\n  data: getDefaultData,\n  mounted: function mounted() {\n    this.setupCurrentGroup();\n  },\n  watch: {\n    '$route': function $route(to, from) {\n      if (to.params.slug === from.params.slug) {\n        return;\n      }\n\n      this.setupCurrentGroup();\n    }\n  },\n  computed: {},\n  methods: {\n    setupCurrentGroup: function setupCurrentGroup() {\n      console.log('setup group'); // check for cached group data\n\n      for (var i = 0; i < this.$root.$data.userData.groups.length; i++) {\n        if (this.$route.params.slug === this.$root.$data.userData.groups[i].slug) {\n          this.reset(); // reset data just to make sure we don't pull over from the previous group if there was one\n\n          this.groupData = this.$root.$data.userData.groups[i];\n          break;\n        }\n      }\n\n      if (!this.groupData.id) {\n        this.reset(); // this shouldn't be necessary, but better safe than sorry\n\n        this.getCurrentGroup();\n      } else {\n        this.getGroupTodos();\n        this.$root.setCurrentGroup(this.groupData.id);\n      }\n    },\n\n    /**\n     * Fetch\n     */\n    getCurrentGroup: function getCurrentGroup() {\n      var _this = this;\n\n      this.$http.get('/wp-json/studychurch/v1/groups/' + this.$route.params.slug).then(function (response) {\n        _this.groupData = response.data[0];\n\n        _this.$root.setCurrentGroup(_this.groupData.id);\n\n        _this.getGroupTodos();\n      }).finally(function () {\n        return _this.loadingTodos = false;\n      });\n    },\n    getGroupTodos: function getGroupTodos() {\n      var _this2 = this;\n\n      this.loadingTodos = true;\n      this.$http.get('/wp-json/studychurch/v1/assignments?group_id=' + this.groupData.id).then(function (response) {\n        return _this2.todoData = response.data;\n      }).finally(function () {\n        return _this2.loadingTodos = false;\n      });\n    },\n    reset: function reset(keep) {\n      var def = getDefaultData();\n      def[keep] = this[keep];\n      Object.assign(this.$data, def);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9Hcm91cHMvR3JvdXBzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vR3JvdXBzLnZ1ZT8zYTM5Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInNjLWdyb3VwXCI+XG5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTRcIj5cblx0XHRcdFx0PGNhcmQgY2xhc3M9XCJjYXJkLXVzZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IHNsb3Q9XCJpbWFnZVwiIGNsYXNzPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiQC9hc3NldHMvaW1nL2JnLWJpYmxlLmpwZ1wiIGFsdD1cIi4uLlwiPlxuXHRcdFx0XHRcdFx0PHJvdXRlci1saW5rIDp0bz1cIicvZ3JvdXBzLycgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuc2x1ZyArICcvc2V0dGluZ3MvJ1wiIGNsYXNzPVwic2MtZ3JvdXAtLXdpZGdldC0tZGV0YWlscy0tZWRpdFwiPlxuXHRcdFx0XHRcdFx0XHQ8bi1idXR0b24gdHlwZT1cIm5ldXRyYWxcIiByb3VuZCBpY29uPlxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibm93LXVpLWljb25zIGxvYWRlcl9nZWFyXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8L24tYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImF1dGhvclwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzPVwiYXZhdGFyIGJvcmRlci1ncmF5XCIgOnNyYz1cImdyb3VwRGF0YS5hdmF0YXJfdXJscy5mdWxsXCIgYWx0PVwiLi4uXCI+XG5cdFx0XHRcdFx0XHRcdDxyb3V0ZXItbGluayA6dG89XCInL2dyb3Vwcy8nICsgdGhpcy4kcm91dGUucGFyYW1zLnNsdWcgKyAnLydcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3M9XCJ0aXRsZVwiPnt7Z3JvdXBEYXRhLm5hbWV9fTwvaDU+PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHYtc2hvdz1cInNob3dHcm91cERlc2NcIiB2LWh0bWw9XCJncm91cERhdGEuZGVzY3JpcHRpb24ucmVuZGVyZWRcIj48L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiB2LXNob3c9XCJzaG93R3JvdXBEZXNjXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBAY2xpY2suc3RvcD1cInNob3dHcm91cERlc2M9ZmFsc2VcIj5IaWRlIGRldGFpbHM8L2E+PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgdi1zaG93PVwiIXNob3dHcm91cERlc2NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIEBjbGljay5zdG9wPVwic2hvd0dyb3VwRGVzYz10cnVlXCI+U2hvdyBkZXRhaWxzPC9hPjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2NhcmQ+XG5cblx0XHRcdFx0PGNhcmQgY2xhc3M9XCJjYXJkLWNoYXJ0XCIgbm8tZm9vdGVyLWxpbmUgdi1sb2FkaW5nPVwibG9hZGluZ1RvZG9zXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiAyMDBweDtcIj5cblxuXHRcdFx0XHRcdDxkaXYgc2xvdD1cImhlYWRlclwiPlxuXHRcdFx0XHRcdFx0PGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPlVwY29taW5nIFRvZG9zPC9oNT5cblx0XHRcdFx0XHRcdDxkcm9wLWRvd24gOmhpZGUtYXJyb3c9XCJ0cnVlXCIgcG9zaXRpb249XCJyaWdodFwiPlxuXHRcdFx0XHRcdFx0XHQ8bi1idXR0b24gc2xvdD1cInRpdGxlXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGUgbm8tY2FyZXRcIiB0eXBlPVwibmV1dHJhbFwiIHJvdW5kIGljb24+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJub3ctdWktaWNvbnMgbG9hZGVyX2dlYXJcIj48L2k+XG5cdFx0XHRcdFx0XHRcdDwvbi1idXR0b24+XG5cblx0XHRcdFx0XHRcdFx0PHJvdXRlci1saW5rIHRvPVwiYXNzaWdubWVudHNcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5NYW5hZ2UgVG9kb3M8L3JvdXRlci1saW5rPlxuXHRcdFx0XHRcdFx0PC9kcm9wLWRvd24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8dWwgc2xvdD1cInJhdy1jb250ZW50XCIgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cblx0XHRcdFx0XHRcdDxsaSB2LWZvcj1cImRhdGEgaW4gdG9kb0RhdGFcIiA6Y2xhc3M9XCInbGlzdC1ncm91cC1pdGVtJ1wiPlxuXHRcdFx0XHRcdFx0XHQmbmJzcDtcblx0XHRcdFx0XHRcdFx0PGg2PkR1ZSBEYXRlOiB7e2RhdGEuZGF0ZX19PC9oNj5cblx0XHRcdFx0XHRcdFx0PHAgdi1mb3I9XCJsZXNzb24gaW4gZGF0YS5sZXNzb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJub3ctdWktaWNvbnMgZGVzaWduX2J1bGxldC1saXN0LTY3XCI+PC9pPiZuYnNwO1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaHRtbD1cImxlc3Nvbi50aXRsZVwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCB2LWh0bWw9XCJkYXRhLmNvbnRlbnRcIj48L3A+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cblx0XHRcdFx0PC9jYXJkPlxuXG5cdFx0XHRcdDxjYXJkIGNsYXNzPVwiY2FyZC1jaGFydFwiIG5vLWZvb3Rlci1saW5lIHYtbG9hZGluZz1cImxvYWRpbmdTdHVkaWVzXCI+XG5cblx0XHRcdFx0XHQ8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5TdHVkaWVzPC9oNT5cblx0XHRcdFx0XHRcdDxkcm9wLWRvd24gOmhpZGUtYXJyb3c9XCJ0cnVlXCIgcG9zaXRpb249XCJyaWdodFwiPlxuXHRcdFx0XHRcdFx0XHQ8bi1idXR0b24gc2xvdD1cInRpdGxlXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGUgbm8tY2FyZXRcIiB0eXBlPVwibmV1dHJhbFwiIHJvdW5kIGljb24+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJub3ctdWktaWNvbnMgbG9hZGVyX2dlYXJcIj48L2k+XG5cdFx0XHRcdFx0XHRcdDwvbi1idXR0b24+XG5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BZGQgYSBTdHVkeTwvYT5cblx0XHRcdFx0XHRcdDwvZHJvcC1kb3duPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cblx0XHRcdFx0XHRcdDxuLXRhYmxlIDpkYXRhPVwiZ3JvdXBEYXRhLnN0dWRpZXNcIj5cblx0XHRcdFx0XHRcdFx0PHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJ7cm93fVwiPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyb3V0ZXItbGluayA6dG89XCIkcm9vdC5jbGVhbkxpbmsocm93LmxpbmspXCI+e3tyb3cudGl0bGV9fTwvcm91dGVyLWxpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0PC90ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvbi10YWJsZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2NhcmQ+XG5cblx0XHRcdFx0PGNhcmQgY2xhc3M9XCJjYXJkLWNoYXJ0XCIgbm8tZm9vdGVyLWxpbmU+XG5cblx0XHRcdFx0XHQ8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0PHJvdXRlci1saW5rIDp0bz1cIicvZ3JvdXBzLycgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuc2x1ZyArICcvbWVtYmVycy8nXCI+XG5cdFx0XHRcdFx0XHRcdFx0TWVtYmVyc1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImNoZXZyb24tcmlnaHRcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0XHRcdDwvaDU+XG5cdFx0XHRcdFx0XHQ8ZHJvcC1kb3duIHYtaWY9XCJmYWxzZVwiIDpoaWRlLWFycm93PVwidHJ1ZVwiIHBvc2l0aW9uPVwicmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0PG4tYnV0dG9uIHNsb3Q9XCJ0aXRsZVwiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlIG5vLWNhcmV0XCIgdHlwZT1cIm5ldXRyYWxcIiByb3VuZCBpY29uPlxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibm93LXVpLWljb25zIGxvYWRlcl9nZWFyXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8L24tYnV0dG9uPlxuXG5cdFx0XHRcdFx0XHRcdDxyb3V0ZXItbGluayA6dG89XCInL2dyb3Vwcy8nICsgdGhpcy4kcm91dGUucGFyYW1zLnNsdWcgKyAnL21lbWJlcnMvJ1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPk1hbmFnZSBNZW1iZXJzPC9yb3V0ZXItbGluaz5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5JbnZpdGUgYSBuZXcgbWVtYmVyPC9hPlxuXHRcdFx0XHRcdFx0PC9kcm9wLWRvd24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuXHRcdFx0XHRcdFx0PG4tdGFibGUgOmRhdGE9XCJncm91cERhdGEubWVtYmVyc1wiPlxuXHRcdFx0XHRcdFx0XHQ8dGVtcGxhdGUgc2xvdC1zY29wZT1cIntyb3d9XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRkIHYtaHRtbD1cInJvdy5hdmF0YXIuaW1nXCI+PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQ8dGQgdi1odG1sPVwicm93Lm5hbWVcIj48L3RkPlxuXHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PC9uLXRhYmxlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvY2FyZD5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLThcIj5cblxuXHRcdFx0XHQ8ZWwtbWVudSBkZWZhdWx0LWFjdGl2ZT1cImRpc2N1c3Npb25cIiBtb2RlPVwiaG9yaXpvbnRhbFwiPlxuXHRcdFx0XHRcdDxlbC1tZW51LWl0ZW0gaW5kZXg9XCJkaXNjdXNzaW9uXCI+dGVzdCAxPC9lbC1tZW51LWl0ZW0+XG5cdFx0XHRcdDwvZWwtbWVudT5cblxuXHRcdFx0XHQ8cm91dGVyLXZpZXcgOmdyb3VwRGF0YT1cImdyb3VwRGF0YVwiPjwvcm91dGVyLXZpZXc+XG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7XG4gICAgQ2FyZCxcbiAgICBUYWJsZSBhcyBOVGFibGVcbiAgfSBmcm9tICdzcmMvY29tcG9uZW50cydcblxuLy8gIGltcG9ydCBFbE1lbnUgZnJvbSAnZWxlbWVudC11aSc7XG4vLyAgaW1wb3J0IEVsTWVudUl0ZW0gZnJvbSAnZWxlbWVudC11aSc7XG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdERhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nR3JvdXBzIDogZmFsc2UsXG4gICAgICBsb2FkaW5nU3R1ZGllczogZmFsc2UsXG4gICAgICBsb2FkaW5nVG9kb3MgIDogdHJ1ZSxcbiAgICAgIHNob3dHcm91cERlc2MgOiBmYWxzZSxcbiAgICAgIHRvZG9EYXRhICAgICAgOiBbXSxcbiAgICAgIGdyb3VwRGF0YSAgICAgOiB7XG4gICAgICAgIGlkICAgICAgICAgOiAwLFxuICAgICAgICBuYW1lICAgICAgIDogJycsXG4gICAgICAgIHNsdWcgICAgICAgOiAnJyxcbiAgICAgICAgYXZhdGFyX3VybHM6IHtcbiAgICAgICAgICBmdWxsIDogJycsXG4gICAgICAgICAgdGh1bWI6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgcmVuZGVyZWQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG1lbWJlcnMgICAgOiBbXSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEVsTWVudUl0ZW0sXG4gICAgICBFbE1lbnUsXG4gICAgICBDYXJkLFxuICAgICAgTlRhYmxlXG4gICAgfSxcbiAgICBkYXRhICAgICAgOiBnZXREZWZhdWx0RGF0YSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpcy5zZXR1cEN1cnJlbnRHcm91cCgpO1xuICAgIH0sXG4gICAgd2F0Y2ggICAgIDoge1xuICAgICAgJyRyb3V0ZScgKHRvLCBmcm9tKSB7XG4gICAgICAgIGlmICh0by5wYXJhbXMuc2x1ZyA9PT0gZnJvbS5wYXJhbXMuc2x1Zykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0dXBDdXJyZW50R3JvdXAoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkICA6IHt9LFxuICAgIG1ldGhvZHMgICA6IHtcbiAgICAgIHNldHVwQ3VycmVudEdyb3VwICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldHVwIGdyb3VwJyk7XG4gICAgICAgIC8vIGNoZWNrIGZvciBjYWNoZWQgZ3JvdXAgZGF0YVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuJHJvb3QuJGRhdGEudXNlckRhdGEuZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuJHJvdXRlLnBhcmFtcy5zbHVnID09PSB0aGlzLiRyb290LiRkYXRhLnVzZXJEYXRhLmdyb3Vwc1tpXS5zbHVnKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7IC8vIHJlc2V0IGRhdGEganVzdCB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcHVsbCBvdmVyIGZyb20gdGhlIHByZXZpb3VzIGdyb3VwIGlmIHRoZXJlIHdhcyBvbmVcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBEYXRhID0gdGhpcy4kcm9vdC4kZGF0YS51c2VyRGF0YS5ncm91cHNbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZ3JvdXBEYXRhLmlkKSB7XG4gICAgICAgICAgdGhpcy5yZXNldCgpOyAvLyB0aGlzIHNob3VsZG4ndCBiZSBuZWNlc3NhcnksIGJ1dCBiZXR0ZXIgc2FmZSB0aGFuIHNvcnJ5XG4gICAgICAgICAgdGhpcy5nZXRDdXJyZW50R3JvdXAoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdldEdyb3VwVG9kb3MoKTtcbiAgICAgICAgICB0aGlzLiRyb290LnNldEN1cnJlbnRHcm91cCh0aGlzLmdyb3VwRGF0YS5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEZldGNoXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRHcm91cCAoKSB7XG4gICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgJy93cC1qc29uL3N0dWR5Y2h1cmNoL3YxL2dyb3Vwcy8nICsgdGhpcy4kcm91dGUucGFyYW1zLnNsdWcpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5ncm91cERhdGEgPSByZXNwb25zZS5kYXRhWzBdO1xuICAgICAgICAgICAgdGhpcy4kcm9vdC5zZXRDdXJyZW50R3JvdXAodGhpcy5ncm91cERhdGEuaWQpO1xuICAgICAgICAgICAgdGhpcy5nZXRHcm91cFRvZG9zKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmluYWxseSgoKSA9PiB0aGlzLmxvYWRpbmdUb2RvcyA9IGZhbHNlKVxuICAgICAgfSxcbiAgICAgIGdldEdyb3VwVG9kb3MgKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdUb2RvcyA9IHRydWU7XG4gICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgJy93cC1qc29uL3N0dWR5Y2h1cmNoL3YxL2Fzc2lnbm1lbnRzP2dyb3VwX2lkPScgKyB0aGlzLmdyb3VwRGF0YS5pZClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAoXG4gICAgICAgICAgICB0aGlzLnRvZG9EYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICkpXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5sb2FkaW5nVG9kb3MgPSBmYWxzZSlcbiAgICAgIH0sXG4gICAgICByZXNldCAoa2VlcCkge1xuICAgICAgICBsZXQgZGVmID0gZ2V0RGVmYXVsdERhdGEoKTtcbiAgICAgICAgZGVmW2tlZXBdID0gdGhpc1trZWVwXTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRkYXRhLCBkZWYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGU+XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFYQTtBQU5BO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0FBckJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Groups.vue?vue&type=script&lang=js&\n");

/***/ })

})