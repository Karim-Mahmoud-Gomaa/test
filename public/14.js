(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/product/search.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/product/search.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['select'],
  data: function data() {
    return {
      selected: [],
      categories: [],
      products: [],
      product: null
    };
  },
  methods: {
    getParents: function getParents() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/categories', {
        params: {
          paginate: 0
        }
      }).then(function (_ref) {
        var data = _ref.data;
        var that = _this;
        that.categories = [];
        that.products = [], that.product = null, data.success.categories.forEach(function (category) {
          var name = that.appendParentName(category);
          that.categories.push({
            id: category.id,
            name: name
          });
        });
      })["catch"](function (error) {
        console.log("Error......");
      });
    },
    selectCategoryId: function selectCategoryId(category_id) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/products', {
        params: {
          paginate: 0,
          search: {
            category_id: category_id
          }
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        _this2.products = data.success.products;
      })["catch"](function (error) {
        console.log("Error......");
      });
    },
    selectProductId: function selectProductId(product_id) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/products/' + product_id).then(function (_ref3) {
        var data = _ref3.data;
        _this3.product = data.success.product;
      })["catch"](function (error) {
        console.log("Error......");
      });
    },
    search: function search() {
      this.categories = [], this.products = [], this.selected = [], this.product = null, this.getParents();
      $('#formModal5').modal('show');
    },
    selectProduct: function selectProduct() {
      // console.log(this.product);
      this.select(this.product);
      $('#formModal5').modal('hide');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/supplier/options.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/supplier/options.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    HasError: vform__WEBPACK_IMPORTED_MODULE_0__["HasError"]
  },
  props: ['saveOptions'],
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        index: null,
        options: []
      })
    };
  },
  methods: {
    create: function create(index, options) {
      console.log(options);
      this.form.reset();
      this.form.index = index;
      this.form.options = options;
      $('#formOption').modal('show');
    },
    store: function store() {
      $('#formOption').modal('hide');
      var options = [];
      var that = this;
      this.form.options.forEach(function (option, i) {
        if (option.value_text == "") {
          that.form.options[i].value_text = null;
        }

        if (option.value_id) {
          option.option_details.forEach(function (value) {
            if (value.id == option.value_id) {
              that.form.options[i].value = value.name;
            }
          });
        } else {
          that.form.options[i].value = null;
        } // options.push(option)

      }); // console.log(this.form.options)

      this.saveOptions(this.form.index, this.form.options);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SupplierOrders/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/App */ "./resources/js/layouts/App.vue");
/* harmony import */ var _components_modals_product_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modals/product/add */ "./resources/js/components/modals/product/add.vue");
/* harmony import */ var _components_modals_supplier_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modals/supplier/options */ "./resources/js/components/modals/supplier/options.vue");
/* harmony import */ var _components_modals_product_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modals/product/search */ "./resources/js/components/modals/product/search.vue");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pagination */ "./resources/js/components/pagination.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_9__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LayoutDefault: _layouts_App__WEBPACK_IMPORTED_MODULE_1__["default"],
    PaginationNav: _components_pagination__WEBPACK_IMPORTED_MODULE_5__["default"],
    HasError: vform__WEBPACK_IMPORTED_MODULE_7__["HasError"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormModal: _components_modals_product_add__WEBPACK_IMPORTED_MODULE_2__["default"],
    SearchForm: _components_modals_product_search__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormOptions: _components_modals_supplier_options__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_7__["Form"]({
        id: null,
        supplier_id: null,
        store_id: null,
        created_at: new Date().toLocaleString(),
        order_products: []
      }),
      products: [],
      stores: null,
      store: null,
      suppliers: null,
      options: null,
      total: 0
    };
  },
  watch: {
    products: {
      handler: function handler(form) {
        var total = 0;
        form.forEach(function (product) {
          total += parseInt(product.total);
          var hasOptions = false;
          product.options.forEach(function (option) {
            if (option.value_id || option.value_text) {
              hasOptions = true;
            }
          });
          product.hasOptions = hasOptions;
        });
        this.total = total;
      },
      deep: true
    }
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    changeQty: function changeQty(index) {
      // console.log('222');
      var newValue = _objectSpread({}, this.products[index]);

      newValue.total = newValue.qty * newValue.order_price;
      vue__WEBPACK_IMPORTED_MODULE_9___default.a.set(this.products, index, newValue);
    },
    addProduct: function addProduct(product) {
      product.qty = 1;
      product.order_price = parseInt(product.price);
      product.total = product.price;
      product.hasOptions = false;
      product.options = [];
      this.options.forEach(function (option) {
        product.options.push({
          option_id: option.id,
          option_name: option.name,
          option_type: option.input_type,
          option_details: option.details,
          value_id: null,
          value: null,
          value_text: null
        });
      });
      this.products.push(product); // console.log(product);
    },
    removeArow: function removeArow(index) {
      this.products.splice(index, 1);
    },
    saveOptions: function saveOptions(index, options) {
      var newValue = _objectSpread(_objectSpread({}, this.products[index]), {}, {
        options: options
      });

      vue__WEBPACK_IMPORTED_MODULE_9___default.a.set(this.products, index, newValue);
    },
    removeOptions: function removeOptions(index) {
      this.products[index].options.forEach(function (option) {
        option.value_id = null;
        option.value = null;
        option.value_text = null;
      }); // const newValue = { ...this.products[index], options: this.products[index].options };
      // Vue.set(this.products, index, newValue);
    },
    addRow: function addRow(product_id) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('/api/products/' + product_id).then(function (_ref) {
        var data = _ref.data;
        var that = _this;

        _this.products.forEach(function (product, index) {
          if (product.id == data.success.product.id) {
            that.products[index].price = data.success.product.price;
            that.products[index].order_price = data.success.product.price;
            that.products[index].name = data.success.product.name;
          }
        });
      })["catch"](function (error) {
        console.log("Error......");
      });
    },
    fetchData: function fetchData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('/api/supplier_orders/create').then(function (_ref2) {
                  var data = _ref2.data;
                  _this2.suppliers = data.success.suppliers;
                  _this2.options = data.success.options;

                  if (data.success.stores) {
                    _this2.stores = data.success.stores;
                  } else {
                    _this2.form.store_id = data.success.store.id;
                    _this2.store = data.success.store;
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveOrder: function saveOrder() {
      var _this3 = this;

      this.form.order_products = this.products;
      this.form.post('/api/supplier_orders').then(function (_ref3) {
        var data = _ref3.data;

        //   console.log(data)
        _this3.$router.push({
          name: "supplier_orders_show",
          params: {
            order_id: data.success
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SupplierOrders/Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"number\"][data-v-3e16de61]::-webkit-outer-spin-button,\ninput[type=\"number\"][data-v-3e16de61]::-webkit-inner-spin-button {\n-webkit-appearance: none;\nmargin: 0;\n}\n.table-responsive[data-v-3e16de61] {\n    border: 3px solid #ced4da;\n    border-radius: 5px;\n    /*height: 500px; */\n}\n/* width */\n.table-responsive[data-v-3e16de61]::-webkit-scrollbar {\nwidth: 10px;\n}\n\n/* Track */\n.table-responsive[data-v-3e16de61]::-webkit-scrollbar-track {\nbackground: #f1f1f1;\n}\n\n/* Handle */\n.table-responsive[data-v-3e16de61]::-webkit-scrollbar-thumb {\nbackground: #888;\n}\n\n/* Handle on hover */\n.table-responsive[data-v-3e16de61]::-webkit-scrollbar-thumb:hover {\nbackground: #555;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SupplierOrders/Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/product/search.vue?vue&type=template&id=8dce8a54&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/product/search.vue?vue&type=template&id=8dce8a54& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "formModal5",
        "data-bs-backdrop": "static",
        "data-bs-keyboard": "false",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "staticBackdropLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered",
          attrs: { role: "document" }
        },
        [
          _c(
            "form",
            {
              staticClass: "modal-content",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.selectProduct($event)
                }
              }
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body row" }, [
                _c(
                  "div",
                  { staticClass: "col-6 mt-3" },
                  [
                    _c("label", { class: "font-" + _vm.$i18n.locale }, [
                      _vm._v("الفئة")
                    ]),
                    _vm._v(" "),
                    _vm.categories
                      ? _c("v-select", {
                          staticClass: "vselect",
                          staticStyle: { width: "100%" },
                          attrs: {
                            dir: "rtl",
                            label: "name",
                            options: _vm.categories,
                            reduce: function(val) {
                              return val.id
                            }
                          },
                          on: { input: _vm.selectCategoryId },
                          model: {
                            value: _vm.selected[0],
                            callback: function($$v) {
                              _vm.$set(_vm.selected, 0, $$v)
                            },
                            expression: "selected[0]"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-6 mt-3" },
                  [
                    _c("label", { class: "font-" + _vm.$i18n.locale }, [
                      _vm._v("المنتج")
                    ]),
                    _vm._v(" "),
                    _vm.products
                      ? _c("v-select", {
                          staticClass: "vselect",
                          staticStyle: { width: "100%" },
                          attrs: {
                            dir: "rtl",
                            label: "name",
                            options: _vm.products,
                            reduce: function(val) {
                              return val.id
                            }
                          },
                          on: { input: _vm.selectProductId },
                          model: {
                            value: _vm.selected[1],
                            callback: function($$v) {
                              _vm.$set(_vm.selected, 1, $$v)
                            },
                            expression: "selected[1]"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light",
                    attrs: { type: "button", "data-bs-dismiss": "modal" }
                  },
                  [_vm._v("إغلاق")]
                ),
                _vm._v(" "),
                _vm.product
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("حفظ")]
                    )
                  : _vm._e()
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "formModal5Label" } },
        [_vm._v("بحث مخزن")]
      ),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/supplier/options.vue?vue&type=template&id=6ca60669&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/supplier/options.vue?vue&type=template&id=6ca60669& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "formOption",
        "data-bs-backdrop": "static",
        "data-bs-keyboard": "false",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "staticBackdropLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered",
          attrs: { role: "document" }
        },
        [
          _c(
            "form",
            {
              staticClass: "modal-content",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.store($event)
                }
              }
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body row" },
                _vm._l(_vm.form.options, function(option, index) {
                  return _c(
                    "div",
                    { staticClass: "col-6 mt-3" },
                    [
                      _c("label", [_vm._v(" " + _vm._s(option.option_name))]),
                      _vm._v(" "),
                      option.option_type == 1
                        ? _c("v-select", {
                            staticClass: "vselect",
                            staticStyle: { width: "100%" },
                            attrs: {
                              label: "name",
                              options: option.option_details,
                              reduce: function(val) {
                                return val.id
                              }
                            },
                            model: {
                              value: _vm.form.options[index].value_id,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form.options[index],
                                  "value_id",
                                  $$v
                                )
                              },
                              expression: "form.options[index].value_id"
                            }
                          })
                        : _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.options[index].value_text,
                                expression: "form.options[index].value_text"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", autocomplete: "off" },
                            domProps: {
                              value: _vm.form.options[index].value_text
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.options[index],
                                  "value_text",
                                  $event.target.value
                                )
                              }
                            }
                          })
                    ],
                    1
                  )
                }),
                0
              ),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "formOptionLabel" } },
        [_vm._v("تعديل بيانات المنتج")]
      ),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-light",
          attrs: { type: "button", "data-bs-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Save")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Create.vue?vue&type=template&id=3e16de61&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SupplierOrders/Create.vue?vue&type=template&id=3e16de61&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                  attrs: { fetchData: _vm.fetchData, addRow: _vm.addRow }
                }),
                _vm._v(" "),
                _c("form-options", {
                  ref: "FormOptions",
                  attrs: { saveOptions: _vm.saveOptions }
                }),
                _vm._v(" "),
                _c("search-form", {
                  ref: "SearchForm",
                  attrs: { select: _vm.addProduct }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _vm.suppliers
            ? _c("div", { staticClass: "col-lg-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      staticClass: "card-body",
                      staticStyle: { margin: "20px", "min-height": "600px" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "invoice-title row",
                          attrs: { dir: "rtl" }
                        },
                        [
                          _c("div", { staticClass: "col-md-4" }, [
                            _c(
                              "h4",
                              {
                                staticClass: "font-size-16",
                                staticStyle: { "text-align": "center" }
                              },
                              [
                                _vm._v(
                                  "\n                                      تاريخ الفاتورة  \n                                      "
                                ),
                                _c(
                                  "div",
                                  { staticClass: "mt-4" },
                                  [
                                    _c("Datepicker", {
                                      attrs: {
                                        "input-class": "form-control",
                                        format: "dd-MM-yyyy"
                                      },
                                      model: {
                                        value: _vm.form.created_at,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "created_at", $$v)
                                        },
                                        expression: "form.created_at"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm.suppliers
                            ? _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "h4",
                                  {
                                    staticClass: "font-size-16",
                                    staticStyle: { "text-align": "center" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                      أسم المورد  \n                                      "
                                    ),
                                    _c(
                                      "div",
                                      { staticClass: "mt-4" },
                                      [
                                        _c("v-select", {
                                          staticClass: "vselect",
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            dir: "rtl",
                                            label: "name",
                                            options: _vm.suppliers,
                                            reduce: function(val) {
                                              return val.id
                                            }
                                          },
                                          model: {
                                            value: _vm.form.supplier_id,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "supplier_id",
                                                $$v
                                              )
                                            },
                                            expression: "form.supplier_id"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.stores
                            ? _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "h4",
                                  {
                                    staticClass: "font-size-16",
                                    staticStyle: { "text-align": "center" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                      أسم المخزن  \n                                      "
                                    ),
                                    _c(
                                      "div",
                                      { staticClass: "mt-4" },
                                      [
                                        _c("v-select", {
                                          staticClass: "vselect",
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            dir: "rtl",
                                            label: "name",
                                            options: _vm.stores,
                                            reduce: function(val) {
                                              return val.id
                                            }
                                          },
                                          model: {
                                            value: _vm.form.store_id,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "store_id",
                                                $$v
                                              )
                                            },
                                            expression: "form.store_id"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.store
                            ? _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "h4",
                                  {
                                    staticClass: "font-size-16",
                                    staticStyle: { "text-align": "center" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                      أسم المخزن  \n                                      "
                                    ),
                                    _c("div", { staticClass: "mt-4" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: { type: "text", disabled: "" },
                                        domProps: { value: _vm.store.name }
                                      })
                                    ])
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          false
                            ? undefined
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("hr", { staticClass: "my-4" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "py-2" },
                        [
                          _c("div", { staticClass: "row mb-4" }, [
                            _c(
                              "h5",
                              { staticClass: "font-size-15 col-md-10" },
                              [_vm._v("تفاصيل الفاتورة")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-1" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "row btn btn-success waves-effect waves-light float-end",
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.SearchForm.search()
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-search-plus" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-1" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "row btn btn-success waves-effect waves-light float-end",
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.FormModal.create()
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _vm.products.length == 0
                            ? _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table table-nowrap table-centered mb-0"
                                  },
                                  [
                                    _c("tbody", [
                                      _c("tr", [
                                        _c("td", { staticClass: "col-5" }, [
                                          _c(
                                            "p",
                                            { staticClass: "text-center" },
                                            [_vm._v("لا يوجد منتجات")]
                                          )
                                        ])
                                      ])
                                    ])
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.products, function(product, index) {
                            return _c("div", [
                              _c(
                                "div",
                                {
                                  staticClass: "table-responsive",
                                  staticStyle: { overflow: "visible" }
                                },
                                [
                                  _c(
                                    "table",
                                    {
                                      staticClass:
                                        "table table-nowrap table-centered mb-0"
                                    },
                                    [
                                      _c("thead", [
                                        _c("tr", [
                                          _c("th", [_vm._v("تفاصيل المنتج")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("سعر (ش)")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("سعر (ب)")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("الكمية")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("الأجمالي")]),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            {
                                              staticClass: "text-end",
                                              staticStyle: { width: "120px" }
                                            },
                                            [_vm._v("خيارات")]
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tbody", [
                                        _c("tr", [
                                          _c("td", { staticClass: "col-5" }, [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(product.name) +
                                                  " / " +
                                                  _vm._s(
                                                    _vm.appendParentName(
                                                      product.category
                                                    )
                                                  )
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", { staticClass: "col-2" }, [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: product.order_price,
                                                  expression:
                                                    "product.order_price"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              staticStyle: { padding: "4px" },
                                              attrs: {
                                                type: "number",
                                                autocomplete: "off"
                                              },
                                              domProps: {
                                                value: product.order_price
                                              },
                                              on: {
                                                input: [
                                                  function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      product,
                                                      "order_price",
                                                      $event.target.value
                                                    )
                                                  },
                                                  function($event) {
                                                    return _vm.changeQty(index)
                                                  }
                                                ]
                                              }
                                            })
                                          ]),
                                          _vm._v(" "),
                                          _c("td", { staticClass: "col-1" }, [
                                            _vm._v(
                                              "\n                                                      " +
                                                _vm._s(
                                                  _vm.moneyFormat(
                                                    product.price,
                                                    0
                                                  )
                                                ) +
                                                "\n                                                  "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", { staticClass: "col-2" }, [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: product.qty,
                                                  expression: "product.qty"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              staticStyle: { padding: "4px" },
                                              attrs: {
                                                type: "number",
                                                autocomplete: "off"
                                              },
                                              domProps: { value: product.qty },
                                              on: {
                                                input: [
                                                  function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      product,
                                                      "qty",
                                                      $event.target.value
                                                    )
                                                  },
                                                  function($event) {
                                                    return _vm.changeQty(index)
                                                  }
                                                ]
                                              }
                                            })
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "col-1 p-0" },
                                            [
                                              _vm._v(
                                                "\n                                                      " +
                                                  _vm._s(
                                                    _vm.moneyFormat(
                                                      product.total,
                                                      0
                                                    )
                                                  ) +
                                                  "\n                                                  "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-end col-1" },
                                            [
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
                                                        "\n                                                          المزيد "
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
                                                      staticClass:
                                                        "dropdown-menu",
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
                                                                product
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-pen"
                                                          }),
                                                          _vm._v(
                                                            " تعديل المنتج\n                                                              "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
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
                                                              return _vm.$refs.FormOptions.create(
                                                                index,
                                                                product.options
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-pen"
                                                          }),
                                                          _vm._v(
                                                            " تعديل التفاصيل\n                                                              "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
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
                                                              return _vm.removeOptions(
                                                                index
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
                                                            " حذف التفاصيل\n                                                              "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
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
                                                              return _vm.removeArow(
                                                                index
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
                                                            " حذف المنتج\n                                                              "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              product.hasOptions
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "table-responsive mb-2",
                                      staticStyle: { "border-top": "0px" }
                                    },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass:
                                            "table table-nowrap table-centered mb-0",
                                          staticStyle: {
                                            "background-color": "#ced4da73"
                                          }
                                        },
                                        [
                                          _c("thead", [
                                            _c("tr", [
                                              _c(
                                                "th",
                                                { staticClass: "text-center" },
                                                [_vm._v("بيانات المنتج")]
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("tbody", [
                                            _c("tr", [
                                              _c("td", { staticClass: "col" }, [
                                                _c(
                                                  "div",
                                                  { staticClass: "row" },
                                                  _vm._l(
                                                    product.options,
                                                    function(option) {
                                                      return option.value ||
                                                        option.value_text
                                                        ? _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-md-4"
                                                            },
                                                            [
                                                              _c("label", [
                                                                _c("b", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      option.option_name
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(
                                                                  " /" +
                                                                    _vm._s(
                                                                      option.value
                                                                        ? option.value
                                                                        : option.value_text
                                                                    )
                                                                )
                                                              ])
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    }
                                                  ),
                                                  0
                                                )
                                              ])
                                            ])
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "d-print-none mt-4" }, [
                            _c("div", { staticClass: "float-end" }, [
                              _c(
                                "th",
                                {
                                  staticClass: "border-0 text-end",
                                  attrs: { scope: "row", colspan: "6" }
                                },
                                [_vm._v("إجمالي الفاتورة : ")]
                              ),
                              _vm._v(" "),
                              _c("td", { staticClass: "border-0 text-end" }, [
                                _c("h4", { staticClass: "m-0" }, [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.moneyFormat(_vm.total, 0)) +
                                      " "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _vm.products.length
                              ? _c("div", { staticClass: "float-start" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "btn btn-success w-md waves-effect waves-light",
                                      attrs: { href: "javascript:;" },
                                      on: {
                                        click: function($event) {
                                          return _vm.saveOrder()
                                        }
                                      }
                                    },
                                    [_vm._v("حفظ")]
                                  )
                                ])
                              : _vm._e()
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

/***/ "./resources/js/components/modals/product/search.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/modals/product/search.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_8dce8a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=8dce8a54& */ "./resources/js/components/modals/product/search.vue?vue&type=template&id=8dce8a54&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/product/search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_8dce8a54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_8dce8a54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/product/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/product/search.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/modals/product/search.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/product/search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/product/search.vue?vue&type=template&id=8dce8a54&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/modals/product/search.vue?vue&type=template&id=8dce8a54& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_8dce8a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=template&id=8dce8a54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/product/search.vue?vue&type=template&id=8dce8a54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_8dce8a54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_8dce8a54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modals/supplier/options.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/modals/supplier/options.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options_vue_vue_type_template_id_6ca60669___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.vue?vue&type=template&id=6ca60669& */ "./resources/js/components/modals/supplier/options.vue?vue&type=template&id=6ca60669&");
/* harmony import */ var _options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/supplier/options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _options_vue_vue_type_template_id_6ca60669___WEBPACK_IMPORTED_MODULE_0__["render"],
  _options_vue_vue_type_template_id_6ca60669___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/supplier/options.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/supplier/options.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/modals/supplier/options.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./options.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/supplier/options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/supplier/options.vue?vue&type=template&id=6ca60669&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/modals/supplier/options.vue?vue&type=template&id=6ca60669& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_template_id_6ca60669___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./options.vue?vue&type=template&id=6ca60669& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/supplier/options.vue?vue&type=template&id=6ca60669&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_template_id_6ca60669___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_template_id_6ca60669___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/SupplierOrders/Create.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/SupplierOrders/Create.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_3e16de61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=3e16de61&scoped=true& */ "./resources/js/pages/SupplierOrders/Create.vue?vue&type=template&id=3e16de61&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/pages/SupplierOrders/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Create_vue_vue_type_style_index_0_id_3e16de61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css& */ "./resources/js/pages/SupplierOrders/Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_3e16de61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_3e16de61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e16de61",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SupplierOrders/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SupplierOrders/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/SupplierOrders/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/SupplierOrders/Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/SupplierOrders/Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_3e16de61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Create.vue?vue&type=style&index=0&id=3e16de61&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_3e16de61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_3e16de61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_3e16de61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_3e16de61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_3e16de61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/SupplierOrders/Create.vue?vue&type=template&id=3e16de61&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/SupplierOrders/Create.vue?vue&type=template&id=3e16de61&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_3e16de61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=3e16de61&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SupplierOrders/Create.vue?vue&type=template&id=3e16de61&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_3e16de61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_3e16de61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=14.js.map