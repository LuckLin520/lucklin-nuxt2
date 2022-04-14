<template>
  <div class="home" ref="home">
    <!-- <a-textarea placeholder="Controlled autoSize" :autoSize="true" /> -->
    <a-select style="width: 500px" :getPopupContainer="() => $refs.home">
      <a-select-option :key="1"><span class="primary-1">1111</span></a-select-option>
      <a-select-option :key="2"><span class="primary-2">2222</span></a-select-option>
      <a-select-option :key="3"><span class="primary-3">3333</span></a-select-option>
      <a-select-option :key="4"><span class="primary-4">4444</span></a-select-option>
    </a-select>
    <div>
      <a-button v-if="!token" type="primary" @click="onLogin">登录</a-button>
      <a-button v-else @click="onLogout">注销</a-button>
    </div>
    <div>
      <a-button v-for="theme of themeList" :key="theme.name" @click="onChangeTheme(theme.name)">切换{{ theme.name }}</a-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Input, Select, Modal } from 'ant-design-vue'
import defaultTheme from '@/assets/theme/default-variables'
import syncTheme from '@/assets/theme/sync-variables'
Vue.use(Input).use(Select).use(Modal)
export default {
  components: {},
  data() {
    return {
      themeList: [defaultTheme, syncTheme]
    }
  },
  async fetch({ store, app }) {},
  computed: {
    token() {
      return this.$store.state.user.token
    }
  },
  mounted() {},
  methods: {
    onLogin() {
      this.$store.dispatch('user/login', {
        userAccount: '15348298177',
        userPwd: 'a123123',
        userType: 0
      })
    },
    onLogout() {
      this.$store.dispatch('user/logout')
    },
    onChangeTheme(name) {
      const theme = this.themeList.find(v => v.name === name)
      less.modifyVars(theme)
    }
  },
  async mounted() {
    this.$message.warning('123')
  }
}
</script>

<style scoped lang="less" scoped>
.home {
  height: 1900px;
  .primary-1 {
    background-color: @primary-color;
  }
}
</style>
