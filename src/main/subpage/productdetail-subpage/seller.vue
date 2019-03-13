<template>
	<div class="sellerwrapper">
		<div class="sellername">
			<span class="sellerlogo">
				<img class="shopLogo" id="shopLogo" src="//img13.360buyimg.com/cms/jfs/t1/7612/15/4826/4894/5bdbee52E3beb1314/3a4a0a5cddabfa59.jpg!q70.dpg">
			</span>
			<span class="sellername">荣耀京东自营旗舰店</span>
			<span class="isselfseller">京东自营</span>
		</div>
		<div class="sellproduct">
			<div class="fanamount">
				<span class="amount">1000000</span>
				<span class="amount">粉丝人数</span>
			</div>
			<div class="productamount">
				<span>1000</span>
				<span>全部商品</span>
			</div>
		</div>
		<div class="sellerfocus">
			<div class="isfocused">
				<span class="mui-icon mui-icon-star-filled"></span>
				已关注店铺
			</div>
			<div class="enterseller">
				<span class="mui-icon mui-icon-home-filled"></span>
				进入店铺
			</div>
		</div>
	</div>
</template>

<script>

export default {


}

</script>

<style scoped lang="less">
.sellerwrapper {
	display: flex; 
	flex-direction: column;
	align-items: center;
	height:146px;
	width: 100%;
	padding:10px 10px;
	.sellername {
		width: 100%;
		height:30px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		.sellerlogo {
			width: 90px;
			height:30px;
			border:1px solid #e8e8ed;
			img {
				width: 90px;
				height:30px;

			}
		}
		.sellername {
			width:126px;
			font-size: 14px; 
			color:#333;
		}
		.isselfseller {
		    display: inline-block;
		    width: 49px;
		    height: 15px;
		    line-height: 15px;
		    text-align: center;
		    border-radius: 1px;
		    margin-left: 5px;
		    font-size: 10px;
		    color: #fff;
		    background-color: #e4393c;
		}
	}
	.sellproduct {
		width: 100%;
		height: 46px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top:8px;
		.fanamount,.productamount {
			display: flex; 
			flex-direction: column; 
			justify-content: space-around; 
			align-items: center;
			width: 50%; 
			height:100%;
			span:nth-child(2) {
				color:#333;
				font-size: 12px;
			};
		}
		.fanamount {
			border-right: 1px solid #e8e8ed;
		}
	}
	.sellerfocus {
		width:100%;
		margin-top:8px;
		display:flex;
		justify-content: space-around;
		align-items: center;
		.isfocused,.enterseller {
			width:172px;
			height:30px;
			display: flex; 
			justify-content: center;
			align-items: center;
			border:1px solid #e8e8ed;
			span {
				font-size:16px;
				
			}
		}
		.isfocused {
			color: #ff9600;
		}
		.enterseller {
			color: #333;
		}
	}
}


	
</style>