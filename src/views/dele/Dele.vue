<template>
  <div  class="dele">
      <div class="dele-header">
        <span class="fanhui" @click="btnback">←</span>
        <span>详情页</span>
        <span></span>
      </div>
      <div class="dele-main">
        <img :src="deledata.img" alt="">
        <h2>{{deledata.nm}}</h2>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      deledata:[]
    }
  },
  //执行函数
  created(){
    this.getitem()
  },
  //定义函数
  methods:{
    //返回上一级
    btnback(){
      this.$router.back()
    },
    //请求详情页数据
    getitem(){
      this.$http.get('/item',{params:{id:this.$route.params.id}}).then(res=>{
        this.deledata=res.data.list[0]
       
      })
    }
  }
}
</script>

<style>
.dele{
  width: 100%;
  height: 100%;
  display: flex;
 
  flex-direction: column;
}
.dele-header{
  width: 100%;
  height: 45px;
  display: flex;
   background: red;
  justify-content: space-around;
  align-items: center;
}
.fanhui{
  width: 30px;
  height: 30px;
  background: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
}

</style>