import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../../Api'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alumnos:[],
    empresas:[],
    ofertas:[]
  },
  mutations: {
    getEmprises(state, payload){
      state.empresas = payload
     },
    getOffers(state, payload){
      state.ofertas = payload
    }
  },
  actions: {
    getAllEmprises: async (context) => {
      try {
        let response = await Api.empresas.getAll()
        context.commit('getEmprises', response.data)
      } catch (error) {
        console.error(error)
      }
    },
    getAllOffers: async (context) => {
      try {
        let response = await Api.offers.getAll()
        context.commit('getOffers', response.data)
      } catch (error) {
        console.error(error)
      }
    },
    getAllOffersByEmprise: async (context, id) =>{
      try {
        let response = await Api.offers.getOffersOfEmprise(id)
        context.commit('getOffers', response.data)
      } catch (error) {
        console.error(error)
      }
    }

  },
  modules: {
  }
})
