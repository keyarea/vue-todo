import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment/moment'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 过滤器
Vue.filter('dateFormat', (value, formatString) => {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  if (!value) return '';
  return moment(value).format(formatString);
});