<template>
  <div class="main">
    <div class="main_left">
      <dv-border-box-13
        :color="['#3981A4']"
        backgroundColor="rgba(58,127,158,0.2)"
        class="box_height1 course_school"
      >
        <div class="tits">
          <dv-decoration-3 style="width: 150px; height: 20px" />
          <div class="tit_text">托管概况</div>
          <!-- <div class="frame">
          <div class="frame-box">
            教师结对数据
          </div>
        </div> -->
        </div>
        <div class="countBox">
          <div
            class="countItem"
            :class="{ secondBg: active == index }"
            v-for="(item, index) in countList"
            :key="index"
          >
            <div class="content">
              <span>{{ item.name }}</span>
              <span>{{ item.count }}</span>
            </div>
            <div class="imgs" :class="{ secondImg: active == index }"></div>
          </div>
        </div>
      </dv-border-box-13>

      <dv-border-box-13
        :color="['#3981A4']"
        backgroundColor="rgba(58,127,158,0.2)"
        class="box_height2 course_school"
      >
        <div class="tits">
          <dv-decoration-3 style="width: 150px; height: 20px" />
          <div class="tit_text">课班分布</div>
          <!-- <div class="frame">
          <div class="frame-box">
            教师结对数据
          </div>
        </div> -->
        </div>
        <div class="kebanCharts" id="kebanCharts"></div>
      </dv-border-box-13>
      <dv-border-box-13
        :color="['#3981A4']"
        backgroundColor="rgba(58,127,158,0.2)"
        class="box_height3 course_school"
      >
        <div class="tits">
          <dv-decoration-3 style="width: 150px; height: 20px" />
          <div class="tit_text">报名分布</div>
          <!-- <div class="frame">
          <div class="frame-box">
            教师结对数据
          </div>
        </div> -->
        </div>
        <div class="baomingCharts" id="baomingCharts"></div>
      </dv-border-box-13>
    </div>
    <div class="main_center">
      <div class="topCount">
        <dv-border-box-8 :reverse="true" class="top_left">
          <div class="tit">累计学生参与数</div>
          <div class="count">
            <CountUp :delay="delay" :endVal="81646" :options="options" />
          </div>
        </dv-border-box-8>
        <dv-border-box-8 :reverse="true" class="top_left">
          <div class="tit">学校覆盖率</div>
          <div class="count">
            <CountUp :delay="delay" :endVal="86.9" :options="options" />%
          </div>
        </dv-border-box-8>
        <dv-border-box-8 :reverse="true" class="top_left">
          <div class="tit">托管服务参与率</div>
          <div class="count">
            <CountUp :delay="delay" :endVal="77.1" :options="options" />%
          </div>
        </dv-border-box-8>
        <dv-border-box-8 :reverse="true" class="top_left">
          <div class="tit">校外资源引进率</div>
          <div class="count">
            <CountUp :delay="delay" :endVal="50" :options="options" />%
          </div>
        </dv-border-box-8>
        <dv-border-box-8 :reverse="true" class="top_left">
          <div class="tit">作业时长合格率</div>
          <div class="count">
            <CountUp :delay="delay" :endVal="100" :options="options" />%
          </div>
        </dv-border-box-8>
      </div>
      <div class="centerbg">
        <div class="zhihui"></div>
        <div class="circle"></div>
      </div>
      <dv-border-box-11
        title="学校概况"
        :color="['#45D8E1', '#061025']"
        backgroundColor="rgba(58,127,158,0.2)"
        class="box_height4 course_school"
      >
        <div class="head">
          <div
            class="headItem"
            :class="{ schoolName: index == 0 }"
            v-for="(item, index) in headList"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <div class="tableBox">
          <div class="tables">
            <div
              class="tableItem"
              :class="{ tableBg: index % 2 == 0 }"
              v-for="(item, index) in tableList"
              :key="index"
            >
              <div class="schoolName">
                {{ item.name }}
              </div>
              <div>
                {{ item.studentNum }}
              </div>
              <div>{{ item.registrationRate }}%</div>
              <div>{{ item.basicTrusteeshipStudentRate }}%</div>

              <div>{{ item.extendTrusteeshipStudentRate }}%</div>
              <div>
                {{ item.staffNum }}
              </div>

              <div>{{ item.teacherParticipationRate }}%</div>
              <div>
                {{ item.courseClassNum }}
              </div>
              <div>{{ item.durationComplianceRate }}%</div>
              <div>{{ item.durationComplianceRate }}%</div>
            </div>
          </div>
        </div>
      </dv-border-box-11>
    </div>
    <div class="main_right">
      <dv-border-box-13
        :color="['#3981A4']"
        backgroundColor="rgba(58,127,158,0.2)"
        class="box_height1 course_school"
      >
        <div class="tits">
          <dv-decoration-3 style="width: 150px; height: 20px" />
          <div class="tit_text">师生签到</div>
          <!-- <div class="frame">
          <div class="frame-box">
            教师结对数据
          </div>
        </div> -->
        </div>
        <div class="qiandaoBox">
          <div class="tabList">
            <div
              class="tabItem"
              v-for="(item, index) in tabList"
              @click="tabClick(index)"
              :class="{ actives: index == actives }"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div class="qiandaoLeft" id="qiandaoLeft"></div>
          <div class="qiandaoCenter">
            <div class="qiandaoItem">
              <div class="peopleLeft">老师</div>
              <div class="peopleCenter"></div>
              <div class="peopleRight">学生</div>
            </div>
            <div class="qiandaoItem">
              <div class="peopleLeft">{{ data1 }}</div>
              <div class="peopleCenter">应签到人次</div>
              <div class="peopleRight">{{ data2 }}</div>
            </div>
            <div class="qiandaoItem">
              <div class="peopleLeft">{{ data3 }}</div>
              <div class="peopleCenter">实际签到人次</div>
              <div class="peopleRight">{{ data4 }}</div>
            </div>
          </div>
          <div class="qiandaoLeft" id="qiandaoRight"></div>
        </div>
      </dv-border-box-13>
      <dv-border-box-13
        :color="['#3981A4']"
        backgroundColor="rgba(58,127,158,0.2)"
        class="box_height1 course_school"
      >
        <div class="tits">
          <dv-decoration-3 style="width: 150px; height: 20px" />
          <div class="tit_text">财务采购</div>
        </div>
        <div class="yqlist">
          <ul class="clearfix">
            <li>
              <div class="yq">16632324<span>总报名应收金额</span></div>
            </li>
            <li>
              <div class="yq">76343<span>总报名人数</span></div>
            </li>
            <li>
              <div class="yq">2784<span>总课时数</span></div>
            </li>
            <li>
              <div class="yq">1122<span>拓展课时数</span></div>
            </li>
            <li>
              <div class="yq">1662<span>基础课时数</span></div>
            </li>
          </ul>
        </div>
      </dv-border-box-13>
      <dv-border-box-13
        :color="['#3981A4']"
        backgroundColor="rgba(58,127,158,0.2)"
        class="box_height5 course_school"
      >
        <div class="tits">
          <dv-decoration-3 style="width: 150px; height: 20px" />
          <div class="tit_text">放学时段</div>
          <!-- <div class="frame">
          <div class="frame-box">
            教师结对数据
          </div>
        </div> -->
        </div>
        <div class="fangxueChart" id="fangxueChart"></div>
      </dv-border-box-13>
    </div>
  </div>
</template>

<script>
import CountUp from "vue-countup-v2";
import axios from "axios";
import { get_getKuang } from "@/api/api";
export default {
  components: {
    CountUp,
  },
  data() {
    return {
      tabList: ["实时", "昨日", "累计"],
      data1: 125,
      data2: 43481,
      data3: 870,
      data4: 27911,
      actives: 0,
      headList: [
        "学校名",
        "学生总数",
        "学生参与率",
        "基础托管参与率",
        "拓展托管参与率",
        "老师总数",
        "老师参与率",
        "课班数",
        "老师晒合格率",
        "家长评合格率",
      ],
      active: 0,
      tableList: [],
      options: {
        useEasing: true,
        duration: 10,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
      },
      delay: 5,
      countList: [
        {
          name: "学生总数",
          count: "96163",
        },
        {
          name: "基础托管人数",
          count: "72917",
        },
        {
          name: "老师总数",
          count: "18781",
        },
        {
          name: "学生参与数",
          count: "74163",
        },
        {
          name: "拓展托管人数",
          count: "32270",
        },
        {
          name: "老师参与数",
          count: "4697",
        },
      ],
    };
  },
  mounted() {
    this.initBarChart();
    this.initbaomingChart();
    this.getgaikuangList();
    this.initQiandaoLeft(69.54);
    this.initQiandaoRight(64.19);
    this.initfangxueChart();

    var that = this;
    setInterval(function () {
      if (that.active < 5) {
        that.active = that.active + 1;
      } else {
        that.active = 0;
      }
      console.log(that.active, "33");
    }, 3000);
  },

  methods: {
    tabClick(index) {
      if (index == 0) {
        this.initQiandaoLeft(69.54);
        this.initQiandaoRight(64.19);
        this.data1 = 125;
        this.data2 = 43481;
        this.data3 = 870;
        this.data4 = 27911;
      } else if (index == 1) {
        this.initQiandaoLeft(52.36);
        this.initQiandaoRight(53.84);
        this.data1 = 1591;
        this.data2 = 49972;
        this.data3 = 833;
        this.data4 = 26904;
      } else if (index == 2) {
        this.initQiandaoLeft(75.67);
        this.initQiandaoRight(74.23);
        this.data1 = 343002;
        this.data2 = 10596318;
        this.data3 = 259550;
        this.data4 = 7865434;
      }
      this.actives = index;
    },
    initQiandaoLeft(data) {
      var chart = this.$echarts.init(document.getElementById("qiandaoLeft"));
      var completionRate = data;
      var name = "老师";
      // 设置饼图的配置项和数据
      var option = {
        color: ["#ff9800", "#061025"],
        graphic: [
          {
            type: "group",
            left: "center",
            top: "center",
            children: [
              {
                type: "text",
                style: {
                  text: completionRate + "%",
                  textAlign: "center",
                  fill: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                },
                top: "bottom",
              },

              {
                type: "text",
                style: {
                  text: name,
                  textAlign: "center",
                  fill: "#fff",
                  fontSize: 16,
                },
              },
            ],
          },
        ],
        series: [
          {
            type: "pie",
            radius: ["60%", "80%"], // 控制圆环的半径范围
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            data: [
              { value: completionRate, name: "完成" },
              { value: 100 - completionRate, name: "剩余" },
            ],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表
      chart.setOption(option);
    },
    initQiandaoRight(data) {
      var chart = this.$echarts.init(document.getElementById("qiandaoRight"));
      var completionRate = data;
      var name = "学生";
      // 设置饼图的配置项和数据
      var option = {
        color: ["#89F5FA", "#061025"],
        graphic: [
          {
            type: "group",
            left: "center",
            top: "center",
            children: [
              {
                type: "text",
                style: {
                  text: completionRate + "%",
                  textAlign: "center",
                  fill: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                },
                top: "bottom",
              },

              {
                type: "text",
                style: {
                  text: name,
                  textAlign: "center",
                  fill: "#fff",
                  fontSize: 16,
                },
              },
            ],
          },
        ],
        series: [
          {
            type: "pie",
            radius: ["60%", "80%"], // 控制圆环的半径范围
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            data: [
              { value: completionRate, name: "完成" },
              { value: 100 - completionRate, name: "剩余" },
            ],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表
      chart.setOption(option);
    },
    getgaikuangList() {
      var that = this;
      axios
        .get(
          "https://edu.aidanke.com/api/v1/ltf/proxy_get/api/v1/school-service/school/search-school-statistics-list?educationBureauId=21&pageSize=500&semesterId=145"
        )
        .then((response) => {
          that.tableList = response.data.list;
          // 请求成功时的处理
        })
        .catch((error) => {
          // 请求失败时的处理
          console.error(error);
        });
    },
    initbaomingChart() {
      let myChart = this.$echarts.init(
        document.getElementById("baomingCharts")
      );
      let option = {
        color: [
          "#91CB75",
          "#5C7BD9",
          "#FAC857",
          "#73C0DE",
          "#F78452",
          "#9A60B4",
        ],
        tooltip: {
          trigger: "item", // 设置触发类型为数据项触发
          formatter: "{b}: {c} ({d}%)", // 自定义提示内容的格式
        },
        legend: {
          orient: "vertical", // 设置图例的方向为垂直
          right: 50, // 设置图例距离容器右侧的距离
          top: "middle", // 设置图例在容器中垂直居中
          textStyle: {
            color: "#fff", // 设置图例文本的颜色
            fontSize: 13,
          },
          formatter: function (name) {
            var seriesData = option.series[0].data; // 获取数据系列的数据
            var dataValue = 0;
            var totalValue = 0;
            for (var i = 0; i < seriesData.length; i++) {
              if (seriesData[i].name === name) {
                dataValue = seriesData[i].value;
                break;
              }
            }
            for (var j = 0; j < seriesData.length; j++) {
              totalValue += seriesData[j].value;
            }
            var percentage = ((dataValue / totalValue) * 100).toFixed(2); // 计算百分比，保留两位小数
            return name + " (" + dataValue + "人次 " + percentage + "%)";
          },
          //
        },
        series: [
          {
            type: "pie",
            radius: [30, 80],
            center: ["20%", "50%"],
            itemStyle: {
              borderRadius: 20,
            },
            labelLine: {
              show: false, // 将 labelLine 的 show 属性设置为 false，隐藏旁边的线
            },
            label: {
              show: false, // 将 labelLine 的 show 属性设置为 false，隐藏旁边的线
            },
            data: [
              { value: 71979, name: "基础托管" },
              { value: 17903, name: "美育素养" },
              { value: 12327, name: "体育竞技" },
              { value: 9669, name: "科创思维" },
              { value: 2467, name: "德育通识" },
              { value: 957, name: "劳动实践" },
            ],
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initBarChart() {
      let myChart = this.$echarts.init(document.getElementById("kebanCharts"));
      let option = {
        grid: {
          show: false,
          top: "14%", // 一下数值可为百分比也可为具体像素值
          right: "5%",
          bottom: "10%",
          left: "10%",
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "2", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
          data: [
            "基础托管",
            "美育素养",
            "体育竞技",
            "科创思维",
            "德育通识",
            "劳动实践",
          ],
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "2", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
        },
        series: [
          {
            data: [4701, 1127, 637, 430, 144, 48],
            type: "bar",
            barWidth: 20,
            itemStyle: {
              normal: {
                label: {
                  formatter: (data) => {
                    // console.log(data);
                    if (data.data > 0) {
                      return `${data.data}`;
                    }
                    return "";
                  },
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12",
                    color: "#8c8c8c",
                  },
                },

                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1BC3F3" },
                  { offset: 1, color: "rgba(27,195,243,0.1)" },
                ]),
              },
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },

    initfangxueChart() {
      let myChart = this.$echarts.init(document.getElementById("fangxueChart"));
      let option = {
        grid: {
          show: false,
          top: "14%", // 一下数值可为百分比也可为具体像素值
          right: "5%",
          bottom: "10%",
          left: "10%",
        },
        xAxis: {
          type: "category",
          splitLine: {
            // 只显示纵向网格线
            show: false,
          },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "2", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
          data: [
            "15:00",
            "15:30",
            "16:00",
            "16:30",
            "17:00",
            "17:30",
            "18:00",
            "18:30",
            "19:00",
            "19:30",
            "20:00",
            "20:30",
          ],
        },
        yAxis: {
          type: "value",
          splitLine: {
            // 只显示纵向网格线
            show: false,
          },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "2", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
        },
        series: [
          {
            data: [
              756, 1567, 5662, 5628, 5188, 6152, 269, 0, 431, 446, 968, 5465,
            ],
            type: "bar",
            barWidth: 20,
            itemStyle: {
              normal: {
                label: {
                  formatter: (data) => {
                    // console.log(data);
                    if (data.data > 0) {
                      return `${data.data}`;
                    }
                    return "";
                  },
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12",
                    color: "#8c8c8c",
                  },
                },

                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1BC3F3" },
                  { offset: 1, color: "rgba(137,245,250,0.1)" },
                ]),
              },
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.fangxueChart {
  width: 100%;
  height: 180px;
}
.actives {
  background-color: #41baff !important;
}
.box_height5 {
  height: 260px;
}
.tabList {
  display: flex;
  width: 120px;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 99;
  justify-content: space-between;
  .tabItem {
    width: 40px;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    cursor: pointer;
  }
}
.qiandaoBox {
  display: flex;
  justify-content: space-between;
  position: relative;
  .qiandaoLeft {
    width: 140px;
    height: 250px;
  }
  .qiandaoCenter {
    flex: 1;
    height: 100px;
    height: 250px;
    padding: 80px 0px;
    box-sizing: border-box;
    .qiandaoItem {
      width: 100%;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      font-weight: 600;
      .peopleLeft {
        // width: 30px;
        color: #f79804;
      }
      .peopleCenter {
        flex: 1;
        text-align: center;
      }
      .peopleRight {
        // width: 30px;
        color: #89f5fa;
      }
    }
  }
}
@font-face {
  font-family: electronicFont;

  src: url(../assets/font/DS-DIGIT.TTF);
}
.yqlist li {
  float: left;
  width: 33.3333%;
  padding: 10px 0 0 0;
  text-align: center;
  list-style:none;
}

.yq {
  width: 110px;
  height: 110px;
  line-height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #F79804;
  font-size: 25px;
  font-family: electronicFont;
  span{
    color: #fff
    ;
  }
}
@keyframes myfirst {
  to {
    transform: rotate(-360deg);
  }
}
@keyframes myfirst2 {
  to {
    transform: rotate(360deg);
  }
}
.yq span {
  opacity: 0.6;
  font-size: 15px;
  line-height: 100%;
}

.yq:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  background: url(../assets/img/img1.png) center center;
  border-radius: 100px;
  background-size: 100% 100%;
  opacity: 0.1;
  left: 0;
  top: 0;
  animation: myfirst2 15s infinite linear;
}

.yq:after {
  position: absolute;
  width: 86%;
  background: url(../assets/img/img2.png) center center;
  border-radius: 100px;
  background-size: 100% 100%;
  opacity: 0.1;
  height: 86%;
  content: "";
  left: 7%;
  top: 7%;
  animation: myfirst 15s infinite linear;
}

.schoolName {
  width: 300px !important;
}
.tableBg {
  background: #000 !important;
}
.tableBox {
  width: 100%;
  height: 160px;
  overflow: hidden;
  .tables {
    position: relative;
    animation: moveUp 10s linear infinite;
  }
  @keyframes moveUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-300px);
    }
  }
  .tableItem {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    div {
      width: 100px;
      // line-height: 30px;
      text-align: center;
      margin-left: 10px;
      white-space: nowrap;
      /* 去除超出盒子的文本 */
      overflow: hidden;
      /* 省略超出盒子的文本 */
      text-overflow: ellipsis;
    }
  }
}
.head {
  width: 100%;
  display: flex;
  margin-top: 34px;
  padding: 5px 10px;
  box-sizing: border-box;
  background-color: #2972d4;
  .headItem {
    font-size: 13px;
    // height: 30px;
    width: 100px;
    // line-height: 30px;
    text-align: center;
    margin-left: 10px;
  }
}
.main {
  width: 100%;
  padding: 0 23px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .main_left {
    width: 500px;
  }
  .main_center {
    width: 840px;
  }
  .main_right {
    width: 500px !important;
  }
  .box_height1 {
    height: 310px !important;
  }
  .box_height2 {
    height: 320px !important;
  }
  .box_height3 {
    height: 250px !important;
  }
  .box_height4 {
    height: 290px !important;
  }
  .course_school {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 20px;
    //   height: 301px;
    position: relative;
    .box_title {
      position: absolute;
      width: 100%;
      height: 72px;
      text-align: center;
      color: #fff;
      font-size: 18px;
      line-height: 60px;
      top: -23px;
      background-image: url(../assets/img/bg_title.png);
      background-size: 100% 100%;
      font-family: Adobe Heiti Std R;
    }
  }
}
.course_school {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 30px;
  //   height: 301px;
  position: relative;
  color: #fff;
}
.tits {
  display: flex;
}
.countBox {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  box-sizing: border-box;
  .countItem {
    width: 200px;
    height: 60px;
    margin-top: 20px;
    background-image: url(../assets/img/border.png);
    background-size: 100% 100%;
    position: relative;
    .content {
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      font-family: Bebas;
      text-align: center;
      line-height: 60px;
      display: flex;
      padding: 0 10px;
      box-sizing: border-box;
      justify-content: space-around;
    }
    .imgs {
      width: 30px;
      height: 30px;
      position: absolute;
      background-image: url(../assets/img/green.png);
      background-size: 100% 100%;
      left: -20px;
      z-index: 9;
      bottom: 0;
    }
  }
}
.secondBg {
  background-image: url(../assets/img/border2.png) !important;
}
.secondImg {
  background-image: url(../assets/img/orange.png) !important;
}
.kebanCharts {
  width: 100%;
  height: 250px;
}
.baomingCharts {
  width: 100%;
  height: 180px;
}
.topCount {
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  .tit {
    color: #fff;
    font-size: 16px;
  }
  .count {
    color: #00ffff;
    font-size: 24px;
  }
  .top_left {
    width: 150px;
    height: 91px;
    .tit {
      margin-top: 23px;
    }
  }
}

.centerbg {
  padding: 0 50px;
  box-sizing: border-box;
}
.zhihui {
  width: 100%;
  height: 500px;
  background-size: 100% 100%;
  background-image: url(../assets/img/jt1.png);
  z-index: 99;
}

.circle {
  width: 700px;
  margin-top: 70px;
  height: 700px;
  background: url(../assets/img/circle.png) no-repeat center;
  background-size: 100%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform-style: preserve-3d;
  transform: translateX(-50%) rotateX(75deg);
  animation: rotate3 20s linear infinite;
}
@keyframes rotate3 {
  0% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(0);
  }

  100% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(360deg);
  }
}
.box_height4 {
  height: 400px;
}
</style>