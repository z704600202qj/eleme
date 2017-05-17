<template>
  <div id="app">
    <v-head :seller="seller"></v-head>
    <div class="tab ">
      <router-link class="tab-item " to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评论</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import head from './components/header/header.vue'
  const ERROK = 0
  export default {
    components: {'v-head': head},
    data () {
      return {
        seller: {}
      }
    },
    created: function () {
      this.$http.get('/api/seller').then(function (res) {
        res = res.body
        if (res.errno === ERROK) {
          this.seller = res.data
        }
      })
    }
  }
</script>

<style lang="stylus">
  @import 'comment/stylus/mixin.styl'
  #app
    .tab
      display: flex
      width: 100%
      height 40px
      line-height 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1 /*vue-loader 下面的postcss处理兼容性问题*/
        text-align center
        font-size 14px
        color: rgb(77, 85, 90)
        &.active
          color rgb(240, 20, 20)

</style>
