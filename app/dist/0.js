webpackJsonp([0],{

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache_loader_cacheDirectory_Users_tannermoushey_Development_Local_scpilgrim_app_public_wp_content_themes_studychurch_sap_app_node_modules_cache_cache_loader_babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserProfile_vue__ = __webpack_require__(826);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ab397a4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserProfile_vue__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(834)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__cache_loader_cacheDirectory_Users_tannermoushey_Development_Local_scpilgrim_app_public_wp_content_themes_studychurch_sap_app_node_modules_cache_cache_loader_babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserProfile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ab397a4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserProfile_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ab397a4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserProfile_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/Dashboard/Pages/UserProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ab397a4", Component.options)
  } else {
    hotAPI.reload("data-v-3ab397a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserProfile_EditProfileForm_vue__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserProfile_UserCard_vue__ = __webpack_require__(840);
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    EditProfileForm: __WEBPACK_IMPORTED_MODULE_0__UserProfile_EditProfileForm_vue__["a" /* default */],
    UserCard: __WEBPACK_IMPORTED_MODULE_1__UserProfile_UserCard_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: '',
        postalCode: '',
        aboutMe: "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
      }
    };
  },
  methods: {
    updateProfile: function updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
});

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(835);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("1d25fe63", content, false, {"shadowMode":false,"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserProfile.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserProfile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache_loader_cacheDirectory_Users_tannermoushey_Development_Local_scpilgrim_app_public_wp_content_themes_studychurch_sap_app_node_modules_cache_cache_loader_babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditProfileForm_vue__ = __webpack_require__(827);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d479718_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EditProfileForm_vue__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(837)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__cache_loader_cacheDirectory_Users_tannermoushey_Development_Local_scpilgrim_app_public_wp_content_themes_studychurch_sap_app_node_modules_cache_cache_loader_babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditProfileForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d479718_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EditProfileForm_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d479718_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EditProfileForm_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/Dashboard/Pages/UserProfile/EditProfileForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d479718", Component.options)
  } else {
    hotAPI.reload("data-v-2d479718", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(838);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("46ba8657", content, false, {"shadowMode":false,"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditProfileForm.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditProfileForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("card", [
    _c(
      "h5",
      { staticClass: "title", attrs: { slot: "header" }, slot: "header" },
      [_vm._v("Edit Profile")]
    ),
    _c("form", [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-5" },
          [
            _c("fg-input", {
              attrs: {
                type: "text",
                label: "Company",
                disabled: true,
                placeholder: "Paper dashboard"
              },
              model: {
                value: _vm.user.company,
                callback: function($$v) {
                  _vm.$set(_vm.user, "company", $$v)
                },
                expression: "user.company"
              }
            })
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "col-md-3" },
          [
            _c("fg-input", {
              attrs: {
                type: "text",
                label: "Username",
                placeholder: "Username"
              },
              model: {
                value: _vm.user.username,
                callback: function($$v) {
                  _vm.$set(_vm.user, "username", $$v)
                },
                expression: "user.username"
              }
            })
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c("fg-input", {
              attrs: { type: "email", label: "Username", placeholder: "Email" },
              model: {
                value: _vm.user.email,
                callback: function($$v) {
                  _vm.$set(_vm.user, "email", $$v)
                },
                expression: "user.email"
              }
            })
          ],
          1
        )
      ]),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("fg-input", {
              attrs: {
                type: "text",
                label: "First Name",
                placeholder: "First Name"
              },
              model: {
                value: _vm.user.firstName,
                callback: function($$v) {
                  _vm.$set(_vm.user, "firstName", $$v)
                },
                expression: "user.firstName"
              }
            })
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("fg-input", {
              attrs: {
                type: "text",
                label: "Last Name",
                placeholder: "Last Name"
              },
              model: {
                value: _vm.user.lastName,
                callback: function($$v) {
                  _vm.$set(_vm.user, "lastName", $$v)
                },
                expression: "user.lastName"
              }
            })
          ],
          1
        )
      ]),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("fg-input", {
              attrs: {
                type: "text",
                label: "Address",
                placeholder: "Home Address"
              },
              model: {
                value: _vm.user.address,
                callback: function($$v) {
                  _vm.$set(_vm.user, "address", $$v)
                },
                expression: "user.address"
              }
            })
          ],
          1
        )
      ]),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c("fg-input", {
              attrs: { type: "text", label: "City", placeholder: "City" },
              model: {
                value: _vm.user.city,
                callback: function($$v) {
                  _vm.$set(_vm.user, "city", $$v)
                },
                expression: "user.city"
              }
            })
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c("fg-input", {
              attrs: { type: "text", label: "Country", placeholder: "Country" },
              model: {
                value: _vm.user.country,
                callback: function($$v) {
                  _vm.$set(_vm.user, "country", $$v)
                },
                expression: "user.country"
              }
            })
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c("fg-input", {
              attrs: { label: "Postal Code", placeholder: "ZIP Code" },
              model: {
                value: _vm.user.postalCode,
                callback: function($$v) {
                  _vm.$set(_vm.user, "postalCode", $$v)
                },
                expression: "user.postalCode"
              }
            })
          ],
          1
        )
      ]),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("fg-input", { attrs: { label: "About Me" } }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.aboutMe,
                    expression: "user.aboutMe"
                  }
                ],
                staticClass: "form-control",
                attrs: { placeholder: "ZIP Code" },
                domProps: { value: _vm.user.aboutMe },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "aboutMe", $event.target.value)
                  }
                }
              })
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d479718", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache_loader_cacheDirectory_Users_tannermoushey_Development_Local_scpilgrim_app_public_wp_content_themes_studychurch_sap_app_node_modules_cache_cache_loader_babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserCard_vue__ = __webpack_require__(828);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fe9ee54_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserCard_vue__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(841)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__cache_loader_cacheDirectory_Users_tannermoushey_Development_Local_scpilgrim_app_public_wp_content_themes_studychurch_sap_app_node_modules_cache_cache_loader_babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fe9ee54_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserCard_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fe9ee54_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserCard_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/Dashboard/Pages/UserProfile/UserCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fe9ee54", Component.options)
  } else {
    hotAPI.reload("data-v-7fe9ee54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(842);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("9b9b6b82", content, false, {"shadowMode":false,"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserCard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("card", { staticClass: "card-user" }, [
    _c(
      "div",
      { staticClass: "image", attrs: { slot: "image" }, slot: "image" },
      [
        _c("img", {
          attrs: { src: __webpack_require__(74), alt: "..." }
        })
      ]
    ),
    _c("div", [
      _c("div", { staticClass: "author" }, [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            staticClass: "avatar border-gray",
            attrs: { src: __webpack_require__(844), alt: "..." }
          }),
          _c("h5", { staticClass: "title" }, [_vm._v("Mike Andrew")])
        ]),
        _c("p", { staticClass: "description" }, [
          _vm._v("\n        michael24\n      ")
        ])
      ]),
      _c("p", { staticClass: "description text-center" }, [
        _vm._v('\n      "Lamborghini Mercy '),
        _c("br"),
        _vm._v("\n      Your chick she so thirsty "),
        _c("br"),
        _vm._v("\n      I'm in that two seat Lambo\"\n    ")
      ])
    ]),
    _c(
      "div",
      {
        staticClass: "button-container",
        attrs: { slot: "footer" },
        slot: "footer"
      },
      [
        _c(
          "n-button",
          {
            attrs: {
              href: "#",
              type: "neutral",
              icon: "",
              round: "",
              size: "lg"
            }
          },
          [_c("i", { staticClass: "fa fa-facebook-square" })]
        ),
        _c(
          "n-button",
          {
            attrs: {
              href: "#",
              type: "neutral",
              icon: "",
              round: "",
              size: "lg"
            }
          },
          [_c("i", { staticClass: "fa fa-twitter" })]
        ),
        _c(
          "n-button",
          {
            attrs: {
              href: "#",
              type: "neutral",
              icon: "",
              round: "",
              size: "lg"
            }
          },
          [_c("i", { staticClass: "fa fa-google-plus-square" })]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fe9ee54", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mike.aab414f7.jpg";

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-lg-8 col-md-7" },
      [_c("edit-profile-form")],
      1
    ),
    _c("div", { staticClass: "col-lg-4 col-md-5" }, [_c("user-card")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3ab397a4", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});