<template>
	<div class="wrapper">
		<my-head></my-head>
		<h2>{{cat_title}}</h2>
		<div class="movie-box">
			<div class="movie" v-for="item in movieData" :key="item" @click="imgClick(item)">
				<img :src="item.subject.images.large">
				<p class="name">{{item.subject.title}}</p>
				<p class="rating">评分：<span>{{item.subject.rating.average ==0?'暂无':item.subject.rating.average}}</span></p>
			</div>
			
		</div>
	</div>
</template>
<script>
import myHead from './common/header.vue'
import axios from 'axios'
import { Loading } from 'element-ui'
export default{
	data(){
		return {
			
			cat_title:'',
			movieData:[],

		}
	},
	components:{
		myHead
	},
	mounted(){
		
		this.initTitle();
		this.initData();
		
	},
	
	methods:{
		initTitle(){
			this.cat_title = this.$route.params.playusa;
		},
		initData(){
			switch(this.cat_title){
				case '北美票房榜':
					console.log(3);
					this.getUsaMsg();
					break;
			}
		},
	    async getUsaMsg(){
	    	let loading=this.$loading({fullscreen:true,text:'cslove为您努力加载ing...'})
	      let url = 'https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/us_box';
	      let res = await axios.get(url);
	      this.movieData = res.data.subjects;
	      if(res){loading.close()}
	      
	    },
		imgClick(item){
			this.$router.push({path:'/detail/'+item.subject.id})
		}
	},
	computed:{
		
	}
}
</script>
<style scoped>
	.wrapper{
		width: 100%;
	}
	h2{
		margin-top: 60px;
		padding-left: 20px;
	}
	.movie-box{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.movie-box .movie{
		min-width: 85px;
		max-width: 100px;
		width: 90px;
	    margin: 20px;

	}
	.movie-box .movie img{
		width: 100%;
	}
	.movie-box .movie .name{
		padding: 5px 0;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		text-align: center;
		font-size: 13px;
		font-weight: bold;
	}
	.movie-box .movie .rating{
		color: #f99e09;
		font-size: 15px;
		text-align: center;
	}
</style>