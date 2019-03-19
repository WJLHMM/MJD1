
<template>
	<div class="container">
		
		<router-view></router-view>
	
		<appfooter v-show='isFooterShow'></appfooter>
	</div>
</template>

<script>
	
	
	import appfooter from './main/components/footer.vue';

	import mui from './lib/mui-master/dist/js/mui.min.js';

	export default {
		data(){
			return {
				
			}
		},
		methods: {
			handleScroll () {
				let scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				this.$store.commit('updatescrolltop',scrolltop);
			},
		},
		components: {
			appfooter
		},
		computed: {//this.$route.path
			isFooterShow() {
				if(this.$route.fullPath==='/mycart'||this.$route.fullPath==='/login'||this.$route.fullPath.indexOf('productdetail')!=-1) {
					return isFooterShow=false
				}else {
					return isFooterShow=true
				}
				
			} 
	        // footer_cartlistlength() {
	        //     return this.$store.state.storecartlistlength
	        // }
		},
		created(){
			
		},
		mounted(){
			window.addEventListener('scroll', this.handleScroll)
			mui('body').on('click','a',function(){document.location.href=this.href;});
			mui('body').on('tap','a',function(){document.location.href=this.href;});
		},
		destroyed () {
  			window.removeEventListener('scroll', this.handleScroll)
		}

	}
</script>

<style lang='less'>

html, body {
	border:0;
	touch-action: manipulation; 
	.container {
		display:flex;
		/* height: 100%; */
		border-left: 1px solid #888;
		border-right: 1px solid #888;
		/* border-bottom: 1px solid #888; */
		flex-direction:column;
		justify-content: space-between;
	}
	
}
	
</style>