<template>
  <a-config-provider :locale="zh_CN" :autoInsertSpaceInButton="false">
    <div id="zcw_wrap">
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
  }
}
</script>

<style lang="less" scoped>
#zcw_wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  #zcw_wrap_main {
    flex: 1;
  }
}
</style>
