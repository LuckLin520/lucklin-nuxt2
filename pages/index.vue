<template>
  <div class="home">
    <a-textarea placeholder="Controlled autoSize" style="height: 100px" :autoSize="true" />
    <a-select style="width: 500px">
      <a-select-option :key="1">哈哈哈</a-select-option>
    </a-select>
    <div>
      <a-button v-if="!token" type="primary" @click="onLogin">登录</a-button>
      <a-button v-else @click="onLogout">注销</a-button>
    </div>
  </div>
</template>

<script>
import { Input, Select } from 'ant-design-vue'
export default {
  components: {
    [Input.TextArea.name]: Input.TextArea,
    [Select.name]: Select,
    [Select.Option.name]: Select.Option
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
  height: 1900px;
}
</style>
