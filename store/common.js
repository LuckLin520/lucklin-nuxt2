export default {
  state() {
    return {
      theme: 'dark'
    }
  },
  actions: {},
  mutations: {
    save(state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    }
  }
}
