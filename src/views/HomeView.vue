<template>
  <div class="home">
    <headers  msg="流口全域管理数据驾驶舱"/>
    <div class="nextPage" @click="toPage">下一页</div>
    <div class="main">
      <div class="left">
        <div class="people">
          <div class="people_top">
            在住总人数 <span>{{ totalData.tenanted_count }}</span>
          </div>
          <div class="people_bot">
            <div>
              <div class="tit">今日离开</div>
              <div class="count">{{ totalData.today_untenanted_count }}</div>
            </div>
            <div>
              <div class="tit">今日入住</div>
              <div class="count">{{ totalData.today_tenanted_count }}</div>
            </div>
          </div>
        </div>
        <div class="people peopleHeight">
          <div class="people_top">近15 45天出租数量</div>
          <div
            class="leftCharts"
            id="myChart"
          ></div>
        </div>
        <div class="people peopleHeight">
          <div class="people_top">近一、二周、三十天开锁数量</div>
          <div
            class="leftCharts"
            id="myChart1"
          ></div>
        </div>
      </div>
      <div class="center">
        <div class="centerCount">
          <div class="countItem">
            <div class="bg bg1">
              <span class="iconfont icon-xinyonghu"></span>
            </div>
            <div class="countBox">
              <div class="countTitle">登记房屋总数</div>
              <div class="count">{{totalData.total_count}}</div>
            </div>
          </div>
          <div class="countItem">
            <div class="bg bg2">
              <span class="iconfont icon-rili"></span>
            </div>
            <div class="countBox">
              <div class="countTitle">空置房屋</div>
              <div class="count">{{totalData.total_count-totalData.current_lock_tenanted_count }}</div>
            </div>
          </div>
          <div class="countItem">
            <div class="bg bg3">
              <span class="iconfont icon-yonghuguanli"></span>
            </div>
            <div class="countBox">
              <div class="countTitle">在住房屋</div>
              <div class="count">{{totalData.current_lock_tenanted_count }}</div>
            </div>
          </div>
        </div>
        <Geo
          id="china_map"
          :render_random="geo_render_random"
          datas="25rem"
        ></Geo>
      </div>
      <div class="right">
        <div class="rightBox">
          <div class="rightBoxTitle">近期入住趋势</div>
          <div class="charts" id="charts1"></div>
        </div>
        <div class="rightBox">
          <div class="rightBoxTitle">近期新入住与离开</div>
          <div class="charts" id="charts2"></div>
        </div>
        <div class="rightBox">
          <div class="rightBoxTitle">近期开门行为情况</div>
          <div class="charts" id="charts3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headers from "@/components/header.vue";
// import 'echarts/map/js/china.js'
import Geo from "@/components/geo";
import { get_chart_data, get_current_data, get_lock_data,get_zone_conf } from "@/api/api";

function objSort(obj) {
  let newkey = Object.keys(obj).sort();
  let newObj = {};
  for (let i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = obj[newkey[i]];
  }
  return newObj;
}

export default {
  name: "HomeView",
  components: {
    headers,
    Geo,
  },
  data() {
    return {
      geo_render_random: Math.random(),
      totalData: "",
      dateArray: [],
      chartsData1: [],
      chartsData2: [],
      chartsData3: [],
      chartsData4: [],
    };
  },
  mounted() {
    this.getData();
    this.getCurrentData();
    this.getLockData();
    this.getZoneConf()
  },
  methods: {
    toPage(){
      this.$router.push('/secondPage')
    },  
    getZoneConf(){
      get_zone_conf().then(res=>{
        console.log(res,'777')
      })
    },
    getLockData() {
      get_lock_data().then((res) => {
        console.log(res, "444");
      });
    },
    getData() {
      get_chart_data().then((res) => {
        for (let item in objSort(res)) {
          console.log(item, "555");
          this.dateArray.push(item);
        }
        this.dateArray.forEach((item) => {
          console.log(res[item], "456");
          res[item].forEach((its) => {
            let index = its.findIndex((itm) => {
              return itm.handle_type == 3;
            });
            if (index != -1) {
              this.chartsData1.push(its[index].count);
            } else {
              this.chartsData1.push(0);
            }

            let index1 = its.findIndex((itm) => {
              return itm.handle_type == 4;
            });
            if (index1 != -1) {
              this.chartsData2.push(its[index1].count);
            } else {
              this.chartsData2.push(0);
            }

            let index2 = its.findIndex((itm) => {
              return itm.handle_type == 2;
            });
            if (index2 != -1) {
              this.chartsData3.push(its[index1].count);
            } else {
              this.chartsData3.push(0);
            }
          });
        });
        this.login_init();
        this.login_init1();
        this.login_init2();

        console.log(this.chartsData2, "222");
      });
    },
    getCurrentData() {
      get_current_data().then((res) => {
        this.totalData = res;
        this.drawLine();
        this.drawLine1();
        console.log(res, "333");
      });
    },

    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      // 环状半圆形饼图
      // 总量
      let option = {
        title: {
          // 第一个圆环标题
          text: this.totalData.tenanted_schema.fourty_five_days + "间", // 主标题
          textStyle: {
            // 主标题样式
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
          },
          left: "50%", // 定位到适合的位置
          top: "40%", // 定位到适合的位置
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
              formatter: "{c}", // 显示的数据
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
                value: this.totalData.tenanted_schema.thirty_days,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#8c28f0",
                  },
                },
                name: "0-30天",
              },
              {
                value:
                  this.totalData.tenanted_schema.fourty_five_days -
                  this.totalData.tenanted_schema.thirty_days,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#479df0",
                  },
                },
                name: "31-45天",
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
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
          text: this.totalData.unlock_times.thrity_days + "次", // 主标题
          textStyle: {
            // 主标题样式
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
          },
          left: "50%", // 定位到适合的位置
          top: "40%", // 定位到适合的位置
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
              formatter: "{c}", // 显示的数据
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
                value: this.totalData.unlock_times.thrity_days,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#8c28f0",
                  },
                },
                name: "一周",
              },
              {
                value:
                  this.totalData.unlock_times.two_week -
                  this.totalData.unlock_times.week,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#479df0",
                  },
                },
                name: "两周",
              },
              {
                value:
                  this.totalData.unlock_times.thrity_days -
                  this.totalData.unlock_times.two_week,
                itemStyle: {
                  normal: {
                    // 渐变色操作
                    color: "#ee14c9",
                  },
                },
                name: "三十天",
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
    login_init1() {
      let myChart = this.$echarts.init(document.getElementById("charts2"));
      myChart.setOption({
        legend: {
          x: "center",
          y: "top",
          icon: "circle",
          itemHeight: 5,
          data: ["新入住", "离开"],
          textStyle: {
            fontSize: 14, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        grid: {
          show: false,
          top: "25%", // 一下数值可为百分比也可为具体像素值
          right: "5%",
          bottom: "20%",
          left: "10%",
        },
        xAxis: {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              width: 0,
              type: "solid",
            },
          },
          axisLabel: {
            //y轴文字的配置
            textStyle: {
              color: "#fff",
              margin: 15,
            },
          },
        },
        yAxis: {
          type: "category",
          name: "日期",
          nameTextStyle: {
            //y轴上方单位的颜色
            color: "#fff",
          },
          axisLine: {
            //y轴线的颜色以及宽度
            show: false,
            lineStyle: {
              color: "#fff",
              width: 1,
              type: "solid",
            },
          },
          data: this.dateArray,
          axisLabel: {
            //y轴文字的配置
            textStyle: {
              color: "#fff",
              margin: 15,
            },
          },
        },
        series: [
          {
            data: this.chartsData1,
            type: "bar",
            name: "新入住",
            barWidth: 5,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: "#991bfa",
              },
            },
          },
          {
            data: this.chartsData2,
            name: "离开",
            type: "bar",
            barWidth: 5,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: "#f9c74f",
              },
            },
          },
        ],
      });
    },
    login_init() {
      let myChart = this.$echarts.init(document.getElementById("charts1"));
      myChart.setOption({
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 1, //这里是为了突出显示加上的
            },
          },
          data: this.dateArray,
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        series: [
          {
            data: this.chartsData1,
            type: "line",
            smooth: true,
            lineStyle: {
              color: "#7a19ca",
            },
            areaStyle: {
              color: ["#2f1554"],
            },
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    login_init2() {
      let myChart = this.$echarts.init(document.getElementById("charts3"));
      myChart.setOption({
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 1, //这里是为了突出显示加上的
            },
          },
          data: this.dateArray,
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        series: [
          {
            data:this.chartsData3,
            type: "line",
            symbol: "circle",
            lineStyle: {
              color: "#01f1e3",
            },
            itemStyle: {
              normal: {
                color: "#01f1e3",
              },
            },
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>
<style lang="less" scoped>
.nextPage{
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
.leftCharts {
  margin-top: 20px;
  width: 100%;
  height: 280px;
}
.bg {
  width: 80px;
  border-radius: 10px;
  height: 80px;
  line-height: 80px;
}
.iconfont {
  font-size: 40px;
  color: #fff;
}
.china_map {
  width: 100%;
  height: 1000px;
}
.home {
  height: 100%;
  width: 100%;
  position: relative;
}
.peopleHeight {
  height: 300px !important;
}
.bg1 {
  background-color: #fd5353;
}
.bg2 {
  background-color: #ff8f1f;
}
.bg3 {
  background-color: #ffc300;
}
.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  .left {
    width: 25%;
    padding: 20px 50px;
    box-sizing: border-box;
    height: 100%;
    // background-color: #fff;
  
    .people {
      margin-top: 40px;
      width: 100%;
      padding: 10px;
      height: 180px;
      background: #141429;
      border-radius: 10px;
      color: #fff;
      text-align: start;
      box-sizing: border-box;
      .people_top {
        span {
          font-size: 25px;
          margin-left: 50px;
          font-weight: 600;
        }
      }
      .people_bot {
        width: 100%;
        margin-top: 20px;
        border-radius: 10px;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        text-align: center;
        background-color: #202042;
        .tit {
          font-size: 15px;
        }
        .count {
          margin-top: 15px;
          font-size: 25px;
          font-weight: 600;
        }
      }
    }
  }
  .right {
    width: 25%;
    padding: 20px 50px;
    box-sizing: border-box;
    // background-color: #fff;
    height: 100%;
    .rightBox {
      margin-top: 40px;
      width: 100%;
      padding: 10px;
      // height: 180px;
      background: #141429;
      border-radius: 10px;
      color: #fff;
      text-align: start;
      box-sizing: border-box;
      .charts {
        width: 100%;
        height: 230px;
      }
    }
  }
  .center {
    padding: 20px 50px;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    .centerCount {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 100px;
      box-sizing: border-box;
      height: 80px;
      // background-color: red;
      .countItem {
        display: flex;
        width: 180px;
        justify-content: space-between;
        .countBox {
          width: 100px;
          padding: 15px 0;
          color: #fff;
          box-sizing: border-box;
          text-align: center;
          .count {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>
