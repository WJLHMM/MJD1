<template>
	<div class="cart">
		<div class="selfselling" >
			<div class="selfsellingtitelfixedcontainer"
				:style="{
					'position':((searchscrolltop<50)?'':'fixed'),
					'top':((searchscrolltop<50)?'':'50px'),
					'z-index':100
				}"
			>
				<div class="selfsellingtitle" 
					:style="{
						'position':((searchscrolltop<50)?'':'absolute'),
						'left':((searchscrolltop<50)?'':'0px'),
						'z-index':100
					}"

				>
					<input class="selfsellingtotal" ref='selfsellingtotal' type="radio" name="">
					<span class="selfsellingtitlename">自营产品</span>
				</div>
			</div>
			<div class="selfsellingpro" v-for="item in parcartlist" :key="item.id">
				<div class="proitemradiowrap">
					<input class="proitemradio" ref='proitemradio' type="radio" name="">
				</div>
				<div class="selfsellingproinf" >
					<div class="proimgdesc">
						<div class="proimg">
							<img class="proimgdetail" :src="item.imgUrl">
						</div>
						<div class="prodesc">
							<p class="proname">{{item.productbrief}}</p>
							<!-- <span class="promodel"></span> -->
							<button class="proselection">
								<span class="proselectiontext">{{item.proselectiontext}}</span>
								<span class="mui-icon mui-icon-arrowdown"></span>
							</button>
						</div>
					</div>
					<div class="propayinfoamount">
						<div class="propayprompt" v-if="item.payinfo">{{item.payinfo}}</div>
						<div class="uprice"><small>{{item.currency}}</small>{{item.uprice}}<small>.00</small></div>
						<div class="pronumbox">
							<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
								<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
								<input id="test" class="mui-input-numbox" type="number" value="5" />
								<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
							</div>
						</div>
					</div>
					<div class="prootheroperation">
						<div class="profocus">移入关注</div>
						<div class="prodel">删除</div>
					</div>
					<div class="prosever" v-if="item.sevice">
						<div class="proseverwrap">
							<p>服务</p>
							<p>{{item.sevice}}</p>
						</div>
						<span class="mui-icon mui-icon-arrowright"></span>
					</div>
					<div class="propromotion" v-if="item.promotioninf">
						<div class="propromotionwrap">
							<p>促销</p>
							<p >{{item.promotioninf}}</p>
						</div>
						<div>
							<span>2种选择</span>
							<span class="mui-icon mui-icon-arrowdown"></span>
						</div>
					</div>
				</div>

			</div>
		</div>
		<div class="selfselling">
			<div class="selfsellingtitle">
				<input class="selfsellingtotal" type="radio" name="">
				<span class="selfsellingtitlename">联合销售产品</span>
			</div>
			<div class="selfsellingpro">
				<div class="proitemradiowrap">
					<input class="proitemradio" type="radio" name="">
				</div>
				<div class="selfsellingproinf">
					<div class="proimgdesc">
						<div class="proimg">
							<img class="proimgdetail" src="https://img10.360buyimg.com/mobilecms/s168x168_jfs/t20029/62/570986436/272562/1f3b66fe/5afd3d77N426b7b3b.jpg!q70.dpg.webp">
						</div>
						<div class="prodesc">
							<p class="proname">惠普（HP）EliteBook 735G5 13.3英寸轻薄笔记本电脑（锐龙5 PRO 2500U 8G 256SSD Win10 100%sRGB一年上门）</p>
							<!-- <span class="promodel"></span> -->
							<button class="proselection">
								<span class="proselectiontext">2.185kg/件，【13.3英寸】，【R5 8G 256GSSD 高色域屏】</span>
								<span class="mui-icon mui-icon-arrowdown"></span>
							</button>
						</div>
					</div>
					<div class="propayinfoamount">
						<div class="propayprompt">白条支付3期免息</div>
						<div class="uprice">￥4999.00</div>
						<div class="pronumbox">
							<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
								<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
								<input id="test" class="mui-input-numbox" type="number" value="5" />
								<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
							</div>
						</div>
					</div>
					<div class="prootheroperation">
						<div class="profocus">移入关注</div>
						<div class="prodel">删除</div>
					</div>
					<div class="prosever">
						<div class="proseverwrap">
							<p>服务</p>
							<p>选择增值服务</p>
						</div>
						<span class="mui-icon mui-icon-arrowright"></span>
					</div>
					<div class="propromotion">
						<div class="propromotionwrap">
							<p>促销</p>
							<p>每满300元减30元</p>
						</div>
						<div>
							<span>2种选择</span>
							<span class="mui-icon mui-icon-arrowdown"></span>
						</div>
					</div>
				</div>

			</div>
		</div>
		
	</div>

</template>

<script>
	
export default {

	data() {

		return {

		}
	},

	methods: {


	},

	computed: {
	    searchscrolltop() {
	        return this.$store.state.storescrollTop
	    }
	},
	props:['parcartlist','parunitedselllist'],
	created() {
	},
	mounted() {
		console.log(this.$refs.selfsellingtotal)
		console.log(this.$refs.proitemradio)
		// this.$nextTick(() => { 
		// 	let itemdom = this.$refs.proitemradio
		// 	for(let i=0;i<itemdom.length;i++) {
		// 		console.log(itemdom[i])
		// 	}
		// }) 
	},
	updated() {
		console.log(this.$refs.selfsellingtotal)
		console.log(this.$refs.proitemradio)
	}
}
</script>

<style scoped lang="less">
.cart {
	width: 100%;

	.selfselling {
		width:100%;
		border-bottom:1px solid #808080;
		margin-bottom:10px;
		.selfsellingtitelfixedcontainer {
				width:100%;
				max-width: 636px;
				height:40px;
			.selfsellingtitle {
				width:100%;
				height:40px;
				line-height: 40px;
				opacity:1.0;
				background-color: #fff;
				border-bottom: 1px solid #808080;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.selfsellingtotal {
					width:20px;
					height:20px;
					margin-left:10px;
				}
				.selfsellingtitlename {
					font-size: 18px;
					padding-left:6px;
					font-weight: bold;
				}
			}
		}

		.selfsellingpro {
			width:100%;
			display:flex;
			justify-content: flex-start;
			align-items: center;
			margin-top:10px;
			margin-bottom:10px;
			.proitemradiowrap {
				width:10%;
				height:100%;
				margin-bottom:80px;
				padding-left:10px;
				// border-right: 1px solid #888888;
				.proitemradio {
					width:20px;
					height:20px;
				}
			}
			.selfsellingproinf {
				width:90%;
				height:100%;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				font-size: 10px;
				padding-right: 10px;
				.proimgdesc {
					width:100%;
					height:44%;
					display: flex;
					.proimg {
						width:25%;
						height:90%;
						.proimgdetail {
							width:100%;
							height:100%;
						}

					}
					.prodesc {
						width:75%;
						height:100%;
						padding-top:14px;
						padding-left:10px;
						.proname {
							width:100%;
							height:44px;
							color: #333;
							line-height: 22px;
							font-size:14px;
							display: -webkit-box;
							text-overflow:ellipsis;
							// white-space:nowrap;
							overflow: hidden;
							// word-break: break-all;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							text-overflow: -o-ellipsis-lastline;

						}
						.proselection {
							width:100%;
							height:24px;
							display:flex;
							justify-content: space-between;
							align-items: center;
							.proselectiontext {
								width:80%;
								height:100%;
								line-height: 1;
								font-size: 12px;
								white-space:nowrap;
								text-overflow:ellipsis;
								overflow: hidden;
								text-overflow: -o-ellipsis-lastline;
								text-align: left;
							}
							.mui-icon-arrowdown {
								font-size: 12px;
							}

						}
					}
				}
				.propayinfoamount {
					width:100%;
					height:20%;
					display:flex;
					justify-content: space-between;
					align-items: center;
					.propayprompt {
						width:24%;
						height:100%;
						color:#fff;
						// line-height: 50%;
						font-size:10px;
						text-align: center;
						padding:10px 14px;
						background: rgba(233,59,61,.7);
					}
					.uprice {
						font-weight: bold;
						font-size: 18px;
						color:red;
						small{
							font-size: 12px;
							
						}
					}
					.pronumbox {
					}
				}
				.prootheroperation {
					width:100%;
					height:10%;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					font-size: 14px;
					.profocus {
						margin-right:30px;
					}
					.prodel {

					}
				}
				.prosever,.propromotion {
					width:100%;
					height:15%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 14px;
					color: #8f8f94;
					background: #f7f5f3;
					padding: 10px;
					.proseverwrap,.propromotionwrap {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						p {
							margin-right: 10px;
						}
					}
					span {
						font-size: 12px;
					}
				}
			}
		}
	}

}
	
</style>