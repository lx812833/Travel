import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'styles/reset.css'
//轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//1px边框
import 'styles/border.css'
//解决移动端点击300毫秒延迟
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
