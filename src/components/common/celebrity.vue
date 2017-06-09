<template>
	<div class="wrapper">
		<p class="name">名字：{{message.name}}</p>
		<p class="name-en">英文名：{{message.name_en}}</p>
		<p class="sex">性别：{{message.gender}}</p>
		<p class="born">出生地：{{message.born_place}}</p>
		<p class="aka">别名：<span v-for="item in message.aka">{{item}}/&nbsp</span></p>
		<p class="relant">相关作品</p>
		<div class="zuopin" v-loading="loading">
			<div class="zuopin-box" v-for="zp in message.works" :key='zp'>
				<img :src="zp.subject.images.large" @click="imgClick(zp.subject.id)">
				<p>{{zp.subject.title}}</p>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import URL from '../../utils/url'
export default{
	data(){
		return {
			message:null,
			loading:false
		}
	},
	watch:{
		value:function(val){
			if(val!==""){
			this.getCelebrity(val)
				
			}
		}
	},
	computed:{
		value(){
			return this.$route.params.name
		}
	},
	created(){
		// this.value = this.$route.params.name;
		// this.getCelebrity();
	},
	methods:{
		async getCelebrity(val){
				
				this.loading = true;
				let url = URL.url+'https://api.douban.com/v2/movie/celebrity/'+val;
				let res = await axios.get(url);
				
				this.message = res.data;
				if(res){
					this.loading = false
				}
			
		},
		imgClick(item){
			this.$router.push({name:'detail',params:{id:item}})
		}
	}
}
</script>
<style scoped>
	.wrapper p{
		padding-top: 10px;
		padding-left: 15px;
		color: #000;
	}
	.wrapper .relant{
		font-size: 20px;
		font-weight: bold;
	}
	.zuopin{
		display: flex;
	    flex-wrap: wrap;
	}
	.zuopin .zuopin-box{
		width: 100px;
	    height: 150px;
	    padding: 15px;
	}
	.zuopin .zuopin-box img{
		width: 100%;
		height: 90%;
	}
	.zuopin .zuopin-box p{
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>