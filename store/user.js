export default {
    state(){
        return {
            userData: {},
        }
    },
    actions: {
        async login(state, payload){
           
        },
    },
    mutations: {
        save(state, payload){
            for(let key in payload){
                state[key] = payload[key]
            }
        }
    }
}