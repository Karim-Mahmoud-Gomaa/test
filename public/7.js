(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ICountUp: vue_countup_v2__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      users: 0,
      categories: 0,
      articles: 0
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/home').then(function (_ref) {
        var data = _ref.data;
        _this.categories = data.success.categories;
        _this.categories = data.success.categories;
        _this.users = data.success.users;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/countup.js/dist/countUp.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/countup.js/dist/countUp.min.js ***!
  \*****************************************************/
/*! exports provided: CountUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountUp", function() { return CountUp; });
var __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var n in i=arguments[a])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t}).apply(this,arguments)},CountUp=function(){function t(t,i,a){var s=this;this.target=t,this.endVal=i,this.options=a,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(i/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var i,a,n,e,r=t<0?"-":"";i=Math.abs(t).toFixed(s.options.decimalPlaces);var o=(i+="").split(".");if(a=o[0],n=o.length>1?s.options.decimal+o[1]:"",s.options.useGrouping){e="";for(var l=0,h=a.length;l<h;++l)0!==l&&l%3==0&&(e=s.options.separator+e),e=a[h-l-1]+e;a=e}return s.options.numerals&&s.options.numerals.length&&(a=a.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),r+s.options.prefix+a+n+s.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=__assign(__assign({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();

/***/ }),

/***/ "./node_modules/vue-countup-v2/dist/countup.umd.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue-countup-v2/dist/countup.umd.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js")):undefined}(this,function(e){"use strict";var t,n=(t="Function",function(e){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")}),i={__countup__:e.CountUp,name:"VueCountUp",props:{delay:{type:Number,required:!1,default:0},endVal:{type:Number,required:!0},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(e){this.instance&&n(this.instance.update)&&this.instance.update(e)},deep:!1}},methods:{create:function(){var t=this;if(!t.instance){var n=t.$el,i=new e.CountUp(n,t.endVal,t.options);i.error||(t.instance=i,t.delay<0?t.$emit("ready",i,e.CountUp):setTimeout(function(){return i.start(function(){return t.$emit("ready",i,e.CountUp)})},t.delay))}},destroy:function(){this.instance=null},printValue:function(e){if(this.instance&&n(this.instance.printValue))return this.instance.printValue(e)},start:function(e){if(this.instance&&n(this.instance.start))return this.instance.start(e)},pauseResume:function(){if(this.instance&&n(this.instance.pauseResume))return this.instance.pauseResume()},reset:function(){if(this.instance&&n(this.instance.reset))return this.instance.reset()},update:function(e){if(this.instance&&n(this.instance.update))return this.instance.update(e)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}("");return function(e,t,n,i,s,r,o,a,u,c){"boolean"!=typeof o&&(u=a,a=o,o=!1);var d,f="function"==typeof n?n.options:n;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,s&&(f.functional=!0)),i&&(f._scopeId=i),r?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},f._ssrRegister=d):t&&(d=o?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),d)if(f.functional){var p=f.render;f.render=function(e,t){return d.call(t),p(e,t)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,d):[d]}return n}({render:function(){var e=this.$createElement;return(this._self._c||e)("span")},staticRenderFns:[]},void 0,i,"data-v-0abbdf5a",!1,void 0,void 0,void 0)});
//# sourceMappingURL=countup.umd.min.js.map


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
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c(
              "div",
              {
                staticClass:
                  "page-title-box d-flex align-items-center justify-content-between"
              },
              [_c("h4", { staticClass: "mb-0" }, [_vm._v("Home Page")])]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4 col-xl-4" }, [
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
                          endVal: _vm.users,
                          options: { decimalPlaces: 0 }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted mb-0" }, [_vm._v("Users")])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 col-xl-4" }, [
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
                          endVal: _vm.categories,
                          options: { decimalPlaces: 0 }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted mb-0" }, [
                    _vm._v("Categories")
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 col-xl-4" }, [
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
                          endVal: _vm.articles,
                          options: { decimalPlaces: 0 }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted mb-0" }, [
                    _vm._v("Articles")
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
//# sourceMappingURL=7.js.map