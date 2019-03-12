
<template>
	<div class="productdetail">
		<appheader></appheader>
		<smallnavbar></smallnavbar>	
		<productshow></productshow>	


	</div>
</template>

<script>

import appheader from './components/header.vue'
import smallnavbar from './components/smallnavbar.vue'
import productshow from './subpage/productdetail-subpage/productshow.vue';

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
		productshow

	},
	created(){
		
	}
}
</script>

<style scoped lang='less'>

</style>