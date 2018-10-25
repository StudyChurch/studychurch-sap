webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Layout/DashboardLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Layout/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.starts-with */ \"./node_modules/core-js/modules/es6.string.starts-with.js\");\n/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! perfect-scrollbar */ \"./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js\");\n/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! perfect-scrollbar/css/perfect-scrollbar.css */ \"./node_modules/perfect-scrollbar/css/perfect-scrollbar.css\");\n/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TopNavbar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopNavbar.vue */ \"./src/pages/Dashboard/Layout/TopNavbar.vue\");\n/* harmony import */ var _ContentFooter_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContentFooter.vue */ \"./src/pages/Dashboard/Layout/ContentFooter.vue\");\n/* harmony import */ var _Content_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content.vue */ \"./src/pages/Dashboard/Layout/Content.vue\");\n/* harmony import */ var _Extra_MobileMenu_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Extra/MobileMenu.vue */ \"./src/pages/Dashboard/Layout/Extra/MobileMenu.vue\");\n/* harmony import */ var _Extra_UserMenu_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Extra/UserMenu.vue */ \"./src/pages/Dashboard/Layout/Extra/UserMenu.vue\");\n/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue2-transitions */ \"./node_modules/vue2-transitions/dist/vue2-transitions.m.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* eslint-disable no-new */\n\n\n\nfunction hasElement(className) {\n  return document.getElementsByClassName(className).length > 0;\n}\n\nfunction initScrollbar(className) {\n  if (hasElement(className)) {\n    new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".\".concat(className));\n  } else {\n    // try to init it later in case this component is loaded async\n    setTimeout(function () {\n      initScrollbar(className);\n    }, 100);\n  }\n}\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    TopNavbar: _TopNavbar_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ContentFooter: _ContentFooter_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    DashboardContent: _Content_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    MobileMenu: _Extra_MobileMenu_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    UserMenu: _Extra_UserMenu_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    SlideYDownTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_9__[\"SlideYDownTransition\"],\n    ZoomCenterTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_9__[\"ZoomCenterTransition\"]\n  },\n  methods: {\n    toggleSidebar: function toggleSidebar() {\n      if (this.$sidebar.showSidebar) {\n        this.$sidebar.displaySidebar(false);\n      }\n    },\n    cleanLinks: function cleanLinks(link) {\n      return link.replace();\n    }\n  },\n  mounted: function mounted() {\n    var docClasses = document.body.classList;\n    var isWindows = navigator.platform.startsWith('Win');\n\n    if (isWindows) {\n      // if we are on windows OS we activate the perfectScrollbar function\n      initScrollbar('sidebar');\n      initScrollbar('sidebar-wrapper');\n      docClasses.add('perfect-scrollbar-on');\n    } else {\n      docClasses.add('perfect-scrollbar-off');\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9EYXNoYm9hcmQvTGF5b3V0L0Rhc2hib2FyZExheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0Rhc2hib2FyZExheW91dC52dWU/ZTgxYiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgOmNsYXNzPVwieyduYXYtb3Blbic6ICRzaWRlYmFyLnNob3dTaWRlYmFyfVwiPlxuICAgIDxub3RpZmljYXRpb25zPjwvbm90aWZpY2F0aW9ucz5cbiAgICA8c2lkZS1iYXI+XG4gICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cInByb3BzXCIgc2xvdD1cImxpbmtzXCI+XG4gICAgICAgIDx1c2VyLW1lbnU+PC91c2VyLW1lbnU+XG4gICAgICAgIDxzaWRlYmFyLWl0ZW0gOmxpbms9XCJ7bmFtZTogJ0Rhc2hib2FyZCcsIGljb246ICdub3ctdWktaWNvbnMgZGVzaWduX2FwcCcsIHBhdGg6ICcvJ31cIj48L3NpZGViYXItaXRlbT5cbiAgICAgICAgPHNpZGViYXItaXRlbSA6bGluaz1cIntuYW1lOiAnT3JnYW5pemF0aW9uJywgaWNvbjogJ25vdy11aS1pY29ucyBidXNpbmVzc19nbG9iZScsIHBhdGg6ICcvb3JnYW5pemF0aW9uJ31cIj48L3NpZGViYXItaXRlbT5cbiAgICAgICAgPHNpZGViYXItaXRlbSA6bGluaz1cIntuYW1lOiAnR3JvdXBzJywgaWNvbjogJ25vdy11aS1pY29ucyBlZHVjYXRpb25fYXRvbSd9XCI+XG4gICAgICAgICAgPHNpZGViYXItaXRlbSB2LWZvcj1cImdyb3VwIGluICRyb290LiRkYXRhLnVzZXJEYXRhLmdyb3Vwc1wiIDpsaW5rPVwie25hbWU6IGdyb3VwLm5hbWUsIHBhdGg6IGdyb3VwLmxpbmt9XCI+PC9zaWRlYmFyLWl0ZW0+XG4gICAgICAgIDwvc2lkZWJhci1pdGVtPlxuICAgICAgICA8c2lkZWJhci1pdGVtIDpsaW5rPVwie25hbWU6ICdTdHVkaWVzJywgaWNvbjogJ25vdy11aS1pY29ucyBkZXNpZ24tMl9ydWxlci1wZW5jaWwnfVwiPlxuICAgICAgICAgIDxzaWRlYmFyLWl0ZW0gdi1mb3I9XCJzdHVkeSBpbiAkcm9vdC4kZGF0YS51c2VyRGF0YS5zdHVkaWVzXCIgOmxpbms9XCJ7bmFtZTogc3R1ZHkudGl0bGUucmVuZGVyZWQsIHBhdGg6IHN0dWR5Lmxpbmt9XCI+PC9zaWRlYmFyLWl0ZW0+XG4gICAgICAgIDwvc2lkZWJhci1pdGVtPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3NpZGUtYmFyPlxuICAgIDxkaXYgY2xhc3M9XCJtYWluLXBhbmVsXCI+XG4gICAgICA8dG9wLW5hdmJhcj48L3RvcC1uYXZiYXI+XG4gICAgICA8cm91dGVyLXZpZXcgbmFtZT1cImhlYWRlclwiPjwvcm91dGVyLXZpZXc+XG5cbiAgICAgIDxkaXYgOmNsYXNzPVwie2NvbnRlbnQ6ICEkcm91dGUubWV0YS5oaWRlQ29udGVudH1cIiBAY2xpY2s9XCJ0b2dnbGVTaWRlYmFyXCI+XG4gICAgICAgIDx6b29tLWNlbnRlci10cmFuc2l0aW9uIDpkdXJhdGlvbj1cIjIwMFwiIG1vZGU9XCJvdXQtaW5cIj5cbiAgICAgICAgICA8IS0tIHlvdXIgY29udGVudCBoZXJlIC0tPlxuICAgICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxuICAgICAgICA8L3pvb20tY2VudGVyLXRyYW5zaXRpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxjb250ZW50LWZvb3RlciB2LWlmPVwiISRyb3V0ZS5tZXRhLmhpZGVGb290ZXJcIj48L2NvbnRlbnQtZm9vdGVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cbiAgaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInXG4gIGltcG9ydCAncGVyZmVjdC1zY3JvbGxiYXIvY3NzL3BlcmZlY3Qtc2Nyb2xsYmFyLmNzcydcblxuICBmdW5jdGlvbiBoYXNFbGVtZW50IChjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpLmxlbmd0aCA+IDA7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2Nyb2xsYmFyIChjbGFzc05hbWUpIHtcbiAgICBpZiAoaGFzRWxlbWVudChjbGFzc05hbWUpKSB7XG4gICAgICBuZXcgUGVyZmVjdFNjcm9sbGJhcihgLiR7Y2xhc3NOYW1lfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0cnkgdG8gaW5pdCBpdCBsYXRlciBpbiBjYXNlIHRoaXMgY29tcG9uZW50IGlzIGxvYWRlZCBhc3luY1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGluaXRTY3JvbGxiYXIoY2xhc3NOYW1lKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgaW1wb3J0IFRvcE5hdmJhciBmcm9tICcuL1RvcE5hdmJhci52dWUnXG4gIGltcG9ydCBDb250ZW50Rm9vdGVyIGZyb20gJy4vQ29udGVudEZvb3Rlci52dWUnXG4gIGltcG9ydCBEYXNoYm9hcmRDb250ZW50IGZyb20gJy4vQ29udGVudC52dWUnXG4gIGltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vRXh0cmEvTW9iaWxlTWVudS52dWUnXG4gIGltcG9ydCBVc2VyTWVudSBmcm9tICcuL0V4dHJhL1VzZXJNZW51LnZ1ZSdcbiAgaW1wb3J0IHtTbGlkZVlEb3duVHJhbnNpdGlvbiwgWm9vbUNlbnRlclRyYW5zaXRpb259IGZyb20gJ3Z1ZTItdHJhbnNpdGlvbnMnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIFRvcE5hdmJhcixcbiAgICAgIENvbnRlbnRGb290ZXIsXG4gICAgICBEYXNoYm9hcmRDb250ZW50LFxuICAgICAgTW9iaWxlTWVudSxcbiAgICAgIFVzZXJNZW51LFxuICAgICAgU2xpZGVZRG93blRyYW5zaXRpb24sXG4gICAgICBab29tQ2VudGVyVHJhbnNpdGlvblxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdG9nZ2xlU2lkZWJhciAoKSB7XG4gICAgICAgIGlmICh0aGlzLiRzaWRlYmFyLnNob3dTaWRlYmFyKSB7XG4gICAgICAgICAgdGhpcy4kc2lkZWJhci5kaXNwbGF5U2lkZWJhcihmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNsZWFuTGlua3MgKGxpbmspIHtcbiAgICAgICAgcmV0dXJuIGxpbmsucmVwbGFjZSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkICgpIHtcbiAgICAgIGxldCBkb2NDbGFzc2VzID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XG4gICAgICBsZXQgaXNXaW5kb3dzID0gbmF2aWdhdG9yLnBsYXRmb3JtLnN0YXJ0c1dpdGgoJ1dpbicpO1xuICAgICAgaWYgKGlzV2luZG93cykge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgb24gd2luZG93cyBPUyB3ZSBhY3RpdmF0ZSB0aGUgcGVyZmVjdFNjcm9sbGJhciBmdW5jdGlvblxuICAgICAgICBpbml0U2Nyb2xsYmFyKCdzaWRlYmFyJyk7XG4gICAgICAgIGluaXRTY3JvbGxiYXIoJ3NpZGViYXItd3JhcHBlcicpO1xuXG4gICAgICAgIGRvY0NsYXNzZXMuYWRkKCdwZXJmZWN0LXNjcm9sbGJhci1vbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2NDbGFzc2VzLmFkZCgncGVyZmVjdC1zY3JvbGxiYXItb2ZmJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgJHNjYWxlU2l6ZTogLjk1O1xuICBAa2V5ZnJhbWVzIHpvb21Jbjk1IHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoJHNjYWxlU2l6ZSwgJHNjYWxlU2l6ZSwgJHNjYWxlU2l6ZSk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIC5tYWluLXBhbmVsIC56b29tSW4ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tSW45NTtcbiAgfVxuICBAa2V5ZnJhbWVzIHpvb21PdXQ5NSB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKCRzY2FsZVNpemUsICRzY2FsZVNpemUsICRzY2FsZVNpemUpO1xuICAgIH1cbiAgfVxuICAubWFpbi1wYW5lbCAuem9vbU91dCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXQ5NTtcbiAgfVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard/Layout/DashboardLayout.vue?vue&type=script&lang=js&\n");

/***/ })

})