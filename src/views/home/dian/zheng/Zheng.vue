<template>
  <div class="zheng-inner">
    <div class="zheng-item" @click="link(item)" v-for="(item,index) in list">
      <img :src="item.img" alt="">
      <div class="text">
        <h2>{{item.nm}}</h2>
        <p>时间:{{item.comingTitle}}</p>
        <p>{{item.showInfo}}</p>
        
      </div>
      <div class="btn">
        购票
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      list:[]
    }
  },
  //调用
  created(){
    //请求ajax
    this.getListData()
  },
  //定义函数
  methods:{
    //请求数据函数
    getListData(){
      this.$http.get('/list').then(res=>{
        this.list=res.data.list.coming
        console.log(res.data.list.coming);
      })
    },
    link(item){
      this.$router.push({
        path:`/dele/${item.id}`
      })
    }
  },

  
}
</script>

<style lang="scss">
.zheng-inner{
  width: 100%;
  height: 100%;
  overflow:auto;
  .zheng-item{
    width: 100%;
    height: 100px;
    display: flex;
    margin: 10px 0;
    img{
      width: 80px;
      height: 100px;
    }
    .text{
      flex: 1;
      height: 100%;
    }
    .btn{
      width: 60px;
      height: 35px;
      border-radius: 5px;
      background: red;
      color: #fff;
      text-align: center;
      line-height: 35px;
      margin: 5px;
    }
  }

}


</style>
