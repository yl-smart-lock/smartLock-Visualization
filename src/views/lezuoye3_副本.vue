<template>
  <div>
    <div class="main">
      <div class="main_left">
        <dv-border-box-13
          :color="['#3981A4', '#3981A4']"
          backgroundColor="rgba(58,127,158,0.2)"
          class="course_school"
        >
          <div class="tits">
            <dv-decoration-6 style="width: 150px; height: 20px" />
            <div class="tit_text">今日访问人数统计</div>
          </div>

          <!-- <div class="box_title">今日访问人数统计</div> -->
          <div class="fangwen" id="fangwen"></div>
        </dv-border-box-13>
        <dv-border-box-13
          :color="['#3981A4', '#3981A4']"
          backgroundColor="rgba(58,127,158,0.2)"
          class="course_school box_height1"
        >
          <div class="tits">
            <dv-decoration-6 style="width: 150px; height: 20px" />
            <div class="tit_text">家校联系单</div>
          </div>
          <div class="conect">
            <div class="conectTitle">发布总量</div>
            <div class="count">
              <div class="num">
                <div
                  class="numItem color1"
                  v-for="(item, index) in num1"
                  :key="index"
                >
                  {{ item }}
                </div>
              </div>
              <div class="danwei">份</div>
              <div class="danwei">
                （同比增长{{ contactData.repo_count_compare }}）/周
              </div>
            </div>
          </div>
          <div class="conect">
            <div class="conectTitle">今日发布总量</div>
            <div class="count">
              <div class="num">
                <div
                  class="numItem color2"
                  v-for="(item, index) in num2"
                  :key="index"
                >
                  {{ item }}
                </div>
              </div>
              <div class="danwei">份</div>
              <div class="danwei">
                （同比增长{{ contactData.day_repo_count_compare }}）/日
              </div>
            </div>
          </div>
          <!-- <div class="conect">
              <div class="conectTitle">响应时长</div>
              <div class="count">
                <div class="num">
                  <div
                    class="numItem color3"
                    v-for="(item, index) in num4"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </div>
                <div class="danwei">份</div>
                <div class="danwei">（同比增长10%）</div>
              </div>
            </div> -->
          <div class="conect">
            <div class="conectTitle">响应率</div>
            <div class="count">
              <div class="num">
                <div
                  class="numItem color3"
                  v-for="(item, index) in num3"
                  :key="index"
                >
                  {{ item }}
                </div>
              </div>
              <div class="danwei">%</div>
              <div class="danwei">
                （同比增长{{ contactData.answer_per_compare }}）/次
              </div>
            </div>
          </div>

          <div class="conect">
            <div class="conectTitle">学校作业完成情况排行</div>
            <dv-scroll-ranking-board
              :config="tableList"
              style="width: 100%; height: 180px"
            />
            <!-- <div class="tableBox">
              <div class="tableHead">
                <div class="head">排名</div>
                <div class="head heads">学校名称</div>
                <div class="head">发布数量</div>
                <div class="head">完成情况</div>
              </div>
              <div
                class="tableHead tableItem"
                v-for="(item, index) in tableList"
                :key="index"
              >
                <div class="head">{{ index + 1 }}</div>
                <div class="head heads">{{ item.school_name }}</div>
                <div class="head">{{ item.qnr_cnt }}</div>
                <div class="head">{{ item.rate }}</div>
              </div>
            </div> -->
          </div>
        </dv-border-box-13>
      </div>
      <div class="main_center">
        <div class="star_box">
          <div class="star_tit">题库各难度星级数量</div>
          <div
            class="star_item"
            v-for="(item, index) in startList"
            :key="index"
          >
            <div class="stars">
              <span v-if="item.level == 0">无难度</span>
              <img
                v-else
                src="../assets/img/star.png"
                alt=""
                v-for="(itm, idx) in item.level"
                :key="idx"
              />
            </div>
            <div class="star_count">{{ item.count }}份</div>
          </div>
        </div>
        <div class="topCount">
          <dv-border-box-8 class="top_left">
            <div class="tit">总访问人数</div>
            <div class="counts">
              <CountUp :delay="delay" :endVal="vistor1" :options="options" />
            </div>
          </dv-border-box-8>
          <dv-border-box-8 class="top_center">
            <div class="tit">教师数</div>
            <div class="counts"><div class="counts">
              <CountUp :delay="delay" :endVal="vistor2" :options="options" />
            </div></div>
          </dv-border-box-8>
          <dv-border-box-8 class="top_right">
            <div class="tit">学生数</div>
            <div class="counts"><div class="counts">
              <CountUp :delay="delay" :endVal="vistor3" :options="options" />
            </div></div>
          </dv-border-box-8>
        </div>
        <dv-border-box-10
          :color="['#3981A4', '#3981A4']"
          backgroundColor="rgba(58,127,158,0.1)"
          class="center_leida"
        >
          <div class="leidaBox">
            <div class="leidaleft">
              <div class="gaozhong gaoyi">
                <div class="tit">高一总分平均分</div>
                <div class="counta">312</div>
                <img src="../assets/img/gaoyi.png" alt="" />
              </div>
              <div class="gaozhong gaoer">
                <div class="tit">高二总分平均分</div>
                <div class="counta">731</div>
                <img src="../assets/img/gaoer.png" alt="" />
              </div>
              <div class="gaozhong gaosan">
                <div class="tit">高三总分平均分</div>
                <div class="counta">322</div>
                <img src="../assets/img/gaosan.png" alt="" />
              </div>
            </div>
            <div class="leidaright">
              <div class="objectLeida" id="objectLeida"></div>
            </div>
          </div>
        </dv-border-box-10>
        <!-- <Geo class="geo" datas="30rem"></Geo> -->
        <dv-border-box-11
          title="题库新增题量/学校排行"
          :color="['#45D8E1', '#061025']"
          backgroundColor="rgba(58,127,158,0.2)"
          class="box_height2"
        >
          <div class="ti_box">
            <div class="barchart" id="barchart"></div>
            <dv-scroll-board
              class="tiPai"
              :config="config"
              style="width: 400px; height: 180px"
            />
          </div>
        </dv-border-box-11>
      </div>
      <div class="main_right">
        <dv-border-box-13
          :color="['#3981A4', '#3981A4']"
          backgroundColor="rgba(58,127,158,0.2)"
          class="course_school box_height3"
        >
          <div class="tits">
            <dv-decoration-6 style="width: 150px; height: 20px" />
            <div class="tit_text">作业时长难度</div>
          </div>
          <div class="homeworkBox">
            <div class="homeworkChart" id="homeworkChart"></div>
          </div>
        </dv-border-box-13>
        <dv-border-box-13
          :color="['#3981A4', '#3981A4']"
          backgroundColor="rgba(58,127,158,0.2)"
          class="course_school box_height4"
        >
          <div class="tits">
            <dv-decoration-6 style="width: 150px; height: 20px" />
            <div class="tit_text">题库资源访问量统计</div>
          </div>
          <div class="tiCharts" id="tiCharts"></div>
          <!-- <div class="conect">
            <div class="conectTitle">资源访问量统计</div>
            <div class="tableHead">
              <div class="head">排名</div>
              <div class="head">资源</div>
              <div class="head">访问量</div>
            </div>
            <div
              class="tableHead tableItem"
              v-for="(item, index) in tiList"
              :key="index"
            >
              <div class="head">{{ index + 1 }}</div>
              <div class="head heads">{{ item.file_name }}</div>
              <div class="head">{{ item.file_scan_count }}</div>
            </div>
          </div> -->
          <dv-scroll-board
            class="tiPai1"
            :config="config1"
            style="width: 100%; height: 300px"
          />

          <!-- <div class="conect">
            <div class="conectTitle">资源下载量统计</div>
            <div class="tableHead">
              <div class="head">排名</div>
              <div class="head">题目</div>
              <div class="head">下载量</div>
            </div>
            <div
              class="tableHead tableItem"
              v-for="(item, index) in tiList1"
              :key="index"
            >
              <div class="head">{{ index + 1 }}</div>
              <div class="head heads">{{ item.file_name }}</div>
              <div class="head">{{ item.file_download_count }}</div>
            </div>
          </div> -->
        </dv-border-box-13>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Geo from "@/components/geo";
import M from "minimatch";
import CountUp from "vue-countup-v2";
import {
  get_contact_list,
  get_star_level,
  get_topic_new,
  get_task_time,
  get_src_sum,
  get_src_view,
  get_src_dl,
  get_contact_rank,
  get_task_visitors_day,
  get_task_visitors,
} from "@/api/api";

export default {
  name: "",
  data() {
    return {
      dateArray: [],
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
      config: {
        header: ["学校", "数量"],
        data: [
          ["学海教育", "236"],
          ["余杭中学", "218"],
          ["余杭实验中学", "187"],
          ["余杭高级中学", "153"],
          ["金山小学", "132"],
          ["杭州余杭东方未来学校", "112"],
          ["杭州第二中学", "87"],
          ["杭州学军中学", "34"],
        ],
        index: true,
        columnWidth: [50],
        align: ["center"],
      },
      config1: {
        header: ["资源", "访问量"],
        data: [
          ["第1单元基础复习（知识梳理+基础检测）六年级语文上册", "236"],
          ["第2单元基础复习（知识梳理+基础检测）六年级语文上册", "218"],
          ["第3单元基础复习（知识梳理+基础检测）六年级语文上册", "187"],
          ["第4单元基础复习（知识梳理+基础检测）六年级语文上册", "153"],
          ["第5单元基础复习（知识梳理+基础检测）六年级语文上册", "132"],
          ["第6单元基础复习（知识梳理+基础检测）六年级语文上册", "112"],
          ["第7单元基础复习（知识梳理+基础检测）六年级上册", "87"],
          ["第8单元基础复习（知识梳理+基础检测）六年级语文上册", "34"],
        ],
        index: true,
        columnWidth: [50],
        align: ["center"],
      },
      countArray: [],
      subjectArray: [],
      dateArray1: [],
      countArray1: [],
      countArray2: [],
      countArray3: [],
      countArray4: [],
      countArray5: [],
      tiList1: [],
      num1: "857",
      num2: "25",
      num3: "89",
      num4: "0",
      tableList: {
        data: [],
      },
      hours: [],
      count1: [],
      count2: [],
      count3: [],
      tiList: [
        {
          rank: "01",
          schoolName: "题目题目",
          count: 8920,
        },
        {
          rank: "02",
          schoolName: "题目题目",
          count: 6124,
        },
        {
          rank: "03",
          schoolName: "题目题目",
          count: 3895,
        },
      ],
      contactData: "",
      vistor1: 0,
      vistor2: 0,
      vistor3: 0,
      startList: [
        {
          starCount: 5,
          count: 2931,
        },
        {
          starCount: 4,
          count: 9473,
        },
        {
          starCount: 3,
          count: 6545,
        },
        {
          starCount: 2,
          count: 3181,
        },
        {
          starCount: 1,
          count: 1828,
        },
      ],
    };
  },
  components: {
    Geo,
    CountUp
  },
  created() {
    this.getContactList();
    this.getStarLevel();
    this.getTopic();
    this.getTaskTime();
    this.getSrcSum();
    this.getSrcView();
    this.getSrcDl();
    this.getContactRank();
    this.getTaskVisitors();
    this.getTaskVisitors1();
  },
  mounted() {
    this.initleidaChart();
  },
  methods: {
    initleidaChart() {
      let myChart = this.$echarts.init(document.getElementById("objectLeida"));
      var option = {
        color: ["#4BE1C4", "#B86AC6", "#38BAFE"],
        // legend: {},
        radar: [
          {
            indicator: [
              { text: "化学" },
              { text: "生物" },
              { text: "地理" },
              { text: "技术" },
              { text: "历史" },
              { text: "英语" },
              { text: "语文" },
              { text: "数学" },
              { text: "科学" },
              { text: "物理" },
            ],
            center: ["50%", "50%"],
            radius: 180,
            startAngle: 90,
            splitNumber: 4,
            shape: "circle",
            axisName: {
              formatter: "【{value}】",
              color: "#428BD4",
            },
            // splitArea: {
            //   areaStyle: {
            //     color: ["#77EADF", "#26C3BE", "#64AFE9", "#428BD4"],
            //     shadowColor: "rgba(0, 0, 0, 0.2)",
            //     shadowBlur: 10,
            //   },
            // },
            axisLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
                type: "dashed",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            type: "radar",
            emphasis: {
              lineStyle: {
                width: 4,
              },
            },
            data: [
              {
                value: [100, 8, 342, 80, 200, 502, 5, 34, 434, 45],
                name: "DataA",
                areaStyle: {
                  color: "rgba(75,225,196, 0.6)",
                },
              },
              {
                value: [60, 5, 0.3, 100, 150, 34, 678, 90, 342, 532],
                name: "DataB",
                areaStyle: {
                  color: "rgba(184,106,198, 0.6)",
                },
              },
              {
                value: [129, 5, 349, 349, 490, 4, 345, 790, 453, 231],
                name: "DataC",
                areaStyle: {
                  color: "rgba(64,157,223, 0.6)",
                },
              },
            ],
          },
          {
            type: "radar",
            radarIndex: 1,
            data: [
              {
                value: [120, 118, 130, 100, 99, 70],
                name: "Data C",
                symbol: "rect",
                symbolSize: 12,
                lineStyle: {
                  type: "dashed",
                },
                label: {
                  show: true,
                  formatter: function (params) {
                    return params.value;
                  },
                },
              },
              {
                value: [100, 93, 50, 90, 70, 60],
                name: "Data D",
                areaStyle: {
                  color: this.$echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                    {
                      color: "rgba(184,106,198, 0.1)",
                      offset: 0,
                    },
                    {
                      color: "rgba(184,106,198, 0.9)",
                      offset: 1,
                    },
                  ]),
                },
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    getTaskVisitors1() {
      get_task_visitors().then((res) => {
        this.vistor1 = res[0].cnt;
        this.vistor2 = res[1].cnt;
        this.vistor3 = res[2].cnt;
      });
    },
    getTaskVisitors() {
      get_task_visitors_day().then((res) => {
        res.forEach((item) => {
          if (item.wv_role == 1) {
            this.hours.push(item.wv_hour);
            this.count1.push(item.wv_cnt);
          }
          if (item.wv_role == 2) {
            this.count2.push(item.wv_cnt);
          }
          if (item.wv_role == 3) {
            this.count3.push(item.wv_cnt);
          }
        });
        this.initFangwenChart();
      });
    },
    getContactRank() {
      get_contact_rank().then((res) => {
        var data1 = {
          data: [],
        };

        res[0].value = "99.5%";
        res[1].value = "99.1%";
        res[2].value = "98.8%";
        res[3].value = "98.5%";
        res.forEach((item) => {
          var datas = {
            name: "",
            value: "",
          };
          datas.value = item.qnr_cnt;
          datas.name = item.school_name;
          data1.data.push(datas);
        });
        data1.data.push({
          name: "余杭高级中学",
          value: 88,
        });
        data1.data.push({
          name: "杭州余杭东方未来学校",
          value: 48,
        });
        data1.data.push({
          name: "杭州学军中学(海创园校区)",
          value: 29,
        });
        data1.data.push({
          name: "浙江省杭州第二中学(余杭学校)",
          value: 27,
        });

        // var data1 ={
        //     data:[]
        // }
        this.tableList = { ...data1 };
        console.log(data1, "7788");
      });
    },
    getVisitorsDay() {
      get_visitors_day().then((res) => {
        console.log(res, "778899");
      });
    },
    getSrcDl() {
      get_src_dl().then((res) => {
        this.tiList1 = res;
      });
    },
    getSrcView() {
      get_src_view().then((res) => {
        this.tiList = res;
      });
    },
    getSrcSum() {
      get_src_sum().then((res) => {
        res.forEach((item) => {
          this.subjectArray.push(item.subject_name);
          this.countArray5.push(item.count);
          this.initTiChart();
        });
      });
    },
    getTaskTime() {
      get_task_time().then((res) => {
        res.forEach((item) => {
          this.dateArray1.push(item.date);
          this.countArray1.push(item.qnr_avg_time);
          this.countArray2.push(item.user_avg_time);
          this.countArray3.push(item.qnr_avg_hard);
          this.countArray4.push(item.user_avg_hard);
        });
        this.initHomeworkChart();
        console.log(res, "44");
      });
    },
    getTopic() {
      get_topic_new().then((res) => {
        res.forEach((item) => {
          this.dateArray.push(item.date);
          this.countArray.push(item.count);
        });
        this.initBarChart();
        console.log(res, "44");
      });
    },
    getContactList() {
      get_contact_list().then((res) => {
        console.log(res, "11");
        // this.num1 = res[0].repo_count.toString();
        // this.num2 = res[0].day_repo_count.toString();
        // this.num3 = res[0].answer_per.toString();

        this.contactData = res[0];
      });
    },
    initTiChart() {
      let myChart = this.$echarts.init(document.getElementById("tiCharts"));
      var option = {
        legend: {
          // orient: "vertical",
          top: "15%",
          x: "36%",
          y: "center",
          itemWidth: 10,
          itemHeight: 10,
          // data: ["难", "简单"],
          textStyle: {
            fontSize: 10, //字体大小
            color: "#fff", //字体颜色
          },
        },
        grid: {
          top: "30%",
          left: "11%",
          right: "22%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          name: "科目",
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
          data: this.subjectArray,
        },
        yAxis: {
          name: "题目数量",
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
            data: this.countArray5,
            barWidth: 20,
            type: "bar",
            stack: "bars",
            color: "#FFA800",
          },
          // {
          //   name: "简单",
          //   data: [30, 89, 60, 90, 90, 30, 89, 60, 90, 90],
          //   barWidth: 20,

          //   type: "bar",
          //   stack: "bars",
          //   color: "#FFD800",
          // },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    getStarLevel() {
      get_star_level().then((res) => {
        this.startList = res;
        console.log(res, "22");
      });
    },
    initHomeworkChart() {
      let myChart = this.$echarts.init(
        document.getElementById("homeworkChart")
      );
      var option = {
        legend: {
          // orient: "vertical",
          top: "10%",
          x: "30%",
          y: "center",
          // itemWidth: 10,
          itemHeight: 10,
          data: [
            "平均预估时长",
            "实际完成时长",
            "平均预计难度",
            "平均实际难度",
          ],
          textStyle: {
            fontSize: 10, //字体大小
            color: "#fff", //字体颜色
          },
        },
        grid: {
          top: "30%",
          left: "11%",
          right: "11%",
          bottom: "8%",
          containLabel: true,
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
          data: this.dateArray1,
        },
        yAxis: [
          {
            name: "分钟",
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
          {
            name: "难度",
            position: "right",
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#fff", //左边线的颜色
                width: "2", //坐标线的宽度
              },
            },
            axisLabel: {
              formatter: function (value) {
                var texts = [];
                if (value == 0) {
                  texts.push("woo");
                } else if (value <= 1.5) {
                  texts.push("简单");
                } else if (1.5 < value <= 3.5) {
                  texts.push("适中");
                } else if (3.5 < value <= 5) {
                  texts.push("苦难");
                }
                return texts;
              },
            },
          },
        ],
        series: [
          {
            name: "平均预估时长",
            data: this.countArray1,
            barWidth: 20,
            type: "bar",
            color: "#517FF4",
          },
          {
            name: "实际完成时长",
            data: this.countArray2,
            barWidth: 20,

            type: "bar",
            color: "#1AABFF",
          },
          {
            name: "平均预计难度",
            type: "line",
            showSymbol: false,
            data: this.countArray3,
            itemStyle: {
              color: "#FFB628",
            },
          },
          {
            name: "平均实际难度",
            type: "line",
            showSymbol: false,
            data: this.countArray4,
            itemStyle: {
              color: "#1BABFF",
            },
          },
          // {
          //   name: "老师",
          //   type: "line",
          //   showSymbol: false,
          //   data: [180, 220, 210, 230, 220],
          //   itemStyle: {
          //     color: "#9BD182",
          //   },
          // },
          // {
          //   name: "家长",
          //   type: "line",
          //   showSymbol: false,
          //   data: [180, 210, 240, 233, 214],
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
    initFangwenChart() {
      let myChart = this.$echarts.init(document.getElementById("fangwen"));
      var option = {
        legend: {
          // orient: "vertical",
          top: "10%",
          x: "36%",
          y: "center",
          itemWidth: 10,
          itemHeight: 10,
          data: ["学生", "教师", "其他"],
          textStyle: {
            fontSize: 10, //字体大小
            color: "#fff", //字体颜色
          },
        },
        grid: {
          top: "30%",
          left: "11%",
          right: "22%",
          bottom: "8%",
          containLabel: true,
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
          data: this.hours,
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
            color: "#517FF4",
          },
          {
            name: "教师",
            data: this.count2,
            barWidth: 10,
            type: "bar",
            color: "#1AABFF",
          },
          {
            name: "其他",
            data: this.count3,
            barWidth: 10,
            type: "bar",
            color: "#B3E6EE",
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
          {
            type: "line",
            showSymbol: false,
            data: this.count,
            itemStyle: {
              color: "#9BD182",
            },
          },
          // {
          //   name: "家长",
          //   type: "line",
          //   showSymbol: false,
          //   data: [180, 210, 240, 233, 214],
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
    initBarChart() {
      let myChart = this.$echarts.init(document.getElementById("barchart"));
      let option = {
        grid: {
          show: false,
          top: "25%", // 一下数值可为百分比也可为具体像素值
          right: "5%",
          bottom: "20%",
          left: "20%",
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
          name: "题目数量",
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
.gaozhong {
  width: 200px;
  height: 60px;
  margin-top: 20px;
  margin-left: 30px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  color: #fff;
  position: relative;
  img {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .tit {
    font-size: 14px;
  }
  .counta {
    font-size: 20px;
  }
}
.gaoyi {
  background-image: linear-gradient(to right, #fab14b, #faba56);
}
.gaoer {
  background-image: linear-gradient(to right, #567ff2, #3e62fd);
}
.gaosan {
  background-image: linear-gradient(to right, #54d6ff, #3dc4ff);
}
.heads {
  width: 300px;
}
.center_leida {
  width: 100%;
  height: 500px;
  margin-top: 20px;

  .leidaBox {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-between;
    .leidaleft {
      width: 230px;
      height: 100%;
    }
    .leidaright {
      width: 500px;
      height: 100%;
      .objectLeida {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.tiPai1 {
  margin-top: 30px;
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
  .counts {
    color: #00ffff;
    font-size: 24px;
    width: 100%;
    text-align: center;
  }
  .top_left {
    width: 232px;
    height: 80px;

    margin-top: 10px;
    background-size: 100% 100%;
    .tit {
      margin-top: 15px;
    }
    .count {
      text-align: center;
    }
  }
  .geo {
    width: 50%;
  }

  .top_center {
    margin-top: 10px;
    width: 212px;
    height: 80px;
    .tit {
      margin-top: 15px;
    }
  }
  .top_right {
    width: 232px;
    margin-top: 10px;

    .tit {
      margin-top: 15px;
    }
    height: 80px;
    background-size: 100% 100%;
  }
}
.tableBox {
  height: 180px;
  overflow: scroll;
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
    padding-top: 20px;
    box-sizing: border-box;
  }
  .box_height2 {
    height: 289px !important;
    padding: 20px;
    margin-top: 10px;
    box-sizing: border-box;
  }
  .box_height3 {
    height: 305px !important;
  }
  .box_height4 {
    height: 575px !important;
  }
  .course_school {
    width: 100%;
    margin-top: 30px;
    padding: 20px;
    height: 301px;
    box-sizing: border-box;
    position: relative;
    // transform: rotate(90deg);
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
.tiPai {
  margin-top: 70px;
}
.barchart {
  width: 40%;
  height: 300px;
}
.tits {
  display: flex;
  color: #fff;
}
.fangwen {
  width: 100%;
  height: 250px;
}
.conect {
  padding: 10px 63px;
  box-sizing: border-box;
}
.count {
  display: flex;
  margin-top: 10px;
  //  justify-content: space-between;
  .num {
    display: flex;
    justify-content: space-between;
    .numItem {
      margin-left: 8px;
      width: 26px;
      border-radius: 2px;
      height: 26px;
      font-size: 24px;
      color: #fff;
      text-align: center;
      line-height: 26px;
    }
  }
  .danwei {
    font-size: 12px;
    color: #fff;
    line-height: 26px;
    margin-left: 10px;
  }
  .percent {
  }
}
.conectTitle {
  padding-left: 10px;
  box-sizing: border-box;
  text-align: start;
  font-size: 14px;
  color: #fff;
  margin-top: 20px;
}
.color1 {
  background-color: #517ff4;
}
.color2 {
  background-color: #ffa800;
}
.color3 {
  background-color: #7faff6;
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
  border-top: 1px solid #ecf0f3;
  box-sizing: border-box;
  border-bottom: 1px solid #ecf0f3;
}
.head {
  width: 80px;
  text-align: center;
}
.head1 {
  width: 50px;
  text-align: center;
}
.heads {
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.tableItem {
  border-bottom: 1px solid #fff;
  border-top: 0;
}
.homeworkBox {
  width: 100%;
  .homeworkChart {
    width: 100%;
    height: 270px;
  }
}
.tiCharts {
  width: 100%;
  height: 180px;
}
.main_center {
  position: relative;
  width: 740px;
  .star_box {
    width: 200px;
    position: absolute;
    left: 40px;
    top: 400px;
    .star_tit {
      font-size: 18px;
      text-align: start;
      color: #fff;
    }
    .star_item {
      width: 100%;
      display: flex;
      margin-top: 8px;
      .star_count {
        margin-left: 20px;
        color: #fff;
        font-size: 14px;
      }
      .stars {
        display: flex;
        color: #fff;
        font-size: 12px;
        img {
          width: 16px;
          height: 15px;
          margin-left: 10px;
        }
      }
    }
  }
}
.ti_box {
  display: flex;
  overflow: hidden;
  justify-content: space-between;
}
.tipai {
  margin-top: 30px;
  padding: 20px !important;
  box-sizing: border-box;
}
</style>
  