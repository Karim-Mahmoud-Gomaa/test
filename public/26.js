(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ClientOrders/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ClientOrders/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/App */ "./resources/js/layouts/App.vue");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pagination */ "./resources/js/components/pagination.vue");
/* harmony import */ var _components_modals_client_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modals/client/add */ "./resources/js/components/modals/client/add.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])({
    user: "auth/user"
  })),
  components: {
    LayoutDefault: _layouts_App__WEBPACK_IMPORTED_MODULE_0__["default"],
    PaginationNav: _components_pagination__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormModal: _components_modals_client_add__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      orders: null,
      loader: false,
      types: [{
        id: 1,
        name: 'تم الأستعلام عنها'
      }, {
        id: 2,
        name: 'لم يستعلم عنها'
      }, {
        id: 3,
        name: 'تم تسليمها'
      }],
      filter: {
        search: null,
        type: null
      }
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    goSearch: function goSearch() {
      this.fetchData();
    },
    fetchData: function fetchData() {
      var _this = this;

      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.orders = null;
      this.loader = true;
      var data = {
        params: {
          page: num,
          filter: this.filter
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/client_orders', data).then(function (_ref) {
        var data = _ref.data;
        _this.orders = data.success.client_orders;

        if (!data.success.client_orders.data.length && num != 1) {
          _this.fetchData(1);
        }

        _this.loader = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ClientOrders/Index.vue?vue&type=template&id=3a10f03c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ClientOrders/Index.vue?vue&type=template&id=3a10f03c& ***!
  \****************************************************************************************************************************************************************************************************************/
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
                _c("h4", { staticClass: "mb-0" }, [
                  _vm._v("جدول فواتير العملاء")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "page-title-right" },
                  [
                    _vm.user && ["admin", "sales"].includes(_vm.user.role)
                      ? _c(
                          "router-link",
                          {
                            staticClass:
                              "btn btn-success waves-effect waves-light",
                            attrs: {
                              to: { name: "client_orders_create" },
                              tag: "button"
                            }
                          },
                          [
                            _vm._v(
                              "\n                            إضافة فاتورة\n                        "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("form-modal", {
                      ref: "FormModal",
                      attrs: { fetchData: _vm.goSearch }
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
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "card-title mb-5 row", attrs: { dir: "rtl" } },
                  [
                    _c(
                      "div",
                      { staticClass: "form-inline col-md-3 float-md-end" },
                      [
                        _c("div", { staticClass: "search-box ms-2" }, [
                          _c("div", { staticClass: "position-relative" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.filter.search,
                                  expression: "filter.search"
                                }
                              ],
                              staticClass: "form-control bg-light rounded",
                              attrs: { type: "text", placeholder: "Search..." },
                              domProps: { value: _vm.filter.search },
                              on: {
                                change: _vm.goSearch,
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.filter,
                                    "search",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "mdi mdi-magnify search-icon"
                            })
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-3" },
                      [
                        _c("v-select", {
                          staticClass: "vselect",
                          staticStyle: { width: "100%" },
                          attrs: {
                            dir: "rtl",
                            label: "name",
                            options: _vm.types,
                            reduce: function(val) {
                              return val.id
                            }
                          },
                          on: { input: _vm.goSearch },
                          model: {
                            value: _vm.filter.type,
                            callback: function($$v) {
                              _vm.$set(_vm.filter, "type", $$v)
                            },
                            expression: "filter.type"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.orders && _vm.orders.data.length
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
                              _c("th", [_vm._v("رقم الفاتورة")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("العميل")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("التليفون")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("إجمالي الفاتورة")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("مقدم")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("شهور التقسيط")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("تاريخ الفاتورة")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("خيارات")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.orders.data, function(order, index) {
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
                                _c("td", [_vm._v(_vm._s(order.name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(order.phone1))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.moneyFormat(
                                        order.price + order.tax,
                                        0
                                      )
                                    ) + " L.E"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.moneyFormat(order.deposit, 0)) +
                                      " L.E"
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
                                            "\n                                " +
                                              _vm._s(order.payment_count)
                                          )
                                        ]
                                      ),
                                      _vm._v(
                                        "/" +
                                          _vm._s(order.months) +
                                          "\n                              "
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
                                          "\n                              "
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
                                          "\n                                      المزيد "
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
                                              " رؤية\n                                        "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.user && _vm.user.role == "admin"
                                          ? _c(
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
                                                  staticClass:
                                                    "far fa-trash-alt"
                                                }),
                                                _vm._v(
                                                  " حذف\n                                        "
                                                )
                                              ]
                                            )
                                          : _vm._e()
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
                      _vm.orders.last_page > 1
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
                                "\n                        لا يوجد بيانات مضافة حتى الآن\n                      "
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

/***/ "./resources/js/pages/ClientOrders/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/ClientOrders/Index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3a10f03c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3a10f03c& */ "./resources/js/pages/ClientOrders/Index.vue?vue&type=template&id=3a10f03c&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/ClientOrders/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3a10f03c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3a10f03c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ClientOrders/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ClientOrders/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/ClientOrders/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ClientOrders/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ClientOrders/Index.vue?vue&type=template&id=3a10f03c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/ClientOrders/Index.vue?vue&type=template&id=3a10f03c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3a10f03c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3a10f03c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ClientOrders/Index.vue?vue&type=template&id=3a10f03c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3a10f03c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3a10f03c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=26.js.map