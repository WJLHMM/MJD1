
<template>
	<div class="sortbarwrapper">
		<ul class="sortbar">
			<li class="sortitem">综合<span class="mui-icon mui-icon-arrowdown"></span></li>
			<li class="sortitem">销量</li>
			<li class="sortitem">服务<span class="mui-icon mui-icon-arrowdown"></span></li>
			<li class="sortitem">筛选<span class="mui-icon-extra mui-icon-extra-filter"></span></li>
		</ul>
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
	.sortbarwrapper {
		position: fixed;
		top: 50px;
		width: 100%;
		height: 40px;
		background: #fff;
		border-bottom: 1px solid #808080;
		.sortbar {
			position: absolute;
			left: 0;
			display: flex;
			justify-content: space-around; 
			align-items: center;
			width: 100%;
	      	height: 40px;
			.sortitem {
				width: 100%; 
				height: 100%;
				flex: 1;
				line-height: 40px;
				text-align: center;
			}
		}
	}
</style>