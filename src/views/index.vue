<template>
  <div class="main">
    <div class="main_left">
      <div class="course_school">
        <div class="box_title">教师结对数据</div>
        <div class="courseList">
          <div
            class="courseItem"
            v-for="(item, index) in schoolCourseList"
            :key="index"
          >
            <img :src="item.img" alt="" />
            <div class="right">
              <div class="title">{{ item.name }}</div>
              <div class="count">{{ item.count }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="course_school box_height1">
        <div class="box_title">师生签到情况</div>
        <div class="count1">{{ parseInt(all_sign).toFixed(0) }}%</div>
        <div class="name1">总签到率</div>
        <div class="circle">
          <div class="circles circle1">
            <div class="count">{{ sign_data.teacher_real_num }}</div>
            <div class="countTit">教师签到数</div>
          </div>
          <img src="../assets/img/bg_data_index2.png" alt="" />
          <div class="circles circle2">
            <div class="count">{{ sign_data.student_real_num }}</div>
            <div class="countTit">学生签到数</div>
          </div>
        </div>

        <div class="table">
          <div class="tableTitle">
            <div class="tit">签到情况</div>
            <div class="tit">老师</div>
            <div class="tit">学生</div>
          </div>
          <div
            class="tableItem"
            v-for="(item, index) in tableData"
            :key="index"
          >
            <div class="tableTit">{{ item.title }}</div>
            <div class="tableTecherCount">{{ item.teacherCount }}</div>
            <div class="tableStudentCount">{{ item.studentCount }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main_center">
      <div class="topCount">
        <div class="top_left">
          <div class="tit">总访问人数</div>
          <div class="count">{{ vistor7 }}</div>
        </div>
        <div class="top_center">
          <div class="tit">教师数访问人数</div>
          <div class="count">{{ vistor8 }}</div>
        </div>
        <div class="top_right">
          <div class="tit">学生访问人数</div>
          <div class="count">{{ vistor9 }}</div>
        </div>
      </div>

      <div class="map">
        <div class="yanxueCourse">
          <div class="tit">已发布研学课程数</div>
          <div class="dataItem">
            <div class="itemLeft">申报中</div>
            <div class="itemright">112份</div>
          </div>
          <div class="dataItem">
            <div class="itemLeft">进行中</div>
            <div class="itemright">2931份</div>
          </div>
          <div class="dataItem">
            <div class="itemLeft">已结束</div>
            <div class="itemright">150份</div>
          </div>
        </div>
        <div class="circle3">
          <img src="../assets/img/bg_data_index4.png" alt="" />
          <div class="content">
            <div class="count">{{ allcount }}</div>
            <div class="tit">题库新增量</div>
          </div>
        </div>
        <Geo class="geo" datas="30rem"></Geo>
      </div>

      <div class="course_school box_height2">
        <div class="box_title">题库新增题量</div>
        <div class="barchart" id="barchart"></div>
      </div>
    </div>
    <div class="main_right">
      <div class="course_school box_height3">
        <div class="box_title">研学机构类型</div>
        <div class="leidatu">
          <div class="leida" id="leida"></div>
          <div class="leida" id="leida1"></div>
        </div>
      </div>
      <div class="course_school box_height4">
        <div class="box_title">访问量统计</div>
        <div class="zixunBox">
          <div class="zixunItem">
            <div class="count">{{ vistor1 }}</div>
            <img src="../assets/img/bg_data_index5.png" alt="" />
            <div class="tit">乐作业</div>
          </div>
          <div class="zixunItem">
            <div class="count">{{ vistor1 }}</div>
            <img src="../assets/img/bg_data_index5.png" alt="" />
            <div class="tit">乐研学</div>
          </div>
        </div>
        <div class="todayCharts" id="todayCharts"></div>
        <div class="todayCharts" id="todayCharts1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import Geo from "@/components/geo";
import {
  login,
  get_jiedui,
  get_tutoring,
  get_topic_new,
  get_src_sum,
  get_agency_type,
  get_agency_reports,
  get_visitors,
  get_visitors_day,
  get_task_visitors,
  get_task_visitors_day,
} from "@/api/api";

export default {
  mixins: [drawMixin],
  name: "",
  data() {
    return {
      hours1: [],
      hours2: [],
      count1: [],
      count2: [],
      count3: [],
      count4: [],
      count5: [],
      count6: [],
      dateArray: [],
      countArray: [],
      allcount: 0,
      indicator1: [],
      data1: [],
      indicator2: [],
      data2: [],
      schoolCourseList: [
        {
          name: "开课次数",
          count: 0,
          img: require("../assets/img/icon_index1.png"),
        },
        {
          name: "参与老师人数",
          count: 0,
          img: require("../assets/img/icon_index2.png"),
        },
        {
          name: "参与学生人次",
          count: 0,
          img: require("../assets/img/icon_index3.png"),
        },
        {
          name: "上传作品数",
          count: 0,
          img: require("../assets/img/icon_index4.png"),
        },
      ],
      all_sign: 0,
      count1: [],
      sign_data: "",
      starLevel: "",
      vistor1: 0,
      vistor2: 0,
      vistor3: 0,
      vistor4: 0,
      vistor5: 0,
      vistor6: 0,
      tableData: [
        {
          title: "应签到数",
          teacherCount: 0,
          studentCount: 0,
        },
        {
          title: "实际签到",
          teacherCount: 0,
          studentCount: 0,
        },
        {
          title: "签到率",
          teacherCount: 0,
          studentCount: 0,
        },
      ],
    };
  },
  computed: {
    vistor7() {
      return this.vistor1 + this.vistor4;
    },
    vistor8() {
      return this.vistor2 + this.vistor5;
    },
    vistor9() {
      return this.vistor3 + this.vistor6;
    },
  },
  components: {
    Geo,
  },
  created() {
    this.getVisitors();
    this.getJieDui();
    this.getTutoring();
    this.getTopic();
    this.getAgencyReports();
    // this.getVisitorsDay()
    this.getAgencyType();
    this.getTaskVisitors1();
    this.getTaskVisitors();

    // var token = window.location.href.split("=")[1];
    // login({ token: token }).then((res) => {
    //   if (res.code == 100) {
    //     this.$message.error("登录出错");
    //   } else {
    //     sessionStorage.setItem("token", res.results.access_token);
    //     console.log(sessionStorage.getItem("token"), "11");

    //     // this.$store.commit("setToken", res.results.access_token);
    //   }
    // });
  },
  mounted() {},
  methods: {
    getTaskVisitors() {
      get_task_visitors_day().then((res) => {
        res.forEach((item) => {
          if (item.wv_role == 1) {
            this.hours1.push(item.wv_hour);
            this.count1.push(item.wv_cnt);
          }
          if (item.wv_role == 2) {
            this.count2.push(item.wv_cnt);
          }
          if (item.wv_role == 3) {
            this.count3.push(item.wv_cnt);
          }
        });
        this.initTodayChart();
      });

      get_visitors_day().then((res) => {
        res.forEach((item) => {
          if (item.mv_role == 1) {
            this.hours2.push(item.mv_hour);
            this.count4.push(item.mv_cnt);
          }
          if (item.mv_role == 2) {
            this.count5.push(item.mv_cnt);
          }
          if (item.mv_role == 3) {
            this.count6.push(item.mv_cnt);
          }
        });
        console.log(res, "890");
        this.initTodayChart1();
      });
    },

    getAgencyType() {
      get_agency_type().then((res) => {
        res[2].list.forEach((item) => {
          var its = {
            text: "",
            max: 10,
          };
          its.text = item.mt_name;
          this.indicator1.push(its);
          this.data1.push(item.cnt);
        });
        res[8].list.forEach((item) => {
          var its = {
            text: "",
            max: 10,
          };
          its.text = item.mt_name;
          this.indicator2.push(its);
          this.data2.push(item.cnt);
        });
        this.initLeidaChart("leida", this.indicator1, this.data1);
        this.initLeidaChart("leida1", this.indicator2, this.data2);
      });
    },
    getVisitors() {
      get_visitors().then((res) => {
        this.vistor1 = res[0].cnt;
        this.vistor2 = res[1].cnt;
        this.vistor3 = res[2].cnt;
      });
    },
    getTaskVisitors1() {
      get_task_visitors().then((res) => {
        this.vistor4 = res[0].cnt;
        this.vistor5 = res[1].cnt;
        this.vistor6 = res[2].cnt;
      });
    },
    getAgencyReports() {
      get_agency_reports().then((res) => {
        console.log(res, "445");
      });
    },

    getTopic() {
      get_topic_new().then((res) => {
        res.forEach((item) => {
          this.dateArray.push(item.date);
          this.countArray.push(item.count);
          this.allcount = this.allcount + item.count;
        });
        this.initBarChart();
        console.log(res, "44");
      });
    },
    getTutoring() {
      get_tutoring().then((res) => {
        this.tableData[0].teacherCount = res[0].teacher_should_num;
        this.tableData[0].studentCount = res[0].student_should_num;
        this.tableData[1].teacherCount = res[0].teacher_real_num;
        this.tableData[1].studentCount = res[0].student_real_num;
        this.tableData[2].teacherCount =
          parseInt(
            (res[0].teacher_real_num / res[0].teacher_should_num) * 100
          ).toFixed(0) + "%";
        this.tableData[2].studentCount =
          parseInt(
            (res[0].student_real_num / res[0].student_should_num) * 100
          ).toFixed(0) + "%";
        this.sign_data = res[0];
        this.all_sign =
          ((res[0].student_real_num + res[0].teacher_real_num) /
            (res[0].student_should_num + res[0].teacher_should_num)) *
          100;

        console.log(this.all_sign, "111");
      });
    },

    getJieDui() {
      get_jiedui().then((res) => {
        this.schoolCourseList[0].count = res[0].cls_no;
        this.schoolCourseList[1].count = res[0].tch_join_no;
        this.schoolCourseList[2].count = res[0].stu_join_no;
        this.schoolCourseList[3].count = res[0].work_upload_no;
      });
    },
    initTodayChart() {
      let myChart = this.$echarts.init(document.getElementById("todayCharts"));
      var option = {
        title: {
          text: "乐作业当天访问人数统计",
          // subtext:'',
          x: "center",
          y: "px",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          textAlign: "left",
        },
        legend: {
          // orient: "vertical",
          top: "10%",
          x: "center",
          y: "center",
          // itemWidth: 10,
          itemHeight: 10,
          data: ["学生", "教师", "其他"],
          textStyle: {
            fontSize: 13, //字体大小
            color: "#fff", //字体颜色
          },
        },
        grid: {
          x: 50,
          y: 80,
          x2: 60,
          y2: 30,
          borderWidth: 1,
        },

        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#B3E6EE", //左边线的颜色
              width: "2", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
          data: this.hours1,
        },
        yAxis: {
          name: "人数",
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
            name: "学生",
            data: this.count1,
            barWidth: 10,
            type: "bar",
            stack: "bars",
            color: "#517FF4",
          },
          {
            name: "教师",
            data: this.count2,
            barWidth: 10,
            type: "bar",
            // stack: "bars",
            color: "#1AABFF",
          },
          {
            name: "其他",
            data: this.count3,
            barWidth: 10,
            type: "bar",
            color: "#B3E6EE",
            // stack: "bars",

            //改变这根柱子的层级使这根柱子在下面
          },
          // {
          //   name: "学生",
          //   type: "line",
          //   showSymbol: false,
          //   data: [130, 250, 230, 160, 220],
          //   itemStyle: {
          //     color: "#FFB628",
          //   },
          // },
          // {
          //   type: "line",
          //   name: "乐作业",
          //   showSymbol: false,
          //   data: this.count,
          //   itemStyle: {
          //     color: "#9BD182",
          //   },
          // },
          // {
          //   name: "乐研学",
          //   type: "line",
          //   showSymbol: false,
          //   data: this.count1,
          //   itemStyle: {
          //     color: "#1BABFF",
          //   },
          // },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },

    initTodayChart1() {
      let myChart = this.$echarts.init(document.getElementById("todayCharts1"));
      var option = {
        title: {
          text: "乐研学当天访问人数统计",
          // subtext:'',
          x: "center",
          y: "10px",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          textAlign: "left",
        },
        legend: {
          // orient: "vertical",
          top: "13%",
          x: "center",
          y: "center",
          // itemWidth: 10,
          itemHeight: 10,
          data: ["学生", "教师", "其他"],
          textStyle: {
            fontSize: 13, //字体大小
            color: "#fff", //字体颜色
          },
        },
        grid: {
          x: 50,
          y: 80,
          x2: 60,
          y2: 50,
          borderWidth: 1,
        },

        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#B3E6EE", //左边线的颜色
              width: "2", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
          data: this.hours2,
        },
        yAxis: {
          name: "人数",
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
            name: "学生",
            data: this.count4,
            barWidth: 10,
            type: "bar",
            stack: "bars",
            color: "#517FF4",
          },
          {
            name: "教师",
            data: this.count5,
            barWidth: 10,
            type: "bar",
            // stack: "bars",
            color: "#1AABFF",
          },
          {
            name: "其他",
            data: this.count6,
            barWidth: 10,
            type: "bar",
            color: "#B3E6EE",
            // stack: "bars",

            //改变这根柱子的层级使这根柱子在下面
          },
          // {
          //   name: "学生",
          //   type: "line",
          //   showSymbol: false,
          //   data: [130, 250, 230, 160, 220],
          //   itemStyle: {
          //     color: "#FFB628",
          //   },
          // },
          // {
          //   type: "line",
          //   name: "乐作业",
          //   showSymbol: false,
          //   data: this.count,
          //   itemStyle: {
          //     color: "#9BD182",
          //   },
          // },
          // {
          //   name: "乐研学",
          //   type: "line",
          //   showSymbol: false,
          //   data: this.count1,
          //   itemStyle: {
          //     color: "#1BABFF",
          //   },
          // },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },

    initLeidaChart(name, data1, data2) {
      let myChart = this.$echarts.init(document.getElementById(name));
      var option = {
        radar: {
          center: ["50%", "50%"],
          radius: 70,
          splitNumber: 0,
          splitLine: {
            show: true,
            lineStyle: {
              width: 3,
              color: "#12589C", // 设置网格的颜色
            },
          },
          name: {
            textStyle: {
              color: "#fff",
              fontSize: 10,
              fontWeight: "500",
              padding: 0,
            },
          },
          axisLine: {
            show: false,
          },
          splitArea: {
            show: false,
            areaStyle: {
              color: "rgba(255,0,0,0)", // 图表背景的颜色
            },
          },
          indicator: data1,
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: data2,
                symbol: "none",
                symbolSize: 5,
                label: {
                  show: false,
                  formatter: function (params) {
                    return params.value;
                  },
                },
                lineStyle: {
                  color: "#05FF63",
                  width: 3,
                },
                areaStyle: {
                  color: new this.$echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                    {
                      color: "rgba(5, 255, 99, 0.6)",
                      offset: 0,
                    },
                    {
                      color: "rgba(10, 13, 23, 1)",
                      offset: 1,
                    },
                  ]),
                },
              },
            ],
          },
          // {
          //   type: "radar",
          //   data: [
          //     {
          //       value: [140, 120, 134, 125, 108, 134],
          //       label: {
          //         show: false,
          //         formatter: function (params) {
          //           return params.value;
          //         },
          //       },
          //       symbol: "none",
          //       lineStyle: {
          //         color: "#12589C",
          //         width: 3,
          //       },
          //       areaStyle: {
          //         color: new this.$echarts.graphic.RadialGradient(0.1, 0.6, 1, [
          //           {
          //             color: "rgba(51, 220, 234, 0.6)",
          //             offset: 0,
          //           },
          //           {
          //             color: "rgba(10, 13, 23, 1)",
          //             offset: 1,
          //           },
          //         ]),
          //       },
          //     },
          //   ],
          // },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initBarChart() {
      let myChart = this.$echarts.init(document.getElementById("barchart"));
      let option = {
        grid: {
          show: false,
          top: "25%", // 一下数值可为百分比也可为具体像素值
          right: "5%",
          bottom: "20%",
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

          data: this.dateArray,
        },
        yAxis: {
          name: "题",
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
            data: this.countArray,
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
  },
};
</script>

<style lang="less" scoped>
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.circle {
  position: absolute;
  left: 50%;
  top: 28%;
  transform: translate(-50%, -50%);
  height: 201px;
  z-index: 99;
  border-radius: 180px;
  display: flex;
  // flex-direction: column-reverse;
  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  .circle1 {
    margin-right: 20px;
  }
  .circle2 {
    margin-left: 20px;
  }

  .circles {
    .count {
      width: 120px;
      font-size: 29px;
      text-align: center;
      height: 40px;
      color: #fff;
      background-image: url(../assets/img/bg_data_index1.png);
    }
    .countTit {
      text-align: center;
      font-size: 14px;
      color: #fff;
    }
  }
  img {
    width: 150px;
    height: 150px;
    -webkit-transform: rotate(360deg);
    animation: rotation 10s linear infinite;
    -moz-animation: rotation 10s linear infinite;
    -webkit-animation: rotation 10s linear infinite;
    -o-animation: rotation 10s linear infinite;
  }
}
.circle3 {
  position: absolute;
  right: -20px;
  top: 380px;
  transform: translate(-50%, -50%);
  height: 149px;
  width: 149px;
  z-index: 99;
  border-radius: 180px;
  display: flex;
  // flex-direction: column-reverse;
  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  .content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    width: 80px;
    text-align: center;
    .count {
      font-size: 20px;
      color: #fcb356;
    }
    .tit {
      font-size: 12px;
      color: #fff;
    }
  }

  img {
    width: 150px;
    height: 150px;
    -webkit-transform: rotate(360deg);
    animation: rotation 10s linear infinite;
    -moz-animation: rotation 10s linear infinite;
    -webkit-animation: rotation 10s linear infinite;
    -o-animation: rotation 10s linear infinite;
  }
}

.main {
  width: 100%;
  padding: 0 23px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .main_left {
    width: 550px;
  }
  .main_right {
    width: 550px !important;
  }
  .box_height1 {
    height: 580px !important;
  }
  .box_height2 {
    height: 289px !important;
  }
  .box_height3 {
    height: 250px !important;
  }
  .box_height4 {
    height: 630px !important;
  }
  .course_school {
    width: 100%;
    margin-top: 30px;
    height: 301px;
    background-image: url(../assets/img/bg_card.png);
    background-size: 100% 100%;
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
.main_center {
  width: 740px;
}
.courseList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 63px;
  box-sizing: border-box;
  .courseItem {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    img {
      width: 89px;
      height: 53px;
    }
    .right {
      width: 80px;
      height: 50px;
      .title {
        color: #eff0f1;
        font-size: 13px;
      }
      .count {
        font-size: 24px;
        color: #6acbff;
      }
    }
  }
}
.count1 {
  left: 45%;
  position: absolute;
  color: #fff;
  font-weight: 600;
  top: 22%;
  font-size: 34px;
  z-index: 100;
}
.name1 {
  left: 46%;
  top: 30%;
  font-size: 14px;
  color: #fff;
  position: absolute;
  z-index: 100;
}
.table {
  width: 374px;
  position: absolute;
  left: 50%;
  top: 270px;
  transform: translate(-50%, 0);
  .tableTitle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .tit {
      width: 80px;
      color: #00a4fa;
      font-size: 18px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      border-bottom: 2px solid #00a4fa;
    }
  }
  .tableItem {
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    text-align: center;
    .tableTit {
      font-size: 18px;
      width: 80px;
      color: #00aeff;
    }
    .tableTecherCount {
      font-size: 18px;
      width: 80px;
      color: #00eddd;
    }
    .tableStudentCount {
      font-size: 18px;
      width: 80px;
      color: #eccf48;
    }
  }
}
.topCount {
  margin-top: 30px;

  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
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
    width: 232px;
    height: 91px;
    background-image: url(../assets/img/bg_data_3.png);
    background-size: 100% 100%;
    .tit {
      margin-top: 23px;
    }
  }
  .geo {
    width: 50%;
  }

  .top_center {
    width: 212px;
    margin-top: 18px;
    height: 71px;
    border: 1px solid #2f7395;
  }
  .top_right {
    width: 232px;
    .tit {
      margin-top: 23px;
    }
    height: 91px;
    background-size: 100% 100%;
    background-image: url(../assets/img/bg_data_4.png);
  }
}
.map {
  position: relative;
  width: 100%;
  .yanxueCourse {
    position: absolute;
    left: 40px;
    top: 300px;
    .tit {
      width: 150px;
      font-size: 18px;
      color: #fff;
    }
    .dataItem {
      display: flex;
      text-align: start;
      width: 120px;
      justify-content: space-between;
      font-size: 14px;
      margin-top: 20px;

      .itemLeft {
        margin-left: 5px;
        color: #fccf0a;
      }
      .itemright {
        color: #fff;
      }
    }
  }
}
.barchart {
  width: 100%;
  height: 300px;
}
.leida {
  width: 50%;
  height: 300px;
  margin-top: 30px;
}
.leidatu {
  padding: 0 50px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.zixunBox {
  padding-top: 80px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .zixunItem {
    position: relative;
  }
  .count {
    width: 100%;
    text-align: center;
    color: #18fff7;
    font-size: 30px;
    position: absolute;
    left: 50%;
    top: -40px;
    transform: translate(-50%, 0);
  }
  img {
    width: 246px;
    height: 65px;
  }
  .tit {
    width: 100%;
    text-align: center;
    color: #18fff7;
    font-size: 13px;
  }
}
.todayCharts {
  width: 100%;
  height: 230px;
}
</style>
