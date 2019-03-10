
<template>
<div class="searchcontainer">
    <div class="scandibarcode">
        <span class="mui-icon-extra mui-icon-extra-sweep"></span>
        <span class="mui-tab-label">扫啊扫</span>
    </div>
    <mt-search ></mt-search>
    <div class="lastestnews"> 
        <span class="mui-icon mui-icon-chatbubble"></span>
        <span class="mui-tab-label">消息</span>
    </div>
</div>

	
</template>

<script>
    import Vue from 'vue';
	import { Search } from 'mint-ui';
    Vue.component(Search.name, Search);
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			
		},
		components: {
			
		},
		created(){
		}
	}
</script>

<style scoped lang='less'>
.searchcontainer{
    width: 100%;
    height:50px;
    position:absolute;
    top:10px;
    left:0;
    border: 1px solid rgb(0, 255, 55);
    display:flex;
    z-index:1000;
    justify-content: space-between;
    align-items: center;
    padding-left: 2px;
    padding-right:2px;
    .scandibarcode {
        width:40px;
        height:40px;
        border:1px solid #808080;
        border-radius: 50%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #808080;
        .mui-icon-extra-sweep{
            font-size: 20px;
            color:#fff;
        }
        .mui-tab-label {
            font-size: 12px;
            height: 10%;
            transform: scale(0.60);
            color:#fff;
        }
    }
    .mint-search {
        width: 80%;
        height:80%
    }
    .lastestnews {
        width:40px;
        height:40px;
        border:1px solid #808080;
        border-radius: 50%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #808080;
        .mui-icon-chatbubble{
            font-size: 20px;
            color:#fff;
        }
        .mui-tab-label {
            font-size: 12px;
            height: 10%;
            transform: scale(0.60);
            color:#fff;
        }
    }
}

	
</style>