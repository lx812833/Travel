<template>
  <div>
     <city-header></city-header>
     <city-search :cities="cities"></city-search> 
     <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
     <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

import axios from 'axios'
export default {
    name: 'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ''  //父组件将从子组件获取的值传递给子组件list
        }
    },
    methods: {
        getCityInfo() {
            axios.get('/api/city.json').then( this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res) {
           // console.log(res)
            res = res.data
            if(res.ret && res.data) {
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        //父组件收到子组件传参
        handleLetterChange (letter) {
            this.letter = letter
            // console.log(letter);
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
