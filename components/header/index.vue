<template>
  <div class="myHeader">
    <MyIcon type="cart" />
    <MyIcon type="gongwenbao" />
    <span>{{ token }}</span>
  </div>
</template>

<script>
import MyIcon from '@/components/my-icon'
export default {
  components: {
    MyIcon
  },
  data() {
    return {}
  },
  computed: {
    token() {
      return this.$store.state.user.token
    }
  }
}
</script>

<style lang="less" scoped>
.myHeader {
  height: 80px;
}
</style>
