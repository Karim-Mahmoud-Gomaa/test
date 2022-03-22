import Vue from "vue";
import router from "./routes/index";
import store from "./store/index";
import Swal from 'vue-sweetalert2';
import i18n from './i18n';

Vue.use(Swal);
Vue.config.debug = true

//select
Vue.component("v-select", vSelect);
import vSelect from "vue-select";
////////////////////////////////////////////
import excel from 'vue-excel-export'
Vue.use(excel)
////////////////////////////////////////////
import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);
////////////////////////////////////////////
//vue-moment
Vue.use(require('vue-moment'));

Vue.mixin({
  // created() {
      
  // },
  data: function() {
    return {
      // client_payments:[]
    }
  },
  methods: {
    moneyFormat: function (num,fixed=2) {
      let val = (num/1).toFixed(fixed).replace('.', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
  },
})
////////////////////////////////////////////
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
////////////////////////////////////////////
import VueHtmlToPaper from 'vue-html-to-paper';

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [ 
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css','/assets/css/print.css'
  ]
}

Vue.use(VueHtmlToPaper, options);
////////////////////////////////////////////
import { BeatLoader } from 'vue-spinner/dist/vue-spinner.min.js'
Vue.component('beat-loader', BeatLoader)
////////////////////////////////////////////
import VSwitch from 'v-switch-case'
Vue.use(VSwitch)
////////////////////////////////////////////
Vue.use(require('vue-shortkey'))

const app = new Vue({
  el: "#app",
  router,
  i18n,
  store
});
