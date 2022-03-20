<template>
  <div class="footer">
    <div class="top">
      <div class="top-box">
        <div class="friendship-box" :style="$route.path == '/' ? 'display:block' : 'display:none'">
          <dl>
            <dt>友情链接</dt>
            <dd>
              <div class="item" v-for="(item,i) of friendships" :key="i">
                <a :href="item.link" target="_blank" rel="nofollow">{{item.name}}</a>
                <span v-if="i != friendships.length-1" class="spacer">|</span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friendships: [
        { name: "中国住房和城乡建设部", link: 'http://www.mohurd.gov.cn' },
        { name: "中国交通运输部", link: 'http://www.mot.gov.cn' },
        { name: "中国水利部", link: 'http://www.mwr.gov.cn' },
        { name: "中国城市规划协会", link: 'http://www.cacp.org.cn' },
        { name: "中国建造师网", link: 'http://www.coc.gov.cn/coc' },
        { name: "全国建筑市场监管公共服务平台", link: 'http://jzsc.mohurd.gov.cn' },
        { name: "住房和城乡建设部职业资格注册中心", link: 'http://www.pqrc.org.cn' },
        { name: "交通职业资格网", link: 'http://www.jtzyzg.org.cn' },
        { name: "全国职业技能鉴定中心", link: 'http://www.osac.org.cn/index.asp' },
        { name: "中国人事考试网", link: 'http://www.cpta.com.cn/GB/index.html' },
        { name: "四川建设人才网", link: 'http://www.scbuilder.com' }
      ]
    }
  },
  computed: {
    userData(){
      return this.$store.state.user.userData
    }
  },
}
</script>

<style lang='less' scoped>
.footer {
  margin-top: 60px;
  color: #ddd;
  .top {
    // height: 280px;
    background: #30374a;
    padding-bottom: 15px;
    .top-box {
      width: @mainWidth;
      margin: 0 auto;
      // padding-top: 32px;
      .friendship-box {
        padding-top: 30px;
        dl {
          display: flex;
          dt {
            margin-right: 14px;
            white-space: nowrap;
            margin-top: 2px;
            font-weight: 600;
            color: #fff;
          }
          dd {
            display: flex;
            flex-wrap: wrap;
            .item {
              margin-bottom: 8px;
              a {
                color: inherit;
                &:hover {
                  color: #fff;
                }
              }
              .spacer {
                margin-right: 10px;
                margin-left: 5px;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>