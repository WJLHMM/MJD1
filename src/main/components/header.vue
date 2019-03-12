
<template>
	<div class="headerfixcontainer" >
		<mt-header  
			:title="title" 
			:style="{
				'font-size':'18px',
				'background-color':color,
				'color':textcolor,
				'height':'50px',
				'border-bottom':'1px solid #808080'
			}"
		>
		  <router-link to="/" slot="left">
		    <mt-button icon="back" type="default" ></mt-button>
		  </router-link>
		  <mt-button v-show ="isLoginpath" icon="more" slot="right" type="default" ></mt-button>
		</mt-header>
	</div>
</template>

<script >

import Vue from 'vue';
import { Header,Button  } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

export default {
	data(){
		return {
			title:null,
			color:null,
			textcolor:null,
			isLoginpath:false

		}
	},
	methods: {
		
	},
	components:{
	},
	created(){
		if(this.$route.fullPath=='/mycart') {
			this.title = '购物车',
			this.color = '#fff',
			this.textcolor= '#000'
		}else if(this.$route.fullPath=='/login'){
			this.title = '登录页面',
			this.color = '#fff',
			this.textcolor= '#000'
		}else if(this.$route.fullPath=='/myinfo'){
			this.title = '我的信息',
			this.color = '#fff',
			this.textcolor= '#000'
		}else if(this.$route.fullPath=='/productdetail'){
			this.title ='', 
			this.color = '#fff',
			this.textcolor= '#000',
			this.isLoginpath = true
		}
		
	}
}
</script>

<style scoped lang='less'>
	.headerfixcontainer {
		position: fixed;
		top: 0;
		width: 100%;
		max-width: 636px;
		background-color: #fff;
		z-index: 10;
	}






</style>