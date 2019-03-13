
<template>
	<div class="productdetail">
		<appheader></appheader>
		<smallnavbar></smallnavbar>	
		<productshow></productshow>	
		<seller></seller>
		<divgap></divgap>
		<appraisearea></appraisearea>
		<operationbar></operationbar>
 		<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>

	</div>
</template>

<script>

import appheader from './components/header.vue'
import divgap from './components/divgap.vue'
import smallnavbar from './components/smallnavbar.vue'
import productshow from './subpage/productdetail-subpage/productshow.vue';
import seller from './subpage/productdetail-subpage/seller.vue';
import appraisearea from './subpage/productdetail-subpage/appraisearea.vue';
import operationbar from './subpage/productdetail-subpage/operationbar.vue';

export default {

	data(){
		return {
			
		}
	},
	methods: {
		
	},
	components: {
		appheader,
		smallnavbar,
		productshow,
		seller,
		divgap,
		appraisearea,
		operationbar

	},
	created(){
		
	}
}
</script>

<style scoped lang='less'>

</style>