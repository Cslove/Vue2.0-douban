<template>
	<div class="wrapper">
		<my-head></my-head>
		<h2>{{cat_title}}</h2>
		<div class="movie-box">
			<div class="movie" v-for="item in movieData" :key="item" @click="imgClick(item)">
				<img :src="item.images.large">
				<p class="name">{{item.title}}</p>
				<p class="rating">评分：<span>{{item.rating.average ==0?'暂无':item.rating.average}}</span></p>
			</div>
			
		</div>
		<div v-loading="loading">{{warn}}</div>
	</div>
</template>
<script>
import myHead from './common/header.vue'
import axios from 'axios'
export default{
	data(){
		return {
			rating:3.7,
			cat_title:'',
			movieData:[],
			loading:null,
			warn:'',
			flag:true,
			url:''

		}
	},
	components:{
		myHead
	},
	mounted(){
		let that = this;
		this.initTitle();
		this.initData();
		window.addEventListener('scroll',this.refresh)
		
	},
	destroyed(){
		window.removeEventListener('scroll',this.refresh)
	},
	methods:{
		initTitle(){
			this.cat_title = this.$route.params.tag;
		},
		refresh(e){
			e.preventDefault();
			this.refreshMsg();
		},
		async refreshMsg(){
			let that = this;
			let wrap = document.body;

			if(wrap.scrollTop + document.documentElement.clientHeight === wrap.scrollHeight){
				let start = this.movieData.length;
				this.loading = true;
				this.url = 'https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/search?tag='+this.cat_title+'&start='+start;				
				if(this.flag){
						let arr = await axios.get(this.url)
						
							let arr1 = arr.data.subjects;
							
							if(arr1){
								for(let item of arr1){
									that.movieData.push(item)
								};
								that.loading = false;
								
							}else{
								that.warn = "已经到底了~";
								that.loading = false;
								that.flag = false;
							}
						
					}
			}
		},
		initData(){
			this.getSlideData(this.cat_title);
					
		},
		async getSlideData(tg,start=0) {
		  
		  let loading=this.$loading({fullscreen:true,text:'cslove为您努力加载ing...'})
	      let url = 'https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/search?tag='+tg+'&start='+start;
	      let res = await axios.get(url);
	      let data1= res.data.subjects
	      this.movieData = data1;
	      if(data1){loading.close()};
	      	      
	    },
	    imgClick(item){
			this.$router.push({path:'/detail/'+item.id})
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