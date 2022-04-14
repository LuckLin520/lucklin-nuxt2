import AntDesignThemePlugin from 'antd-theme-webpack-plugin'
import path from 'path'
import fs from 'fs'
import defaultVariables from './assets/theme/default-variables.js'
const varFile = path.join(__dirname, './assets/theme/default-variables.less')
const themeVariables = []
function jsLess(js) {
  let style = '// 该文件js自动生成，是切换主题必须文件，勿删！勿改！\n'
  for (const key in js) {
    let k = key
    if (!k.includes('@')) k = '@' + key
    style += `${k}:${js[key]};\n`
    themeVariables.push(key)
  }
  fs.writeFileSync(varFile, style)
}
jsLess(defaultVariables)

export default new AntDesignThemePlugin({
  antDir: path.join(__dirname, './node_modules/ant-design-vue'),
  varFile,
  outputFilePath: path.join(__dirname, './static/variables.less'),
  generateOnce: false,
  themeVariables
})
