
<template>
	<div class="totalmenu">
		<ul class="itemswrapper" >
			<router-link :to="'/commoditynav/' + index + '/' + item.cid" tag='li'
				v-for="(item,index) in parcatalogyList" 
				class="item"
				:key="item.cid"
				style="{'color':'blue'}"
				@click.native="menushow(index)" 
			>
				{{item.name}}
			</router-link>
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
		menushow(i){
			let item = document.getElementsByClassName('item')
			console.log(item[i].offsetTop)
			console.log(item[i].style.color)
		}
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
	.itemswrapper {
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
		.item {
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
	
</style>