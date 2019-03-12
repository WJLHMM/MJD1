
<template>
	<div class="productlist">
		<search></search>
		<smallnavbar></smallnavbar>
		<smallbar2></smallbar2>
		<productlistitem></productlistitem>
	</div>
</template>

<script>
import search from './components/search.vue'
import smallnavbar from './components/smallnavbar.vue'
import productlistitem from './components/productlistitem.vue'
import smallbar2 from './subpage/productlist-subpage/smallbar2.vue';

export default {

	data(){
		return {
			
		}
	},
	methods: {
		
	},
	components: {
		search,
		smallnavbar,
		smallbar2,
		productlistitem
	},
	created(){
		
	}
}
</script>

<style scoped lang='less'>

</style>