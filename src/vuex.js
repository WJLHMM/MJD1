// vuex数据中心
// 
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


var store = new Vuex.Store({
	state:{
		storescrollTop:null,
		storeisLogin:false,
		storecartlist:[]

	},
	mutations: {
		updatescrolltop(state,scrollTopfromapp){
			state.storescrollTop = scrollTopfromapp
		},
		updateisLogin(state,isLoginfromlogin){
			state.storeisLogin = isLoginfromlogin
		}
		// updatecartlist(state,carlistfromoperationbar){
		// 	state.storecartlist.unshift(carlistfromoperationbar)
		// }
	},
	getters:{}
	
})

export default store;