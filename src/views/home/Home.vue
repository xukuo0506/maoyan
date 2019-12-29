
<template>
  <div class="home wrapper">
     <div class="header">
       猫眼电影
     </div>
     <div class="main">
       <router-view/>
     </div>
     <div class="footer">
      <router-link to="/home/dian">电影</router-link>
      <router-link to="/home/ying">影院</router-link>
      <router-link to="/home/login">我的</router-link>
     </div>
  </div>
</template>

<script>
// import Dian from './dian//Dian'
// import Ying from './ying/Ying'
// import Login from './login//Login'
import axios from 'axios'
import {mapState,mapActions,mapGetters} from 'vuex'
export default {

}
</script>

<style lang="scss">
.home{
  width: 100%;
  height: 100%;
}
.wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 45px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.main{
  flex: 1;
  width: 100%;
  overflow: auto;
}
.footer{
  width: 100%;
  height: 45px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
 
}
.footer a{
  text-decoration: none;
  color: #000;
  &.router-link-exact-active{
     color: red;
 }
}



</style>

