(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_4__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ApexCharts: apexcharts__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])({
    user: "auth/user"
  })),
  data: function data() {
    return {
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '50%'
            }
          }
        },
        labels: ['']
      },
      totalPayments: null,
      totals: {
        sms_credit: 0
      },
      sort: {
        cart: 'Week',
        color: 'Week',
        product: 'Week'
      },
      carts: {
        counts: null,
        prices: null
      },
      colors: [],
      products: []
    };
  },
  created: function created() {
    this.fetchData(); // let externalScript = document.createElement('script')
    // externalScript.setAttribute('src', 'http://localhost:8000/assets/libs/bootstrap/js/bootstrap.bundle.min.js?v'+Math.random())
    // document.head.appendChild(externalScript)
    // $(document).ready(function () {
    //     console.log('ddd')
    //     $('.dropdown').dropdown()
    // })
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/home').then(function (_ref) {
        var data = _ref.data;
        _this.totalPayments = data.success.total_payments;
        console.log(data.success.sms_credit); // this.products=data.success.products;
        // this.colors=data.success.colors;

        _this.totals.sms_credit = data.success.sms_credit; // this.totals.orders=data.success.carts.totalCount;
        // this.totals.clients=data.success.clients;
        // this.totals.admins=data.success.admins;
        // this.carts.counts={
        //     series: [{
        //         name: "Orders",type: 'area',
        //         data: data.success.carts.orderCount
        //     }],
        //     options: {
        //         chart: {height:350,type:'area',zoom:{enabled:false}},
        //         dataLabels: {enabled:false},
        //         stroke: {curve:'straight'},
        //         title: {text:'Orders Count',align:'left'},
        //         grid: {row:{colors:['#f3f3f3','transparent'],opacity: 0.5}},
        //         xaxis: {categories:data.success.carts.categories}
        //     }
        // }
        // this.carts.prices={
        //     series: [{
        //         name: "EGP",type: 'area',
        //         data: data.success.carts.orderPrice
        //     }],
        //     options: {
        //         chart: {height:350,type:'area',zoom:{enabled:false}},
        //         dataLabels: {enabled:false},
        //         stroke: {curve:'straight'},
        //         title: {text:'income summery',align:'left'},
        //         grid: {row:{colors:['#f3f3f3','transparent'],opacity: 0.5}},
        //         xaxis: {categories:data.success.carts.categories}
        //     }
        // }
        //   console.log(data);
      });
    },
    colorData: function colorData(sort) {
      var _this2 = this;

      this.sort.color = sort;
      var data = {
        params: {
          sort: sort
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/admin/colors_rate', data).then(function (_ref2) {
        var data = _ref2.data;
        _this2.colors = data.success.colors;
      });
    },
    productData: function productData(sort) {
      var _this3 = this;

      this.sort.product = sort;
      var data = {
        params: {
          sort: sort
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/admin/products_rate', data).then(function (_ref3) {
        var data = _ref3.data;
        _this3.products = data.success.products;
      });
    },
    cartData: function cartData(sort) {
      var _this4 = this;

      // this.carts={null};
      this.sort.cart = sort;
      var data = {
        params: {
          sort: sort
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/admin/carts_rate', data).then(function (_ref4) {
        var data = _ref4.data;
        _this4.carts = data.success.carts;
      });
    },
    ColorStyle: function ColorStyle(number) {
      if (number >= 60) {
        return 'purple';
      }

      if (number >= 40) {
        return 'primary';
      }

      if (number >= 20) {
        return 'success';
      }

      if (number >= 10) {
        return 'info';
      }

      if (number < 10) {
        return 'warning';
      }
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
      _vm.user && ["admin", "financial"].includes(_vm.user.role)
        ? _c("div", { staticClass: "container-fluid" }, [
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
                      _vm._v("الصفحة الرئيسية")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-3 col-xl-3" }, [
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
                              endVal: _vm.totalPayments
                                ? _vm.totalPayments.day
                                : 0,
                              options: { decimalPlaces: 0 }
                            }
                          }),
                          _vm._v(" L.E\n                              ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted mb-0" }, [
                        _vm._v("مصروفات اليوم")
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.totalPayments
                      ? _c(
                          "p",
                          { staticClass: "text-muted mt-3 mb-0" },
                          [
                            _vm.totalPayments.pday > 0
                              ? _c(
                                  "span",
                                  { staticClass: "text-danger me-1" },
                                  [
                                    _c("i", {
                                      staticClass: "mdi mdi-arrow-up-bold me-1"
                                    }),
                                    _vm._v(" "),
                                    _c("ICountUp", {
                                      attrs: {
                                        delay: 1000,
                                        endVal: _vm.totalPayments.pday,
                                        options: { decimalPlaces: 0 }
                                      }
                                    }),
                                    _vm._v("%\n                              ")
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  { staticClass: "text-success me-1" },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "mdi mdi-arrow-down-bold me-1"
                                    }),
                                    _vm._v(" "),
                                    _c("ICountUp", {
                                      attrs: {
                                        delay: 1000,
                                        endVal: _vm.totalPayments.pday * -1,
                                        options: { decimalPlaces: 0 }
                                      }
                                    }),
                                    _vm._v("%\n                              ")
                                  ],
                                  1
                                ),
                            _vm._v("  last Day ("),
                            _c("ICountUp", {
                              attrs: {
                                delay: 1000,
                                endVal: _vm.totalPayments.lday,
                                options: { decimalPlaces: 0 }
                              }
                            }),
                            _vm._v(")\n                          ")
                          ],
                          1
                        )
                      : _c("p", { staticClass: "text-muted mt-3 mb-0" }, [
                          _c("span", { staticClass: "text-success me-1" }, [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-down-bold me-1"
                            }),
                            _vm._v("0%")
                          ]),
                          _vm._v(" since last week\n                          ")
                        ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 col-xl-3" }, [
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
                              endVal: _vm.totalPayments
                                ? _vm.totalPayments.week
                                : 0,
                              options: { decimalPlaces: 0 }
                            }
                          }),
                          _vm._v(" L.E\n                              ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted mb-0" }, [
                        _vm._v("مصروفات الاسبوع")
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.totalPayments
                      ? _c(
                          "p",
                          { staticClass: "text-muted mt-3 mb-0" },
                          [
                            _vm.totalPayments.pweek > 0
                              ? _c(
                                  "span",
                                  { staticClass: "text-danger me-1" },
                                  [
                                    _c("i", {
                                      staticClass: "mdi mdi-arrow-up-bold me-1"
                                    }),
                                    _vm._v(" "),
                                    _c("ICountUp", {
                                      attrs: {
                                        delay: 1000,
                                        endVal: _vm.totalPayments.pweek,
                                        options: { decimalPlaces: 0 }
                                      }
                                    }),
                                    _vm._v("%\n                              ")
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  { staticClass: "text-success me-1" },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "mdi mdi-arrow-down-bold me-1"
                                    }),
                                    _vm._v(" "),
                                    _c("ICountUp", {
                                      attrs: {
                                        delay: 1000,
                                        endVal: _vm.totalPayments.pweek * -1,
                                        options: { decimalPlaces: 0 }
                                      }
                                    }),
                                    _vm._v("%\n                              ")
                                  ],
                                  1
                                ),
                            _vm._v("  last Week ("),
                            _c("ICountUp", {
                              attrs: {
                                delay: 1000,
                                endVal: _vm.totalPayments.lweek,
                                options: { decimalPlaces: 0 }
                              }
                            }),
                            _vm._v(")\n                          ")
                          ],
                          1
                        )
                      : _c("p", { staticClass: "text-muted mt-3 mb-0" }, [
                          _c("span", { staticClass: "text-success me-1" }, [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-down-bold me-1"
                            }),
                            _vm._v("0%")
                          ]),
                          _vm._v(" since last week\n                          ")
                        ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 col-xl-3" }, [
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
                              endVal: _vm.totalPayments
                                ? _vm.totalPayments.month
                                : 0,
                              options: { decimalPlaces: 0 }
                            }
                          }),
                          _vm._v(" L.E\n                              ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted mb-0" }, [
                        _vm._v("مصروفات الشهر")
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.totalPayments
                      ? _c(
                          "p",
                          { staticClass: "text-muted mt-3 mb-0" },
                          [
                            _vm.totalPayments.pmonth > 0
                              ? _c(
                                  "span",
                                  { staticClass: "text-danger me-1" },
                                  [
                                    _c("i", {
                                      staticClass: "mdi mdi-arrow-up-bold me-1"
                                    }),
                                    _vm._v(" "),
                                    _c("ICountUp", {
                                      attrs: {
                                        delay: 1000,
                                        endVal: _vm.totalPayments.pmonth,
                                        options: { decimalPlaces: 0 }
                                      }
                                    }),
                                    _vm._v("%\n                              ")
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  { staticClass: "text-success me-1" },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "mdi mdi-arrow-down-bold me-1"
                                    }),
                                    _vm._v(" "),
                                    _c("ICountUp", {
                                      attrs: {
                                        delay: 1000,
                                        endVal: _vm.totalPayments.pmonth * -1,
                                        options: { decimalPlaces: 0 }
                                      }
                                    }),
                                    _vm._v("%\n                              ")
                                  ],
                                  1
                                ),
                            _vm._v("  last month ("),
                            _c("ICountUp", {
                              attrs: {
                                delay: 1000,
                                endVal: _vm.totalPayments.lmonth,
                                options: { decimalPlaces: 0 }
                              }
                            }),
                            _vm._v(")\n                          ")
                          ],
                          1
                        )
                      : _c("p", { staticClass: "text-muted mt-3 mb-0" }, [
                          _c("span", { staticClass: "text-success me-1" }, [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-down-bold me-1"
                            }),
                            _vm._v("0%")
                          ]),
                          _vm._v(
                            " since last month\n                          "
                          )
                        ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 col-xl-3" }, [
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
                              endVal: _vm.totalPayments
                                ? _vm.totalPayments.year
                                : 0,
                              options: { decimalPlaces: 0 }
                            }
                          }),
                          _vm._v(" L.E\n                              ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted mb-0" }, [
                        _vm._v("مصروفات السنة")
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.totalPayments
                      ? _c(
                          "p",
                          { staticClass: "text-muted mt-3 mb-0" },
                          [
                            _vm.totalPayments.pyear > 0
                              ? _c(
                                  "span",
                                  { staticClass: "text-danger me-1" },
                                  [
                                    _c("i", {
                                      staticClass: "mdi mdi-arrow-up-bold me-1"
                                    }),
                                    _vm._v(" "),
                                    _c("ICountUp", {
                                      attrs: {
                                        delay: 1000,
                                        endVal: _vm.totalPayments.pyear,
                                        options: { decimalPlaces: 0 }
                                      }
                                    }),
                                    _vm._v("%\n                              ")
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  { staticClass: "text-success me-1" },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "mdi mdi-arrow-down-bold me-1"
                                    }),
                                    _vm._v(" "),
                                    _c("ICountUp", {
                                      attrs: {
                                        delay: 1000,
                                        endVal: _vm.totalPayments.pyear * -1,
                                        options: { decimalPlaces: 0 }
                                      }
                                    }),
                                    _vm._v("%\n                              ")
                                  ],
                                  1
                                ),
                            _vm._v("  last year ("),
                            _c("ICountUp", {
                              attrs: {
                                delay: 1000,
                                endVal: _vm.totalPayments.lyear,
                                options: { decimalPlaces: 0 }
                              }
                            }),
                            _vm._v(")\n                          ")
                          ],
                          1
                        )
                      : _c("p", { staticClass: "text-muted mt-3 mb-0" }, [
                          _c("span", { staticClass: "text-success me-1" }, [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-down-bold me-1"
                            }),
                            _vm._v("0%")
                          ]),
                          _vm._v(" since last year\n                          ")
                        ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 col-xl-3" }, [
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
                              endVal: _vm.totals.sms_credit,
                              options: { decimalPlaces: 0 }
                            }
                          }),
                          _vm._v(" SMS\n                              ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted mb-0" }, [
                        _vm._v("الرسائل المتبقية")
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _vm.carts.counts
                ? _c("div", { staticClass: "col-xl-6" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c(
                          "div",
                          { staticClass: "mt-3" },
                          [
                            _c("apexchart", {
                              attrs: {
                                type: "bar",
                                options: _vm.carts.counts.options,
                                series: _vm.carts.counts.series
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.carts.prices
                ? _c("div", { staticClass: "col-xl-6" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c(
                          "div",
                          { staticClass: "mt-3" },
                          [
                            _c("apexchart", {
                              attrs: {
                                type: "bar",
                                options: _vm.carts.prices.options,
                                series: _vm.carts.prices.series
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-6" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "float-end" }, [
                      _c("div", { staticClass: "btn-group" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-light dropdown-toggle",
                            class: "font-" + _vm.$i18n.locale,
                            attrs: {
                              type: "button",
                              "data-bs-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [
                            _c("span", { staticClass: "fw-semibold" }, [
                              _vm._v("رتب حسب: ")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-muted" }, [
                              _vm._v("الاسبوع"),
                              _c("i", {
                                staticClass: "mdi mdi-chevron-down ms-1"
                              })
                            ])
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
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function($event) {
                                    return _vm.colorData("Week")
                                  }
                                }
                              },
                              [_vm._v("اسبوع")]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function($event) {
                                    return _vm.colorData("Month")
                                  }
                                }
                              },
                              [_vm._v("Month")]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function($event) {
                                    return _vm.colorData("Year")
                                  }
                                }
                              },
                              [_vm._v("Year")]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("h4", { staticClass: "card-title mb-4" }, [
                      _vm._v("مبيعات")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-primary"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-primary",
                                style: { width: "90%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 90,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 90
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 90,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-info"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-info",
                                style: { width: "75%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 75,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 75
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 75,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-success"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-success",
                                style: { width: "70%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 70,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 70
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 70,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-warning"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-warning",
                                style: { width: "60%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 60,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 60
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 60,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-purple"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-purple",
                                style: { width: "80%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 80,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 80
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 80,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-danger"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-danger",
                                style: { width: "40%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 40,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 40
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 40,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-6" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "float-end" }, [
                      _c("div", { staticClass: "btn-group" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-light dropdown-toggle",
                            class: "font-" + _vm.$i18n.locale,
                            attrs: {
                              type: "button",
                              "data-bs-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [
                            _c("span", { staticClass: "fw-semibold" }, [
                              _vm._v("رتب حسب: ")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-muted" }, [
                              _vm._v("الاسبوع"),
                              _c("i", {
                                staticClass: "mdi mdi-chevron-down ms-1"
                              })
                            ])
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
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function($event) {
                                    return _vm.colorData("Week")
                                  }
                                }
                              },
                              [_vm._v("اسبوع")]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function($event) {
                                    return _vm.colorData("Month")
                                  }
                                }
                              },
                              [_vm._v("Month")]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function($event) {
                                    return _vm.colorData("Year")
                                  }
                                }
                              },
                              [_vm._v("Year")]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("h4", { staticClass: "card-title mb-4" }, [
                      _vm._v("مشتريات")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-primary"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-primary",
                                style: { width: "90%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 90,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 90
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 90,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-info"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-info",
                                style: { width: "75%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 75,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 75
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 75,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-success"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-success",
                                style: { width: "70%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 70,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 70
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 70,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-warning"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-warning",
                                style: { width: "60%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 60,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 60
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 60,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-purple"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-purple",
                                style: { width: "80%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 80,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 80
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 80,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row align-items-center g-0 mt-3" },
                      [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("p", { staticClass: "text-truncate mt-1 mb-0" }, [
                            _c("i", {
                              staticClass: "mdi mdi-circle-medium me-2",
                              class: "text-danger"
                            }),
                            _vm._v(" product 1..")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "progress mt-1",
                              staticStyle: { height: "6px" }
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar progress-bar",
                                class: "bg-danger",
                                style: { width: "40%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": 40,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": 40
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "p",
                            { staticClass: "text-truncate ms-2 mt-1 mb-0" },
                            [
                              _c("ICountUp", {
                                attrs: {
                                  delay: 1000,
                                  endVal: 40,
                                  options: { decimalPlaces: 2 }
                                }
                              }),
                              _vm._v("% ")
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              false
                ? undefined
                : _vm._e(),
              _vm._v(" "),
              false
                ? undefined
                : _vm._e()
            ])
          ])
        : _vm._e()
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
//# sourceMappingURL=50.js.map