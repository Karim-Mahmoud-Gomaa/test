(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SupplierOrders/Show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/App */ "./resources/js/layouts/App.vue");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pagination */ "./resources/js/components/pagination.vue");
/* harmony import */ var _components_modals_supplier_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modals/supplier/order */ "./resources/js/components/modals/supplier/order.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FormModal: _components_modals_supplier_order__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      order: null
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/supplier_orders/' + this.$route.params.order_id).then(function (_ref) {
        var data = _ref.data;
        _this.order = data.success.order;
      })["catch"](function (error) {
        _this.$router.push({
          name: "supplier_orders"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Show.vue?vue&type=template&id=71b5ff22&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SupplierOrders/Show.vue?vue&type=template&id=71b5ff22& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                _c("h4", { staticClass: "mb-0" }, [_vm._v("تفاصيل الفاتورة")]),
                _vm._v(" "),
                _c("form-modal", {
                  ref: "FormModal",
                  attrs: { fetchData: _vm.fetchData }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _vm.order
            ? _c("div", { staticClass: "col-lg-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      staticClass: "card-body",
                      staticStyle: { margin: "20px" }
                    },
                    [
                      _c("div", { staticClass: "invoice-title" }, [
                        _c(
                          "h4",
                          {
                            staticClass: "float-end font-size-16",
                            staticStyle: { "text-align": "center" }
                          },
                          [
                            _vm._v(
                              "رقم الفاتورة #" +
                                _vm._s(_vm.order.id) +
                                _vm._s(
                                  _vm._f("moment")(
                                    _vm.order.created_at,
                                    "DDMMYY"
                                  )
                                ) +
                                "\n                              "
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(
                              "\n                              تاريخ الفاتورة " +
                                _vm._s(
                                  _vm._f("moment")(
                                    _vm.order.created_at,
                                    "DD-MM-YYYY"
                                  )
                                ) +
                                "\n                              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-4" }),
                        _vm._v(" "),
                        _vm.order.supplier
                          ? _c("div", { staticClass: "text-muted" }, [
                              _c("p", { staticClass: "mb-1" }, [
                                _c("b", { staticStyle: { float: "left" } }, [
                                  _vm._v(" أسم المورد : ")
                                ]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.order.supplier.name) +
                                    " \n                                  "
                                )
                              ])
                            ])
                          : _c(
                              "div",
                              {
                                staticClass: "text-muted",
                                staticStyle: { height: "50px" }
                              },
                              [
                                _c("p", { staticClass: "mb-1" }, [
                                  _c("b", { staticStyle: { float: "left" } }, [
                                    _vm._v(" نوع الفاتورة : ")
                                  ]),
                                  _vm._v(
                                    " Admin Order \n                                  "
                                  )
                                ])
                              ]
                            )
                      ]),
                      _vm._v(" "),
                      _c("hr", { staticClass: "my-4" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "py-2" },
                        [
                          _c("h5", { staticClass: "font-size-15" }, [
                            _vm._v("تفاصيل الفاتورة")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.order.order_products, function(
                            order_product,
                            index
                          ) {
                            return _c(
                              "div",
                              {
                                staticClass: "table-responsive",
                                staticStyle: { "overflow-x": "clip" }
                              },
                              [
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table table-nowrap table-centered mb-0"
                                  },
                                  [
                                    index == 0
                                      ? _c("thead", [
                                          _c("tr", [
                                            _c(
                                              "th",
                                              {
                                                staticStyle: { width: "70px" }
                                              },
                                              [_vm._v("No.")]
                                            ),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("المنتج")]),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("السعر")]),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("الكمية")]),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("المتاح")]),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("إجمالي")]),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("خيارات")])
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("tbody", [
                                      _c("tr", [
                                        _c("th", { attrs: { scope: "row" } }, [
                                          _vm._v(_vm._s(index + 1))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", { staticClass: "col-md-3" }, [
                                          _c(
                                            "h5",
                                            {
                                              staticClass: "font-size-15 mb-1"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  order_product.product.name
                                                )
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.moneyFormat(
                                                order_product.price,
                                                0
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(order_product.qty))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(order_product.avaliable)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.moneyFormat(
                                                order_product.price *
                                                  order_product.qty,
                                                0
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "btn-group" },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-light dropdown-toggle",
                                                  attrs: {
                                                    type: "button",
                                                    "data-bs-toggle":
                                                      "dropdown",
                                                    "aria-haspopup": "true",
                                                    "aria-expanded": "false"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                      المزيد "
                                                  ),
                                                  _c("i", {
                                                    staticClass:
                                                      "mdi mdi-chevron-down"
                                                  })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "dropdown-menu",
                                                  staticStyle: {
                                                    "min-width": "120px"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "dropdown-item dropdownItem",
                                                      attrs: {
                                                        href: "javascript:;"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.$refs.FormModal.edit(
                                                            order_product
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "far fa-edit"
                                                      }),
                                                      _vm._v(
                                                        " تعديل\n                                                          "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  order_product.editable
                                                    ? _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "dropdown-item dropdownItem",
                                                          attrs: {
                                                            href: "javascript:;"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.$refs.FormModal.destroy(
                                                                _vm.order.id
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "far fa-trash-alt"
                                                          }),
                                                          _vm._v(
                                                            " حذف\n                                                          "
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("hr", { staticStyle: { color: "#888" } }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "row ms-5" },
                                    _vm._l(order_product.details, function(
                                      detail
                                    ) {
                                      return _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-md-3 col-sm-4 col-xs-6 font-size-12"
                                        },
                                        [
                                          detail.option_value
                                            ? _c("label", [
                                                _c("b", [
                                                  _vm._v(
                                                    _vm._s(detail.option.name)
                                                  )
                                                ]),
                                                _vm._v(
                                                  " / " +
                                                    _vm._s(
                                                      detail.option_value.name
                                                    )
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          detail.value
                                            ? _c("label", [
                                                _c("b", [
                                                  _vm._v(
                                                    _vm._s(detail.option.name)
                                                  )
                                                ]),
                                                _vm._v(
                                                  " / " + _vm._s(detail.value)
                                                )
                                              ])
                                            : _vm._e()
                                        ]
                                      )
                                    }),
                                    0
                                  ),
                                  _vm._v(" "),
                                  _c("hr", { staticStyle: { color: "#888" } })
                                ])
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "h4",
                              { staticStyle: { "text-align": "right" } },
                              [
                                _c("b", [_vm._v("إجمالي الفاتورة :")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.moneyFormat(_vm.order.total, 0))
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "d-print-none mt-4" }, [
                            _c("div", { staticClass: "float-end" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-success waves-effect waves-light me-1",
                                  attrs: { href: "javascript:window.print()" }
                                },
                                [_c("i", { staticClass: "fa fa-print" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-danger w-md waves-effect waves-light",
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.FormModal.destroy(
                                        _vm.order.id
                                      )
                                    }
                                  }
                                },
                                [_vm._v("حذف")]
                              )
                            ])
                          ])
                        ],
                        2
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

/***/ "./resources/js/pages/SupplierOrders/Show.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/SupplierOrders/Show.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_71b5ff22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=71b5ff22& */ "./resources/js/pages/SupplierOrders/Show.vue?vue&type=template&id=71b5ff22&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/SupplierOrders/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_71b5ff22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_71b5ff22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SupplierOrders/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SupplierOrders/Show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/SupplierOrders/Show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/SupplierOrders/Show.vue?vue&type=template&id=71b5ff22&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/SupplierOrders/Show.vue?vue&type=template&id=71b5ff22& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_71b5ff22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=71b5ff22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Show.vue?vue&type=template&id=71b5ff22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_71b5ff22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_71b5ff22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=34.js.map