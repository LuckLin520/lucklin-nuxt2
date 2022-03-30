<template>
  <a-config-provider :locale="zh_CN" :autoInsertSpaceInButton="false">
    <nuxt />
  </a-config-provider>
</template>
<script>
import zh_CN from 'ant-design-vue/es/locale-provider/zh_CN'
export default {
  data() {
    return {
      zh_CN
    }
  }
}
</script>
