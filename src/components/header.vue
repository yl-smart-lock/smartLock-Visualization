<template>
  <div>
    <div class="title">{{ msg }}</div>
    <div class="date">{{ timeArry.timeText }} {{ timeArry.week }}</div>
  </div>
</template>
<script>

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