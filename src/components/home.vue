<template>
  <div class="hello">
    <my-head></my-head>
    <slider :slide-msg="slideMsg"></slider>
    <move-play :play-msg="playMsg"></move-play>
    <coming-soon :coming-msg="movieComing"></coming-soon>
    <usa-movie :usa-date='usaDate' :usa-list="usaList"></usa-movie>
    <catgory></catgory>
    <div class="bac">
      <img src="../assets/bac.jpg" height="200px" width="100%">
    </div>
  </div>
</template>

<script>
import myHead from './common/header.vue'
import slider from './common/slide.vue'
import movePlay from './common/movePlay.vue'
import axios from 'axios'
import slideData from '@/service/slidedata.js'
import usaData from '@/service/usa_movies.js'
import comingData from '@/service/coming_soon'
import comingSoon from './common/movie_coming.vue'
import usaMovie from './common/usa_movie.vue'
import catgory from './common/catg.vue'
import allData from '@/service/getDouBanData'
import URL from '../utils/url'
export default {
  name: 'hello',
  data () {
    return {
      slideMsg: [],
      playMsg:[],
      movieComing:[],
      usaDate:'',
      usaList:[]
    }
  },
  components: {
    myHead,
    slider,
    movePlay,
    comingSoon,
    usaMovie,
    catgory

  },
  mounted() {
       this.getSlideMsg()
        // this.initSlideData();
      this.getMovieComing();
        this.getUsaMsg();
  },
  methods:{
    getSlideMsg() {
      let that = this;
      allData.getSlideData().then(function(val){
          let data1= val.subjects.slice(0,4);
          let data2= val.subjects.slice(0,6);
          that.slideMsg = data1;
          that.playMsg = data2;
      });
      
    },
    //虚拟后端数据
    initSlideData(){
      let data= slideData.subjects.slice(0,4);
      let data2= slideData.subjects.slice(0,6);
      this.slideMsg = data
      this.playMsg = data2;
      this.movieComing = comingData.subjects.slice(0,6)
      this.usaDate = usaData.date;
      this.usaList = usaData.subjects.slice(0,6);
    },
    async getMovieComing(){
      let url = URL.url+'https://api.douban.com/v2/movie/coming_soon';
      let res = await axios.get(url);
      let data2= res.data.subjects.slice(0,6);
      this.movieComing = data2;
    },
    async getUsaMsg(){
      let url = URL.url+'https://api.douban.com/v2/movie/us_box';
      let res = await axios.get(url);
      this.usaDate = res.data.date;
      this.usaList = res.data.subjects.slice(0,6);
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.bac{
  width: 100%;

  margin-top: 30px;
  
}
</style>
