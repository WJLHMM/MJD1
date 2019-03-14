
<template>
	<div class="productdetail">
		<appheader></appheader>
		<smallnavbar></smallnavbar>	
		<productshow :parproductitem=productitem></productshow>	
		<seller :parselleritem=selleritem></seller>
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
			sellerlist:null,
			selleritem:null,
			productdetail:null,
			productitem:null
		}
	},
	methods: {
		getproductdetaillist() {
			this.$http.get('productdetaillist.json').then(res=> {
			if(res.body.success) {
				this.productdetail=[...res.body.data]
				this.productdetail.some((item,index)=> {
					// 在数组的some方法中，如果return true;就会立刻终止这个数组的循环
					if(this.proname==item.proname){
						console.log(index);
						this.productitem =this.productdetail[index]
						return true;
					}
				})
				
				console.log(this.productitem)
			}	
			else {Toast({
				message: '读取数据失败',
				position: 'middle',
				duration: 3000
				});
			}
		}, (e) => {
			console.log(e)
		})
		},
		getsellerlist() {
			this.$http.get('sellerlist.json').then(res=> {
			if(res.body.success) {
				this.sellerlist=[...res.body.data]
				this.sellerlist.some((item,index)=> {
					// 在数组的some方法中，如果return true;就会立刻终止这个数组的循环
					if(this.proname==item.proname){
						console.log(index);
						this.selleritem =this.sellerlist[index]
						return true;
					}
				})
				
				console.log(this.selleritem)
			}	
			else {Toast({
				message: '读取数据失败',
				position: 'middle',
				duration: 3000
				});
			}
		}, (e) => {
			console.log(e)
		})
		},
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
		this.getproductdetaillist()
		this.getsellerlist()
		this.proname = this.$route.query.proname
		console.log(this.proname)
	}
}
</script>

<style scoped lang='less'>

</style>