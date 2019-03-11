<template>
	<div class="catalogynav">
		<div class="catalogynavheader">
			<span>{{parcatalogynavheader}}</span>
		</div>
		<div class="catalogynavdeteils">
			<ul class="catalogynavitemwrap">
				
				<router-link to="/productlist"
					tag="li"
					class="catalogyitem" 
					v-for="(item,index) in parcatalogyListdetail" 
					:key="item.cid"
				>
					<img :src="item.imgurl">
					<span>{{item.productname}}</span>
				</router-link>
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
			max-width: 550px;
			line-height:46px;
		  	background-color: #fff;
			border:1px solid #f2f2f2;
			position:fixed;
			top:50px;
			span {
				position: absolute;
				left:0;
				width: 100%;
				padding-left:10px;
			}
		}
		.catalogynavdeteils {
			padding-left:10px;
			padding-top:10px;
			margin-top: 46px;
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