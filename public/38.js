(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/App */ "./resources/js/layouts/App.vue");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pagination */ "./resources/js/components/pagination.vue");
/* harmony import */ var _components_modals_user_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modals/user/add */ "./resources/js/components/modals/user/add.vue");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
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
    PaginationNav: _components_pagination__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormModal: _components_modals_user_add__WEBPACK_IMPORTED_MODULE_2__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      user: null,
      loader: false,
      data: null,
      rows: null,
      total: 0,
      filter: {
        user_id: null,
        date: new Date().toLocaleString()
      }
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    clear: function clear() {
      this.filter.date = new Date().toLocaleString();
      this.reports();
    },
    fetchData: function fetchData() {
      var _this = this;

      this.loader = true;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/users/' + this.$route.params.user_id).then(function (_ref) {
        var data = _ref.data;
        _this.user = data.success.user;
        _this.filter.user_id = _this.$route.params.user_id;

        _this.reports();
      });
    },
    reports: function reports() {
      var _this2 = this;

      this.loader = true;
      var data = {
        params: {
          filter: this.filter
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/reports/user', data).then(function (_ref2) {
        var data = _ref2.data;
        // console.log(data.success);
        _this2.rows = data.success;
        var that = _this2;
        that.total = 0;
        data.success.forEach(function (value) {
          if (value.status == 1) {
            that.total += value.money / 1;
          } else {
            that.total -= value.money / 1;
          }
        });
        _this2.loader = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
              [
                _c("h4", { staticClass: "mb-0" }, [_vm._v("معلومات الموظف")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "page-title-right" },
                  [
                    _c("form-modal", {
                      ref: "FormModal",
                      attrs: { fetchData: _vm.fetchData }
                    })
                  ],
                  1
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mb-4" }, [
          _vm.user
            ? _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "card h-100" }, [
                  _c(
                    "div",
                    {
                      staticClass: "card-body",
                      staticStyle: { "min-height": "500px" }
                    },
                    [
                      _c("div", { staticClass: "text-center" }, [
                        _c("div", { staticClass: "dropdown float-end" }, [
                          _c(
                            "a",
                            {
                              staticClass:
                                "text-body dropdown-toggle font-size-18",
                              attrs: {
                                href: "#",
                                role: "button",
                                "data-bs-toggle": "dropdown",
                                "aria-haspopup": "true"
                              }
                            },
                            [_c("i", { staticClass: "uil uil-ellipsis-v" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown-menu dropdown-menu-end" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.FormModal.edit(_vm.user)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "far fa-edit" }),
                                  _vm._v(
                                    " تعديل البيانات\n                                  "
                                  )
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "clearfix" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-muted" }, [
                        _c("div", { staticClass: "mt-4" }, [
                          _c("div", { staticClass: "row " }, [
                            _c(
                              "p",
                              {
                                staticClass: "mt-4 mb-1 col-md-3 font-size-15"
                              },
                              [
                                _c("b", { staticStyle: { float: "left" } }, [
                                  _vm._v(" الأسم : ")
                                ]),
                                _vm._v("\t  " + _vm._s(_vm.user.name) + " ")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "mt-4 mb-1 col-md-3 font-size-15"
                              },
                              [
                                _c("b", { staticStyle: { float: "left" } }, [
                                  _vm._v(" التليفون : ")
                                ]),
                                _vm._v("\t  " + _vm._s(_vm.user.phone) + " ")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "mt-4 mb-1 col-md-3 font-size-15"
                              },
                              [
                                _c("b", { staticStyle: { float: "left" } }, [
                                  _vm._v(" الوظيفة : ")
                                ]),
                                _vm._v("\t  " + _vm._s(_vm.user.role) + " ")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "mt-4 mb-1 col-md-3 font-size-15"
                              },
                              [
                                _c("b", { staticStyle: { float: "left" } }, [
                                  _vm._v(" الفرع : ")
                                ]),
                                _vm._v(
                                  "\t  " +
                                    _vm._s(
                                      _vm.user.store
                                        ? _vm.user.store.name
                                        : "-----"
                                    ) +
                                    " "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "mt-4 mb-1 col-md-3 font-size-15"
                              },
                              [
                                _c("b", { staticStyle: { float: "left" } }, [
                                  _vm._v(" الخزينة : ")
                                ]),
                                _vm._v(
                                  "\t  " +
                                    _vm._s(_vm.moneyFormat(_vm.user.money, 0)) +
                                    " EGP"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "mt-4 mb-1 col-md-3 font-size-15"
                              },
                              [
                                _c("b", { staticStyle: { float: "left" } }, [
                                  _vm._v(" تاريخ التعيين : ")
                                ]),
                                _vm._v(
                                  "\n                                  \t  " +
                                    _vm._s(
                                      _vm._f("moment")(
                                        _vm.user.created_at,
                                        "DD-MM-YYYY"
                                      )
                                    ) +
                                    "\n                                  "
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "h5",
                        {
                          staticClass: "font-size-20 mb-4 mt-5 text-center",
                          staticStyle: { "font-weight": "600" }
                        },
                        [
                          _vm._v(
                            "تعاملات الموظف (" +
                              _vm._s(_vm.moneyFormat(_vm.total, 0)) +
                              " EGP)"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-3" },
                          [
                            _c("Datepicker", {
                              attrs: {
                                placeholder: "Select Date",
                                "input-class": "form-control",
                                format: "dd-MM-yyyy"
                              },
                              on: {
                                input: function($event) {
                                  return _vm.reports()
                                }
                              },
                              model: {
                                value: _vm.filter.date,
                                callback: function($$v) {
                                  _vm.$set(_vm.filter, "date", $$v)
                                },
                                expression: "filter.date"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { href: "javascript:;" },
                              on: { click: _vm.clear }
                            },
                            [_vm._v("اليوم")]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.rows && _vm.rows.length
                        ? _c(
                            "table",
                            {
                              staticClass:
                                "mt-3 table table-bordered dt-responsive nowrap",
                              staticStyle: {
                                "border-collapse": "collapse",
                                "border-spacing": "0",
                                width: "100%"
                              }
                            },
                            [
                              _c("thead", [
                                _c("tr", [
                                  _c("th", [_vm._v("ملاحظات")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("البيان")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("النوع")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("المبلغ")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("التاريخ")])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.rows, function(row, index) {
                                  return _c("tr", [
                                    _c("td", [_vm._v(_vm._s(row.note1) + " ")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(row.note) + " ")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(row.type) + " ")]),
                                    _vm._v(" "),
                                    row.status == 1
                                      ? _c(
                                          "td",
                                          {
                                            staticClass: "text-success",
                                            staticStyle: {
                                              "font-weight": "bold"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-arrow-down"
                                            }),
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.moneyFormat(row.money, 0)
                                                ) +
                                                "\n                                "
                                            )
                                          ]
                                        )
                                      : _c(
                                          "td",
                                          {
                                            staticClass: "text-danger",
                                            staticStyle: {
                                              "font-weight": "bold"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-arrow-up"
                                            }),
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.moneyFormat(row.money, 0)
                                                ) +
                                                "\n                                "
                                            )
                                          ]
                                        ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("moment")(
                                            row.created_at,
                                            "DD-MM-YYYY"
                                          )
                                        )
                                      )
                                    ])
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        : _c(
                            "div",
                            { staticClass: "mt-3 row" },
                            [
                              _vm.loader
                                ? _c("beat-loader", {
                                    attrs: {
                                      loading: _vm.loader,
                                      color: "#5578eb"
                                    }
                                  })
                                : _c(
                                    "p",
                                    {
                                      staticClass: "card-title-desc",
                                      staticStyle: { "text-align": "center" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                          لا يوجد بيانات حتى في هذا اليوم\n                        "
                                      )
                                    ]
                                  )
                            ],
                            1
                          )
                    ]
                  )
                ])
              ])
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Users/Show.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Users/Show.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_790931e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=790931e6&scoped=true& */ "./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/Users/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_790931e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_790931e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "790931e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Users/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Users/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Users/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_790931e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=790931e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_790931e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_790931e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=38.js.map