
<template>
	<div class="totalmenu">
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll" >
					<router-link :to="'/commoditynav/' + index + '/' + item.cid" tag='div'
						 v-for="(item,index) in parcatalogyList" 
						 class="mui-control-item mui-active"
						 data-wid="tab-top-subpage-1.html"
						 :key="item.cid">
						{{item.name}}
					</router-link>
				</div>
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
	props:['parcatalogyList'],
	components: {
		
	},
	created(){
	}
}
</script>

<style scoped lang='less'>
	.totalmenu {
		width: 86px;
		height: 1846px;
		/* background: blue; */
		padding: 0;
		.mui-slider {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			.mui-scroll-wrapper {
				width: 86px;
				height: 100%;
				margin: 0;
				padding: 0;
				.mui-scroll {
					width: 86px;
					height: 1846px;
					/* 注意定位一直是relative 到这层改为ab,所以防止错位 top,left 要设置 */
					top: 0;
					left: 0;
					display: flex;
					flex-direction: column;
					align-items:center; 
					white-space: wrap;
					margin: 0;
					padding: 0;
					.mui-control-item {
						display: inline-block;
						width: 86px;
						height: 46px;
						color: #333;
						text-align: center;
						line-height: 46px;
						padding: 0;
						background-color:#f2f2f2;
						border-bottom: 1px solid #888;
						border-right: 1px solid #888;
					}
				}
			}
		}
		
	}
	
</style>