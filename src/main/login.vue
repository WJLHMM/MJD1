
<template>
	<div class="login">
		<appheader></appheader>
		<div class="inputfidld">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<input type="text" class="mui-input-clear" placeholder="用户名/邮箱/已验证手机">
				</div>
				<div class="mui-input-row mui-password">
					<input type="text" class="mui-input-clear mui-input-password" placeholder="请输入密码">
					<span class="mui-icon mui-icon-eye">|</span>
					<button type="button" class="" onclick="return false;">忘记密码</button>
				</div>
				<div class="mui-button-row">
					<button type="button" class="mui-btn  mui-btn-danger" @click="login">登录</button>
					<button type="button" class="mui-btn mui-btn-default" onclick="return false;">一键登录</button>
				</div>
			</form>
		</div>
		<div class="otherway">
			<button type="button" class="mui-btn mui-btn-default" onclick="return false;">短信验证登录</button>
			<button type="button" class="mui-btn mui-btn-default" onclick="return false;">手机快速注册</button>
		</div>
		<div class="morelog">
  			<h6>其它登录方式</h6>
			<div class="morelogways">
				<div class="weichatlogin">
					<span class="mui-icon mui-icon-weixin"></span>
					<span>微信</span>
				</div>
				<div class="qqlogin">
					<span class="mui-icon mui-icon-qq"></span>
					<span>QQ</span>
				</div>
			</div>
			<div class="logpolice">
				<span>登录即代表您已同意</span>
				<span>京东隐私政策</span>
			</div>
		</div>

	</div>
</template>

<script>
import appheader from './components/header.vue'


export default {

	data(){
		return {
			isLogin:false,
			check:null
		}
	},
	methods: {
		login(){
			let that = this
			// this.isLogin = true;
			// this.$store.commit('updateisLogin',this.isLogin);
			// localStorage.setItem('isLogin',window.JSON.stringify(this.isLogin))
			// if(this.isLogin) {
			// 	this.$router.push({path:'/myinfo'});
			// }
			// mui.alert('确认初始化OK')
		
			//若当前input为空，则alert提醒 
			if(!this.value || this.value.trim() == "") {
			    var label = this.previousElementSibling;
			    mui.alert("用户名和密码" + "不允许为空");
			    // that.check = false;
			    return false;
			}
			 //校验通过，继续执行业务逻辑 
			// if(check){
			//     mui.alert('验证通过!')
			// }
		}
	},
	components: {
		appheader
	},
	created(){
		
	},
	mounted(){
		mui('.mui-input-row input').input(); 
		
	}
}
</script>

<style scoped lang='less'>
.login {
	width: 100%;
	.inputfidld {
		width:100%;
		margin-top: 50px;
		.mui-input-group {
			width:100%;
			.mui-input-row {
				height: 60px;
				line-height:1;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.mui-password {
				width: 100%;
				position: relative;
				.mui-input-password {
					width: 70%;
				}
				.mui-icon-eye {
					height: 100%;
					top: 0;
					right: 66px;
					text-align: center;
					line-height: 60px;
				}
				button {
					height:100%;
					border: 0;
				}
			}
			.mui-button-row {
				width: 100%;
				height: 110px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				margin-top: 30px;
				.mui-btn {
					display: inline-block;
					padding: 0;
					height: 50px;
					width: 320px;
					line-height: 50px;
					border-radius: 25px;
					border: 1px solid #dd524d;
				}


			}

		}
	}

	.otherway {
		height: 100%;
		display: flex;
		margin-top: 20px;
		justify-content: space-between; 
		align-items: center;
		padding:0px 27px;
		button {
			border: none;
		}
	}
	.morelog {
		margin-top: 100px;
		width: 100%;
		h6 {
		display: block;     
		position: relative; 
		left: 35%; 
		width: 100%;
		}
		h6:before,h6:after {
			content: '';               
			position: absolute;       
			top: 50%;
			background: #969696;      
			width: 30%;
			height: 1px;
		}
		h6:before{
			left: -30%;        
		}
		h6:after {
			right: 45%;
		}
		.morelogways {
			display: flex;
			height: 60px;
			width: 100%;
			justify-content:center;
			align-items: center;
			.weichatlogin,.qqlogin {
				display: flex;
				justify-content: center; 
				align-items: center;  
				flex-direction: column;
				margin-right:20px;
				.mui-icon {
					width: 48px;
					height: 48px;
					border-radius: 24px;
					text-align: center;
					line-height: 48px;
					font-size: 36px;
					&.mui-icon-weixin {
						color: green;
					}
					&.mui-icon-qq {
						color: blue;
					}
				}
			}
		}
		.logpolice{
			width: 100%;
			display: flex; 
			margin-top:10px;  
			justify-content: center;
			align-items: center;
			font-size: 14px;  
			span:nth-child(2){
				font-size: 12px;  
				color: blue;
			}
		}
	}

}
</style>