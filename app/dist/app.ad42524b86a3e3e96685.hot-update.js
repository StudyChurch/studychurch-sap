webpackHotUpdate("app",{

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_Dashboard_Layout_DashboardLayout_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Dashboard/Layout/DashboardLayout.vue */ \"./src/pages/Dashboard/Layout/DashboardLayout.vue\");\n/* harmony import */ var _pages_GeneralViews_NotFoundPage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/GeneralViews/NotFoundPage.vue */ \"./src/pages/GeneralViews/NotFoundPage.vue\");\n/* harmony import */ var _pages_Dashboard_DefaultHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Dashboard/DefaultHeader */ \"./src/pages/Dashboard/DefaultHeader.vue\");\n/* harmony import */ var _pages_Dashboard_Dashboard_Dashboard_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Dashboard/Dashboard/Dashboard.vue */ \"./src/pages/Dashboard/Dashboard/Dashboard.vue\");\n/* harmony import */ var _pages_Dashboard_Account_Account_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Dashboard/Account/Account.vue */ \"./src/pages/Dashboard/Account/Account.vue\");\n/* harmony import */ var _pages_Dashboard_Groups_Groups_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/Dashboard/Groups/Groups.vue */ \"./src/pages/Dashboard/Groups/Groups.vue\");\n/* harmony import */ var _pages_Dashboard_Groups_Views_Activity_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Dashboard/Groups/Views/Activity.vue */ \"./src/pages/Dashboard/Groups/Views/Activity.vue\");\n/* harmony import */ var _pages_Dashboard_Groups_Views_Assignments_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/Dashboard/Groups/Views/Assignments.vue */ \"./src/pages/Dashboard/Groups/Views/Assignments.vue\");\n/* harmony import */ var _pages_Dashboard_Groups_Views_Members_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Dashboard/Groups/Views/Members.vue */ \"./src/pages/Dashboard/Groups/Views/Members.vue\");\n/* harmony import */ var _pages_Dashboard_Groups_Views_Settings_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/Dashboard/Groups/Views/Settings.vue */ \"./src/pages/Dashboard/Groups/Views/Settings.vue\");\n/* harmony import */ var _pages_Dashboard_Groups_Views_Studies_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/Dashboard/Groups/Views/Studies.vue */ \"./src/pages/Dashboard/Groups/Views/Studies.vue\");\n/* harmony import */ var _pages_Dashboard_Studies_Study_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/Dashboard/Studies/Study.vue */ \"./src/pages/Dashboard/Studies/Study.vue\");\n\n\n\n // GeneralViews\n\n // Page Headers\n\n // Dashboard pages\n\n\n\n\n\n\n\n\n\n // Pages\n\nvar User = function User() {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../pages/Dashboard/Pages/UserProfile.vue */ \"./src/pages/Dashboard/Pages/UserProfile.vue\"));\n};\n\nvar routes = [//  {\n//    path: '/',\n//    name: 'Home'\n//  },\n{\n  path: '/',\n  component: _pages_Dashboard_Layout_DashboardLayout_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  children: [{\n    path: '',\n    name: 'Dashboard',\n    components: {\n      default: _pages_Dashboard_Dashboard_Dashboard_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      header: _pages_Dashboard_DefaultHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }\n  }, {\n    path: 'settings',\n    name: 'Settings',\n    components: {\n      default: _pages_Dashboard_Account_Account_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      header: _pages_Dashboard_DefaultHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }\n  }, {\n    path: 'notifications',\n    name: 'Notifications',\n    components: {\n      default: _pages_Dashboard_Account_Account_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      header: _pages_Dashboard_DefaultHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }\n  }, {\n    path: 'studies/:study/:chapter?',\n    name: 'Studies',\n    components: {\n      default: _pages_Dashboard_Studies_Study_vue__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n      header: _pages_Dashboard_DefaultHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }\n  }, {\n    path: 'groups/:slug/',\n    components: {\n      default: _pages_Dashboard_Groups_Groups_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n      header: _pages_Dashboard_DefaultHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    children: [{\n      path: '',\n      component: _pages_Dashboard_Groups_Views_Activity_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    }, {\n      path: 'assignments',\n      component: _pages_Dashboard_Groups_Views_Assignments_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    }, {\n      path: 'members',\n      component: _pages_Dashboard_Groups_Views_Members_vue__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n    }, {\n      path: 'settings',\n      component: _pages_Dashboard_Groups_Views_Settings_vue__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    }, {\n      path: 'studies',\n      component: _pages_Dashboard_Groups_Views_Studies_vue__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n    }, {\n      path: 'studies/:study/:chapter?',\n      name: 'Group Studies',\n      component: _pages_Dashboard_Studies_Study_vue__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\n    }]\n  }]\n}, {\n  path: '*',\n  component: _pages_GeneralViews_NotFoundPage_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcm91dGVzLmpzPzY0MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhc2hib2FyZExheW91dCBmcm9tICdzcmMvcGFnZXMvRGFzaGJvYXJkL0xheW91dC9EYXNoYm9hcmRMYXlvdXQudnVlJztcbi8vIEdlbmVyYWxWaWV3c1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJ3NyYy9wYWdlcy9HZW5lcmFsVmlld3MvTm90Rm91bmRQYWdlLnZ1ZSc7XG5cbi8vIFBhZ2UgSGVhZGVyc1xuaW1wb3J0IERlZmF1bHRIZWFkZXIgZnJvbSAnc3JjL3BhZ2VzL0Rhc2hib2FyZC9EZWZhdWx0SGVhZGVyJztcblxuLy8gRGFzaGJvYXJkIHBhZ2VzXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJ3NyYy9wYWdlcy9EYXNoYm9hcmQvRGFzaGJvYXJkL0Rhc2hib2FyZC52dWUnO1xuaW1wb3J0IEFjY291bnQgICBmcm9tICdzcmMvcGFnZXMvRGFzaGJvYXJkL0FjY291bnQvQWNjb3VudC52dWUnO1xuXG5pbXBvcnQgR3JvdXBzICAgICAgICAgICBmcm9tICdzcmMvcGFnZXMvRGFzaGJvYXJkL0dyb3Vwcy9Hcm91cHMudnVlJztcbmltcG9ydCBHcm91cEFjdGl2aXR5ICAgIGZyb20gJ3NyYy9wYWdlcy9EYXNoYm9hcmQvR3JvdXBzL1ZpZXdzL0FjdGl2aXR5LnZ1ZSc7XG5pbXBvcnQgR3JvdXBBc3NpZ25tZW50cyBmcm9tICdzcmMvcGFnZXMvRGFzaGJvYXJkL0dyb3Vwcy9WaWV3cy9Bc3NpZ25tZW50cy52dWUnO1xuaW1wb3J0IEdyb3VwTWVtYmVycyAgICAgZnJvbSAnc3JjL3BhZ2VzL0Rhc2hib2FyZC9Hcm91cHMvVmlld3MvTWVtYmVycy52dWUnO1xuaW1wb3J0IEdyb3VwU2V0dGluZ3MgICAgZnJvbSAnc3JjL3BhZ2VzL0Rhc2hib2FyZC9Hcm91cHMvVmlld3MvU2V0dGluZ3MudnVlJztcbmltcG9ydCBHcm91cFN0dWRpZXMgICAgIGZyb20gJ3NyYy9wYWdlcy9EYXNoYm9hcmQvR3JvdXBzL1ZpZXdzL1N0dWRpZXMudnVlJztcblxuaW1wb3J0IFN0dWR5ICAgICBmcm9tICdzcmMvcGFnZXMvRGFzaGJvYXJkL1N0dWRpZXMvU3R1ZHkudnVlJztcblxuLy8gUGFnZXNcbmNvbnN0IFVzZXIgPSAoKSA9PiBpbXBvcnQoJ3NyYy9wYWdlcy9EYXNoYm9hcmQvUGFnZXMvVXNlclByb2ZpbGUudnVlJyk7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbi8vICB7XG4vLyAgICBwYXRoOiAnLycsXG4vLyAgICBuYW1lOiAnSG9tZSdcbi8vICB9LFxuICB7XG4gICAgcGF0aCAgICAgOiAnLycsXG4gICAgY29tcG9uZW50OiBEYXNoYm9hcmRMYXlvdXQsXG4gICAgY2hpbGRyZW4gOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGggICAgICA6ICcnLFxuICAgICAgICBuYW1lICAgICAgOiAnRGFzaGJvYXJkJyxcbiAgICAgICAgY29tcG9uZW50czoge2RlZmF1bHQ6IERhc2hib2FyZCwgaGVhZGVyOiBEZWZhdWx0SGVhZGVyfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aCAgICAgIDogJ3NldHRpbmdzJyxcbiAgICAgICAgbmFtZSAgICAgIDogJ1NldHRpbmdzJyxcbiAgICAgICAgY29tcG9uZW50czoge2RlZmF1bHQ6IEFjY291bnQsIGhlYWRlcjogRGVmYXVsdEhlYWRlcn1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGggICAgICA6ICdub3RpZmljYXRpb25zJyxcbiAgICAgICAgbmFtZSAgICAgIDogJ05vdGlmaWNhdGlvbnMnLFxuICAgICAgICBjb21wb25lbnRzOiB7ZGVmYXVsdDogQWNjb3VudCwgaGVhZGVyOiBEZWZhdWx0SGVhZGVyfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aCAgICAgIDogJ3N0dWRpZXMvOnN0dWR5LzpjaGFwdGVyPycsXG4gICAgICAgIG5hbWUgICAgICA6ICdTdHVkaWVzJyxcbiAgICAgICAgY29tcG9uZW50czoge2RlZmF1bHQ6IFN0dWR5LCBoZWFkZXI6IERlZmF1bHRIZWFkZXJ9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoICAgICAgOiAnZ3JvdXBzLzpzbHVnLycsXG4gICAgICAgIGNvbXBvbmVudHM6IHtkZWZhdWx0OiBHcm91cHMsIGhlYWRlcjogRGVmYXVsdEhlYWRlcn0sXG4gICAgICAgIGNoaWxkcmVuICA6IFtcbiAgICAgICAgICB7cGF0aDogJycsIGNvbXBvbmVudDogR3JvdXBBY3Rpdml0eX0sXG4gICAgICAgICAge3BhdGg6ICdhc3NpZ25tZW50cycsIGNvbXBvbmVudDogR3JvdXBBc3NpZ25tZW50c30sXG4gICAgICAgICAge3BhdGg6ICdtZW1iZXJzJywgY29tcG9uZW50OiBHcm91cE1lbWJlcnN9LFxuICAgICAgICAgIHtwYXRoOiAnc2V0dGluZ3MnLCBjb21wb25lbnQ6IEdyb3VwU2V0dGluZ3N9LFxuICAgICAgICAgIHtwYXRoOiAnc3R1ZGllcycsIGNvbXBvbmVudDogR3JvdXBTdHVkaWVzfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoICAgICAgOiAnc3R1ZGllcy86c3R1ZHkvOmNoYXB0ZXI/JyxcbiAgICAgICAgICAgIG5hbWUgICAgICA6ICdHcm91cCBTdHVkaWVzJyxcbiAgICAgICAgICAgIGNvbXBvbmVudCA6IFN0dWR5LFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0sXG5cbiAge3BhdGg6ICcqJywgY29tcG9uZW50OiBOb3RGb3VuZH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVRBO0FBeEJBO0FBMkNBO0FBQUE7QUFBQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ })

})