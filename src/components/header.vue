<template>
  <div class="homes">
    <div class="title">{{ msg }}</div>
    <div class="date">{{ timeArry.timeText }} {{ timeArry.week }}</div>
    <div class="logout" @click="loginOut">退出</div>
  </div>
</template>
<script>
import {login_out } from "@/api/api";

import { formatDate } from "@/utils/index";
export default {
  props:["msg"],
  data() {
    return {
      nowDate: "",
      timeArry:"",
    };
  },
  created(){
    this.timeArry = formatDate(new Date());
    this.timeStart();

  },
  methods: {
    loginOut(){
      login_out().then(res=>{
        this.$router.push('/login')
      })
    },
    timeStart() {
      // 设置定时器
      this.timer = setInterval(() => {
        this.timeArry = formatDate(new Date());
      }, 1000);
    }

  },
};
</script>
<style scoped lang="less">
.homes{
  position: relative;
}
.logout{

}
.logout{
  width: 100px;
  position: absolute;
  right:20px;
  top: 20px;
  height: 30px;
  color: #01f1e3;
  font-size: 23px;
  text-align: center;
  line-height: 30px;
  border-radius: 50px;
  border: 2px solid #01f1e3;
}
.date {
  text-align: start;
  font-size: 16px;
  color: #fff;
  padding-left: 80px;
}
.title {
  width: 100%;
  color: #fff;
  font-size: 30px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
</style>