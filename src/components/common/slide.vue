<template>
  <div class="wrapper">
    <el-carousel trigger="click" height="160px" arrow="always">
      <el-carousel-item v-for="item in slideMsg" :key="item" >        
        <div class="slideWrap">
          <img :src="item.images.medium" @click="imgClick(item)">
          <div class="desc">
            <h2>{{item.title}}</h2>
            <h3>导演：{{item.directors[0].name}}</h3>
            <div class="star">
              <el-rate :value="item.rating.average/2" disabled></el-rate>
            </div>
            
          </div>
          
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
      data() {
        return {
         
        }
      },
      props:['slideMsg'],
      computed:{
        
        
      },
      methods:{
        imgClick(item){
      this.$router.push({path:'/detail/'+item.id})
    }
      }
  }
</script>
<style scoped>
  .wrapper{
    margin-top: 80px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #d58080;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #80c3d5;
  }
  .slideWrap{
    height: 100%;
    width: 100%;
  }
  .slideWrap img{
    width:30%;
    height:100%;
    padding-left: 50px;
    float: left;
  }
  .slideWrap .desc{
    float: left;
    margin-left: 25px;
    width: 200px;


  }
  .slideWrap .desc h2{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-top: 20px;
    font-size: 15px;
  }
  .slideWrap .desc h3{
    padding-top: 20px;
    font-size: 10px;
  }
  .slideWrap .desc .star{
    padding-top: 20px;
  }

</style>