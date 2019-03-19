
<template>
<div class="muibarfixedcontainer">
	<nav class="mui-bar mui-bar-tab">
		<router-link to='/home'class="mui-tab-item mui-active" >
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		 </router-link>
	
		<router-link to='/commoditynav'class="mui-tab-item" >	
			<span class="mui-icon mui-icon-email"></span>
			<span class="mui-tab-label">分类</span>
		</router-link>

		<router-link to='/mycart'class="mui-tab-item" >
			<i class="iconfont cart-iconfont">&#xe618;<span class="mui-badge cart-badge">{{cartlistlengthfromoperationbar}}</span></i>
			<span class="mui-tab-label cart-text">购物车</span>
		</router-link>

		<router-link :to="footer_isLogin?'/login':'/myinfo'"class="mui-tab-item" >
			<span class="mui-icon mui-icon-contact"></span>
			<span class="mui-tab-label">我的</span>
		</router-link>
	</nav>
</div>
</template>

<script >

export default {
	data(){
		return {
			cartlistlengthfromoperationbar:0
		}
	},
	methods: {
		
	},
	created(){
		this.cartlistlengthfromoperationbar = JSON.parse(localStorage.getItem('cartlistlength')||'[]');
	},
    computed: {
        footer_isLogin() {
            return this.$store.state.storeisLogin
        }, 
  		


    },
    updated(){

    },
    props:['']
}
</script>

<style scoped lang='less'>

.muibarfixedcontainer {
	position:fixed;
	width: 100%;
	height:50px;
	bottom:0;
	z-index: 100;
	.mui-bar-tab {
		display:flex;
		max-width: 636px;
		justify-content: space-around;
		position: absolute;
		left:0;
		.mui-tab-item {
			flex:1;
			display:flex;
			flex-direction: column;
			justify-content: space-around;
			.mui-icon {
				width:100%;
				justify-content: center;
			}
			.cart-iconfont {
				position:relative;
				.cart-badge {
					position: absolute;
					top:-5px;
					background-color: rgba(255, 0, 0, 0.897);
					font-size:10px;
					color:#fff;
				}
			}
			.cart-text {
				font-size: 12px;
			}
		}	
	}
}


</style>