<template>
  <div class="home">
    <a-button v-if="!token" type="primary" @click="onLogin">登录</a-button>
    <a-button v-else @click="onLogout">注销</a-button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
export default {
  layout: 'zcw',
  components: {
    [Button.name]: Button
  },
  data() {
    return {}
  },
  async asyncData({ store, app, error }) {
    return {}
  },
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
    }
  }
}
</script>

<style scoped lang="less" scoped>
.home {
}
</style>
