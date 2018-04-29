<template>
  <div class="header">城市选择
      <router-link to="/home">
          <div class="icon iconfont icon-fanhui header-buck"></div>
      </router-link>
  </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
   position relative
   line-height $headerHeight
   height $headerHeight
   overflow hidden
   text-align center
   font-size .32rem
   color  #fff
   background $bgColor
   .header-buck
      position absolute
      top 0
      left 0
      text-align center
      width .64rem
      font-size .4rem
      color #fff
</style>
