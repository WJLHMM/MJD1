<template>
	<div class="catalogynav">
		<div class="catalogynavheader">
			{{parcatalogynavheader}}
		</div>
		<div class="catalogynavdeteils">
			<ul class="catalogynavitemwrap">
				<li class="catalogyitem" v-for="(item,index) in parcatalogyListdetail" :key="item.cid">
					<img :src="item.imgurl">
					<span>{{item.productname}}</span>
				</li>
			</ul>
		    
		</div>

	</div>

</template>

<script>

export default {
	data() {
		return {
			// catalogynavheader:null
		}
	},
	
	props:['parcatalogyListdetail','parcatalogynavheader'],
	created(){

	}

}
</script>

<style lang="less" soped>
	.catalogynav {
		width: 550px;
		// border:1px solid red;
		
		.catalogynavheader {
			width:100%;
			height:46px;
			line-height:46px;
		    padding-left:10px;
			border:1px solid #f2f2f2;
		}
		.catalogynavdeteils {
			padding-left:10px;
			padding-top:10px;
			.catalogynavitemwrap {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				.catalogyitem {
					width: 33.3%;
					height:107px;
					display: flex;
					flex-direction: column;
					align-items: center;
					img {
						width: 70px;
						height:70px;
					}
				}
			}
		}

	}
</style>