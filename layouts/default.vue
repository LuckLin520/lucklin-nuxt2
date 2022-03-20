<template>
  <a-config-provider :locale="zh_CN">
    <nuxt />
  </a-config-provider>
</template>
<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN"
export default {
  data() {
    return {
      zh_CN
    }
  }
}
</script>
