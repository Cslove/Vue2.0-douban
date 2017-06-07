<template>
	<div class="wrapper">
		<el-input
		  placeholder="请输入图书名"
		  icon="search"
		  size="large"
		  v-model="input"
		  :on-icon-click="handleIconClick">
		</el-input>
		<div class="tag-box">
			<p v-for="item in books" :key="item"><el-tag type="success" hit='hit'><span @click="toTag(item)">{{item}}</span></el-tag></p>			
		</div>
		<h1>搜索历史</h1>
		<div class="tag-box">
			<p v-for="item of vals" :key="item"><el-tag type="success" hit='hit'><span @click="toBook(item)">{{item}}</span></el-tag></p>			
		</div>
	</div>
</template>
<script>
import books from '../utils/books'
export default{
	data(){
		return {
			input:'',
			hit:true,
			books:books.books,
			vals:localStorage
			
		}
	},
	methods:{
		handleIconClick(){
			
			if(typeof this.input ==='string'&&this.input!==''){
				if(!localStorage[this.input]){
					localStorage.setItem(this.input,this.input);
					
					this.$router.push({path:'/book_list/'+this.input})
				}

			}
		},
		toBook(item){
			this.$router.push({path:'/book_list/'+item})
		},
		toTag(item){
			this.$router.push({name:'book_tag_list',params:{tag:item}})
		}
	}
}
</script>
<style scoped>
	.wrapper{
		
	}
	.tag-box{
		margin-top: 30px;
		display: flex;
		flex-wrap: wrap;
	}
	.el-tag{
		border-radius: 10px;
	    height: 40px;
	    line-height: 40px;
	    font-size: 20px;
	}
	.tag-box p{
		padding: 10px;
	}
	h1{
		padding-top: 30px;
	}
</style>