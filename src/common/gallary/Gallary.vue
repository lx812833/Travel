<template>
  <div class="container" @click="handleGallaryClick">
     <div class="wrapper">
         <swiper :options="swiperOption">
            <swiper-slide v-for="( item, index) of imgS" :key="index">
                <img class="swiper-img" :src="item" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
     </div>
  </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgS: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction', //分页器
                observeParents: true,
                observer: true
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow: inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background #000
  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    .swiper-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
