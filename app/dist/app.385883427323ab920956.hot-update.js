webpackHotUpdate("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _dashboard_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-plugin */ \"./src/dashboard-plugin.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _filters_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/date */ \"./src/filters/date.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth */ \"./src/auth.js\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ \"./node_modules/@fortawesome/vue-fontawesome/index.es.js\");\n/* harmony import */ var _assets_sass_element_variables_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/sass/element_variables.scss */ \"./src/assets/sass/element_variables.scss\");\n/* harmony import */ var _assets_sass_element_variables_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_element_variables_scss__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n // Plugins\n\n // router setup\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__[\"library\"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faBook\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faUsers\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faChevronRight\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faComments\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faList\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faUser\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faCogs\"]);\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_11__[\"FontAwesomeIcon\"]);\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.productionTip = false;\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.devtools = true; // plugin setup\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(_dashboard_plugin__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(__webpack_require__(/*! vue-cookies */ \"./node_modules/vue-cookies/vue-cookies.js\"));\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype.$http = axios__WEBPACK_IMPORTED_MODULE_4___default.a; // configure router\n\nvar router = new vue_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  routes: _routes_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  // short for routes: routes\n  linkActiveClass: 'active',\n  mode: 'history'\n});\nvar mixin = {\n  methods: {}\n}; // Filters\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter('dateFormat', _filters_date__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter('isPrivate', function (value, isPrivate) {\n  if (!isPrivate) {\n    return value;\n  }\n\n  return '<strong class=\"private-answer\">(Private)</strong>' + value;\n});\n/* eslint-disable no-new */\n\nvar vm = new vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  el: '#app',\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  },\n  router: router,\n  mixins: [mixin],\n  data: {\n    userData: Object(_auth__WEBPACK_IMPORTED_MODULE_8__[\"getUserData\"])(),\n    currentGroup: 0\n  },\n  created: function created() {\n    var _this = this;\n\n    this.$http.defaults.baseURL = window.location.protocol + '//' + window.location.host;\n    this.$http.defaults.headers.common['X-WP-NONCE'] = this.$cookies.get('_wpnonce');\n    this.$http.interceptors.response.use(function (response) {\n      // Do something with response data\n      vm.$http.defaults.headers.common['X-WP-NONCE'] = response.headers['x-wp-nonce'];\n      return response;\n    }, function (error) {\n      // Do something with response error\n      return Promise.reject(error);\n    });\n    this.$http.post('/wp-json/studychurch/v1/authenticate', {}).then(function (response) {\n      Object(_auth__WEBPACK_IMPORTED_MODULE_8__[\"setAccessToken\"])(response.data.token);\n      Object(_auth__WEBPACK_IMPORTED_MODULE_8__[\"setUserData\"])(response.data.user);\n\n      _this.updateUserData(Object(_auth__WEBPACK_IMPORTED_MODULE_8__[\"getUserData\"])());\n    });\n  },\n  methods: {\n    setCurrentGroup: function setCurrentGroup(groupID) {\n      this.currentGroup = groupID;\n      localStorage.setItem('currentGroup', groupID);\n    },\n    getCurrentGroup: function getCurrentGroup() {\n      if (!this.currentGroup || undefined === this.currentGroup) {\n        this.currentGroup = localStorage.getItem('currentGroup');\n      }\n\n      return this.currentGroup;\n    },\n    getCurrentGroupData: function getCurrentGroupData() {\n      if (!this.getCurrentGroup()) {\n        return false;\n      }\n\n      for (var i = 0; i < this.$root.$data.userData.groups.length; i++) {\n        if (this.getCurrentGroup() === this.$root.$data.userData.groups[i].id) {\n          return this.$root.$data.userData.groups[i];\n        }\n      }\n\n      return false;\n    },\n    updateUserData: function updateUserData(data) {\n      this.userData = data;\n    },\n    cleanLink: function cleanLink(link) {\n      return link.replace(window.location.protocol + '//' + window.location.host, '');\n    }\n  }\n});\n/* We import element-ui variables at the end so they can override the default element-ui colors */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInXG5pbXBvcnQgRGFzaGJvYXJkUGx1Z2luIGZyb20gJy4vZGFzaGJvYXJkLXBsdWdpbidcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBEYXRlRmlsdGVyIGZyb20gJy4vZmlsdGVycy9kYXRlJztcblxuLy8gUGx1Z2luc1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5cbi8vIHJvdXRlciBzZXR1cFxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcy9yb3V0ZXMnXG5cbmltcG9ydCB7IHNldEFjY2Vzc1Rva2VuLCBzZXRVc2VyRGF0YSwgZ2V0VXNlckRhdGEgfSBmcm9tICcuL2F1dGgnO1xuXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xuaW1wb3J0IHsgZmFCb29rLCBmYVVzZXJzLCBmYUNoZXZyb25SaWdodCwgZmFDb21tZW50cywgZmFMaXN0LCBmYVVzZXIsIGZhQ29ncyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWUnXG5cbmxpYnJhcnkuYWRkKGZhQm9vaywgZmFVc2VycywgZmFDaGV2cm9uUmlnaHQsIGZhQ29tbWVudHMsIGZhTGlzdCwgZmFVc2VyLCBmYUNvZ3MpO1xuXG5WdWUuY29tcG9uZW50KCdmb250LWF3ZXNvbWUtaWNvbicsIEZvbnRBd2Vzb21lSWNvbik7XG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlO1xuXG5WdWUuY29uZmlnLmRldnRvb2xzID0gdHJ1ZTtcblxuLy8gcGx1Z2luIHNldHVwXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5WdWUudXNlKERhc2hib2FyZFBsdWdpbik7XG5WdWUudXNlKHJlcXVpcmUoJ3Z1ZS1jb29raWVzJykpO1xuXG5WdWUucHJvdG90eXBlLiRodHRwID0gQXhpb3M7XG5cbi8vIGNvbmZpZ3VyZSByb3V0ZXJcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICByb3V0ZXMsIC8vIHNob3J0IGZvciByb3V0ZXM6IHJvdXRlc1xuICBsaW5rQWN0aXZlQ2xhc3M6ICdhY3RpdmUnLFxuICBtb2RlOiAnaGlzdG9yeSdcbn0pO1xuXG5sZXQgbWl4aW4gPSB7XG4gIG1ldGhvZHM6IHt9XG59O1xuXG4vLyBGaWx0ZXJzXG5WdWUuZmlsdGVyKCdkYXRlRm9ybWF0JywgRGF0ZUZpbHRlcik7XG5WdWUuZmlsdGVyKCAnaXNQcml2YXRlJywgZnVuY3Rpb24oIHZhbHVlLCBpc1ByaXZhdGUgKSB7XG5cdGlmICggISBpc1ByaXZhdGUgKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuICc8c3Ryb25nIGNsYXNzPVwicHJpdmF0ZS1hbnN3ZXJcIj4oUHJpdmF0ZSk8L3N0cm9uZz4nICsgdmFsdWU7XG59KTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5sZXQgdm0gPSBuZXcgVnVlKHtcbiAgZWw6ICcjYXBwJyxcbiAgcmVuZGVyOiBoID0+IGgoQXBwKSxcbiAgcm91dGVyLFxuICBtaXhpbnM6IFttaXhpbl0sXG4gIGRhdGE6IHtcbiAgICB1c2VyRGF0YTogZ2V0VXNlckRhdGEoKSxcbiAgICBjdXJyZW50R3JvdXA6IDAsXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy4kaHR0cC5kZWZhdWx0cy5iYXNlVVJMID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICAgIHRoaXMuJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtV1AtTk9OQ0UnXSA9IHRoaXMuJGNvb2tpZXMuZ2V0KCAnX3dwbm9uY2UnICk7XG5cbiAgICB0aGlzLiRodHRwLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBkYXRhXG4gICAgICB2bS4kaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1XUC1OT05DRSddID0gcmVzcG9uc2UuaGVhZGVyc1sneC13cC1ub25jZSddO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcmVzcG9uc2UgZXJyb3JcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRodHRwXG4gICAgICAucG9zdCgnL3dwLWpzb24vc3R1ZHljaHVyY2gvdjEvYXV0aGVudGljYXRlJywge30pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNldEFjY2Vzc1Rva2VuKHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuICAgICAgICBzZXRVc2VyRGF0YShyZXNwb25zZS5kYXRhLnVzZXIpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJEYXRhKCBnZXRVc2VyRGF0YSgpICk7XG4gICAgICB9KTtcbiAgfSxcbiAgbWV0aG9kcyA6IHtcbiAgICBzZXRDdXJyZW50R3JvdXAgKGdyb3VwSUQpIHtcbiAgICAgIHRoaXMuY3VycmVudEdyb3VwID0gZ3JvdXBJRDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50R3JvdXAnLCBncm91cElEKTtcbiAgICB9LFxuICAgIGdldEN1cnJlbnRHcm91cCAoKSB7XG4gICAgICBpZiAoICEgdGhpcy5jdXJyZW50R3JvdXAgfHwgdW5kZWZpbmVkID09PSB0aGlzLmN1cnJlbnRHcm91cCApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudEdyb3VwJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRHcm91cDtcbiAgICB9LFxuICAgIGdldEN1cnJlbnRHcm91cERhdGEoKSB7XG4gICAgICBpZiAoISB0aGlzLmdldEN1cnJlbnRHcm91cCgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiRyb290LiRkYXRhLnVzZXJEYXRhLmdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nZXRDdXJyZW50R3JvdXAoKSA9PT0gdGhpcy4kcm9vdC4kZGF0YS51c2VyRGF0YS5ncm91cHNbaV0uaWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kcm9vdC4kZGF0YS51c2VyRGF0YS5ncm91cHNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSxcbiAgICB1cGRhdGVVc2VyRGF0YSAoZGF0YSkge1xuICAgICAgdGhpcy51c2VyRGF0YSA9IGRhdGE7XG4gICAgfSxcbiAgICBjbGVhbkxpbmsgKGxpbmspIHtcbiAgICAgIHJldHVybiBsaW5rLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0LCAnJyk7XG4gICAgfVxuICB9XG5cblxufSk7XG5cbi8qIFdlIGltcG9ydCBlbGVtZW50LXVpIHZhcmlhYmxlcyBhdCB0aGUgZW5kIHNvIHRoZXkgY2FuIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGVsZW1lbnQtdWkgY29sb3JzICovXG5pbXBvcnQgJy4vYXNzZXRzL3Nhc3MvZWxlbWVudF92YXJpYWJsZXMuc2NzcydcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBOUJBO0FBa0VBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

})