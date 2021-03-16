const state = {
  nm : window.localStorage.getItem('nm') || '上海',
  id : window.localStorage.getItem('id') || 10
}

const actions = {

}

const mutations = {
  CITY_INFO(state, payload){
    state.nm = payload.nm
    state.id = payload.id
  }
}

export default {
  namespaced : true,
  state,
  actions,
  mutations
}