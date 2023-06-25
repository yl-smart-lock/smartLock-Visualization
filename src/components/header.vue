<template>
  <div class="homes">
    <div class="tab">
        <div
          @click="tabClick(index, item.path)"
          class="tabItem"
          :class="active == index+1 ? 'active' : ''"
          v-for="(item, index) in tabList"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
    <div class="title">{{ msg }}</div>
    <div class="date">{{ timeArry.timeText }} {{ timeArry.week }}</div>
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
      active:sessionStorage.getItem('tabIndex')?sessionStorage.getItem('tabIndex'):1,
      tabList: [
        {
          name: "首页",
          path: "/index",
          type:1
        },
        {
          name: "乐作业",
          path: "/lezuoye",
          type:1

        },
        {
          name: "乐研学",
          path: "/leyanxue",
          type:1

        },
         {
          name: "乐云校",
          path: "/kaifa",
          type:2

        },
        {
          name: "乐托服",
          path: "/kaifa",
          type:2
        },
      ],
    };

  },
  created(){
    this.timeArry = formatDate(new Date());
    this.timeStart();

  },
  methods: {
    tabClick(index, path) {
      sessionStorage.setItem('tabIndex',index)
      this.active = index+1;
      this.$router.push(path);
    },
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
.tab {
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-top: 20px;
}
.tabItem {
  width: 80px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}

.active {
  color: #03ffff;
}
.homes{
  // position: relative;
}
.logout{

}
.logout{
  cursor: pointer;

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