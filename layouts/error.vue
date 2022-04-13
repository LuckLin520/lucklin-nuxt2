<template>
  <div class="error">
    <div v-if="errorData">
      <h2>{{ errorData.title }}</h2>
      <p>{{ errorData.subTitle }}</p>
      <a-button>返回首页</a-button>
    </div>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
  data() {
    return {
      errorMap: {
        404: {
          title: '404',
          subTitle: '非常抱歉，您访问的页面不存在'
        }
      }
    }
  },
  computed: {
    errorData() {
      return this.errorMap[this.error.statusCode]
    }
  }
}
</script>
<style lang="less" scoped>
.error {
  padding-top: 10%;
  text-align: center;
}
</style>
