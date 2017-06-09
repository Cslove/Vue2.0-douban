<template>
	<div class="wrapper">
		<my-head></my-head>
		<h2>搜索结果({{book_name}})：</h2>
		<el-row v-for="book in books" :key='book'>
		  <el-col :span="6"><div class="img-box"  @click="toBookDatil(book.id)"><img :src="book.image"></div></el-col>
		  <el-col :span="18"><div class="name" @click="toBookDatil(book.id)">
		  	{{book.title}}
		  	<el-rate :value="book.rating.average/2" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate>
		  </div></el-col>
		</el-row>
	</div>
</template>
<script>
import myHead from './common/header'
import axios from 'axios'
import URL from '../utils/url'
export default{
	data(){
		return {
			book_name:this.$route.params.name,
			books:[]
		}
	},
	components:{
		myHead
	},
	mounted(){
		this.getBooks();
	},
	methods:{
		async getBooks(){
			let loading=this.$loading({fullscreen:true,text:'cslove为您努力加载ing...'})
			if(this.book_name){
				let url = URL.url+'https://api.douban.com/v2/book/search?q='+this.book_name;
				let res = await axios.get(url)
				this.books = res.data.books;
				if(res){loading.close()};
			}
		},
		toBookDatil(id){
			this.$router.push({name:'book',params:{id:id}})
		}
	}
} 
</script>
<style scoped>
	.wrapper h2{
	    margin-top: 60px;
	    margin-left: 20px;
	}
	.el-row{
		height: 80px;
		margin-top: 30px;
	}
	.el-row .el-col{
		height: 100%;
	}
	.el-row .el-col .img-box{
		height: 100%;
		padding-left: 20px;
	}
	.el-row .el-col .img-box img{
		height: 100%;
	}
	.el-row .el-col .name{
		height: 80px;
		line-height: 50px;
		
	}
</style>