<template>
  
</template>

<script>
export default {
    validate({ params, store }) {
        console.log('_root----------')
        // 校验 `params.id` 是否存在
        // return false
        return /\d+/.test(params.root)
    }
}
</script>
