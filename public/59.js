(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suppliers/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Suppliers/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/App */ "./resources/js/layouts/App.vue");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pagination */ "./resources/js/components/pagination.vue");
/* harmony import */ var _components_modals_supplier_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modals/supplier/add */ "./resources/js/components/modals/supplier/add.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FormModal: _components_modals_supplier_add__WEBPACK_IMPORTED_MODULE_2__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      supplier: null,
      loader: false,
      amounts: null,
      filter: {
        from: null,
        to: null
      }
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    clear: function clear() {
      this.filter.from = null;
      this.filter.to = null;
      this.fetchData(1);
    },
    fetchData: function fetchData() {
      var _this = this;

      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.loader = true;
      var data = {
        params: {
          page: num,
          filter: this.filter
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/suppliers/' + this.$route.params.supplier_id, data).then(function (_ref) {
        var data = _ref.data;
        _this.supplier = data.success.supplier; // this.orders=data.success.orders;
        // this.payments=data.success.payments;

        _this.amounts = data.success.amounts; // console.log(data.success.orders);

        _this.loader = false;
      })["catch"](function (error) {
        _this.$router.push({
          name: "suppliers"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suppliers/Show.vue?vue&type=template&id=88bb3164&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Suppliers/Show.vue?vue&type=template&id=88bb3164& ***!
  \************************************************************************************************************************************************************************************************************/
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
                _c("h4", { staticClass: "mb-0" }, [_vm._v("معلومات المورد")]),
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
          _vm.supplier
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
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
                                    return _vm.$refs.FormModal.edit(
                                      _vm.supplier
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "far fa-edit" }),
                                _vm._v(
                                  " تعديل البيانات\n                                  "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function($event) {
                                    return _vm.$refs.FormModal.destroy(
                                      _vm.supplier.id
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "far fa-trash-alt" }),
                                _vm._v(
                                  " حذف المورد\n                                  "
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
                      _c("div", { staticClass: " mt-4" }, [
                        _c("div", { staticClass: "row " }, [
                          _c(
                            "p",
                            { staticClass: "mt-4 mb-1 col-md-6 font-size-15" },
                            [
                              _c("b", { staticStyle: { float: "left" } }, [
                                _vm._v(" الأسم : ")
                              ]),
                              _vm._v("\t  " + _vm._s(_vm.supplier.name) + " ")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "mt-4 mb-1 col-md-6 font-size-15" },
                            [
                              _c("b", { staticStyle: { float: "left" } }, [
                                _vm._v(" تليفون أول : ")
                              ]),
                              _vm._v(
                                "\t  " +
                                  _vm._s(_vm.supplier.phone1) +
                                  " \n                                  "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "mt-4 mb-1 col-md-6 font-size-15" },
                            [
                              _c("b", { staticStyle: { float: "left" } }, [
                                _vm._v(" تليفون ثانٍ : ")
                              ]),
                              _vm._v(
                                "\t  " +
                                  _vm._s(_vm.supplier.phone2) +
                                  " \n                                  "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "mt-4 mb-1 col-md-6 font-size-15" },
                            [
                              _vm.supplier.amount >= 0
                                ? _c("b", { staticStyle: { float: "left" } }, [
                                    _vm._v(" رصيد افتتاحي له : ")
                                  ])
                                : _c("b", { staticStyle: { float: "left" } }, [
                                    _vm._v(" رصيد افتتاحي عليه : ")
                                  ]),
                              _vm._v(
                                "\n                                  \t  " +
                                  _vm._s(
                                    _vm.moneyFormat(_vm.supplier.amount, 0)
                                  ) +
                                  " L.E\n                                  "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "mt-4 mb-1 col-md-6 font-size-15" },
                            [
                              _c("b", { staticStyle: { float: "left" } }, [
                                _vm._v(" تاريخ التسجيل : ")
                              ]),
                              _vm._v(
                                "\n                                  \t  " +
                                  _vm._s(
                                    _vm._f("moment")(
                                      _vm.supplier.created_at,
                                      "DD-MM-YYYY"
                                    )
                                  ) +
                                  "\n                                  "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "mt-4 mb-1 col-md-6 font-size-15" },
                            [
                              _vm.supplier.total_amount > 0
                                ? _c(
                                    "b",
                                    {
                                      staticClass: "float-start text-danger",
                                      staticStyle: { float: "left" }
                                    },
                                    [_vm._v(" متبقي له : ")]
                                  )
                                : _c(
                                    "b",
                                    {
                                      staticClass: "float-start text-primary",
                                      staticStyle: { float: "left" }
                                    },
                                    [_vm._v(" متبقي عليه : ")]
                                  ),
                              _vm._v("\n                                     "),
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    _vm.supplier.total_amount > 0
                                      ? _vm.moneyFormat(
                                          _vm.supplier.total_amount,
                                          0
                                        )
                                      : _vm.moneyFormat(
                                          _vm.supplier.total_amount * -1,
                                          0
                                        )
                                  ) + " L.E"
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "mt-4 mb-1 col-md-12 font-size-15" },
                            [
                              _c("b", { staticStyle: { float: "left" } }, [
                                _vm._v(" العنوان : ")
                              ]),
                              _vm._v(
                                "\t  " +
                                  _vm._s(_vm.supplier.address) +
                                  " \n                                  "
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row mb-4" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-3" },
                        [
                          _c("Datepicker", {
                            attrs: {
                              placeholder: "From",
                              "input-class": "form-control",
                              format: "dd-MM-yyyy"
                            },
                            on: {
                              input: function($event) {
                                return _vm.fetchData(1)
                              }
                            },
                            model: {
                              value: _vm.filter.from,
                              callback: function($$v) {
                                _vm.$set(_vm.filter, "from", $$v)
                              },
                              expression: "filter.from"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-3" },
                        [
                          _c("Datepicker", {
                            attrs: {
                              placeholder: "To",
                              "input-class": "form-control",
                              format: "dd-MM-yyyy"
                            },
                            on: {
                              input: function($event) {
                                return _vm.fetchData(1)
                              }
                            },
                            model: {
                              value: _vm.filter.to,
                              callback: function($$v) {
                                _vm.$set(_vm.filter, "to", $$v)
                              },
                              expression: "filter.to"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn text-info",
                            attrs: { href: "javascript:;" },
                            on: { click: _vm.clear }
                          },
                          [_vm._v("Clear")]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12" }, [
                  _vm.amounts && _vm.amounts.length
                    ? _c("div", { staticClass: "card me-1" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c(
                            "h5",
                            {
                              staticClass: "font-size-20 mb-4 mt-5 text-center",
                              staticStyle: { "font-weight": "600" }
                            },
                            [_vm._v("كشف حساب المورد")]
                          ),
                          _vm._v(" "),
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-bordered dt-responsive nowrap",
                              staticStyle: {
                                "border-collapse": "collapse",
                                "border-spacing": "0",
                                width: "100%"
                              },
                              attrs: { id: "datatable" }
                            },
                            [
                              _c("thead", [
                                _c("tr", [
                                  _c("th", [_vm._v("الرصيد")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("دائن")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("مدين")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("البيان")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("التاريخ")])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.amounts, function(amount, index) {
                                  return _c("tr", [
                                    index + 1 == _vm.amounts.length
                                      ? _c(
                                          "td",
                                          {
                                            staticClass: "text-success",
                                            staticStyle: {
                                              "font-weight": "bold"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.moneyFormat(
                                                  amount["amount"],
                                                  0
                                                )
                                              ) + " L.E"
                                            )
                                          ]
                                        )
                                      : _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.moneyFormat(
                                                amount["amount"],
                                                0
                                              )
                                            ) + " L.E"
                                          )
                                        ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          amount["payment"]
                                            ? _vm.moneyFormat(
                                                amount["payment"],
                                                0
                                              ) + " L.E"
                                            : ""
                                        ) + " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          amount["orders"]
                                            ? _vm.moneyFormat(
                                                amount["orders"],
                                                0
                                              ) + " L.E"
                                            : ""
                                        ) + " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    !amount["order_id"]
                                      ? _c("td", [
                                          _vm._v(_vm._s(amount["type"]))
                                        ])
                                      : _c(
                                          "td",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                attrs: {
                                                  to: {
                                                    name:
                                                      "supplier_orders_show",
                                                    params: {
                                                      order_id:
                                                        amount["order_id"]
                                                    }
                                                  },
                                                  tag: "a",
                                                  href: "javascript:;"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                " +
                                                    _vm._s(amount["type"]) +
                                                    "\n                              "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("moment")(
                                            amount["date"],
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
                        ])
                      ])
                    : _c("div", { staticClass: "card ms-1" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c(
                            "h5",
                            {
                              staticClass: "font-size-20 mb-4 mt-5 text-center",
                              staticStyle: { "font-weight": "600" }
                            },
                            [_vm._v("كشف حساب المورد")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-center" }, [
                            _vm._v("لا يوجد نتائج")
                          ])
                        ])
                      ])
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

/***/ "./resources/js/pages/Suppliers/Show.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/Suppliers/Show.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_88bb3164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=88bb3164& */ "./resources/js/pages/Suppliers/Show.vue?vue&type=template&id=88bb3164&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/Suppliers/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_88bb3164___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_88bb3164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Suppliers/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Suppliers/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Suppliers/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suppliers/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Suppliers/Show.vue?vue&type=template&id=88bb3164&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Suppliers/Show.vue?vue&type=template&id=88bb3164& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_88bb3164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=88bb3164& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suppliers/Show.vue?vue&type=template&id=88bb3164&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_88bb3164___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_88bb3164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=59.js.map