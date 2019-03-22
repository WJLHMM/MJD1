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
					<input 
						class="selfsellingtotal" 
						type="checkbox" 
						v-model="picked" 
						@click="selectallitem(parcartlist,picked)"
					>
					<span class="selfsellingtitlename">自营产品</span>
				</div>
			</div>
			<div class="selfsellingpro" v-for="(item,index) in parcartlist" :key="item.id">
				<div class="proitemradiowrap">
					<input 
						class="proitemradio" 
						type="checkbox" 
						:value="item.producmodel" 
						v-model="pickedlist"
						@click="selectitem(item.producmodel,index,totalsettmentnum,pickedlistindex,carlistitemprice)"
					>
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
							<div class="mui-numbox" data-numbox-min='1' data-numbox-max='10'>
								<button 
									class="mui-btn mui-btn-numbox-minus" 
									type="button"
								>-
									<!-- @click="gettotalsettmentnumminus(item.producmodel,index,totalsettmentnum)" -->
								</button>
								<input 
									id="test" 
									ref="setnumber"
									class="mui-input-numbox" 
									type="number" 
									value="1"
									@change="getnumber(item.producmodel,index,parcartlist)" 
								/>
									<!-- :value="index"  -->
								<button 
									class="mui-btn mui-btn-numbox-plus" 
									type="button" 
								>+
									<!-- @click="gettotalsettmentnumplus(item.producmodel,index,totalsettmentnum)" -->
								</button>
							</div>
						</div>
					</div>
					<div class="prootheroperation">
						<div class="profocus">移入关注</div>
						<div class="prodel" @click="deleteitem(index,item.producmodel)">删除</div>
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
		
	</div>

</template>

<script>
import mui from '../../../lib/mui-master/dist/js/mui.min.js';
export default {
	inject:['reload'],
	data() {
		return {
			isCheckall:true,
			// picked: '',
			pickedlist:[],
			pickedlistindex:[],
			number:[],
			totalsettmentnum:0,
			totalsettmentamount:0,
			carlistitemvindex:{},
			carlistitemprice:{},
			cartlistfromoperationbar:[]
		}
	},
	methods: {
		//确定parcarlist渲染后，每个item.producmodel和对应的index，uprice等数据
		getcarlistitemvindex(){
			this.parcartlist.forEach((item,index)=>{
				this.carlistitemvindex[item.producmodel]=index
				this.carlistitemprice[item.producmodel]=item.uprice
			})
			// Object.keys(this.carlistitemvindex).forEach((item)=>{
			// })
			 console.log(this.carlistitemprice)
		},
		//全选操作
		selectallitem(cartlist,picked) {
			// 对于全选按钮点picked值击取反,如果true，将picklist全部加满，及所有item全选中
			picked=!picked
			if(picked){
				cartlist.forEach((item)=> {
					if(!this.pickedlist.includes(item.producmodel)){
						this.pickedlist.push(item.producmodel)
					}
				});
				//由于全选，总件数及为各个number的总和
				this.totalsettmentnum = 0;
				this.number.forEach((item)=> {
					this.totalsettmentnum += parseInt(item)
				});
				//计算所有价格总数
				this.pickedlistindex =[]
				Object.keys(this.carlistitemvindex).forEach((item)=>{
					this.pickedlistindex.push(this.carlistitemvindex[item])
				})
				this.totalsettmentamount = 0;
				for(let i=0;i<this.number.length;i++) {
					this.totalsettmentamount += this.number[i]*cartlist[i].uprice
				}
			}else{
				// 对于全选按钮点picked值击取反,如果false，将picklist清空，及所有item全不选
				this.pickedlist=[];
				this.totalsettmentnum = 0;
				this.pickedlistindex=[];
				this.totalsettmentamount = 0
			}
			// 与此同时将picked，picklist全部本地留存
			localStorage.setItem('picked',window.JSON.stringify(picked))
			localStorage.setItem('pickedlist',window.JSON.stringify(this.pickedlist))
			localStorage.setItem('pickedlistindex',window.JSON.stringify(this.pickedlistindex))
			localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))
			localStorage.setItem('totalsettmentamount',window.JSON.stringify(this.totalsettmentamount))
			this.$store.commit('updatetotalsettmentnum',this.totalsettmentnum)
			this.$store.commit('updatetotalsettmentamount',this.totalsettmentamount)
		},
		//单选，全选操作
		selectitem(itemname,index,totalsettmentnum,pickedlistindex,carlistitemprice){
			// 将html中传入的数据，验证，如果没有在picklist数组中，就加入
			// 由于是v-for内的操作，该方法下获得的数据全部在updated中留存本地
			// this.totalsettmentnum = totalsettmentnum
			if(this.pickedlist.indexOf(itemname)==-1){//判断点击的item是否在pickedlist中，如果不在
				this.pickedlist.push(itemname);
				//点击加入的item，相应的总件数需要加上新进的nubmer项
				this.totalsettmentnum = totalsettmentnum+ parseInt(this.number[index]);
			    //点击加入的item，相应的picklistpicked需要加上新进的index项
				this.pickedlistindex.push(this.carlistitemvindex[itemname])
				//点击加入Item，加上对应的金额
				this.totalsettmentamount = this.totalsettmentamount + parseInt(this.number[index])*parseInt(this.carlistitemprice[itemname])
			}else{//点击不选item，相应的总件数需要减上新进的nubmer项
				this.totalsettmentnum = totalsettmentnum - parseInt(this.number[index]);
				this.pickedlistindex.splice(this.pickedlistindex.indexOf(this.carlistitemvindex[itemname]),1)
				this.totalsettmentamount = this.totalsettmentamount - parseInt(this.number[index])*parseInt(this.carlistitemprice[itemname])
			}
			this.$store.commit('updatetotalsettmentnum',this.totalsettmentnum)
			this.$store.commit('updatetotalsettmentamount',this.totalsettmentamount)

			// 放在data，在selectitem方法中使用时候，会出现全选后，取消第一个，全选任然存在，第二个开始取消的现象
			// 所以该种情况放在computed中
			// if(this.pickedlist.length===cartlist.length){
			// 	return this.picked = true
			// }else{
			// 	return this.picked = false
			// }
			// console.log(this.totalsettmentnum)
		},
		//获取每个numbox的值，发送到指定位置
		getnumber(itemname,index,cartlist){
			//获取numbox中的value值，去重 按顺序存放到number数组中去，并且本地localStorage留存
			this.totalsettmentnum = 0
			this.totalsettmentamount = 0
			for(let i=0;i<this.$refs.setnumber.length;i++) {
				if(this.$refs.setnumber[i].value!=this.number[i]){
					this.number[i]=this.$refs.setnumber[i].value
				}
			}
			this.pickedlist.forEach((item)=>{
				if(this.pickedlistindex.indexOf(this.carlistitemvindex[item])==-1){
					this.pickedlistindex.push(this.carlistitemvindex[item])
				}
			})

			this.pickedlistindex.forEach((item)=>{
				this.totalsettmentnum += parseInt(this.number[item])
				if(cartlist[item].uprice){
					this.totalsettmentamount += parseInt(this.number[item])*parseInt(cartlist[item].uprice)
				}
			})

			localStorage.setItem('number',window.JSON.stringify(this.number))
			localStorage.setItem('pickedlistindex',window.JSON.stringify(this.pickedlistindex))
			localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))
			localStorage.setItem('totalsettmentamount',window.JSON.stringify(this.totalsettmentamount))

			this.$store.commit('updatetotalsettmentnum',this.totalsettmentnum)
			this.$store.commit('updatetotalsettmentamount',this.totalsettmentamount)
		},
		// 获取被选中的件数
		// 1.pickedlist中的存储值就是parcarlist中的item.producmodel，
		// 改变数据的地方包括 numbox的+-button,总选和每个单选input checklist
		// 由于mui numbox的bug 一下两个函数放弃使用，直接使用input change事件来监听数据，
		gettotalsettmentnumplus(itemname,index,totalsettmentnum){
			this.totalsettmentnum = totalsettmentnum
			if(this.pickedlist.indexOf(itemname)!=-1){
				this.totalsettmentnum = totalsettmentnum+ parseInt(1);
				// if(this.$refs.setnumber[index]==10){
				// 	this.$refs.setnumber[index]=9
				// }
				
			}
			localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))
			console.log(this.totalsettmentnum)
		},
		gettotalsettmentnumminus(itemname,index,totalsettmentnum){
			this.totalsettmentnum = totalsettmentnum
			if(this.pickedlist.indexOf(itemname)!=-1){
				this.totalsettmentnum = totalsettmentnum - parseInt(1);
				// if(this.$refs.setnumber[index]==0){
				// 	this.$refs.setnumber[index]=1
				// }
			}
			localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))
			console.log(this.totalsettmentnum)
		},
		deleteitem(i,itemname){
			this.totalsettmentamount = this.totalsettmentamount - parseInt(this.parcartlist[i].uprice)*parseInt(this.number[i])
			localStorage.setItem('totalsettmentamount',window.JSON.stringify(this.totalsettmentamount))

			this.totalsettmentnum = this.totalsettmentnum - parseInt(this.number[i])
			localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))

			this.parcartlist.splice(i,1)
			this.parcartlist.forEach((item)=> {
				this.cartlistfromoperationbar.push(item.producmodel)
			})
			localStorage.setItem('cartlist',window.JSON.stringify(this.cartlistfromoperationbar))

			localStorage.setItem('cartlistlength',window.JSON.stringify(this.cartlistfromoperationbar.length))

			this.pickedlist.forEach((item)=>{
				if(this.pickedlist.indexOf(itemname)!=-1){
					this.pickedlist.splice(this.pickedlist.indexOf(itemname),1)
				}
			})
			localStorage.setItem('pickedlist',window.JSON.stringify(this.pickedlist))

			this.number.splice(i,1)
			localStorage.setItem('number',window.JSON.stringify(this.number))

			this.pickedlistindex.splice(this.pickedlistindex.indexOf(i),1)
			localStorage.setItem('pickedlistindex',window.JSON.stringify(this.pickedlistindex))

			this.$store.commit('updatetotalsettmentnum',this.totalsettmentnum)
			this.$store.commit('updatetotalsettmentamount',this.totalsettmentamount)
			this.$store.commit('updatecartlistlength',this.cartlistfromoperationbar.length)
			this.$store.commit('updatecartlist',this.cartlist)

			history.go(0)

		}
	},
	computed: {
	    searchscrolltop() {
	        return this.$store.state.storescrollTop
	    },
	    // 注意picked放在computed中，放在data，在selectitem方法中使用时候，会出现全选后，取消第一个，全选任然存在，第二个开始取消的现象
	    picked:{
	    	get() {
		    	if(this.pickedlist.length===this.parcartlist.length){
					return true
				}else{
					return false
				}
	    	},
	    	set() {
	    		
	    	}
	    }
	},

	props:['parcartlist','parunitedselllist'],
	created() {
		this.picked = JSON.parse(localStorage.getItem('picked'))||true
		this.pickedlist = JSON.parse(localStorage.getItem('pickedlist'))||[]
		this.totalsettmentnum = JSON.parse(localStorage.getItem('totalsettmentnum'))||[]
		this.pickedlistindex = JSON.parse(localStorage.getItem('pickedlistindex'))||[]
		this.totalsettmentamount = JSON.parse(localStorage.getItem('totalsettmentamount'))||[]
	},
	updated() {
		this.getcarlistitemvindex()
		// 注意在v-for的情况下，初始化，以及dom的选择放在updated钩子函数中，
		mui('.mui-numbox').numbox();

        // 注意在selectitem方法中发生的picklist的变化，需要在updated中存储到localStroage
		localStorage.setItem('pickedlist',window.JSON.stringify(this.pickedlist))
		// localStorage.setItem('pickedlistindex',window.JSON.stringify(this.pickedlistindex))
		localStorage.setItem('picked',window.JSON.stringify(this.picked))

		//同理 在v-for情况下对于input.value赋值，无法通过:value="number["+index+"]"来实现，所以通过ref操作来实现
		//读取存储1.读取本地内存设置number数组
		if(JSON.parse(localStorage.getItem('number'))==[]||JSON.parse(localStorage.getItem('number'))==null){
			this.number.length = this.$refs.setnumber.length
			for(let i=0;i<this.$refs.setnumber.length;i++) {
				this.number[i] =1
			}
		}else{
			this.number = JSON.parse(localStorage.getItem('number'))
		}
		//第二步 将number数组中的值分配到相对应的input value中
		for(let i=0;i<this.$refs.setnumber.length;i++) {
			this.$refs.setnumber[i].value=this.number[i]
		}
		//本地储存number
		localStorage.setItem('number',window.JSON.stringify(this.number))
		localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))
		localStorage.setItem('pickedlistindex',window.JSON.stringify(this.pickedlistindex))
		localStorage.setItem('totalsettmentamount',window.JSON.stringify(this.totalsettmentamount))
	}
}
</script>

<style scoped lang="less">
.cart {
	width: 100%;
    touch-action: none; 
	.selfselling {
		width:100%;
		border-bottom:1px solid #808080;
		margin-bottom:10px;
		.selfsellingtitelfixedcontainer {
				width:100%;
				max-width: 636px;
				height:40px;
				// overflow-y:scroll
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
						// .mui-numbox {
						// 	.mui-btn{
	     //                      touch-action: none; 
						// 	}
						// }
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
						cursor:pointer;
						border:1px solid #fff;
						&:hover {
							background-color: red;
							color:#fff;
							border:1px solid red;
						}
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