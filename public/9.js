(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Articles/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Articles/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/App */ "./resources/js/layouts/App.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _components_modals_category_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modals/category/add */ "./resources/js/components/modals/category/add.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    HasError: vform__WEBPACK_IMPORTED_MODULE_3__["HasError"],
    CategoryModal: _components_modals_category_add__WEBPACK_IMPORTED_MODULE_5__["default"],
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_4__["VueEditor"]
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_3__["Form"]({
        id: null,
        title: null,
        category_id: null,
        image: null,
        content: null
      }),
      categories: [],
      loader: false,
      image: null
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    onFileRemove: function onFileRemove() {
      this.form.image = null;
      this.image = null;
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (files.length) {
        var file = URL.createObjectURL(files[0]);
        this.form.image = files[0];
        this.image = file;
      }
    },
    fetchData: function fetchData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/categories', {
                  params: {
                    paginate: 0
                  }
                }).then(function (_ref) {
                  var data = _ref.data;
                  _this.categories = data.success.categories;
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
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.form.post('/api/articles').then(function (_ref2) {
                  var data = _ref2.data;

                  if (_this2.form.image) {
                    var fd = new FormData();
                    fd.append("article_id", data.success);
                    fd.append("image", _this2.form.image);
                    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/articles_image', fd, {
                      headers: {
                        'Content-Type': 'multipart/form-data'
                      }
                    });
                  }

                  _this2.$router.push({
                    name: "articles"
                  });
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Articles/Create.vue?vue&type=template&id=1fe70096&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Articles/Create.vue?vue&type=template&id=1fe70096& ***!
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
                _c("h4", { staticClass: "mb-0" }, [_vm._v("Create Article")]),
                _vm._v(" "),
                _c("category-Modal", {
                  ref: "CategoryModal",
                  attrs: { fetchData: _vm.fetchData }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "page-title-right" }, [
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
                    [_vm._v("Create")]
                  )
                ])
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "card mb-5" }, [
              _c("div", { staticClass: "tab-content p-4" }, [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane active",
                    attrs: { id: "info", role: "tabpanel" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "card-body",
                        staticStyle: { margin: "20px", "min-height": "600px" }
                      },
                      [
                        _c("div", { staticClass: "invoice-title row" }, [
                          _c(
                            "h4",
                            {
                              staticClass: "font-size-20",
                              staticStyle: { "font-weight": "bold" }
                            },
                            [_vm._v("عام")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c(
                              "h4",
                              {
                                staticClass: "font-size-16",
                                staticStyle: { "text-align": "center" }
                              },
                              [
                                _vm._v(
                                  "\n                                              Title\n                                              "
                                ),
                                _c("div", { staticClass: "mt-4" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.title,
                                        expression: "form.title"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text" },
                                    domProps: { value: _vm.form.title },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "title",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-3" }, [
                            _c(
                              "h4",
                              {
                                staticClass: "font-size-16",
                                staticStyle: { "text-align": "center" }
                              },
                              [
                                _vm._v(
                                  "\n                                              Category\n                                              "
                                ),
                                _vm.categories && _vm.categories.length
                                  ? _c(
                                      "div",
                                      { staticClass: "mt-4" },
                                      [
                                        _c("v-select", {
                                          staticClass: "vselect",
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            clearable: true,
                                            dir: "rtl",
                                            label: "name",
                                            options: _vm.categories,
                                            reduce: function(val) {
                                              return val.id
                                            }
                                          },
                                          model: {
                                            value: _vm.form.category_id,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "category_id",
                                                $$v
                                              )
                                            },
                                            expression: "form.category_id"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4" }, [
                            _c(
                              "h4",
                              {
                                staticClass: "font-size-16",
                                staticStyle: { "text-align": "center" }
                              },
                              [
                                _vm._v(
                                  "\n                                              Article Image\n                                              "
                                ),
                                _c("div", { staticClass: "mt-4" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-info btn-sm",
                                      attrs: { href: "javascript:;" },
                                      on: {
                                        click: function($event) {
                                          return _vm.$refs.image.click()
                                        }
                                      }
                                    },
                                    [_vm._v("Upload Image")]
                                  ),
                                  _vm._v(" "),
                                  _vm.form.image
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-danger btn-sm",
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function($event) {
                                              return _vm.onFileRemove()
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "far fa-trash-alt"
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("input", {
                                    ref: "image",
                                    staticClass: "hidden",
                                    attrs: { type: "file", accept: "image/*" },
                                    on: {
                                      change: function($event) {
                                        return _vm.onFileChange($event)
                                      }
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm.image
                              ? _c("img", {
                                  staticClass: "img-thumbnail",
                                  attrs: {
                                    alt: "200x200",
                                    width: "100%",
                                    src: _vm.image,
                                    "data-holder-rendered": "true"
                                  }
                                })
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8" },
                            [
                              _c("vue-editor", {
                                model: {
                                  value: _vm.form.content,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "content", $$v)
                                  },
                                  expression: "form.content"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ]
                )
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

/***/ "./resources/js/pages/Articles/Create.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/Articles/Create.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_1fe70096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=1fe70096& */ "./resources/js/pages/Articles/Create.vue?vue&type=template&id=1fe70096&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/pages/Articles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_1fe70096___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_1fe70096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Articles/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Articles/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Articles/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Articles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Articles/Create.vue?vue&type=template&id=1fe70096&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Articles/Create.vue?vue&type=template&id=1fe70096& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1fe70096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=1fe70096& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Articles/Create.vue?vue&type=template&id=1fe70096&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1fe70096___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1fe70096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=9.js.map