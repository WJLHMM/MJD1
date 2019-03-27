
<!-- 本菜单为以中间为中心的菜单一移动 -->
<template>
	<div class="totalmenu">
		<ul class="itemswrapper" >
			<router-link :to="'/commoditynav/' + index + '/' + item.cid" tag='li'
				v-for="(item,index) in parcatalogyList" 
				class="item"
				:key="item.cid"
				@click.native.stop.prevent="menushow(index)" 
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
			itemtopest:0,
			menumove:null//设置为点击定时器，
		}
	},
	methods: {
		menushow(i){
			//确定ul的相对位置，本案是以屏幕中心基准top326（50+6*46）。
			//1.确定ul li的dom节点
			let itemlist = document.getElementsByClassName('item')
			let itemswrapper = document.getElementsByClassName('itemswrapper')
		 	
			// 2对于选中item的节颜色，背景，左边框高亮，同时其余item变成正常，同时确定此刻在基准位置item的索引号
			// 2.1其余item变成正常
			for(let i=0;i<itemlist.length;i++){
				itemlist[i].style.color='#333'
				itemlist[i].style.backgroundColor='#f2f2f2'
				itemlist[i].style.borderRight='#f2f2f2'
				// 2.2确定此刻在基准位置item的索引号
				if(itemlist[i].getBoundingClientRect().top==326){
					this.itemtopest = i
				}
			}
			// 2.3对于选中item的节颜色，背景，左边框高亮
			itemlist[i].style.color='red'
			itemlist[i].style.backgroundColor='#fff'
			itemlist[i].style.borderRight='#fff'
			// console.log(`translateY(${itemswrapper[0].getBoundingClientRect().top-50-(i-this.itemtopest)*46}px)`)
			// 3.ul菜单的移动。 以中间为基准，如果该item在此之上，则向下移动，如果在此之下向上移动，每次变动的距离为，(i-itemtopest)*46,及，item之间间隔数量与item高之积
			
			if(i<33&&i>6){//当ul向上移动大于最后一屏幕高度时候，保持菜单ul的移动
			// 3.1故绝对距离变为ul与下沿的差值(ul起点)itemswrapper[0].getBoundingClientRect().top-50 减去变动距离
				clearTimeout(this.menumove)
	   			this.menumove= setTimeout(()=>{
					itemswrapper[0].style.transform=`translateY(${itemswrapper[0].getBoundingClientRect().top-50-(i-this.itemtopest)*46}px)`
					itemswrapper[0].style.transition="all 0.2s ease-out"
					itemswrapper[0].style.transition="all 0.3s ease-out"
				},200)
			}
			else if(i>=0&&i<=6){//当ul第一屏幕高度时候，停止菜单ul的移动1~6item
				clearTimeout(this.menumove)
	    		this.menumove= setTimeout(()=>{
					itemswrapper[0].style.transform="translateY(0px)"
				},200)
			}
			else if(i>=33&&i<=38){//当ul向上移动剩余最后一屏幕高度时候，停止菜单ul的移动33~38
				clearTimeout(this.menumove)
	   			this.menumove= setTimeout(()=>{
					itemswrapper[0].style.transform=`translateY(-1242px)`
				},200)
			}
			
			// itemswrapper[0].style.transition="all 0.5s ease-out"
			// 快速点击会出现itemtop无法确定，使得运动速度过快的问题。故设置setTimeout定时器，即使消除。transition的过渡时间短一点
		}
	},
	props:['parcatalogyList'],
	components: {
		
	},
	created(){
	}
	// watch:{
	// 	itemtopest:function(n,o){
	// 		console.log(n,'watch current')
	// 		console.log(o,'watch lastone')
	// 	}
	// }
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
		position: relative;
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
		li:nth-child(1){
			color: red;
		}
	}
	
}
	
</style>