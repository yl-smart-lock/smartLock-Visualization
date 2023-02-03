<template>
  <div>
    <headers msg="流口数据汇总平台" />
    <div class="nextPage" @click="toPage">下一页</div>
    <div class="main">
      <div class="left">
        <div class="left_top bg1">
          <div class="top_box">
            <div class="countItem">
            <div class="bg color1">
              <span class="iconfont icon-xinyonghu"></span>
            </div>
            <div class="countBox">
              <div class="countTitle">已安锁房间</div>
              <div class="count">99</div>
            </div>
          </div>
          </div>
          <div class="bot_box">
            <span>已登记房间118间</span>
          </div>
          <div class="rate_box bg2">
            <div class="rate_title">
              安装率 20.3%
            </div>

            <div class="rate">
              <div class="rate_nei"></div>
            </div>
   
          </div>
          <div class="box">
              <div class="box_item bg2 wh1">
                <div class="count">20</div>
                <div class="tit">政府保障性住房</div>
              </div>
              <div class="box_item bg2 wh1">
                <div class="count">20</div>
                <div class="tit">村（社区）自建公寓</div>
              </div>
              <div class="box_item bg2 wh1">
                <div class="count">20</div>
                <div class="tit">宿舍</div>
              </div>
              <div class="box_item bg2 wh1">
                <div class="count">20</div>
                <div class="tit">个人出租房</div>
              </div>
            </div>
        </div>
        <div class="left_bot bg1"></div>
      </div>
      <div class="center">
        <div class="left_top bg1"></div>
        <div class="left_bot bg1"></div>
      </div>
      <div class="left">
        <div class="left_top bg1"></div>
        <div class="left_bot bg1"></div>
      </div>
    </div>
  </div>
</template>
<script>
import headers from "@/components/header.vue";

export default {
  components: {
    headers,
  },
  data() {
    return {};
  },
  methods: {
    toPage() {
      this.$router.push("/thirdPage");
    },
  },
};
</script>
<style scoped lang="less">
.box{
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  justify-content: space-between;
  .box_item{
    margin-top: 20px;
    padding: 25px;
    box-sizing: border-box;
    .count{
      font-size: 20px;
    }
  }
  
}
.wh1{
  width: 250px;
  height: 100px;
}
.iconfont {
  font-size: 30px;
  color: #fff;
}
.bot_box{
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  margin-top: 10px;
  color: #fff;
}
.rate_box{
  width: 100%;
  margin-top: 20px;
  text-align: start;
  padding: 10px;
  box-sizing: border-box;
  .rate_title{
    font-size: 15px;
    color: #fff;
  }
  .rate{
    margin-top: 10px;
    width: 100%;
    height: 8px;
    background-color: #14142b;
    .rate_nei{
      height: 8px;
      background-color: #0636e5;
      width: 20.3%;
    }
  }
}
.bg {
  width: 60px;
  border-radius: 10px;
  height: 60px;
  line-height: 60px;
}
.color1{
  background-color: #fd5353;
}
.top_box{
  .countItem {
        display: flex;
        width: 180px;
        justify-content: space-between;
        .countBox {
          width: 100px;
          padding: 5px 0;
          color: #fff;
          box-sizing: border-box;
          text-align: start;
          .count {
            font-size: 30px;
          }
        }
      }
}
.bg1 {
  background: #14142b;
  border-radius: 10px;
  padding: 15px;
  box-sizing: border-box;
}
.bg2 {
  background: #202046;
  border-radius: 10px;
}
.left_top {
  width: 100%;
  height: 450px;
}
.left_bot {
  width: 100%;
  height: 350px;
  margin-top: 30px;
}
.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  .left {
    width: 33%;
    height: 1000px;
    padding: 30px;
    box-sizing: border-box;
  }
  .center {
    width: 36%;
    padding: 30px 0;
    height: 1000px;
  }
}
.nextPage {
  width: 100px;
  right: 50px;
  top: 20px;
  position: absolute;
  height: 30px;
  color: #01f1e3;
  font-size: 23px;
  text-align: center;
  line-height: 30px;
  border-radius: 50px;
  border: 2px solid #01f1e3;
}
</style>