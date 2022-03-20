<template>
<a-result status="404" title="测试" subTitle="测试啊啊啊阿松大啊阿松大">
    <template v-slot:extra>
        <nuxt-link to="/"><a-button type="primary">测试</a-button></nuxt-link>
    </template>
</a-result>
</template>

<script>
import {Result, Button} from 'ant-design-vue'
import 'ant-design-vue/lib/button/style/index.less'
import 'ant-design-vue/lib/result/style/index.less'
export default {
    layout: 'zcw',
    components: {
        [Result.name]: Result,
        [Button.name]: Button  
    }
}
</script>
