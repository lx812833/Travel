<template>
    <div>
        <div class="banner" @click="handleShowWrapper">
            <img class="banner-img" :src=" bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title"> {{this.sightName}}</div>
                <div class="banner-number">
                    <span class="icon iconfont icon-sousuo"></span> 
                    {{this.bannerImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
           <common-gallary :imgS="bannerImgs" v-show="showWrapper" @close="handleWrapperClose"></common-gallary>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
    name: 'DetailBanner',
    props:{
         sightName: String,
         bannerImg: String,
         bannerImgs: Array
    },
    components: {
        CommonGallary,
        FadeAnimation
    },
    data () {
        return {
            showWrapper: false,
        }
    },
    methods: {
        handleShowWrapper () {
            this.showWrapper = true
        },
        handleWrapperClose () {
            this.showWrapper = false
        }
    }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%  //width / height = 0.55
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .12rem
    .banner-number
      height .32rem
      line-height .32rem
      margin-top .14rem
      padding 0 .4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
</style>
