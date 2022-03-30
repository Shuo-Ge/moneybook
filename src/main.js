import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 导入公共样式
import './assets/css/common.css'
// 导入字体图标库
import './assets/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
