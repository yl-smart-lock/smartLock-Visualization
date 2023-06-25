<template>
  <div>
    <div class="main">
      <!-- <iframe src="http://gqxx-oss.oss-cn-hangzhou.aliyuncs.com/homework/2022-08-27/1661588342%E4%B8%AD%E8%BD%AC%E5%8F%B0.docx" frameborder="0"></iframe> -->
      <div class="main_left">
        <div class="course_school">
          <div class="box_title">学校参与活动数量</div>
          <div class="box">
            <div class="courseSchool" id="courseSchool"></div>
          </div>
        </div>
        <div class="course_school box_height1">
          <div class="box_title">研学机构</div>
          <div class="jigouBox">
            <div class="jigouItem">
              <div class="jigouTop">研学场馆</div>
              <!-- <div class="jigouCircle">{{ agencyData1 }}/{{ agencyData3 }}</div> -->
              <div class="jigouCircle">2/6</div>

            </div>
            <div class="jigouItem">
              <div class="jigouTop">研学园区</div>
              <!-- <div class="jigouCircle">{{ agencyData2 }}/{{ agencyData3 }}</div> -->
              <div class="jigouCircle">4/6</div>

            </div>
          </div>
          <div class="tits">
            研学报告总数统计
            <div class="baogaoCharts"></div>

            <div class="todayCharts" id="todayCharts"></div>
          </div>
        </div>
      </div>
      <div class="main_center">
        <div class="topCount">
          <div class="top_left">
            <div class="tit">总访问人数</div>
            <div class="count">{{ vistor1 }}</div>
          </div>
          <div class="top_center">
            <div class="tit">教师数</div>
            <div class="count">{{ vistor2 }}</div>
          </div>
          <div class="top_right">
            <div class="tit">学生数</div>
            <div class="count">{{ vistor3 }}</div>
          </div>
        </div>
        <Geo class="geo"></Geo>
        <div class="course_school box_height2">
          <div class="box_title">研学报告新增</div>
          <div class="chartBox">
            <div class="chart_left">
              <div class="waterCharts" ref="hygrometer1"></div>
              <div class="waterCharts" ref="hygrometer2"></div>
              <div class="waterCharts" ref="hygrometer3"></div>
              <div class="waterCharts" ref="hygrometer4"></div>
            </div>
            <div class="chart_right">
              <div class="barchart" id="barchart"></div>
            </div>
          </div>
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
          <div class="box_title">活动报告统计</div>
          <!-- <div class="box_title">研学路线参与情况</div> -->

          <div class="circleHeight"></div>
          <div class="circleBox">
            <div class="circleItem">
              <div class="circle" id="circle1"></div>
              <div class="circleRight">
                <div class="top">
                  <!-- <span class="tit">报告类型：{{ reportDataName }}</span> -->
                  <span class="tit">报告类型：{{ reportDataName }}</span>

                  <span class="count1"></span>
                </div>
                <div class="top">
                  <span class="tit">占用数：</span>
                  <span class="count2">{{ reportDataCount }}</span>
                </div>
              </div>
            </div>
            <div class="circleItem">
              <div class="circle" id="circle2"></div>
              <div class="circleRight">
                <div class="top">
                  <!-- <span class="tit">报告类型：{{ reportDataName1 }}</span> -->
                  <span class="tit">报告类型：{{ reportDataName1 }}</span>

                  <span class="count1"></span>
                </div>
                <div class="top">
                  <span class="tit">占用数：</span>
                  <span class="count2">{{ reportDataCount1 }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="circleBox">
            <div class="circleItem">
              <div class="circle" id="circle3"></div>
              <div class="circleRight">
                <div class="top">
                  <span class="tit">报告类型：{{ reportDataName2 }}</span>
                  <span class="count1"></span>
                </div>
                <div class="top">
                  <span class="tit">占用数：</span>
                  <span class="count2">{{ reportDataCount2 }}</span>
                </div>
              </div>
            </div>
            <div class="circleItem">
              <div class="circle" id="circle4"></div>
              <div class="circleRight">
                <div class="top">
                  <span class="tit">报告类型：{{ reportDataName3 }}</span>
                  <span class="count1"></span>
                </div>
                <div class="top">
                  <span class="tit">占用数：</span>
                  <span class="count2">{{ reportDataCount3 }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="circleBox">
            <div class="circleItem">
              <div class="circle" id="circle5"></div>
              <div class="circleRight">
                <div class="top">
                  <span class="tit">报告类型：{{ reportDataName4 }}</span>
                  <span class="count1"></span>
                </div>
                <div class="top">
                  <span class="tit">占用数：</span>
                  <span class="count2">{{ reportDataCount4 }}</span>
                </div>
              </div>
            </div>
            <div class="circleItem">
              <div class="circle" id="circle6"></div>
              <div class="circleRight">
                <div class="top">
                  <span class="tit">报告类型：{{ reportDataName5 }}</span>
                  <span class="count1"></span>
                </div>
                <div class="top">
                  <span class="tit">占用数：</span>
                  <span class="count2">{{ reportDataCount5 }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="circleBox">
            <div class="circleItem">
              <div class="circle" id="circle7"></div>
              <div class="circleRight">
                <div class="top">
                  <span class="tit">报告类型：{{ reportDataName6 }}</span>
                  <span class="count1"></span>
                </div>
                <div class="top">
                  <span class="tit">占用数：</span>
                  <span class="count2">{{ reportDataCount6 }}</span>
                </div>
              </div>
            </div>
            <div class="circleItem">
              <div class="circle" id="circle8"></div>
              <div class="circleRight">
                <div class="top">
                  <span class="tit">报告类型：{{ reportDataName7 }}</span>
                  <span class="count1"></span>
                </div>
                <div class="top">
                  <span class="tit">占用数：</span>
                  <span class="count2">{{ reportDataCount7 }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="circleBox">
            <div class="circleItem">
              <div class="circle" id="circle9"></div>
              <div class="circleRight">
                <div class="top">
                  <span class="tit">报告类型：{{ reportDataName8 }}</span>
                  <span class="count1"></span>
                </div>
                <div class="top">
                  <span class="tit">占用数：</span>
                  <span class="count2">{{ reportDataCount8 }}</span>
                </div>
              </div>
            </div>
            <div class="circleItem">
              <div class="circle" id="circle10"></div>
              <div class="circleRight">
                <div class="top">
                  <span class="tit">报告类型：{{ reportDataName9 }}</span>
                  <span class="count1"></span>
                </div>
                <div class="top">
                  <span class="tit">占用数：</span>
                  <span class="count2">{{ reportDataCount9 }}</span>
                </div>
              </div>
            </div>
          </div> -->


          <div class="conect">
            <!-- <div class="conectTitle">学校排行</div> -->
            <div class="tableHead">
              <div class="head heads">名称</div>
              <!-- <div class="head1">作者</div> -->
              <div class="head">日期</div>
              <div class="head">操作</div>
            </div>
            <div
              class="tableHead tableItem"
              :class="{ active: index % 2 == 0 }"
              v-for="(item, index) in tableList"
              :key="index"
            >
              <div class="head heads">{{ item.mtff_title }}</div>
              <!-- <div class="head">{{ item.schoolName }}</div> -->
              <div class="head">{{ item.date }}</div>
              <div class="head"><a :href="item.mtff_path">下载</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Geo from "@/components/geo2";
import {
  get_activity,
  get_agency,
  get_reports_add,
  get_agency_reports,
  get_reports_total,
  get_reports_latest,
  get_visitors,
  get_agency_type,
  get_reports_num,
} from "@/api/api";

export default {
  name: "",
  data() {
    return {
      vistor1: 0,
      vistor2: 0,
      vistor3: 0,
      reportsName: [],
      reportsCount: [],
      schoolList: [],
      reportDataName: "",
      reportDataCount: "",
      reportDataName1: "",
      reportDataCount1: "",
      reportDataName2: "",
      reportDataCount2: "",
      reportDataName3: "",
      reportDataCount3: "",
      reportDataName4: "",
      reportDataCount4: "",
      reportDataName5: "",
      reportDataCount5: "",
      reportDataName6: "",
      reportDataCount6: "",
      reportDataName7: "",
      reportDataCount7: "",
      reportDataName8: "",
      reportDataCount8: "",
      reportDataName9: "",
      reportDataCount9: "",
      addReportsDate: [],
      addReportsCount: [],
      schoolCount: [],
      agencyData1: "",
      agencyData2: "",
      agencyData3: "",
      reportData: [],
      tableList: [],
      indicator1: [],
      data1: [],
      indicator2: [],
      data2: [],
    };
  },
  components: {
    Geo,
  },
  created() {
    this.getActivity();
    this.getAgency();
    this.getReportsAdd();
    this.getAgencyReports();
    this.getReportsTotal();
    this.getReportsLatest();
    this.getVisitors();
    this.getAgencyType();
  },
  mounted() {
    this.getReports_num();
  },
  methods: {
    getReports_num() {
      get_reports_num().then((res) => {
        res.forEach((item) => {
          this.reportsName.push(item.mt_name);
          this.reportsCount.push(item.count);
        });
        this.initTodayChart();
      });
      console.log(this.reportsName, "2233");
      console.log(this.reportsCount, "2233");
    },
    getReportsLatest() {
      get_reports_latest().then((res) => {
        this.tableList = res;
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
    getReportsTotal() {
      get_reports_total().then((res) => {
        this.reportData = res;
        this.reportDataName = res[0].mt_name;
        this.reportDataCount = res[0].total;
        this.reportDataName1 = res[1].mt_name;
        this.reportDataCount1 = res[1].total;
        this.reportDataName2 = res[2].mt_name;
        this.reportDataCount2 = res[2].total;
        this.reportDataName3 = res[3].mt_name;
        this.reportDataCount3 = res[3].total;
        this.reportDataName4 = res[4].mt_name;
        this.reportDataCount4 = res[4].total;
        this.reportDataName5 = res[5].mt_name;
        this.reportDataCount5 = res[5].total;
        this.reportDataName6 = res[6].mt_name;
        this.reportDataCount6 = res[6].total;
        this.reportDataName7 = res[7].mt_name;
        this.reportDataCount7 = res[7].total;
        this.reportDataName8 = res[8].mt_name;
        this.reportDataCount8 = res[8].total;
        this.reportDataName9 = res[9].mt_name;
        this.reportDataCount9 = res[9].total;
        this.initCircle1(
          "circle1",
          "#3B84CD",
          "#77F0FC",
          this.reportData[0].total,
          this.reportData[0].apply_cnt
        );
        this.initCircle1(
          "circle2",
          "#51A6B6",
          "#69D8AE",
          this.reportData[1].total,
          this.reportData[1].apply_cnt
        );
        // this.initCircle1(
        //   "circle3",
        //   "#51A6B6",
        //   "#69D8AE",
        //   this.reportData[2].total,
        //   this.reportData[2].apply_cnt
        // );

        // this.initCircle1(
        //   "circle4",
        //   "#51A6B6",
        //   "#69D8AE",
        //   this.reportData[3].total,
        //   this.reportData[3].apply_cnt
        // );

        // this.initCircle1(
        //   "circle5",
        //   "#51A6B6",
        //   "#69D8AE",
        //   this.reportData[4].total,
        //   this.reportData[4].apply_cnt
        // );
        // this.initCircle1(
        //   "circle6",
        //   "#3B84CD",
        //   "#77F0FC",
        //   this.reportData[5].total,
        //   this.reportData[5].apply_cnt
        // );
        // this.initCircle1(
        //   "circle7",
        //   "#51A6B6",
        //   "#69D8AE",
        //   this.reportData[6].total,
        //   this.reportData[6].apply_cnt
        // );
        // this.initCircle1(
        //   "circle8",
        //   "#51A6B6",
        //   "#69D8AE",
        //   this.reportData[7].total,
        //   this.reportData[7].apply_cnt
        // );

        // this.initCircle1(
        //   "circle9",
        //   "#51A6B6",
        //   "#69D8AE",
        //   this.reportData[8].total,
        //   this.reportData[8].apply_cnt
        // );

        // this.initCircle1(
        //   "circle10",
        //   "#51A6B6",
        //   "#69D8AE",
        //   this.reportData[9].total,
        //   this.reportData[9].apply_cnt
        // );
      });
    },

    getAgencyReports() {
      get_agency_reports().then((res) => {
        this.drawLiquidfill(
          "hygrometer1",
          res[0].percent,
          parseInt(res[0].percent.replace("%", "")) / 100,
          "#07CCFF",
          "#07CCFF",
          res[0].mt_name
        );
        this.drawLiquidfill(
          "hygrometer2",
          res[1].percent,
          parseInt(res[1].percent.replace("%", "")) / 100,
          "#D65261",
          "#D76BF2",
          res[1].mt_name
        );
        this.drawLiquidfill(
          "hygrometer3",
          res[2].percent,
          parseInt(res[2].percent.replace("%", "")) / 100,
          "#7E52D6",
          "#6B91F2",
          res[2].mt_name
        );
        this.drawLiquidfill(
          "hygrometer4",
          res[3].percent,
          parseInt(res[3].percent.replace("%", "")) / 100,
          "#D1BB41",
          "#C9A506",
          res[3].mt_name
        );
      });
    },
    getVisitors() {
      get_visitors().then((res) => {
        this.vistor1 = res[0].cnt;
        this.vistor2 = res[1].cnt;
        this.vistor3 = res[2].cnt;
      });
    },
    getReportsAdd() {
      get_reports_add().then((res) => {
        res.forEach((item) => {
          this.addReportsDate.push(item.date);
          this.addReportsCount.push(item.count);
        });
        this.initBarChart();
      });
    },
    getActivity() {
      get_activity().then((res) => {
        res.forEach((item) => {
          this.schoolList.push(item.school_name);
          this.schoolCount.push(item.ma_cnt);
        });
        this.initCourseScholl();
      });
    },
    getAgency() {
      get_agency().then((res) => {
        this.agencyData1 = res[1].count;
        this.agencyData2 = res[2].count;
        this.agencyData3 = res[0].total;
      });
    },
    initCircle1(id, color1, color2, value1, value2) {
      let myChart = this.$echarts.init(document.getElementById(id));
      var option = {
        color: ["#080A14", "#fff"],
        series: [

          {
            name: "访问来源",
            type: "pie",
            center: ['50%', '50%'],
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            hoverAnimation: false, //关闭放大动画
            selectedOffset: 0, //选中块的偏移量
            label: {
              show: false,
              position: "center",
              formatter: "{d}%",
              color: "#fff",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "12",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: value1,
                selected: true, //默认选中第一块
                label: {
                  show: true, //默认显示第一块
                  fontSize: "12",
                  fontWeight: "bold",
                },
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: color1 },
                      { offset: 1, color: color2 },
                    ],
                    globalCoord: false, // 缺省为 false
                  },
                },
              },
              { value: value2 },
            ],
          },
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
    drawLiquidfill(ref, percent1, percent2, color1, color2, name) {
      let percentage = percent1;
      // 基于准备好的dom，初始化echarts实例
      let hygrometer = this.$echarts.init(this.$refs[ref]);
      // 使用指定的配置项和数据显示图表
      hygrometer.setOption({
        title: {
          text: name + percentage,
          left: "center",
          bottom: 0,
          textStyle: {
            color: "#fff",
            fontWeight: "300",
            fontSize: 12,
          },
        },
        backgroundStyle: {
          clolor: "#fff",
        },
        series: [
          {
            // name: "睡了",
            type: "liquidFill",
            radius: "50px",
            data: [percent2],
            label: {
              normal: {
                // color: "rgba(0,0,0,0)",
                // insideColor: "rgba(0,0,0,0)",
                textStyle: {
                  fontSize: 20,
                  fontWeight: "bold",
                },
              },
            },
            color: [
              {
                type: "linear",
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 1,
                    color: [color1], // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: [color2], // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            ],

            outline: {
              show: true,
              borderDistance: 0,
              itemStyle: {
                borderColor: "#6B91F2",
                borderWidth: 1,
              },
            },
          },
        ],
      });
    },

    initTodayChart() {
      let myChart = this.$echarts.init(document.getElementById("todayCharts"));
      var option = {
        color: ["rgba(50, 229, 255, 1)", "rgba(250, 207, 18, 1)"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        grid: {
          top: "30%",
          left: "10%",
          right: "10%",
          bottom: "20%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.reportsName,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#fff",
                width: 1,
                type: "solid",
              },
            },
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: `数量`,
            axisLabel: {
              color: "#fff",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "blue",
                width: 1,
                type: "solid",
              },
            },
            nameTextStyle: {
              rich: {
                legend: {
                  width: 12,
                  height: 4,
                  backgroundColor: "rgba(143,223,254,0.8)",
                },
                value: {
                  color: "#FF8C00",
                },
              },
            },
          },
        ],
        series: [
          {
            name: "柱状图",
            type: "bar",
            data: this.reportsCount,
            barWidth: 20, // 柱状图的宽度
            itemStyle: {
              borderRadius: 8,
              // color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
              //   { offset: 0, color: "rgba(0,168,255,0.5)" },
              //   { offset: 1, color: "rgba(143,223,254,0.1)" },
              // ]),
              color: "#00B67C",
            },
          },
          // {
          //   name: "柱状图",
          //   type: "bar",
          //   data: [20, 30, 140, 89, 78, 118],
          //   barWidth: 10, // 柱状图的宽度
          //   itemStyle: {
          //     borderRadius: 8,
          //     // color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
          //     //   { offset: 0, color: "rgba(0,168,255,0.5)" },
          //     //   { offset: 1, color: "rgba(143,223,254,0.1)" },
          //     // ]),
          //     color: "#029BE8",
          //   },
          // },
          // {
          //   name: "折线图",
          //   type: "line",
          //   yAxisIndex: 1,
          //   smooth: true,

          //   data: [80, 120, 110, 130, 120, 110],
          //   itemStyle: {
          //     color: "#00B67C",
          //   },
          //   areaStyle: {
          //     color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
          //       {
          //         offset: 0,
          //         color: "RGBA(19, 34, 48, 0.1)",
          //       },
          //       {
          //         offset: 1,
          //         color: "rgba(0, 182, 124, 0.5)",
          //       },
          //     ]),
          //   },
          //   showSymbol: false,
          // },
          // {
          //   name: "折线图",
          //   type: "line",
          //   yAxisIndex: 1,
          //   smooth: true,

          //   data: [29, 160, 80, 60, 49, 150],
          //   itemStyle: {
          //     color: "#0095E4",
          //   },
          //   areaStyle: {
          //     color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
          //       {
          //         offset: 0,
          //         color: "RGBA(0, 149, 228, 0.1)",
          //       },
          //       {
          //         offset: 1,
          //         color: "rgba(0, 182, 124, 0.5)",
          //       },
          //     ]),
          //   },
          //   showSymbol: false,
          // },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initCourseScholl() {
      let myChart = this.$echarts.init(document.getElementById("courseSchool"));
      let option = {
        tooltip: {
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "3%",
          left: "3%",
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false, //去掉辅助线
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "category",
          data: this.schoolList,
          splitLine: {
            show: false, //去掉辅助线
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            inside: true,
            margin: 0,
            textStyle: {
              color: "#fff", //值的颜色
              fontSize: 16,
              verticalAlign: "bottom",
              align: "left",
              padding: [0, 0, 10, 0],
            },
          },
        },
        series: [
          {
            data: this.schoolCount,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "#223C4D",
              borderRadius: 3,
            },
            barWidth: 6,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  1,
                  0,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#51C5FD",
                    },
                    {
                      offset: 1,
                      color: "#005BB1",
                    },
                  ],
                  false
                ),
                barBorderRadius: [3, 3, 3, 3],
              },
            },
            label: {
              normal: {
                show: true,
                position: [430, 0], //value的位置
                color: "#fff", //值的颜色
                fontSize: 16,
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

          data: this.addReportsDate,
        },
        yAxis: {
          name: "个数",
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
            data: this.addReportsCount,
            type: "bar",
            barWidth: 14,
            stack: "bars",
            itemStyle: {
              normal: {
                barBorderRadius: [4, 4, 4, 4],

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

                color: "#02FBFB",
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
.tits{
  // mart
}
.topCount {
  width: 100%;
  margin-top: 30px;

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
    height: 301px;
    margin-top: 30px;

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
.barchart {
  width: 100%;
  height: 300px;
}
.courseSchool {
  width: 100%;
  height: 300px;
}
.box {
  padding: 30px;
  box-sizing: border-box;
}
.jigouBox {
  width: 100%;
  display: flex;
  padding: 50px 20px 0 20px;
  box-sizing: border-box;
  justify-content: space-between;
  .jigouItem {
    width: 50%;
    .jigouTop {
      width: 130px;
      height: 52px;
      color: #7dedff;
      font-size: 18px;
      text-align: center;
      line-height: 52px;
      margin-left: 60px;
      background: url(../assets/img/bg_data.png);
      background-size: 100% 100%;
    }
    .jigouCircle {
      margin-top: 20px;
      width: 244px;
      height: 123px;
      color: #7dedff;
      font-size: 18px;
      text-align: center;
      line-height: 52px;
      background: url(../assets/img/bg_data_2.png);
      text-align: center;
      background-size: 100% 100%;

      line-height: 70px;
      font-weight: 700;
    }
  }
}
.tits {
  font-size: 16px;
  color: #fff;
  text-align: start;
  padding-left: 30px;
  box-sizing: border-box;
}
.chartBox {
  display: flex;
  justify-content: space-between;
  .chart_left {
    width: 35%;
    margin-top: 40px;
    height: 200px;
    display: flex;
    padding: 0 40px;
    box-sizing: border-box;
    justify-content: space-between;
    flex-wrap: wrap;
    .waterCharts {
      width: 80px;
      height: 100px;
      margin-top: 0;
    }
  }
  .chart_right {
    width: 65%;
    .barchart {
      width: 100%;
      height: 300px;
    }
  }
}
.todayCharts {
  width: 100%;
  height: 300px;
}
.leida {
  width: 50%;
  height: 250px;
  // margin-top: 30px;
}
.leidatu {
  padding: 0 50px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.circleBox {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  box-sizing: border-box;
  .circleItem {
    width: 50%;
    display: flex;
    justify-content: center;
    // justify-content: space-between;
    .circle {
      width: 130px;
      height: 130px;
    }
    .circleRight {
      width: 146px;
      height: 50px;
      line-height: 50px;
      margin-top: 8px;
      .top {
        width: 100%;
        height: 50%;
        margin-top: 10px;

        .tit {
          line-height: 40px;
          color: #fff;
          font-size: 14px;
        }
        .count1 {
          line-height: 51px;

          font-size: 20px;
          color: #1af3fd;
        }
        .count2 {
          font-size: 20px;
          color: #d7a314;
        }
      }
    }
  }
}
.conect {
  padding: 0px 63px;
  height: 400px;
  overflow: scroll;
  box-sizing: border-box;
}
.tableHead {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 36px;
  line-height: 36px;
  color: #fff;
  font-size: 12px;
  padding: 0 30px;
  box-sizing: border-box;
}
.head {
  // width: 80px;
  color: #fff;

  text-align: start;
  a {
    color: #fff;
    cursor: pointer;
  }
}
.heads {
  width: 230px;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.head1 {
  width: 60px;
  color: #517ff4;
}
.tableItem {
  border-top: 0;
}
.active {
  background-color: rgba(8, 79, 140, 0.42);
}
.main_center {
  width: 740px;
}
.map {
  width: 100%;
  position: relative;
}
.circleHeight{
  height: 40px;
}
</style>
