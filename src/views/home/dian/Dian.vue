<template>
  <div class="tap">
      <div class="dian-btns">
          <router-link to="/home/dian/zheng">正在上映</router-link>
          <router-link to="/home/dian/ji">即将上映</router-link>
      </div>
      <div class="dian-inner">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.tap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.dian-inner{
    flex: 1;
    width: 100%;
    overflow: auto;
}
.dian-btns{
    width: 100%;
    height: 45px;
    margin-top: 30px;
    display: flex;
    
}
.dian-btns a{
    flex: 1;
    height: 100%;
    text-align: center;
    line-height: 45px;
    text-decoration: none;
    &.router-link-exact-active{
     background: red;
     color: #fff;
 }
}

</style>