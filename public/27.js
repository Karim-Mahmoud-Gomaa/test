(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/App */ "./resources/js/layouts/App.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_countup_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-countup-v2 */ "./node_modules/vue-countup-v2/dist/countup.umd.min.js");
/* harmony import */ var vue_countup_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_countup_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_3__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LayoutDefault: _layouts_App__WEBPACK_IMPORTED_MODULE_0__["default"],
    ICountUp: vue_countup_v2__WEBPACK_IMPORTED_MODULE_2___default.a,
    ApexCharts: apexcharts__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      users: 0,
      categories: 0,
      articles: 0
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/home').then(function (_ref) {
        var data = _ref.data;
        _this.categories = data.success.categories;
        _this.categories = data.success.categories;
        _this.users = data.success.users;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("layout-default", [
    _c("div", { staticClass: "page-content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c(
              "div",
              {
                staticClass:
                  "page-title-box d-flex align-items-center justify-content-between"
              },
              [_c("h4", { staticClass: "mb-0" }, [_vm._v("Home Page")])]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4 col-xl-4" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "float-end mt-2" }, [
                  _c("i", {
                    staticClass: "far fa-chart-bar fa-2x text-primary"
                  })
                ]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "h4",
                    { staticClass: "mb-1 mt-1" },
                    [
                      _c("ICountUp", {
                        attrs: {
                          delay: 1000,
                          endVal: _vm.users,
                          options: { decimalPlaces: 0 }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted mb-0" }, [_vm._v("Users")])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 col-xl-4" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "float-end mt-2" }, [
                  _c("i", {
                    staticClass: "far fa-chart-bar fa-2x text-primary"
                  })
                ]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "h4",
                    { staticClass: "mb-1 mt-1" },
                    [
                      _c("ICountUp", {
                        attrs: {
                          delay: 1000,
                          endVal: _vm.categories,
                          options: { decimalPlaces: 0 }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted mb-0" }, [
                    _vm._v("Categories")
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 col-xl-4" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "float-end mt-2" }, [
                  _c("i", {
                    staticClass: "far fa-chart-bar fa-2x text-primary"
                  })
                ]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "h4",
                    { staticClass: "mb-1 mt-1" },
                    [
                      _c("ICountUp", {
                        attrs: {
                          delay: 1000,
                          endVal: _vm.articles,
                          options: { decimalPlaces: 0 }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted mb-0" }, [
                    _vm._v("Articles")
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b3c5cf30& */ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=b3c5cf30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=27.js.map