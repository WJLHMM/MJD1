
<template>
	<div class="sktitle">
		<div class="sksectionleft">
			<span class="sksectionlefttext1">京东秒杀</span>
			<span class="sksectionlefttext2">10点场</span>
			<div class="skhour">10</div>
			<div class="skmin">11</div>
			<div class="sksec">12</div>
		</div>
		<div class="sksectionright">
			<span>更多秒殺</span>
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
	props:[''],
	created(){
		
	}
}
</script>

<style scoped lang='scss'>
.sktitle{
	width:100%;
	height:34px;
	display:flex;
	padding-left:1%;
	padding-right:1%;
	align-items:center;
	justify-content:space-between;
	.sksectionleft {
		display:flex;
		align-items:center;
		.sksectionlefttext1 {
			color:red;
			font-size:20px;
			font-weight:bold;
		}
		.sksectionlefttext2 {
			font-size:10px;
			margin-right:2px;
		}
		.skhour,.skmin,.sksec {
			border:1px solid #eee;
			font-size:10px;
			margin-right:2px;
		}
	}
	.sksectionright {
		padding-right:2%;
		color:red;
		font-size:16px;
	}
}

	

	
</style>