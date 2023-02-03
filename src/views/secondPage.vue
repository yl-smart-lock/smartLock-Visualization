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
                <span class="iconfont icon-fangzi"></span>
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
            <div class="rate_title">安装率 20.3%</div>

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
        <div class="left_bot bg1">
          <div class="leftCharts" id="myChart1"></div>
        </div>
      </div>
      <div class="center">
        <div class="left_top bg1">
          <div class="top_box">
            <div class="countItem">
              <div class="bg color2">
                <span class="iconfont icon-yuechi"></span>
              </div>
              <div class="countBox">
                <div class="countTitle">在用钥匙</div>
                <div class="count">99</div>
              </div>
            </div>
          </div>
          <div class="bot_box">
            <span>已安装门锁24把</span>
            <span>今日安装 0</span>
          </div>
          <div class="box">
            <div class="box_item bg2 wh2">
              <div class="count">20</div>
              <div class="tit">门锁使用率</div>
            </div>
            <div class="box_item bg2 wh2">
              <div class="count">20</div>
              <div class="tit">今日总开门数</div>
            </div>
            <div class="box_item bg2 wh2">
              <div class="count">20</div>
              <div class="tit">最新开门时间</div>
            </div>
            <div class="box_item bg2 wh2">
              <div class="count">20</div>
              <div class="tit">今日下发钥匙数</div>
            </div>
          </div>
        </div>
        <div class="left_bot bg1 bot_charts">
          <div class="charts"  id="myChart2"></div>
          <div class="charts"  id="myChart3"></div>
        </div>
      </div>
      <div class="left">
        <div class="left_top bg1">
          <div class="top_box">
            <div class="countItem">
              <div class="bg color3">
                <span class="iconfont icon-yonghuguanli"></span>
              </div>
              <div class="countBox">
                <div class="countTitle">在住人数</div>
                <div class="count">99</div>
              </div>
            </div>
          </div>
          <div class="bot_box">
            <span>历史总入住人数118人</span>
            <span>今日入住情况</span>
          </div>
          <div class="box">
            <div class="box_item bg2 wh3">
              <div class="count">20</div>
              <div class="tit">新入住</div>
            </div>
            <div class="box_item bg2 wh3">
              <div class="count">20</div>
              <div class="tit">离开</div>
            </div>
            <div class="box_item bg2 wh3">
              <div class="count">20</div>
              <div class="tit">住所变动</div>
            </div>
          </div>
        </div>
        <div class="left_bot bg1">
          <div class="bg2 wh4">
            <div class="dot"></div>
            <div class="text">手机号总数</div>
            <div class="text1">122</div>

          </div>
          <div class="bg2 wh4">
            <div class="dot"></div>
            <div class="text">一人多少人数</div>
            <div class="text1">333</div>

          </div>
          <div class="bg2 wh4">
            <div class="dot"></div>
            <div class="text">单人持有最多手机号</div>
            <div class="text1">11</div>

          </div>

        </div>
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
  created() {
  },
  mounted(){
    this.drawLine1();
    this.drawLine2();
    this.drawLine3();
  },
  methods: {
    toPage() {
      this.$router.push("/thirdPage");
    },
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      // 环状半圆形饼图
      // 总量
      let option = {
        title: {
          // 第一个圆环标题
          text: "长期未出租情况", // 主标题
          textStyle: {
            // 主标题样式
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
          },
          left: "50%", // 定位到适合的位置
          top: "0", // 定位到适合的位置
          subtextStyle: {
            // 副标题样式
            color: "red",
            fontSize: 13,
            fontWeight: "bold",
          },
          textAlign: "center", // 主、副标题水平居中显示
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
        },
        legend: {
          orient: "horizontal",
          padding:[50,0,0,0],
          x: "center",
          y: "top",
          icon: "circle",
          itemHeight: 5,
          tooltip: {
            trigger: "item",
            position: "top",
          },
          textStyle: {
            fontSize: 14, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        series: [
          {
            center: ["50%", "65%"],
            startAngle: 0, // 饼图的角度
            hoverAnimation: false, // 取消饼图放大效果
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "inner", // 数据会显示在图形上，'center':会显示在圆环的内部
              color: "#fff",
              fontSize: 20,
              formatter: "{d}%", // 显示的数据
            },
            // emphasis: {
            //   label: {
            //     show: false,
            //     fontSize: "30",
            //     fontWeight: "bold",
            //   },
            // },
            lableLine: {
              normal: {
                show: false,
              },
              emphasis: {
                show: true,
              },
              tooltip: {
                show: true,
              },
            },
            data: [
              {
                value: 8,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#8c28f0",
                  },
                },
                name: "多人居住",
              },
              {
                value: 8,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#479df0",
                  },
                },
                name: "单人居住",
              },
              {
                value: 8,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#ee14c9",
                  },
                },
                name: "无人居住",
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      // 环状半圆形饼图
      // 总量
      let option = {
        title: {
          // 第一个圆环标题
          text: "钥匙所有人认证情况", // 主标题
          textStyle: {
            // 主标题样式
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
          },
          left: "50%", // 定位到适合的位置
          top: "0", // 定位到适合的位置
          subtextStyle: {
            // 副标题样式
            color: "red",
            fontSize: 13,
            fontWeight: "bold",
          },
          textAlign: "center", // 主、副标题水平居中显示
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
        },
        legend: {
          orient: "horizontal",
          padding:[50,0,0,0],
          x: "center",
          y: "top",
          icon: "circle",
          itemHeight: 5,
          tooltip: {
            trigger: "item",
            position: "top",
          },
          textStyle: {
            fontSize: 14, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        series: [
          {
            center: ["50%", "65%"],
            startAngle: 0, // 饼图的角度
            hoverAnimation: false, // 取消饼图放大效果
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "inner", // 数据会显示在图形上，'center':会显示在圆环的内部
              color: "#fff",
              fontSize: 20,
              formatter: "{d}%", // 显示的数据
            },
            // emphasis: {
            //   label: {
            //     show: false,
            //     fontSize: "30",
            //     fontWeight: "bold",
            //   },
            // },
            lableLine: {
              normal: {
                show: false,
              },
              emphasis: {
                show: true,
              },
              tooltip: {
                show: true,
              },
            },
            data: [
              {
                value: 8,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#00b578",
                  },
                },
                name: "已认证",
              },
              {
                value: 8,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#3662ec",
                  },
                },
                name: "未认证",
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
    drawLine3() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      // 环状半圆形饼图
      // 总量
      let option = {
        title: {
          // 第一个圆环标题
          text: "钥匙类型情况", // 主标题
          textStyle: {
            // 主标题样式
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
          },
          left: "50%", // 定位到适合的位置
          top: "0", // 定位到适合的位置
          subtextStyle: {
            // 副标题样式
            color: "red",
            fontSize: 13,
            fontWeight: "bold",
          },
          textAlign: "center", // 主、副标题水平居中显示
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
        },
        legend: {
          orient: "horizontal",
          padding:[50,0,0,0],
          x: "center",
          y: "top",
          icon: "circle",
          itemHeight: 5,
          tooltip: {
            trigger: "item",
            position: "top",
          },
          textStyle: {
            fontSize: 14, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        series: [
          {
            center: ["50%", "65%"],
            startAngle: 0, // 饼图的角度
            hoverAnimation: false, // 取消饼图放大效果
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "inner", // 数据会显示在图形上，'center':会显示在圆环的内部
              color: "#fff",
              fontSize: 20,
              formatter: "{d}%", // 显示的数据
            },
            // emphasis: {
            //   label: {
            //     show: false,
            //     fontSize: "30",
            //     fontWeight: "bold",
            //   },
            // },
            lableLine: {
              normal: {
                show: false,
              },
              emphasis: {
                show: true,
              },
              tooltip: {
                show: true,
              },
            },
            data: [
              {
                value: 8,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#ff8f1f",
                  },
                },
                name: "电子钥匙",
              },
              {
                value: 8,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#023aff",
                  },
                },
                name: "IC房卡",
              },
             
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style scoped lang="less">
.wh4{
  width: 100%;
  height: 80px;
  margin-top: 20px;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  color: #FFF;
  font-size: 18px;
  .dot{
    width: 10px;
    height: 10px;
    background-color: #039ff7;
    border-radius: 10px;
  }
  .text{
    margin-left: 20px;
    width: 400px;
    text-align: start;
  }
  .text1{
    text-align: start;
    // margin-left: 200px;
  }
}
.bot_charts{
  display: flex;
  justify-content: space-between;
  .charts{
    width: 50%;
    height: 300px;
  }
}
.leftCharts{
  width: 100%;
  margin-top: 20px;
  height: 300px;
}
.charts_title {
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.box {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  justify-content: space-between;
  .box_item {
    margin-top: 20px;
    padding: 25px;
    box-sizing: border-box;
    .count {
      font-size: 20px;
    }
  }
}
.wh1 {
  width: 250px;
  height: 100px;
}
.wh2 {
  width: 280px;
  height: 138px;
  div {
    margin-top: 15px;
  }
}
.wh3 {
  width: 250px;
  height: 138px;
  div {
    margin-top: 15px;
  }
}
.iconfont {
  font-size: 30px;
  color: #fff;
}
.bot_box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  margin-top: 10px;
  color: #fff;
}
.rate_box {
  width: 100%;
  margin-top: 20px;
  text-align: start;
  padding: 10px;
  box-sizing: border-box;
  .rate_title {
    font-size: 15px;
    color: #fff;
  }
  .rate {
    margin-top: 10px;
    width: 100%;
    height: 8px;
    background-color: #14142b;
    .rate_nei {
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
.color1 {
  background-color: #fd5353;
}
.color2 {
  background-color: #ff8f1f;
}
.color3 {
  background-color: #ffc300;
}
.top_box {
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
  right: 150px;
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