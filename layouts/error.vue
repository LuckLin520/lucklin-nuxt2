<template>
  <div class="error">
    <div v-if="errorMap[error.statusCode]">
      404
    </div>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: ["error"],
  data() {
    return {
      errorMap: {
        "404": {
          title: "404",
          subTitle: "对不起，您访问的页面不存在。",
        }
      }
    }
  },
  mounted(){
      // console.log(this.error)
  }
};
</script>
<style lang="less" scoped>
.error{
    padding-top: 10%;
}
</style>