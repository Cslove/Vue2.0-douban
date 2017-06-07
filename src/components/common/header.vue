<template>
	<div class="wrapper">
		<el-row>
			<el-col :span="24">
				<div class="head-box">
					<el-row>
						<el-col :span="4" class="logo"><span @click="refresh">豆瓣</span></el-col>
						<el-col :span="20">
							<el-row :gutter="20">
								<el-col :span="6" :offset="6" class="nav-btn"><span @click="refresh">电影</span></el-col>
								<el-col :span="6" class="nav-btn" :style="{color:red}"><span @click="library">图书</span></el-col>
								<el-col :span="6" class="nav-btn" :style="{color:yellow}"><span @click="refresh">其他</span></el-col>
							</el-row>
						</el-col>					
					</el-row>
				</div>
			</el-col>
	    </el-row>
	</div>
</template>
<script>
export default {
  name: 'head',
  data () {
    return {
      msg: 'hello',
      red: '#ff7b00',
      yellow: '#00bfff'
    }
  },
  methods:{
  	refresh(){ 
  		this.$router.push({name:'home'}); 		
  	},
  	library(){
 
  		this.$router.push({path:'/library'})
  		
  	}
  }
}
</script>
<style scoped>
	.head-box{
		background-color: white;
		height: 50px;
		position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    z-index: 9999;
	    padding-left: 22px;
		border-bottom: 1px solid #eee;
	}
	.head-box .logo{
		font-size: 25px;
	    line-height: 50px;
	    color: #1ce642;
	    font-weight: bolder;
	}
	.nav-btn{
		line-height: 50px;
	    font-size: 18px;
	    color: blue;
	    cursor: pointer;
	}
</style>
