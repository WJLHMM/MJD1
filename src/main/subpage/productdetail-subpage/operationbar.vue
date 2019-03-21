
<template>
	<div class="operationfixcontainer">
		<div class="operationbar">
			<div class="contactcs">
				<span class="mui-icon-extra mui-icon-extra-custom"></span>
				<span>联系客服</span>
			</div>
			<div class="entershopper">
				<span class="mui-icon mui-icon-home-filled"></span>
				<span>进店</span>
			</div>
			<div class="cart">
				<span class="mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-badge mui-badge-danger">{{cartlistlength}}</span>
				<span>购物车</span>
			</div>
			<div class="buttongroup">
				<button class="addtocart" @click.self='addcart(parproname)'>加入购物车</button>
				<button class="buynow">立即购买</button>
			</div>
		
		</div>
	</div>

</template>

<script >
import Vue from 'vue'
import { Toast } from 'mint-ui';
Vue.component(Toast.name, Toast);

export default {
	data() {
		return {
			cartlist:[],
			cartlistlength:0
		}
	},
	methods: {
		addcart(parproname) {
			this.cartlist = JSON.parse(localStorage.getItem('cartlist')||'[]');
			// console.log(!this.cartlist.includes(parproname))
			if(!this.cartlist.includes(parproname)){
				this.cartlist.unshift(parproname);
			
			}else {
				Toast({
					message: '该产品已经加入购物车',
					position: 'middle',
					duration: 1000
				});
			}
			
			this.cartlistlength = this.cartlist.length
			localStorage.setItem("cartlist",window.JSON.stringify(this.cartlist))//这里不加window.老报错
			localStorage.setItem("cartlistlength",window.JSON.stringify(this.cartlistlength))//这里不加window.老报错
			this.$store.commit('updatecartlistlength',this.cartlistlength)
			this.$store.commit('updatecartlist',this.cartlist)
		}
	},

	created(){
		this.cartlist = JSON.parse(localStorage.getItem('cartlist')||'[]');
		this.cartlistlength = JSON.parse(localStorage.getItem('cartlistlength')||'[]');
		this.$store.commit('updatecartlistlength',this.cartlistlength)
		this.$store.commit('updatecartlist',this.cartlist)
	},
	props:['parproname'],
	updated(){
		
		// this.cartlistlength = this.cartlist.length
	}
}
</script>
<style>
/* 全局样式 */
.mint-toast {
  background-color: red !important;
}
</style>
<style scoped lang='less'>
.operationfixcontainer {
	position: fixed;
	bottom: 0;
	max-width: 636px;
	height: 60px;
	width: 100%;
	z-index: 10;
	.operationbar {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top:1px solid #000 ;
		background-color: #fff;
		left: 0;
		.contactcs,.entershopper,.cart {
			display: flex; 
			flex-direction: column;
			justify-content: space-around; 
			align-items: center;
			color: #333;
			span {
				font-size: 12px;
			}
			span:nth-child(1){
				font-size: 28px;
			}
		}
		.cart {
			position: relative;
			.mui-badge-danger {
				position: absolute;
				top: 0px;
				right: 2px;
			}
		}
		.buttongroup {
			height: 100%;
			display: flex; 
			justify-content: flex-end;
			align-items: center;
			button {
				padding: 0;
				margin: 0;
				height: 100%;
				width: 108px;
				border: 0;
				color: #fff;
				font-size: 16px;
			}
			.addtocart {
				background: #ff9600;
				
			}
			.buynow {
				background: #e4393c;
			}
		}

	}
}

</style>