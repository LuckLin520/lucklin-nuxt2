const modulesFiles = require.context('./', true, /\.js$/)
const modules = {}
for (const modulePath of modulesFiles.keys())
  if (!modulePath.includes('index.js')) modules[modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')] = modulesFiles(modulePath).default
export default {
  state() {
    return {}
  },
  actions: {
    async nuxtServerInit({ dispatch, commit }, { req, app, redirect }) {
      // const city = await new Promise((rs)=> {
      //     setTimeout(()=> rs('chengdu'), 2000)
      // })
      // redirect('/chengdu')
      commit('user/save', { token: app.$cookies.get('token') })
    }
  },
  modules
}
