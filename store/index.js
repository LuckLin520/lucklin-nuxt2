import user from './user'
export default {
    state(){
        return {}
    },
    actions: {
        async nuxtServerInit({ dispatch, commit },{req, app, redirect}) {
            const city = await new Promise((rs)=> {
                setTimeout(()=> rs('chengdu'), 2000)  
            })
            redirect('/chengdu')
            
            // console.log(this._vm.$message)
            // let province = app.$cookies.get('province')?app.$cookies.get('province'):'四川省'
            // let city = app.$cookies.get('province')?app.$cookies.get('province'):'成都市'
            // commit('user/save', {
            //     userData: app.$cookies.get('userData')?app.$cookies.get('userData'):{},
            // })
        },
    },
    modules: {
        user
    }
}