import Vue from 'vue'
import store from './store/'
import router from './router'
import './config/rem'
import FastClick from 'fastclick'

// webpack 项目 vue 启动流程
// npm run dev 会在当前目录下找到 package.json 并执行script里面的dev
// 根据 dev 里面的配置确定应用的entry,SPA应用目前看来约定为main.js
// 在此main.js文件中创建了一个Vue对象,并把App.vue模板的内容挂载到 index.html 的 id 为app 的标签下面,并且绑定了一个router,store
// 之后渲染展示出来 App.vue
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body)
    },
    false
  )
}

new Vue({
  router,
  store
}).$mount('#app')
