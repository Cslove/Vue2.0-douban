<template>
	<div class="wrapper">
		<div class="title">
			<p>{{movie_play}}</p>
			<span @click="toMovieUsaList">{{usaDate}}</span>
		</div>
		<div class="poster-box">
		  <div class="poster" v-for="item in usaList" :key="item" @click="imgClick(item)">
		  	<img :src="item.subject.images.medium">
		  	<p>{{item.subject.title}}</p>
		  	<div class="star">评分：<span>{{item.subject.rating.average === 0 ? "暂无":item.subject.rating.average}}</span></div>
		  </div>

		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			movie_play:'北美票房榜'
		}
	},
	props:['usaDate','usaList'],
	created(){
		
	},
	methods:{
		toMovieUsaList(){
			this.$router.push({path:"/movie_play/"+this.movie_play})
		},
		imgClick(item){
			this.$router.push({path:'/detail/'+item.subject.id})
		}
	}
	

}
	
</script>
<style scoped>
	.wrapper{
		width: 100%;
	}
	.wrapper .title{
		display: flex;
	    align-items: baseline;
	    width: 100%;
	    justify-content: space-between;
	}
	.wrapper .title p{
		padding: 20px;
	    font-size: 20px;
	    font-weight: bolder;
	}
	.wrapper .title span{
	    padding-right: 20px;
	    color: green;
	    font-size: 15px;
	}
	.poster-box{
		display: flex;
		
		overflow-x: auto;
	    white-space: nowrap;
	    font-size: 0;
	    
	}
	.poster-box .poster{
		width: 100px;
		padding-left: 20px;

    
	}
	.poster-box .poster p{
		font-size: 15px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		color: #000;
		font-weight: bold;
		text-align: center;
		margin-top: 5px;
		margin-bottom:2px;
	}
	.poster-box .poster img{
		width: 100px;
		height: 143px;
	}
	.poster-box .poster .star{
		font-size: 14px;
		color: #faa10e;
		text-align: center;
	}
	::-webkit-scrollbar{
		width: 0;
		height: 0;
	}
</style>