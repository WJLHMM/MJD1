
<template>
	<div class="productshowcontainer">
		<div class="mui-card">
			<div class="mui-card-header mui-card-media" style="height:375px;background-image:url('https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/15900/19/5542/358122/5c4122caEefdb3f68/613efa2b16afc230.jpg!q80.dpg.webp')"></div>
			<div class="productbreif">
				<div class="productbreifleft">
					<img src="https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/21003/5/383/1085/5c091660Ee610c7f9/1a67f8e9589bcee2.png" alt="">
					<span class="productbreiflefttext">
						荣耀8X 千元屏霸 91%屏占比 2000万AI双摄 6GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待
					</span>
				</div>
				<div class="productbreifright">
					<span class="mui-icon-extra mui-icon-extra-heart"></span>
					<p>关注</p>
				</div>
			</div>
			<div class="pricewrap">
				<div class="priceinfo">
					<span class="currency">￥</span>
					<span class="pricedata1">1599</span>
					<span class="pricedata2">.00</span>
				</div>
				<button class="pricedownshow">降价提醒</button>
			</div>
				
			
		
		</div>

	</div>
</template>

<script>



export default {

	data(){
		return {
			
		}
	},
	methods: {
		
	},
	components: {
		

	},
	created(){
		
	}
}
</script>

<style scoped lang='less'>
	.productshowcontainer {
		margin-top: 50px;
		padding:0 6px;
		.mui-card {
			margin: 0;
			padding:0;
			width:100%;
			background-size: contain;
			.productbreif {
				width: 100% ;
				height: 76px;
				padding: 12px 10px 10px 10px;
				display: flex;
				justify-content: space-between;
				-ms-align-items: center;
				align-items: center;
				.productbreifleft {
					width: 82%; 
					line-height: 18px;
					img {
						width: 25.7px;
						height: 15px;
					}
					span {
						width: 100%;
						font-size: 16px;
					}
			    }	
		    }
			.pricewrap {
				display: flex; 
				justify-content: space-between;  
				 align-items: center;
				 height: 24px;  
				 padding: 10px;
				.priceinfo {
					color:red;
					span:nth-child(2){
						font-size: 18px;
						font-weight:400;
					}
				}
				.pricedownshow {
					width: 60px; 
					height:20px;
					font-size: 12px;
					text-align: center;
					line-height: 20px;
					display:inline-block;
				}
			}

			
			
		}
	}
</style>