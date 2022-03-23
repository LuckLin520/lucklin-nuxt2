
export default {
    state() {
        return {
            token: undefined
        }
    },
    actions: {
        async login({ commit }, payload) {
            const {data} = await this.$axios({url: '/account/login', method: 'POST', data: payload})
            if(data.status) {
                const token = data.data.header_token
                commit('save', { token })
                this.$cookies.set('token', token)
            }
        },
        logout({ commit }) {
            commit('save', { token: undefined })
            this.$cookies.set('token', undefined)
        }
    },
    mutations: {
        save(state, payload) {
            for (let key in payload) {
                state[key] = payload[key]
            }
        }
    }
}