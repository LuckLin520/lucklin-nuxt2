<template>
  <div class="myHeader">
    
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        userData() {
            return this.$store.state.user.userData
        }
    },
    mounted() {
      
    }
}
</script>

<style lang='less' scoped>
.myHeader {
  height: 80px;
}
</style>