<template>
  <div>
    <p>{{ maps[root] }}</p>
  </div>
</template>

<script>
export default {
  validate({ params, store, error }) {
    return /^\d+$/.test(params.root)
  },
  data() {
    return {
      maps: {
        1: '哈哈哈哈哈'
      }
    }
  },
  async asyncData({ params, payload }) {
    return {}
  },
  computed: {
    root() {
      return this.$route.params.root
    }
  },
  mounted() {
    console.log(this.$store.state)
  }
}
</script>
