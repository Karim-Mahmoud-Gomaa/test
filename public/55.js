(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/Money.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/Money.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/App */ "./resources/js/layouts/App.vue");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pagination */ "./resources/js/components/pagination.vue");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _components_modals_input_type_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modals/input_type/add */ "./resources/js/components/modals/input_type/add.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LayoutDefault: _layouts_App__WEBPACK_IMPORTED_MODULE_0__["default"],
    PaginationNav: _components_pagination__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormModal: _components_modals_input_type_add__WEBPACK_IMPORTED_MODULE_3__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      currentPage: 1,
      pageSize: 5,
      data: null,
      rows: null,
      loader: false,
      filter: {
        types: ['inputs', 'payments'],
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
    gotoPage: function gotoPage() {
      var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.currentPage = pageNumber;
      this.rows = this.data.slice((pageNumber - 1) * 10, pageNumber * 10);
      console.log(pageNumber, this.rows);
    },
    fetchData: function fetchData() {
      var _this = this;

      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.currentPage = num;
      this.rows = null;
      this.loader = true;
      var data = {
        params: {
          filter: this.filter
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/reports/money', data).then(function (_ref) {
        var data = _ref.data;
        _this.data = data.success;
        var len = data.success.length;
        _this.pageSize = len % 10 > 0 ? parseInt(len / 10) + 1 : len / 10;

        _this.gotoPage();

        _this.loader = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/Money.vue?vue&type=template&id=24fc84d2&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports/Money.vue?vue&type=template&id=24fc84d2& ***!
  \***********************************************************************************************************************************************************************************************************/
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
              [_c("h4", { staticClass: "mb-0" }, [_vm._v("جدول الدخل")])]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
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
                    _c("div", { staticClass: "form-check mt-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.filter.types,
                            expression: "filter.types"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: {
                          value: "inputs",
                          type: "checkbox",
                          id: "formrow-customCheck"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.filter.types)
                            ? _vm._i(_vm.filter.types, "inputs") > -1
                            : _vm.filter.types
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$a = _vm.filter.types,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = "inputs",
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.filter,
                                      "types",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.filter,
                                      "types",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.filter, "types", $$c)
                              }
                            },
                            function($event) {
                              return _vm.fetchData(1)
                            }
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "form-check-label font-size-16",
                          staticStyle: { "font-weight": "bold" },
                          attrs: { for: "formrow-customCheck" }
                        },
                        [_vm._v("إيرادات")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "form-check mt-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.filter.types,
                            expression: "filter.types"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: {
                          value: "payments",
                          type: "checkbox",
                          id: "formrow-customCheck2"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.filter.types)
                            ? _vm._i(_vm.filter.types, "payments") > -1
                            : _vm.filter.types
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$a = _vm.filter.types,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = "payments",
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.filter,
                                      "types",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.filter,
                                      "types",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.filter, "types", $$c)
                              }
                            },
                            function($event) {
                              return _vm.fetchData(1)
                            }
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "form-check-label font-size-16",
                          staticStyle: { "font-weight": "bold" },
                          attrs: { for: "formrow-customCheck2" }
                        },
                        [_vm._v("مصروفات")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { href: "javascript:;" },
                        on: { click: _vm.clear }
                      },
                      [_vm._v("Clear")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mb-4" })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _vm.rows && _vm.rows.length
                ? _c("div", { staticClass: "card me-1" }, [
                    _c("div", { staticClass: "card-body" }, [
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
                                        staticStyle: { "font-weight": "bold" }
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
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  : _c(
                                      "td",
                                      {
                                        staticClass: "text-danger",
                                        staticStyle: { "font-weight": "bold" }
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
                                            "\n                                        "
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
                    ]),
                    _vm._v(" "),
                    _vm.pageSize > 1
                      ? _c("div", { staticClass: "col-12 ms-2" }, [
                          _c(
                            "nav",
                            {
                              attrs: { "aria-label": "Page navigation example" }
                            },
                            [
                              _c(
                                "ul",
                                { staticClass: "pagination" },
                                [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "page-item",
                                      class: { disabled: _vm.currentPage == 1 }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "page-link",
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function($event) {
                                              return _vm.gotoPage(
                                                _vm.currentPage - 1
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("Previous")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.pageSize, function(index) {
                                    return _c(
                                      "li",
                                      {
                                        key: index,
                                        staticClass: "page-item",
                                        class: {
                                          active: index == _vm.currentPage
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "page-link",
                                            attrs: { href: "javascript:;" },
                                            on: {
                                              click: function($event) {
                                                return _vm.gotoPage(index)
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(index))]
                                        )
                                      ]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "li",
                                    {
                                      staticClass: "page-item",
                                      class: {
                                        disabled:
                                          _vm.currentPage == _vm.pageSize
                                      }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "page-link",
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function($event) {
                                              return _vm.gotoPage(
                                                _vm.currentPage + 1
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("Next")]
                                      )
                                    ]
                                  )
                                ],
                                2
                              )
                            ]
                          )
                        ])
                      : _vm._e()
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
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Reports/Money.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Reports/Money.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Money_vue_vue_type_template_id_24fc84d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Money.vue?vue&type=template&id=24fc84d2& */ "./resources/js/pages/Reports/Money.vue?vue&type=template&id=24fc84d2&");
/* harmony import */ var _Money_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Money.vue?vue&type=script&lang=js& */ "./resources/js/pages/Reports/Money.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Money_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Money_vue_vue_type_template_id_24fc84d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Money_vue_vue_type_template_id_24fc84d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Reports/Money.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Reports/Money.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Reports/Money.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Money_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Money.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/Money.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Money_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Reports/Money.vue?vue&type=template&id=24fc84d2&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Reports/Money.vue?vue&type=template&id=24fc84d2& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Money_vue_vue_type_template_id_24fc84d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Money.vue?vue&type=template&id=24fc84d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports/Money.vue?vue&type=template&id=24fc84d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Money_vue_vue_type_template_id_24fc84d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Money_vue_vue_type_template_id_24fc84d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=55.js.map