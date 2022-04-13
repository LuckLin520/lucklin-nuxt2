<template>
  <img :src="require(`./${type}.svg`)" v-bind="{ alt: alt || type, width: size, height: size }" :style="styles" />
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      require: true
    },
    size: {
      type: Number | String
    },
    alt: String,
    styles: String
  }
}
</script>
