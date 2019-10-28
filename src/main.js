// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


/*
  修改webpack.base.conf.js 中的resolve
  resolve: {
    alias: {
      'styles': resolve('src/assets/styles')
    }
  },
 */
// 解决1px问题/重置元素原样式/图标工具
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css';

// 引入 fastclick 解决手机端点击click事件延迟300ms问题
import fastClick from '../node_modules/fastclick/lib/fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
