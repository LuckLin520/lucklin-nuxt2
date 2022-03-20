<template>
  <div>
    <my-header></my-header>
    <nuxt />
    <my-footer></my-footer>
  </div>
</template>
<script>
import myHeader from "@/components/header";
import myFooter from "@/components/footer";
export default {
  components: { myHeader, myFooter },
  data() {
    return {
    }
  },
  computed: {
    userData() {
      return this.$store.state.user.userData;
    }
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>

</style>
