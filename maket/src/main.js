import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'assets/css/base.css'

// 图片懒加载
Vue.use(VueLazyload)
// 配置文件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false
// elementUI库
Vue.use(ElementUI)
// 解决移动端点击延迟300ms
fastClick.attach(document.body)
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
