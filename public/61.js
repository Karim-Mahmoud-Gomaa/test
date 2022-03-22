(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suppliers/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Suppliers/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/App */ "./resources/js/layouts/App.vue");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pagination */ "./resources/js/components/pagination.vue");
/* harmony import */ var _components_modals_supplier_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modals/supplier/add */ "./resources/js/components/modals/supplier/add.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LayoutDefault: _layouts_App__WEBPACK_IMPORTED_MODULE_0__["default"],
    PaginationNav: _components_pagination__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormModal: _components_modals_supplier_add__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      suppliers: null,
      loader: false
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.suppliers = null;
      this.loader = true;
      var data = {
        params: {
          page: num
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/suppliers', data).then(function (_ref) {
        var data = _ref.data;
        // console.log(data.id=="032E02B4-0499-05F3-FE06-0F0700080009")
        _this.suppliers = data.success.suppliers;

        if (!data.success.suppliers.data.length && num != 1) {
          _this.fetchData(1);
        }

        _this.loader = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suppliers/Index.vue?vue&type=template&id=06c8ed5e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Suppliers/Index.vue?vue&type=template&id=06c8ed5e& ***!
  \*************************************************************************************************************************************************************************************************************/
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
                _c("h4", { staticClass: "mb-0" }, [_vm._v("جدول الموردين")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "page-title-right" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success waves-effect waves-light",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.$refs.FormModal.create()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            + إضافة جديد\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
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
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _vm.suppliers && _vm.suppliers.data.length
                ? _c(
                    "div",
                    { staticClass: "card-body" },
                    [
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
                              _c("th", [_vm._v("الأسم")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("التليفون")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("تاريخ التسجيل")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("نوع المحاسبة")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("مستحقات")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("خيارات")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.suppliers.data, function(
                              supplier,
                              index
                            ) {
                              return _c("tr", [
                                _c("td", [_vm._v(_vm._s(supplier.name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(supplier.phone1))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("moment")(
                                        supplier.created_at,
                                        "DD/MM/YYYY"
                                      )
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                supplier.status == 1
                                  ? _c(
                                      "td",
                                      { staticStyle: { "font-weight": "600" } },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "float-start text-success"
                                          },
                                          [_vm._v("فوري")]
                                        )
                                      ]
                                    )
                                  : _c(
                                      "td",
                                      { staticStyle: { "font-weight": "600" } },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "float-start text-primary"
                                          },
                                          [_vm._v("بعد البيع")]
                                        )
                                      ]
                                    ),
                                _vm._v(" "),
                                supplier.total_amount > 0
                                  ? _c(
                                      "td",
                                      { staticStyle: { "font-weight": "600" } },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "float-start text-danger"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.moneyFormat(
                                                  supplier.total_amount,
                                                  0
                                                )
                                              ) + " L.E"
                                            )
                                          ]
                                        ),
                                        _vm._v("\t  متبقي له")
                                      ]
                                    )
                                  : _c(
                                      "td",
                                      { staticStyle: { "font-weight": "600" } },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "float-start text-primary"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.moneyFormat(
                                                  supplier.total_amount * -1,
                                                  0
                                                )
                                              ) + " L.E"
                                            )
                                          ]
                                        ),
                                        _vm._v("\t  متبقي عليه")
                                      ]
                                    ),
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
                                          "\n                                        المزيد "
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
                                                name: "supplier_show",
                                                params: {
                                                  supplier_id: supplier.id
                                                }
                                              },
                                              tag: "a"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "far fa-eye"
                                            }),
                                            _vm._v(
                                              " رؤية\n                                          "
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
                                                return _vm.$refs.FormModal.edit(
                                                  supplier
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "far fa-edit"
                                            }),
                                            _vm._v(
                                              " تعديل\n                                          "
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
                                                return _vm.$refs.FormModal.destroy(
                                                  supplier.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "far fa-trash-alt"
                                            }),
                                            _vm._v(
                                              " حذف\n                                          "
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
                      ),
                      _vm._v(" "),
                      _vm.suppliers.last_page > 1
                        ? _c("pagination-nav", {
                            attrs: {
                              pageSize: 5,
                              currentPage: 2,
                              GoToPage: _vm.GoToPage
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                : _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _vm.loader
                        ? _c("beat-loader", {
                            attrs: { loading: _vm.loader, color: "#5578eb" }
                          })
                        : _c(
                            "p",
                            {
                              staticClass: "card-title-desc",
                              staticStyle: { "text-align": "center" }
                            },
                            [
                              _vm._v(
                                "\n                          لا يوجد بيانات حتى الآن\n                        "
                              )
                            ]
                          )
                    ],
                    1
                  )
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

/***/ "./resources/js/pages/Suppliers/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/Suppliers/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_06c8ed5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=06c8ed5e& */ "./resources/js/pages/Suppliers/Index.vue?vue&type=template&id=06c8ed5e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Suppliers/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_06c8ed5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_06c8ed5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Suppliers/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Suppliers/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Suppliers/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suppliers/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Suppliers/Index.vue?vue&type=template&id=06c8ed5e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Suppliers/Index.vue?vue&type=template&id=06c8ed5e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_06c8ed5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=06c8ed5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suppliers/Index.vue?vue&type=template&id=06c8ed5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_06c8ed5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_06c8ed5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=61.js.map