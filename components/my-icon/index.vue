<template>
  <img :src="require(`./${type}.svg`)" v-bind="{alt, width:finalWidth, height:finalWidth}" :style="styles"/>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            require: true
        },
        width: {
            type: Number | String
        },
        height: {
            type: Number | String
        },
        alt: String,
        styles: String
    },
    computed: {
        finalWidth() {
            return this.height > this.width ? this.height : (this.width || 30)
        },
        finalHeight() {
            return this.width > this.height ? this.width : (this.height || 30)
        }
    }
}
</script>