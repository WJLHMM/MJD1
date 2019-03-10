
<template>
	<div class="mycart">
		<appheader></appheader>
		<actionsheet></actionsheet>
		<cart :parselfselllist ="selfselllist" :parunitedselllist="unitedselllist" ></cart>
		<settlementfooter></settlementfooter>

	</div>
</template>

<script>
import appheader from './components/header.vue';
import cart from './subpage/mycart-subpage/cart.vue';
import actionsheet from './subpage/mycart-subpage/actionsheet.vue';
import settlementfooter from './subpage/mycart-subpage/settlementfooter.vue';

export default {

	data(){
		return {
			selfselllist:[],
			unitedselllist:[]
		}
	},
	methods: {
		getshopcartlist() {
				this.$http.get('cartinfo.json').then(res=> {
				if(res.body.success) {
					this.selfselllist=[...res.body.data.cartproinfo.selfsell],
					this.unitedselllist=[...res.body.data.cartproinfo.united]
				// 	console.log(this.selfselllist)
				// 	console.log(this.unitedselllist)
				}else {
					Toast({
					message: '读取数据失败',
					position: 'middle',
					duration: 3000
					});
				}
			}, (e) => {
				console.log(e)
			})
		}
	},
	components: {
		appheader,
		actionsheet,
		cart,
		settlementfooter
	},
	created(){
		if(this.$route.fullPath=='/mycart') {
			this.title = '购物车'
		}
		this.getshopcartlist()
	}
}
</script>

<style scoped lang='less'>
	
	
</style>