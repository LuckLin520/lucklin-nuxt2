<template>
  <div class="home">
    <div class="bannerBox">
      <div class="mount">
        <dl>
          <dt>
            100000
            <span class="sub">+</span>
          </dt>
          <dd><a href="http://aaa.com">建筑精英人才库</a></dd>
        </dl>
        <dl>
          <dt>
            9500
            <span class="sub">+</span>
          </dt>
          <dd>中高端建企职位</dd>
        </dl>
        <dl>
          <dt>
            100
            <span class="sub">+</span>
          </dt>
          <dd>行业资深猎头顾问</dd>
        </dl>
        <dl>
          <dt>
            5
            <span class="sub">天</span>
          </dt>
          <dd>最快入职周期</dd>
        </dl>
        <dl>
          <dt>
            98
            <span class="sub">%</span>
          </dt>
          <dd>招聘满意率</dd>
        </dl>
      </div>
    </div>
    <a-button v-if="!token" type="primary" @click="onLogin">登录</a-button>
    <a-button v-else @click="onLogout">注销</a-button>
  </div>
</template>

<script>
import { Button } from "ant-design-vue";
export default {
  layout: 'zcw',
  components: {
    [Button.name]: Button,
  },
  data() {
    return {};
  },
  async asyncData({store, app}) {
    // const res = await store.dispatch('user/login', {userAccount:'15348298177',userPwd:'a123123',userType:0})
    return {}
  },
  computed: {
    token() {
      return this.$store.state.user.token;
    },
  },
  mounted() {},
  methods: {
    onLogin() {
      this.$store.dispatch("user/login", {userAccount:'15348298177',userPwd:'a123123',userType:0});
    },
    onLogout() {
      this.$store.dispatch("user/logout");
    },
  },
};
</script>

<style scoped lang='less' scoped>
.home {
  background: #fff;
  position: relative;
  .bannerBox {
    overflow: hidden;
    .mount {
      display: flex;
      justify-content: space-between;
      background: #fff;
      position: relative;
      width: @mainWidth;
      margin: 0 auto;
      // transform: translateY(-80px);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      dl {
        width: 240px;
        height: 160px;
        text-align: center;
        padding: 44px 0 40px 0;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 80px;
          background: #eee;
          right: 0;
          top: 43px;
        }
        dt {
          font-size: 36px;
          color: @primary-color;
          position: relative;
          display: inline;
          .sub {
            position: absolute;
            font-size: 16px;
            top: -2px;
            right: -14px;
          }
        }
        dd {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
