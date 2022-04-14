<template>
  <a-affix>
    <transition name="slideHeader">
      <header v-show="showHeader" :class="{ showHeaderShadow }">
        <hgroup>
          <h1>welcome</h1>
        </hgroup>
        <nav>
          <ul>
            <li>
              <nuxt-link to="/"><MyIcon type="cart" size="16" />首页</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/"><MyIcon type="gongwenbao" size="16" />个人中心</nuxt-link>
            </li>
          </ul>
        </nav>
      </header>
    </transition>
  </a-affix>
</template>

<script>
import Vue from 'vue'
import { Affix } from 'ant-design-vue'
import MyIcon from '@/components/my-icon'
import { throttling } from '@/utils/util'
Vue.use(Affix)

export default {
  components: {
    MyIcon
  },
  data() {
    return {
      showHeader: true,
      showGoTop: false,
      showHeaderShadow: false
    }
  },
  computed: {
    token() {
      return this.$store.state.user.token
    }
  },
  mounted() {
    this.listenerScroll()
  },
  methods: {
    listenerScroll() {
      let preScrollY = window.scrollY
      this.showGoTop = window.scrollY > 160
      this.showHeaderShadow = window.scrollY > 0
      addEventListener(
        'scroll',
        throttling(
          () => {
            this.showGoTop = window.scrollY > 160
            this.showHeaderShadow = window.scrollY > 0
            if (window.scrollY - preScrollY > 400) this.showHeader = false
            else if (window.scrollY - preScrollY < 0) this.showHeader = true
            preScrollY = window.scrollY
          },
          60,
          60
        )
      )
    }
  }
}
</script>

<style lang="less" scoped>
@headerH: 42px;
.slideHeader-enter-active {
  transition: all 0.3s ease;
}
.slideHeader-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slideHeader-enter,
.slideHeader-leave-to {
  transform: translateY(-@headerH);
  opacity: 0;
}
header {
  background-color: paleturquoise;
  display: flex;
  align-items: center;
  &.showHeaderShadow {
    box-shadow: @box-shadow-base;
  }
  ul {
    display: flex;
    li {
      margin: 0 20px;
    }
  }
}
</style>
