<template>
    <div>
      <my-header></my-header>
      <nuxt />
      <my-footer></my-footer>
    </div>
</template>
<script>
import MyHeader from "@/components/header";
import MyFooter from "@/components/footer";
export default {
  components: { MyHeader, MyFooter }
};
</script>

