<template>
	<div class="wrapper">
		<div class="title">
			<p>分类浏览</p>
		</div>
		<div class="cat-box">
			<el-row v-for="items in arr" >
			  <el-col :span="12" v-for="item in items">
			  	<p @click="toCatList(item)"><span class="title">{{item}}</span><span><i class="el-icon-arrow-right"></i></span></p>
			  </el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
import catArr from '@/utils/cat_arr'
export default{
	data(){
		return {
			arr:catArr.arr
		}
	},
	props:[],
	created(){
		
	},
	computed:{
		
	},
	methods:{
		toCatList(item){
			this.$router.push({path:'/cat_list/'+item})
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
	.wrapper .cat-box p{
		height: 42px;
		display: flex;
		justify-content: space-between;
		line-height: 42px;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		
	}
	.wrapper .cat-box p .title{
		color: #42bd56;
		padding-left: 15px;
	}
	.wrapper .cat-box p span{
		padding-right: 15px;
		color: #d1c8c8;
	}
	.wrapper .cat-box .el-row .el-col:first-child{
		border-right: 1px solid #eee;
	}
	
</style>