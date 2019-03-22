// vuex数据中心
// 
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


var store = new Vuex.Store({
	state:{
		storescrollTop:null,
		storeisLogin:false,
		storecartlist:[],
		storecartlistlength:0,
		storetotalsettmentnum:0,
		storetotalsettmentamount:0
	},
	mutations: {
		updatescrolltop(state,scrollTopfromapp){
			state.storescrollTop = scrollTopfromapp
		},
		updateisLogin(state,isLoginfromlogin){
			state.storeisLogin = isLoginfromlogin
		},
		updatecartlist(state,carlistfromoperationbar){
			state.storecartlist.concat(carlistfromoperationbar)
		},	
		updatecartlistlength(state,carlistlengthfromoperationbar){
			state.storecartlistlength = carlistlengthfromoperationbar
			localStorage.setItem('cartlistlengthfromvuex',window.JSON.stringify(state.storecartlistlength))
		},
		updatetotalsettmentnum(state,totalsettmentnumfromcart){
			state.storetotalsettmentnum = totalsettmentnumfromcart
			// console.log(state.storetotalsettmentnum,'vue')
			localStorage.setItem('totalsettmentnumfromvuex',window.JSON.stringify(state.storetotalsettmentnum))
		},
		updatetotalsettmentamount(state,totalsettmentamountfromcart){
			state.storetotalsettmentamount = totalsettmentamountfromcart
			// console.log(state.storetotalsettmentnum,'vue')
			localStorage.setItem('totalsettmentamountfromvuex',window.JSON.stringify(state.storetotalsettmentamount))
		}
	},
	getters:{}
	
})

export default store;