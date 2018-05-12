// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'

Vue.config.productionTip = false

Vue.component('Jack', {//全局注册Jack,少用全局的
  template: '<p>I am {{name}}</p>',
  data(){
    return{
      name:'Jack Ma'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { "App": App },//ES6语法，如果key和value是相同的，可以写成components: { App }
  template: '<App/>'
})
