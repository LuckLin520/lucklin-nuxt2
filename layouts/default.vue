<template>
  <a-config-provider :locale="zh_CN" :autoInsertSpaceInButton="false">
    <div id="zcw_wrap" :class="{ dark_theme: theme === 'dark' }">
      <MyHeader />
      <main id="zcw_wrap_main">
        <nuxt />
      </main>
      <MyFooter />
    </div>
  </a-config-provider>
</template>
<script>
import zh_CN from 'ant-design-vue/es/locale-provider/zh_CN'
import MyHeader from '@/components/header'
import MyFooter from '@/components/footer'
export default {
  components: { MyHeader, MyFooter },
  data() {
    return {
      zh_CN
    }
  },
  computed: {
    theme() {
      return this.$store.state.common.theme
    }
  },
  watch: {
    theme: {
      handler(theme) {
        const themeJs = require(`@/assets/theme/${theme}-variables.js`).default
        if (process.client) less.modifyVars(themeJs)
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
#zcw_wrap {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  #zcw_wrap_main {
    flex: 1;
  }

  background-color: var(--bg);
  --text: #1f2225;
  --bg: #fff;
  --bg-card: #fff;
  --border: #efeff5;
  &.dark_theme {
    --text: #ffffffe6;
    --bg: #101014;
    --bg-card: #18181c;
    --border: #ffffff17;
  }
}
</style>
