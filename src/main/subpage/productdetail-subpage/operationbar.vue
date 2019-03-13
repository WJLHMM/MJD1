
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
				<span class="mui-badge mui-badge-danger">1</span>
				<span>购物车</span>
			</div>
			<div class="buttongroup">
				<button class="addtocart">加入购物车</button>
				<button class="buynow">立即购买</button>
			</div>
		
		</div>
	</div>

</template>

<script >


export default {
	data() {
		return {
			
			
		}
	},
	methods: {
	   

	},

	created(){

	}
}
</script>

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