<template>
  <div class="error">
    <div v-if="errorMap[error.statusCode]">
      <a-result
        :status="error.statusCode.toString()"
        :title="errorMap[error.statusCode].title"
        :subTitle="errorMap[error.statusCode].subTitle"
      >
        <template v-slot:extra>
          <nuxt-link to="/"><a-button type="primary">返回首页</a-button></nuxt-link>
        </template>
      </a-result>
    </div>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
import { Result, Button } from 'ant-design-vue'
export default {
  props: ['error'],
  components: {
    [Result.name]: Result,
    [Button.name]: Button
  },
  data() {
    return {
      errorMap: {
        404: {
          title: '404',
          subTitle: '非常抱歉，您访问的页面不存在'
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.error {
  padding-top: 10%;
}
</style>
