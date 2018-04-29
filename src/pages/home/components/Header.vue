<template>
  <div class="header">
      <div class="header-left">
          <div class="icon iconfont icon-fanhui back-icon"></div>
      </div>
      <div class="header-input">
          <router-link to="/city">
              <span class="icon iconfont icon-sousuo"></span>输入城市/景点/游玩主题
          </router-link>
      </div>
      <router-link to="/city">
        <div class="header-right">{{this.$store.state.city}}
            <span class="icon iconfont icon-jiantouarrow486 arrow-icon"></span>          
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style  lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
   display flex
   height $headerHeight
   line-height $headerHeight
   background $bgColor
.header-left
   width .64rem
   float left
   .back-icon
        text-align: center
        font-size: .4rem
        color #fff
.header-input
   flex: 1
   height: .64rem
   line-height: .64rem
   margin-top: .12rem
   margin-left: .2rem
   padding-left: .2rem
   background: #fff
   border-radius: .1rem
   color: #ccc
.header-right
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
