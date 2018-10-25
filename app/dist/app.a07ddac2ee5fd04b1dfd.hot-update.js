webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Groups.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Groups/Groups.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components */ \"./src/components/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Card: _components__WEBPACK_IMPORTED_MODULE_0__[\"Card\"],\n    NTable: _components__WEBPACK_IMPORTED_MODULE_0__[\"Table\"],\n    NProgress: _components__WEBPACK_IMPORTED_MODULE_0__[\"Progress\"],\n    AnimatedNumber: _components__WEBPACK_IMPORTED_MODULE_0__[\"AnimatedNumber\"],\n    TimeLine: _components__WEBPACK_IMPORTED_MODULE_0__[\"TimeLine\"],\n    TimeLineItem: _components__WEBPACK_IMPORTED_MODULE_0__[\"TimeLineItem\"]\n  },\n  data: function data() {\n    return {\n      loadingGroups: false,\n      loadingStudies: false,\n      loadingActivity: true,\n      loadingTodos: true,\n      todoData: [],\n      groupData: {\n        id: 0,\n        name: '',\n        slug: '',\n        avatar_urls: {\n          full: '',\n          thumb: ''\n        },\n        description: {\n          rendered: ''\n        }\n      },\n      activityData: []\n    };\n  },\n  mounted: function mounted() {\n    for (var i = 0; i < this.$root.$data.userData.groups.length; i++) {\n      if (this.$route.params.slug === this.$root.$data.userData.groups[i].slug) {\n        this.groupData = this.$root.$data.userData.groups[i];\n        break;\n      }\n    }\n\n    if (this.groupData.id) {\n      this.getCurrentGroup();\n    } else {\n      this.getGroupTodos();\n      this.getGroupActivity();\n    }\n  },\n  computed: {},\n  methods: {\n    getCurrentGroup: function getCurrentGroup() {\n      var _this = this;\n\n      this.$http.get('/wp-json/buddypress/v1/groups/' + this.$route.params.slug).then(function (response) {\n        console.log(response);\n        _this.groupData = response.data[0];\n\n        _this.getGroupTodos();\n\n        _this.getGroupActivity();\n      }).finally(function () {\n        return _this.loadingTodos = false;\n      });\n    },\n    getActivityBadgeType: function getActivityBadgeType(type) {\n      switch (type) {\n        case 'activity_comment':\n          return 'info';\n\n        default:\n          return 'success';\n      }\n    },\n    getGroupTodos: function getGroupTodos() {\n      var _this2 = this;\n\n      this.loadingTodos = true;\n      this.$http.get('/wp-json/studychurch/v1/assignments?group_id=' + this.groupData.id).then(function (response) {\n        return _this2.todoData = response.data;\n      }).finally(function () {\n        return _this2.loadingTodos = false;\n      });\n    },\n    getGroupActivity: function getGroupActivity() {\n      var _this3 = this;\n\n      this.loadingActivity = true;\n      this.$http.get('/wp-json/buddypress/v1/activity?show_hidden=true&per_page=50&primary_id=' + this.groupData.id).then(function (response) {\n        return _this3.activityData = response.data;\n      }).finally(function () {\n        return _this3.loadingActivity = false;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvR3JvdXBzL0dyb3Vwcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0dyb3Vwcy52dWU/M2EzOSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTRcIj5cbiAgICAgICAgPGNhcmQgY2xhc3M9XCJjYXJkLXVzZXJcIj5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbWFnZVwiIGNsYXNzPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvaW1nL2JnNS5qcGdcIiBhbHQ9XCIuLi5cIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXIgYm9yZGVyLWdyYXlcIiA6c3JjPVwiZ3JvdXBEYXRhLmF2YXRhcl91cmxzLmZ1bGxcIiBhbHQ9XCIuLi5cIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0aXRsZVwiPnt7Z3JvdXBEYXRhLm5hbWV9fTwvaDU+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHYtaHRtbD1cImdyb3VwRGF0YS5kZXNjcmlwdGlvbi5yZW5kZXJlZFwiPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2NhcmQ+XG5cbiAgICAgICAgPGNhcmQgY2xhc3M9XCJjYXJkLWNoYXJ0XCIgbm8tZm9vdGVyLWxpbmU+XG5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImNhcmQtdGl0bGVcIj5TdHVkaWVzPC9oMj5cbiAgICAgICAgICAgIDxkcm9wLWRvd24gOmhpZGUtYXJyb3c9XCJ0cnVlXCIgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICAgICAgICA8bi1idXR0b24gc2xvdD1cInRpdGxlXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGUgbm8tY2FyZXRcIiByb3VuZCBzaW1wbGUgaWNvbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5vdy11aS1pY29ucyBsb2FkZXJfZ2VhclwiPjwvaT5cbiAgICAgICAgICAgICAgPC9uLWJ1dHRvbj5cblxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFkZCBhIFN0dWR5PC9hPlxuICAgICAgICAgICAgPC9kcm9wLWRvd24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgPG4tdGFibGUgOmRhdGE9XCJncm91cERhdGEuc3R1ZGllc1wiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cIntyb3d9XCI+XG4gICAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPXJvdy5saW5rPnt7cm93LnRpdGxlfX08L2E+PC90ZD5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvbi10YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc2xvdD1cImZvb3RlclwiIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgIDxpIDpjbGFzcz1cInRoaXMubG9hZGluZ1N0dWRpZXMgPyAnbm93LXVpLWljb25zIGFycm93cy0xX3JlZnJlc2gtNjkgc3BpbicgOiAnbm93LXVpLWljb25zIGFycm93cy0xX3JlZnJlc2gtNjknXCI+PC9pPiBKdXN0IFVwZGF0ZWRcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2NhcmQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04XCI+XG5cbiAgICAgICAgPGgzIGNsYXNzPVwidGl0bGUgbXQtNCB0ZXh0LWNlbnRlclwiPlVwY29taW5nIFRvZG9zPC9oMz5cbiAgICAgICAgPGNhcmQgbm8tZm9vdGVyLWxpbmU+XG4gICAgICAgICAgPHVsIHNsb3Q9XCJyYXctY29udGVudFwiIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgICA8bGkgdi1mb3I9XCJkYXRhIGluIHRvZG9EYXRhXCIgOmNsYXNzPVwiJ2xpc3QtZ3JvdXAtaXRlbSdcIj5cbiAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgIDxoNj5EdWUgRGF0ZToge3tkYXRhLmRhdGV9fTwvaDY+XG4gICAgICAgICAgICAgIDxwIHYtZm9yPVwibGVzc29uIGluIGRhdGEubGVzc29uc1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibm93LXVpLWljb25zIGRlc2lnbl9idWxsZXQtbGlzdC02N1wiPjwvaT4mbmJzcDsgPHNwYW4gdi1odG1sPVwibGVzc29uLnRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIHYtaHRtbD1cImRhdGEuY29udGVudFwiPjwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJmb290ZXJcIiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICA8aSA6Y2xhc3M9XCJ0aGlzLmxvYWRpbmdUb2RvcyA/ICdub3ctdWktaWNvbnMgYXJyb3dzLTFfcmVmcmVzaC02OSBzcGluJyA6ICdub3ctdWktaWNvbnMgYXJyb3dzLTFfcmVmcmVzaC02OSdcIj48L2k+IEp1c3QgVXBkYXRlZFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2NhcmQ+XG5cbiAgICAgICAgPGgzIGNsYXNzPVwidGl0bGUgbXQtNCB0ZXh0LWNlbnRlclwiPkFjdGl2aXR5PC9oMz5cbiAgICAgICAgPHRpbWUtbGluZSB0eXBlPVwic2ltcGxlXCI+XG4gICAgICAgICAgPHRpbWUtbGluZS1pdGVtIHYtZm9yPVwiYWN0aXZpdHkgaW4gYWN0aXZpdHlEYXRhXCIgaW52ZXJ0ZWQ9XCJcIiA6YmFkZ2UtdHlwZT1cImdldEFjdGl2aXR5QmFkZ2VUeXBlKGFjdGl2aXR5LnR5cGUpXCIgOmJhZGdlLWltYWdlPVwiYWN0aXZpdHkudXNlcl9hdmF0YXIudGh1bWJcIj5cbiAgICAgICAgICAgIDxoNiBzbG90PVwiaGVhZGVyXCIgdi1odG1sPVwiYWN0aXZpdHkudGl0bGVcIj48L2g2PlxuICAgICAgICAgICAgPHAgc2xvdD1cImNvbnRlbnRcIiB2LWh0bWw9XCJhY3Rpdml0eS5jb250ZW50LnJlbmRlcmVkXCI+PC9wPlxuXG4gICAgICAgICAgICA8aDYgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cInRpLXRpbWVcIj48L2k+XG4gICAgICAgICAgICAgIHt7YWN0aXZpdHkuZGF0ZX19XG4gICAgICAgICAgICA8L2g2PlxuICAgICAgICAgIDwvdGltZS1saW5lLWl0ZW0+XG4gICAgICAgIDwvdGltZS1saW5lPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IHtcbiAgICBDYXJkLFxuICAgIFRhYmxlIGFzIE5UYWJsZSxcbiAgICBQcm9ncmVzcyBhcyBOUHJvZ3Jlc3MsXG4gICAgQW5pbWF0ZWROdW1iZXIsXG4gICAgVGltZUxpbmUsXG4gICAgVGltZUxpbmVJdGVtXG4gIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIENhcmQsXG4gICAgICBOVGFibGUsXG4gICAgICBOUHJvZ3Jlc3MsXG4gICAgICBBbmltYXRlZE51bWJlcixcbiAgICAgIFRpbWVMaW5lLFxuICAgICAgVGltZUxpbmVJdGVtXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZ0dyb3VwczogZmFsc2UsXG4gICAgICAgIGxvYWRpbmdTdHVkaWVzOiBmYWxzZSxcbiAgICAgICAgbG9hZGluZ0FjdGl2aXR5OiB0cnVlLFxuICAgICAgICBsb2FkaW5nVG9kb3M6IHRydWUsXG4gICAgICAgIHRvZG9EYXRhOiBbXSxcbiAgICAgICAgZ3JvdXBEYXRhOiB7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgc2x1ZzogJycsXG4gICAgICAgICAgYXZhdGFyX3VybHM6IHtcbiAgICAgICAgICAgIGZ1bGw6ICcnLFxuICAgICAgICAgICAgdGh1bWI6ICcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgcmVuZGVyZWQ6ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhY3Rpdml0eURhdGE6IFtdLFxuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMuJHJvb3QuJGRhdGEudXNlckRhdGEuZ3JvdXBzLmxlbmd0aDsgaSArKyApIHtcbiAgICAgICAgaWYgKCB0aGlzLiRyb3V0ZS5wYXJhbXMuc2x1ZyA9PT0gdGhpcy4kcm9vdC4kZGF0YS51c2VyRGF0YS5ncm91cHNbaV0uc2x1ZyApIHtcbiAgICAgICAgICB0aGlzLmdyb3VwRGF0YSA9IHRoaXMuJHJvb3QuJGRhdGEudXNlckRhdGEuZ3JvdXBzW2ldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICggdGhpcy5ncm91cERhdGEuaWQgKSB7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudEdyb3VwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldEdyb3VwVG9kb3MoKTtcbiAgICAgICAgdGhpcy5nZXRHcm91cEFjdGl2aXR5KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZCA6IHt9LFxuICAgIG1ldGhvZHMgOiB7XG4gICAgICBnZXRDdXJyZW50R3JvdXAgKCkge1xuICAgICAgICB0aGlzLiRodHRwXG4gICAgICAgICAgLmdldChcbiAgICAgICAgICAgICcvd3AtanNvbi9idWRkeXByZXNzL3YxL2dyb3Vwcy8nICsgdGhpcy4kcm91dGUucGFyYW1zLnNsdWcpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coIHJlc3BvbnNlICk7XG4gICAgICAgICAgICB0aGlzLmdyb3VwRGF0YSA9IHJlc3BvbnNlLmRhdGFbMF07XG4gICAgICAgICAgICB0aGlzLmdldEdyb3VwVG9kb3MoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0R3JvdXBBY3Rpdml0eSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5sb2FkaW5nVG9kb3MgPSBmYWxzZSlcbiAgICAgIH0sXG4gICAgICBnZXRBY3Rpdml0eUJhZGdlVHlwZSAodHlwZSkge1xuICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2FjdGl2aXR5X2NvbW1lbnQnIDpcbiAgICAgICAgICAgIHJldHVybiAnaW5mbyc7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXRHcm91cFRvZG9zICgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nVG9kb3MgPSB0cnVlO1xuICAgICAgICB0aGlzLiRodHRwXG4gICAgICAgICAgLmdldChcbiAgICAgICAgICAgICcvd3AtanNvbi9zdHVkeWNodXJjaC92MS9hc3NpZ25tZW50cz9ncm91cF9pZD0nICsgdGhpcy5ncm91cERhdGEuaWQpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKFxuICAgICAgICAgICAgdGhpcy50b2RvRGF0YSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICApKVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZ1RvZG9zID0gZmFsc2UpXG4gICAgICB9LFxuICAgICAgZ2V0R3JvdXBBY3Rpdml0eSAoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ0FjdGl2aXR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAnL3dwLWpzb24vYnVkZHlwcmVzcy92MS9hY3Rpdml0eT9zaG93X2hpZGRlbj10cnVlJnBlcl9wYWdlPTUwJnByaW1hcnlfaWQ9JyArIHRoaXMuZ3JvdXBEYXRhLmlkIClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAoXG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5RGF0YSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICApKVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZ0FjdGl2aXR5ID0gZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFSQTtBQVlBO0FBbEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBeENBO0FBL0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Groups/Groups.vue?vue&type=script&lang=js&\n");

/***/ })

})