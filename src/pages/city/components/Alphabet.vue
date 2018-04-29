<template>
  <ul class="list">
     <li class="item" v-for="item of letters" :key="item.id" :ref="item"
                      @click="handleLetterClick"
                      @touchstart.prevent="handleLetterStart"
                      @touchmove="handleLetterMove"
                      @touchend="handleLetterEnd"
     >{{item}}</li>
  </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
       cities : Object
    },
    data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    computed: {
       //存储数组列表
       letters () { 
         const  letters = []
         for (let i in this.cities) {
           letters.push(i)
         }
         return letters
        //  console.log(letters)
        //["A", "B",..., "F",  "Z"]
       }
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop
      //A距离顶部高度 优化
    },
    methods:{
      //子组件将事件change传给父组件
      handleLetterClick (e) {
        this.$emit('change',e.target.innerText)
        // console.log(e.target.innerText)
      },
      handleLetterStart () {
        this.touchStatus = true
      },
      handleLetterMove (e) {
        if(this.touchStatus){
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY -79
            //手指触摸离顶部高度 touchY 自带函数touches
            const index = Math.floor((touchY - this.startY) / 20)
            if( index >= 0 && index <= this.letters.length){
              this.$emit('change',this.letters[index])
            }
          }, 16);
        }
      },
      handleLetterEnd () {
        this.touchStatus = false
      }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
   position absolute
   display flex
   flex-direction column
   justify-content center
   right 0
   top 1.58rem
   bottom 0
   width .4rem
   .item
     line-height .4rem
     text-align center
     color $bgColor
</style>
