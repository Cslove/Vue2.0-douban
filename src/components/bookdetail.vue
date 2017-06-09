<template>
	<div class="wrapper">
		<div class="poster-box">
			<p class="nav-bar"><i class="el-icon-arrow-left" @click="back"></i><span @click="backhome">图书</span></p>
			<a :href="data.alt"><img :src="data.images.large"></a>
		</div>
		<section class="detail">
			<div class="desc-box">
				<h2>{{data.title}}</h2>
				<p class="desc"><span>{{data.pubdate}}</span>&nbsp/&nbsp<span v-for="item in data.author">{{item}}&nbsp/</span></p>
				<p class="name">原名：<span>{{data.original_title}}</span></p>
				<p class="shangying">出版社：<span>{{data.publisher}}(<span v-for="i in data.countries">{{i}}&nbsp</span>)</span></p>
				<p class="time">价格：<span>{{data.price}}</span></p>
			</div>
			<div class="rating-box">
				<div class="box">
					<p class="rating">豆瓣评分</p>
					<h2>{{data.rating.average}}</h2>
					<p class="star"><el-rate :value="data.rating.average/2" disabled></el-rate></p>
					<p class="nums">{{data.collect_count}}想看</p>
					
				</div>
			</div>
		</section>
		<section class="summary">
			<p class="jianjie">简介</p>
			<p class="content">{{data.summary}}</p>
		</section>
		<section class="summary">
			<p class="jianjie">{{data.author[0]}}简介</p>
			<p class="content">{{data.author_intro}}</p>
		</section>
	</div>
</template>
<script>
import axios from 'axios'
import URL from '../utils/url'
export default{
	data(){
		return{
			data:null
		}
	},
	mounted(){
		this.getMovieData(this.$route.params.id)
	},
	methods:{
		back(){
			this.$router.go(-1)
		},
		backhome(){
			this.$router.replace({name:'library'})
		},
		async getMovieData(id){
			let loading=this.$loading({fullscreen:true,text:'cslove为您努力加载ing...'})
			let url = URL.url+'https://api.douban.com/v2/book/'+id;
			let res = await axios.get(url)
			this.data = res.data;
			if(res){loading.close()};
		}
	}
}
</script>
<style scoped>
	.wrapper{
		width:100%;
		height: 100%;
	}
	.poster-box{
		width: 100%;
		height: 60%;
		background: #333;
		text-align: center;

	}
	.poster-box img{
		width: 40%;
	    height: 65%;
	    padding-top: 80px;
	}
	.poster-box p{
		position: fixed;
		top:0;
		left: 0;
		right: 0;
		width: 100%;
		height: 60px;
		z-index: 9999;
		font-size: 25px;
		color: #fff;
	    background: #333;	
	}
	.poster-box p i{
		position: absolute;
		top: 20px;
		left: 20px;
	}
	.poster-box p span{
		position: absolute;
		top: 15px;
		right: 20px;
		font-size: 22px
	}
	.detail{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 25px;
	}
	.detail .desc-box{
		flex-basis: 70%;
		padding-left: 20px;
	}
	.detail .desc-box p{
		 color: #a8a5a5;
	    font-size: 16px;
	    padding-top: 5px;
	}
	.detail .rating-box{
		padding-right: 20px;
	}
	.detail .rating-box .box{
		width: 110px;
    	height: 110px;
		box-shadow: 4px 4px 20px 0px;
	}
	.detail .rating-box .box p{
		color: #a8a5a5;
		text-align: center;
		
	}
	.detail .rating-box .box h2{
		text-align: center;
	}
	.detail .rating-box .box .rating{
		font-size: 15px;
		padding-top: 2px;
	}
	.detail .rating-box .box .nums{
		padding-top: 16px;
	    font-size: 15px;
	}
	.summary{
		margin-top: 30px;
		padding-left:20px;
	}
	.summary .jianjie{
		color: #a8a5a5;
		font-size: 20px;
	}
	.summary .content{
		padding-top: 20px;
	    font-size: 20px;
	    padding-right: 20px;
	    line-height: 2rem;
	}
</style>