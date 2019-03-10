//入口文件
import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = '/mock-data/Api';

import  router from './router.js'
import  store from './vuex.js'


import './lib/mui-master/dist/css/mui.css'
import './lib/mui-master/dist/css/icons-extra.css'
import './lib/default.less'
import './lib/iconfont/iconfont.css'

import App from './app.vue'



var vm = new Vue({
	el:'#app',
	data: {},
	methods:{},
	render: c => c(App),
	router,
	store
})
