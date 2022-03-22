(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

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
/* harmony import */ var _components_modals_client_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modals/client/add */ "./resources/js/components/modals/client/add.vue");
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
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LayoutDefault: _layouts_App__WEBPACK_IMPORTED_MODULE_0__["default"],
    PaginationNav: _components_pagination__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormModal: _components_modals_client_add__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      client: null,
      loader: false
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      this.loader = true;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/clients/' + this.$route.params.client_id).then(function (_ref) {
        var data = _ref.data;
        _this.client = data.success.client;
        _this.loader = false;
      })["catch"](function (error) {
        _this.$router.push({
          name: "clients"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6& ***!
  \********************************************************************************************************************************************************************************************************/
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
                _c("h4", { staticClass: "mb-0" }, [_vm._v("معلومات العميل")]),
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
          _vm.client
            ? _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "card h-100" }, [
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
                                    return _vm.$refs.FormModal.edit(_vm.client)
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
                                      _vm.client.id
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "far fa-trash-alt" }),
                                _vm._v(
                                  " حذف العميل\n                                  "
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
                        _c(
                          "div",
                          { staticClass: "row " },
                          [
                            _c(
                              "p",
                              {
                                staticClass: "mt-4 mb-1 col-md-3 font-size-15"
                              },
                              [
                                _c("b", { staticStyle: { float: "left" } }, [
                                  _vm._v(" الأسم : ")
                                ]),
                                _vm._v("\t  " + _vm._s(_vm.client.name) + " ")
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
                                  _vm._v(" تاريخ التسجيل : ")
                                ]),
                                _vm._v(
                                  "\n                                  \t  " +
                                    _vm._s(
                                      _vm._f("moment")(
                                        _vm.client.created_at,
                                        "DD-MM-YYYY"
                                      )
                                    ) +
                                    "\n                                  "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("hr"),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "mt-4 mb-1 col-md-4 font-size-15"
                              },
                              [
                                _c("b", { staticStyle: { float: "left" } }, [
                                  _vm._v(" أستعلام جنائي : ")
                                ]),
                                _vm._v(
                                  "\n                                  \t  \n                                    "
                                ),
                                _vm.client.request_1
                                  ? _c(
                                      "span",
                                      { staticClass: "text-success" },
                                      [
                                        _c("i", {
                                          staticClass: "far fa-check-circle"
                                        }),
                                        _vm._v(
                                          " تم الأستعلام\n                                    "
                                        )
                                      ]
                                    )
                                  : _c("span", { staticClass: "text-danger" }, [
                                      _c("i", {
                                        staticClass: "far fa-times-circle"
                                      }),
                                      _vm._v(
                                        " لم يتم الأستعلام\n                                    "
                                      )
                                    ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "mt-4 mb-1 col-md-4 font-size-15"
                              },
                              [
                                _c("b", { staticStyle: { float: "left" } }, [
                                  _vm._v(" أستعلام ميداني : ")
                                ]),
                                _vm._v(
                                  "\n                                  \t  \n                                    "
                                ),
                                _vm.client.request_2
                                  ? _c(
                                      "span",
                                      { staticClass: "text-success" },
                                      [
                                        _c("i", {
                                          staticClass: "far fa-check-circle"
                                        }),
                                        _vm._v(
                                          " تم الأستعلام\n                                    "
                                        )
                                      ]
                                    )
                                  : _c("span", { staticClass: "text-danger" }, [
                                      _c("i", {
                                        staticClass: "far fa-times-circle"
                                      }),
                                      _vm._v(
                                        " لم يتم الأستعلام\n                                    "
                                      )
                                    ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.client.info, function(info, index) {
                              return _c(
                                "p",
                                {
                                  staticClass: "mt-4 mb-1 col-md-4 font-size-15"
                                },
                                [
                                  _c("b", { staticStyle: { float: "left" } }, [
                                    _vm._v(" " + _vm._s(info.name) + " : ")
                                  ]),
                                  _vm._v(
                                    "\t  " +
                                      _vm._s(info.pivot.data) +
                                      " \n                                  "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "h5",
                      {
                        staticClass: "font-size-20 mb-4 mt-5 text-center",
                        staticStyle: { "font-weight": "600" }
                      },
                      [_vm._v("فواتير العميل")]
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
                            _c("th", [_vm._v("رقم الفاتورة")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("إجمالي الفاتورة")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("مقدم")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("شهور التقسيط")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("تاريخ الفاتورة")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("تاريخ التسليم")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("خيارات")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.client.orders, function(order, index) {
                            return _c("tr", [
                              _c("td", [
                                _vm._v(
                                  "#" +
                                    _vm._s(order.id) +
                                    _vm._s(
                                      _vm._f("moment")(
                                        order.created_at,
                                        "DDMMYY"
                                      )
                                    )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm.moneyFormat(order.total, 0)) +
                                    " L.E"
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm.moneyFormat(order.pay, 0)) + " L.E"
                                )
                              ]),
                              _vm._v(" "),
                              order.status < 2
                                ? _c("td", [
                                    _c(
                                      "span",
                                      {
                                        class:
                                          order.payment_count == order.months
                                            ? "text-success"
                                            : "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          "\n                              " +
                                            _vm._s(order.payment_count)
                                        )
                                      ]
                                    ),
                                    _vm._v(
                                      "/" +
                                        _vm._s(order.months) +
                                        "\n                            "
                                    )
                                  ])
                                : _c("td", [
                                    _c(
                                      "span",
                                      { staticClass: "text-success" },
                                      [_vm._v(_vm._s(order.months))]
                                    ),
                                    _vm._v(
                                      "/" +
                                        _vm._s(order.months) +
                                        "\n                            "
                                    )
                                  ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("moment")(
                                      order.created_at,
                                      "DD-MM-YYYY"
                                    )
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("moment")(
                                      order.confirmed_at,
                                      "DD-MM-YYYY"
                                    )
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("div", { staticClass: "btn-group" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-light dropdown-toggle",
                                      attrs: {
                                        type: "button",
                                        "data-bs-toggle": "dropdown",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    المزيد "
                                      ),
                                      _c("i", {
                                        staticClass: "mdi mdi-chevron-down"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "dropdown-menu",
                                      staticStyle: { "min-width": "120px" }
                                    },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "dropdown-item",
                                          attrs: {
                                            to: {
                                              name: "client_orders_show",
                                              params: { order_id: order.id }
                                            },
                                            tag: "a"
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "far fa-eye"
                                          }),
                                          _vm._v(
                                            " رؤية\n                                      "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "dropdown-item dropdownItem",
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.FormModal.destroyOrder(
                                                order.id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "far fa-trash-alt"
                                          }),
                                          _vm._v(
                                            " حذف\n                                      "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ])
                          }),
                          0
                        )
                      ]
                    )
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

/***/ "./resources/js/pages/Users/Show.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Users/Show.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=790931e6& */ "./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/Users/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=790931e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=60.js.map