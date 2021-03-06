//导入vur-router包
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './app.vue'
import home from './main/home.vue'
import commoditynav from './main/commoditynav.vue'
import mycart from './main/mycart.vue'
import myinfo from './main/myinfo.vue'
import login from './main/login.vue'
import productlist from './main/productlist.vue'
import productdetail from './main/productdetail.vue'
import catalogynav from './main/subpage/Commoditynav-subpage/catalogynav.vue';

var router = new VueRouter({
	routes:[//
		{ path:'/',redirect:'home'},
		{ 
			path:'/home',
			component:home
		},	
		{ 
			path:'/commoditynav',
			component:commoditynav,
			children: [
				{ path:'',redirect:'0/WQR2006'},
				{ path:':id/:cid',component:catalogynav}
			]

		},	
		{ path:'/mycart',component:mycart},	
		{ path:'/myinfo',component:myinfo},	
		{ path:'/login',component:login},	
		{ path:'/productlist',component:productlist},	
		{ path:'/productdetail',component:productdetail},	
	],
	// linkActiveClass:'mui-active'//使用mui-active这个mui定义的高亮，替换默认的router-link-active，从而实现高亮


})

export default router;