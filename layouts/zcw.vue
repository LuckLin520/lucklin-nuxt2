<template>
  <a-layout>
    <MyHeader />
    <nuxt />
    <MyFooter />
  </a-layout>
</template>
<script>
import MyHeader from '@/components/header'
import MyFooter from '@/components/footer'
import { Layout } from 'ant-design-vue'
export default {
  components: { MyHeader, MyFooter, [Layout.name]: Layout }
}
</script>
