webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var element_ui_lib_theme_chalk_menu_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ui/lib/theme-chalk/menu-item.css */ \"./node_modules/element-ui/lib/theme-chalk/menu-item.css\");\n/* harmony import */ var element_ui_lib_theme_chalk_menu_item_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_menu_item_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui/lib/theme-chalk/base.css */ \"./node_modules/element-ui/lib/theme-chalk/base.css\");\n/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var element_ui_lib_menu_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! element-ui/lib/menu-item */ \"./node_modules/element-ui/lib/menu-item.js\");\n/* harmony import */ var element_ui_lib_menu_item__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_menu_item__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var element_ui_lib_theme_chalk_menu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! element-ui/lib/theme-chalk/menu.css */ \"./node_modules/element-ui/lib/theme-chalk/menu.css\");\n/* harmony import */ var element_ui_lib_theme_chalk_menu_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_menu_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var element_ui_lib_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! element-ui/lib/menu */ \"./node_modules/element-ui/lib/menu.js\");\n/* harmony import */ var element_ui_lib_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_menu__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../auth */ \"./src/auth.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components */ \"./src/components/index.js\");\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    'el-menu': element_ui_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a,\n    'el-menu-item': element_ui_lib_menu_item__WEBPACK_IMPORTED_MODULE_2___default.a,\n    Card: _components__WEBPACK_IMPORTED_MODULE_6__[\"Card\"],\n    NTable: _components__WEBPACK_IMPORTED_MODULE_6__[\"Table\"],\n    NProgress: _components__WEBPACK_IMPORTED_MODULE_6__[\"Progress\"],\n    AnimatedNumber: _components__WEBPACK_IMPORTED_MODULE_6__[\"AnimatedNumber\"],\n    TimeLine: _components__WEBPACK_IMPORTED_MODULE_6__[\"TimeLine\"],\n    TimeLineItem: _components__WEBPACK_IMPORTED_MODULE_6__[\"TimeLineItem\"],\n    Activity: _components__WEBPACK_IMPORTED_MODULE_6__[\"Activity\"]\n  },\n  data: function data() {\n    return {\n      loadingGroups: false,\n      loadingStudies: false,\n      loadingActivity: true,\n      loadingMoreActivity: false,\n      loadingTodos: true,\n      todoData: [],\n      userData: this.$root.$data.userData,\n      groupData: this.$root.$data.userData.groups,\n      studyData: this.$root.$data.userData.studies,\n      activityData: [],\n      activityPage: 1\n    };\n  },\n  created: function created() {\n    //      this.getUserGroups();\n    //      this.getUserStudies();\n    this.getUserTodos();\n    this.getUserGroupsActivity();\n  },\n  computed: {},\n  methods: {\n    countUserGroups: function countUserGroups() {\n      return this.groupData.length;\n    },\n    getActivityBadgeType: function getActivityBadgeType(type) {\n      switch (type) {\n        case 'activity_comment':\n          return 'info';\n\n        default:\n          return 'success';\n      }\n    },\n    getUserGroups: function getUserGroups() {\n      var _this = this;\n\n      this.loadingGroups = true;\n      this.$http.get('/wp-json/buddypress/v1/groups/?show_hidden=true&user_id=2').then(function (response) {\n        _this.groupData = response.data;\n\n        _this.getUserGroupsActivity();\n      }).finally(function () {\n        return _this.loadingGroups = false;\n      });\n    },\n    getUserStudies: function getUserStudies() {\n      var _this2 = this;\n\n      this.loadingStudies = true;\n      this.$http.get('/wp-json/studychurch/v1/studies?author=2&post_status=publish,pending,draft&per_page=100&orderby=title&order=asc').then(function (response) {\n        return _this2.studyData = response.data;\n      }).finally(function () {\n        return _this2.loadingStudies = false;\n      });\n    },\n    getUserTodos: function getUserTodos() {\n      var _this3 = this;\n\n      this.loadingTodos = true;\n      this.$http.get('/wp-json/studychurch/v1/assignments').then(function (response) {\n        return _this3.todoData = response.data;\n      }).finally(function () {\n        return _this3.loadingTodos = false;\n      });\n    },\n    getUserGroupsActivity: function getUserGroupsActivity() {\n      var _this4 = this;\n\n      var groups = this.$root.$data.userData.groups.map(function (group) {\n        return group.id;\n      });\n      this.$http.get('/wp-json/studychurch/v1/activity?component=groups&show_hidden=true&display_comments=threaded&_embed=true&per_page=5&page=' + this.activityPage + '&primary_id[]=' + groups.join('&primary_id[]=')).then(function (response) {\n        if (!response.data.length) {\n          _this4.activityPage = 0;\n        }\n\n        _this4.activityData = _this4.activityData.concat(response.data);\n      }).finally(function () {\n        return _this4.loadingActivity = _this4.loadingMoreActivity = false;\n      });\n    },\n    loadMoreActivity: function loadMoreActivity() {\n      if (!this.activityPage) {\n        return false;\n      }\n\n      this.loadingMoreActivity = true;\n      this.activityPage++;\n      this.getUserGroupsActivity();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9EYXNoYm9hcmQvRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRGFzaGJvYXJkLnZ1ZT85OGZhIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctNFwiPlxuXHRcdFx0XHQ8Y2FyZCBjbGFzcz1cImNhcmQtdXNlclwiPlxuXHRcdFx0XHRcdDxkaXYgc2xvdD1cImltYWdlXCIgY2xhc3M9XCJpbWFnZVwiPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJAL2Fzc2V0cy9pbWcvYmctYmlibGUuanBnXCIgYWx0PVwiLi4uXCI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzcz1cImF2YXRhciBib3JkZXItZ3JheVwiIDpzcmM9XCJ1c2VyRGF0YS5hdmF0YXIuZnVsbFwiIGFsdD1cIi4uLlwiPlxuXHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3M9XCJ0aXRsZVwiPnt7dXNlckRhdGEubmFtZX19PC9oNT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdEB7e3VzZXJEYXRhLnVzZXJuYW1lfX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvY2FyZD5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLThcIj5cblxuXHRcdFx0XHQ8ZWwtbWVudSA6ZGVmYXVsdC1hY3RpdmU9XCJ0aGlzLiRyb3V0ZS5wYXRoXCIgY2xhc3M9XCJlbC1tZW51LWRlbW9cIiBtb2RlPVwiaG9yaXpvbnRhbFwiIDpyb3V0ZXI9XCJ0cnVlXCI+XG5cdFx0XHRcdFx0PGVsLW1lbnUtaXRlbSA6aW5kZXg9XCInLydcIj5cblx0XHRcdFx0XHRcdDxmb250LWF3ZXNvbWUtaWNvbiBpY29uPVwidXNlcnNcIj48L2ZvbnQtYXdlc29tZS1pY29uPiZuYnNwOyZuYnNwOzxzcGFuPkdyb3Vwczwvc3Bhbj5cblx0XHRcdFx0XHQ8L2VsLW1lbnUtaXRlbT5cblx0XHRcdFx0XHQ8ZWwtbWVudS1pdGVtIDppbmRleD1cIicvYXNzaWdubWVudHMvJ1wiPlxuXHRcdFx0XHRcdFx0PGZvbnQtYXdlc29tZS1pY29uIGljb249XCJsaXN0XCI+PC9mb250LWF3ZXNvbWUtaWNvbj4mbmJzcDsmbmJzcDs8c3Bhbj5Ub2Rvczwvc3Bhbj48L2VsLW1lbnUtaXRlbT5cblx0XHRcdFx0XHQ8ZWwtbWVudS1pdGVtIDppbmRleD1cIicvc3R1ZGllcy8nXCI+XG5cdFx0XHRcdFx0XHQ8Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImJvb2tcIj48L2ZvbnQtYXdlc29tZS1pY29uPiZuYnNwOyZuYnNwOzxzcGFuPlN0dWRpZXM8L3NwYW4+XG5cdFx0XHRcdFx0PC9lbC1tZW51LWl0ZW0+XG5cdFx0XHRcdFx0PGVsLW1lbnUtaXRlbSA6aW5kZXg9XCInL25vdGlmaWNhdGlvbnMvJ1wiPlxuXHRcdFx0XHRcdFx0PGZvbnQtYXdlc29tZS1pY29uIGljb249XCJiZWxsXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4mbmJzcDsmbmJzcDs8c3Bhbj5Ob3RpZmljYXRpb25zPC9zcGFuPlxuXHRcdFx0XHRcdDwvZWwtbWVudS1pdGVtPlxuXHRcdFx0XHRcdDxlbC1tZW51LWl0ZW0gOmluZGV4PVwiJy9zZXR0aW5ncy8nXCI+XG5cdFx0XHRcdFx0XHQ8Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImNvZ3NcIj48L2ZvbnQtYXdlc29tZS1pY29uPiZuYnNwOyZuYnNwOzxzcGFuPlNldHRpbmdzPC9zcGFuPlxuXHRcdFx0XHRcdDwvZWwtbWVudS1pdGVtPlxuXHRcdFx0XHQ8L2VsLW1lbnU+XG5cblx0XHRcdFx0PGJyIC8+XG5cblx0XHRcdFx0PHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cbiAgaW1wb3J0IHsgZ2V0VXNlckRhdGEgfSBmcm9tICdzcmMvYXV0aCc7XG5cbiAgaW1wb3J0IHtcbiAgICBDYXJkLFxuICAgIFRhYmxlIGFzIE5UYWJsZSxcbiAgICBQcm9ncmVzcyBhcyBOUHJvZ3Jlc3MsXG4gICAgQW5pbWF0ZWROdW1iZXIsXG4gICAgVGltZUxpbmUsXG4gICAgVGltZUxpbmVJdGVtLFxuICAgIEFjdGl2aXR5XG4gIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnXG5cbiAgaW1wb3J0IHsgTWVudSwgTWVudUl0ZW0gfSBmcm9tICdlbGVtZW50LXVpJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgJ2VsLW1lbnUnICAgICA6IE1lbnUsXG4gICAgICAnZWwtbWVudS1pdGVtJzogTWVudUl0ZW0sXG4gICAgICBDYXJkLFxuICAgICAgTlRhYmxlLFxuICAgICAgTlByb2dyZXNzLFxuICAgICAgQW5pbWF0ZWROdW1iZXIsXG4gICAgICBUaW1lTGluZSxcbiAgICAgIFRpbWVMaW5lSXRlbSxcbiAgICAgIEFjdGl2aXR5XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZ0dyb3VwcyAgICAgIDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmdTdHVkaWVzICAgICA6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nQWN0aXZpdHkgICAgOiB0cnVlLFxuICAgICAgICBsb2FkaW5nTW9yZUFjdGl2aXR5OiBmYWxzZSxcbiAgICAgICAgbG9hZGluZ1RvZG9zICAgICAgIDogdHJ1ZSxcbiAgICAgICAgdG9kb0RhdGEgICAgICAgICAgIDogW10sXG4gICAgICAgIHVzZXJEYXRhICAgICAgICAgICA6IHRoaXMuJHJvb3QuJGRhdGEudXNlckRhdGEsXG4gICAgICAgIGdyb3VwRGF0YSAgICAgICAgICA6IHRoaXMuJHJvb3QuJGRhdGEudXNlckRhdGEuZ3JvdXBzLFxuICAgICAgICBzdHVkeURhdGEgICAgICAgICAgOiB0aGlzLiRyb290LiRkYXRhLnVzZXJEYXRhLnN0dWRpZXMsXG4gICAgICAgIGFjdGl2aXR5RGF0YSAgICAgICA6IFtdLFxuICAgICAgICBhY3Rpdml0eVBhZ2UgICAgICAgOiAxLFxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbi8vICAgICAgdGhpcy5nZXRVc2VyR3JvdXBzKCk7XG4vLyAgICAgIHRoaXMuZ2V0VXNlclN0dWRpZXMoKTtcbiAgICAgIHRoaXMuZ2V0VXNlclRvZG9zKCk7XG4gICAgICB0aGlzLmdldFVzZXJHcm91cHNBY3Rpdml0eSgpO1xuICAgIH0sXG4gICAgY29tcHV0ZWQgIDoge30sXG4gICAgbWV0aG9kcyAgIDoge1xuICAgICAgY291bnRVc2VyR3JvdXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cERhdGEubGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIGdldEFjdGl2aXR5QmFkZ2VUeXBlICh0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2FjdGl2aXR5X2NvbW1lbnQnIDpcbiAgICAgICAgICAgIHJldHVybiAnaW5mbyc7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXRVc2VyR3JvdXBzICgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nR3JvdXBzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgIC5nZXQoJy93cC1qc29uL2J1ZGR5cHJlc3MvdjEvZ3JvdXBzLz9zaG93X2hpZGRlbj10cnVlJnVzZXJfaWQ9MicpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5ncm91cERhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VyR3JvdXBzQWN0aXZpdHkoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5sb2FkaW5nR3JvdXBzID0gZmFsc2UpXG4gICAgICB9LFxuICAgICAgZ2V0VXNlclN0dWRpZXMgKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdTdHVkaWVzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAnL3dwLWpzb24vc3R1ZHljaHVyY2gvdjEvc3R1ZGllcz9hdXRob3I9MiZwb3N0X3N0YXR1cz1wdWJsaXNoLHBlbmRpbmcsZHJhZnQmcGVyX3BhZ2U9MTAwJm9yZGVyYnk9dGl0bGUmb3JkZXI9YXNjJylcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAoXG4gICAgICAgICAgICB0aGlzLnN0dWR5RGF0YSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICApKVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZ1N0dWRpZXMgPSBmYWxzZSlcbiAgICAgIH0sXG4gICAgICBnZXRVc2VyVG9kb3MgKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdUb2RvcyA9IHRydWU7XG4gICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgJy93cC1qc29uL3N0dWR5Y2h1cmNoL3YxL2Fzc2lnbm1lbnRzJylcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAoXG4gICAgICAgICAgICB0aGlzLnRvZG9EYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICkpXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5sb2FkaW5nVG9kb3MgPSBmYWxzZSlcbiAgICAgIH0sXG4gICAgICBnZXRVc2VyR3JvdXBzQWN0aXZpdHkgKCkge1xuICAgICAgICBsZXQgZ3JvdXBzID0gdGhpcy4kcm9vdC4kZGF0YS51c2VyRGF0YS5ncm91cHMubWFwKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgICAgIHJldHVybiBncm91cC5pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgJy93cC1qc29uL3N0dWR5Y2h1cmNoL3YxL2FjdGl2aXR5P2NvbXBvbmVudD1ncm91cHMmc2hvd19oaWRkZW49dHJ1ZSZkaXNwbGF5X2NvbW1lbnRzPXRocmVhZGVkJl9lbWJlZD10cnVlJnBlcl9wYWdlPTUmcGFnZT0nICsgdGhpcy5hY3Rpdml0eVBhZ2UgKyAnJnByaW1hcnlfaWRbXT0nICsgZ3JvdXBzLmpvaW4oXG4gICAgICAgICAgICAgICcmcHJpbWFyeV9pZFtdPScpKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5hY3Rpdml0eVBhZ2UgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5RGF0YSA9IHRoaXMuYWN0aXZpdHlEYXRhLmNvbmNhdChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZ0FjdGl2aXR5ID0gdGhpcy5sb2FkaW5nTW9yZUFjdGl2aXR5ID0gZmFsc2UpXG4gICAgICB9LFxuICAgICAgbG9hZE1vcmVBY3Rpdml0eSAoKSB7XG4gICAgICAgIGlmICghdGhpcy5hY3Rpdml0eVBhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmdNb3JlQWN0aXZpdHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2aXR5UGFnZSsrO1xuICAgICAgICB0aGlzLmdldFVzZXJHcm91cHNBY3Rpdml0eSgpO1xuICAgICAgfSxcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuXHQudGFibGUtcmVzcG9uc2l2ZSB7XG5cdFx0b3ZlcmZsb3c6IGF1dG87XG5cdH1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBO0FBRUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkVBO0FBbENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Dashboard/Dashboard.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"13d4113a-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Dashboard/Dashboard.vue?vue&type=template&id=6fdc59aa&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13d4113a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Dashboard/Dashboard.vue?vue&type=template&id=6fdc59aa& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"row\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"col-lg-4\" },\n        [\n          _c(\"card\", { staticClass: \"card-user\" }, [\n            _c(\n              \"div\",\n              { staticClass: \"image\", attrs: { slot: \"image\" }, slot: \"image\" },\n              [\n                _c(\"img\", {\n                  attrs: {\n                    src: __webpack_require__(/*! @/assets/img/bg-bible.jpg */ \"./src/assets/img/bg-bible.jpg\"),\n                    alt: \"...\"\n                  }\n                })\n              ]\n            ),\n            _c(\"div\", [\n              _c(\"div\", { staticClass: \"author\" }, [\n                _c(\"img\", {\n                  staticClass: \"avatar border-gray\",\n                  attrs: { src: _vm.userData.avatar.full, alt: \"...\" }\n                }),\n                _c(\"h5\", { staticClass: \"title\" }, [\n                  _vm._v(_vm._s(_vm.userData.name))\n                ]),\n                _c(\"p\", { staticClass: \"description\" }, [\n                  _vm._v(\n                    \"\\n\\t\\t\\t\\t\\t\\t\\t@\" +\n                      _vm._s(_vm.userData.username) +\n                      \"\\n\\t\\t\\t\\t\\t\\t\"\n                  )\n                ])\n              ])\n            ])\n          ])\n        ],\n        1\n      ),\n      _c(\n        \"div\",\n        { staticClass: \"col-lg-8\" },\n        [\n          _c(\n            \"el-menu\",\n            {\n              staticClass: \"el-menu-demo\",\n              attrs: {\n                \"default-active\": this.$route.path,\n                mode: \"horizontal\",\n                router: true\n              }\n            },\n            [\n              _c(\n                \"el-menu-item\",\n                { attrs: { index: \"/\" } },\n                [\n                  _c(\"font-awesome-icon\", { attrs: { icon: \"users\" } }),\n                  _vm._v(\"  \"),\n                  _c(\"span\", [_vm._v(\"Groups\")])\n                ],\n                1\n              ),\n              _c(\n                \"el-menu-item\",\n                { attrs: { index: \"/assignments/\" } },\n                [\n                  _c(\"font-awesome-icon\", { attrs: { icon: \"list\" } }),\n                  _vm._v(\"  \"),\n                  _c(\"span\", [_vm._v(\"Todos\")])\n                ],\n                1\n              ),\n              _c(\n                \"el-menu-item\",\n                { attrs: { index: \"/studies/\" } },\n                [\n                  _c(\"font-awesome-icon\", { attrs: { icon: \"book\" } }),\n                  _vm._v(\"  \"),\n                  _c(\"span\", [_vm._v(\"Studies\")])\n                ],\n                1\n              ),\n              _c(\n                \"el-menu-item\",\n                { attrs: { index: \"/notifications/\" } },\n                [\n                  _c(\"font-awesome-icon\", { attrs: { icon: \"bell\" } }),\n                  _vm._v(\"  \"),\n                  _c(\"span\", [_vm._v(\"Notifications\")])\n                ],\n                1\n              ),\n              _c(\n                \"el-menu-item\",\n                { attrs: { index: \"/settings/\" } },\n                [\n                  _c(\"font-awesome-icon\", { attrs: { icon: \"cogs\" } }),\n                  _vm._v(\"  \"),\n                  _c(\"span\", [_vm._v(\"Settings\")])\n                ],\n                1\n              )\n            ],\n            1\n          ),\n          _c(\"br\"),\n          _c(\"router-view\")\n        ],\n        1\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiMTNkNDExM2EtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvRGFzaGJvYXJkL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmZkYzU5YWEmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9EYXNoYm9hcmQvRGFzaGJvYXJkLnZ1ZT9hNGFmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTRcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJjYXJkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC11c2VyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIiwgYXR0cnM6IHsgc2xvdDogXCJpbWFnZVwiIH0sIHNsb3Q6IFwiaW1hZ2VcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvaW1nL2JnLWJpYmxlLmpwZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIi4uLlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhdXRob3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXZhdGFyIGJvcmRlci1ncmF5XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS51c2VyRGF0YS5hdmF0YXIuZnVsbCwgYWx0OiBcIi4uLlwiIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyRGF0YS5uYW1lKSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRAXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXNlckRhdGEudXNlcm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy04XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJlbC1tZW51XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsLW1lbnUtZGVtb1wiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIFwiZGVmYXVsdC1hY3RpdmVcIjogdGhpcy4kcm91dGUucGF0aCxcbiAgICAgICAgICAgICAgICBtb2RlOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICByb3V0ZXI6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJlbC1tZW51LWl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGluZGV4OiBcIi9cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJmb250LWF3ZXNvbWUtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwidXNlcnNcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqDCoFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiR3JvdXBzXCIpXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJlbC1tZW51LWl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGluZGV4OiBcIi9hc3NpZ25tZW50cy9cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJmb250LWF3ZXNvbWUtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwibGlzdFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoMKgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJUb2Rvc1wiKV0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZWwtbWVudS1pdGVtXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBpbmRleDogXCIvc3R1ZGllcy9cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJmb250LWF3ZXNvbWUtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwiYm9va1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoMKgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTdHVkaWVzXCIpXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJlbC1tZW51LWl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGluZGV4OiBcIi9ub3RpZmljYXRpb25zL1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImZvbnQtYXdlc29tZS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJiZWxsXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgwqBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIk5vdGlmaWNhdGlvbnNcIildKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImVsLW1lbnUtaXRlbVwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaW5kZXg6IFwiL3NldHRpbmdzL1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImZvbnQtYXdlc29tZS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJjb2dzXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgwqBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlNldHRpbmdzXCIpXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX2MoXCJyb3V0ZXItdmlld1wiKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"13d4113a-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Dashboard/Dashboard.vue?vue&type=template&id=6fdc59aa&\n");

/***/ })

})