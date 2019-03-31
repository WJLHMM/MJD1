
<template>
	<div class="myinfo">
		<appheader></appheader>
		<div class="myinfolist">
			<div class="myinfocardwrap">
				<div class="myinfocard">
					<div class="myaccountman" @click="showquit">
						<span class="mui-icon mui-icon-gear-filled"></span>
						<span>账号管理</span>
						<p class="quit" @click="quitlogin" tag="p" v-show="isQuitshow">退出</p>
					</div>
					<div class="myinfodetail">
						<div class="myavater">
							<p class="myavaterimg">
								
							</p>
						</div>
						<div class="mydetails">
							<div class="mynickname">
								<span>{{myinfo.nikename}}</span>
								<span>{{myinfo.grade}}</span>
							</div>
							<div class="mylogname">
								<span>用户名:</span>
								<span>{{userloginedinmyinfo.usernamelogined}}</span>
							</div>
							<div class="mycreditinfo">
								<button type="button">积分值{{myinfo.creditpoint}}</button>
								<button type="button">信用值{{myinfo.jdmoneypoint}}</button>
							</div>
						</div>
					</div>
					<div class="myinfo_concession_card">
						<div class="plus"></div>
						<button class="yearcard">年卡特惠价</button>
					</div>
				</div>
			</div>
			
			<ul class="myinfopurchasing">
				<li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below">待付款</div>
				</li>
				<li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li>
				<li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li>
				<li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li>
			</ul>
			<div class="myinfoasset">
				<li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below">待付款</div>
				</li>	<li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below">待付款</div>
				</li>	<li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below">待付款</div>
				</li>
			</div>
			<div class="myinfotrail">
				<li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li><li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li><li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li><li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li><li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li>
			</div>
			<div class="myinfoothers">
				<li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li><li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li><li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li><li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li><li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li><li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li><li class="myinfopurchasingitem">
					<div class="myinfopurchasing_upper"></div>
					<div class="myinfopurchasing_below"></div>
				</li>
			</div>
		</div>
	</div>
</template>

<script>
import appheader from './components/header.vue';

export default {
	data(){
		return {
			isQuitshow:false,
			isLogininmyinfo:true,
			userloginedinmyinfo:{},
			myinfo:{}
		}
	},
	methods: {
		showquit(){
			this.isQuitshow = true
		},
		quitlogin() {
			this.isLoginininmyinfo = false
			this.isQuitshow = true
			this.$store.commit('updateisLogin',this.isLoginininmyinfo)
			// 注意这里路由跳转放在方法里面，如果直接使用router-link，islogin的值无法传给vuex
			this.$router.push('/login')
			localStorage.setItem('isLogin',window.JSON.stringify(this.isLoginininmyinfo))
		},
		getmyinfo(){
			this.$http.get('userinfo.json').then(res=>{
				// console.log(res.body.data.logininfo)
				res.body.data.logininfo.some((item)=>{
					if(item.loginname===this.userloginedinmyinfo.usernamelogined){
						this.myinfo = item.userinfo
					}
				}) 
			})
		}
	},
	components: {
		appheader
	},
	created(){
		this.isLoginininmyinfo =JSON.parse(localStorage.getItem('isLogin'))
		this.userloginedinmyinfo = JSON.parse(localStorage.getItem('userlogined'))
		this.getmyinfo()
	}
	// computed:{
	// 	userloginedinmyinfo() {
	//         return this.$store.state.storeuserlogined||JSON.parse(localStorage.getItem('userlogined'))
	//     },
	// }
	
}
</script>

<style scoped lang='less'>
	.myinfo {
		.myinfolist {
			width: 100%; 
			margin-top: 50px;
			display: flex;
			flex-direction:column;    
			align-items: center; 
			.myinfocardwrap {
				padding: 10px; 
				width: 100%;
				height: 140px;
				.myinfocard {
					position: relative;
					width: 100%;
					height: 120px;
					display: flex;
					flex-direction: column; 
					background: linear-gradient(90deg,#eb3c3c,#ff7459);
					border-radius: 10px;
					color: #fff;
					overflow: hidden;
					padding: 10px;
					.myaccountman {
						display: flex;           
						justify-content: flex-end; 
						align-items: center; 
						width: 100%;
						height: 20px;
						padding-right: 14px;
						position: relative;
						cursor: pointer;
						span {
							font-size: 14px;
						}  
						.quit{
							top: 20px;
							right:50px;
							color: #fff;
							font-size: 14px;
							cursor: pointer;
							position: absolute;
						}     
					}
					.myinfodetail {
						width: 100%;
						height: 80px;
						padding-left: 16px;
						display: flex;
						align-items: flex-start; 
						color: #fff;
						.myavater {
							width: 20%;
							height: 100%;
							.myavaterimg {
								width: 60px; 
								height: 60px;
								border-radius: 50%;
								border: 1px solid red;
				                background: url('https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png') no-repeat;
				                background-size: contain;
							}
						}	
					}
					.mydetails {
						height: 100%;
						.mynickname {

						}
						.mylogname {
							margin-top: 8px;
							font-size: 12px;
						}
						.mycreditinfo {
							margin-top: 8px;
							button {
								height: 16px;
								font-size: 12px;
								padding: 0 6px;
								margin: 0;
								line-height: 16px;
								color: #fff;
								background: #c8483f;
								border-radius: 8px;
								padding: 0 10x;
							}
						}

					}

				}

				.myinfo_concession_card {
					position: absolute;
					background: #333;
					display: flex;
					flex-direction: column; 
					justify-content: flex-start; 
					align-items: flex-start;
					top: 80px;
					right: 0;
					width: 110px;
					height: 70px;
					padding: 4px;
					border-radius: 6px;
					transform: rotate(11deg) translateY(0);
					.plus {
						width: 70%;
						height: 16px;
						color: #c6934d;
						background: url('https://img11.360buyimg.com/jdphoto/s100x18_jfs/t20647/287/1260001649/632/de55fa7f/5b235f3cNbe6fe972.png');
						 background-size: contain;
					}
					.yearcard {
						margin-top: 4px;
						color: #c6934d;
						padding: 0 6px;
						margin: 0;
						height: 16px;
						text-align: left;
						background: #000;
						border-radius: 8px;
						font-size: 10px;

					}
				}  
			}  
			
			.myinfopurchasing,.myinfoasset,.myinfotrail,.myinfoothers {
				width: 100%;
				height: 100px;
				padding-top: 14px 0;
				background: #f0f0f0;
				display: flex;
				-ms-align-items: center;
				align-items: center;
				.myinfopurchasingitem {
					height: 72px;
					background-color: #fff;
					display: flex;
					flex: 1;   
					flex-direction: column; 
					justify-content: center;
					align-items: center;
					.myinfopurchasing_upper {
						width: 100%;
						height: 70%;
						background: url('https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png') no-repeat;
						-webkit-background-size: contain;
						background-size: 25% 50%;
						background-position:center center;
					}
					.myinfopurchasing_below {
						width: 100%;
						height: 30%;
						text-align: center;
						line-height: 12px;
						font-size:12px;
					}
				}

			}
			.myinfoothers {
				flex-wrap: wrap;
				height: 200px;
				.myinfopurchasingitem {
					width: 20%;
					flex: none;
				}
			}
		}
	}
	
</style>