<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" class="search-input" placeholder="请输入城市名">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id"  @touchstart="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show=" hasNoData">没有匹配到查找数据</li>                
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            timer: null,
            list: []
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = ''
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach(( value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    });
                }
                this.list = result
            }, 100);
        }
    },
    mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
      hasNoData () {
          return !this.list.length
      }
  },
  methods: {
      handleCityClick (city) {
          this.$store.dispatch('changeCity', city)
          this.$router.push('/home')
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
   height .72rem
   padding 0 .1rem
   background $bgColor
   .search-input
      box-sizing border-box  //呈现出带有指定宽度和高度的框，并把边框和内边距放入框中。
      width 100%
      line-height .62rem
      height .62rem
      padding 0 .1rem
      text-align center
      border-radius .06rem
      color #666
.search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.5rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
      color #666
</style>
