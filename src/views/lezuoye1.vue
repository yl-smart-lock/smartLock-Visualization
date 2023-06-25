<template>
  <div>
    <div class="main">
      <div class="main_left">
        <div class="course_school">
          <div class="box_title">今日访问人数统计</div>
          <div class="fangwen" id="fangwen"></div>
        </div>
        <div class="course_school box_height1">
          <div class="box_title">家校联系单</div>
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
            <div class="conectTitle">学校排行</div>
            <div class="tableBox">
              <div class="tableHead">
              <div class="head">排名</div>
              <div class="head">学校名称</div>
              <div class="head">发布数量</div>
            </div>
            <div
              class="tableHead tableItem"
              v-for="(item, index) in tableList"
              :key="index"
            >
              <div class="head">{{index+1}}</div>
              <div class="head heads">{{ item.school_name }}</div>
              <div class="head">{{ item.qnr_cnt }}</div>
            </div>
            </div>
        
          </div>
        </div>
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
          <div class="top_left">
            <div class="tit">总访问人数</div>
            <div class="counts">{{ vistor1 }}</div>
          </div>
          <div class="top_center">
            <div class="tit">教师数</div>
            <div class="counts">{{ vistor2 }}</div>
          </div>
          <div class="top_right">
            <div class="tit">学生数</div>
            <div class="counts">{{ vistor3 }}</div>
          </div>
        </div>
        <Geo class="geo" datas="30rem"></Geo>
        <div class="course_school box_height2">
          <div class="box_title">题库新增题量</div>
            <div class="barchart" id="barchart"></div>
            
       

        </div>
      </div>
      <div class="main_right">
        <div class="course_school box_height3">
          <div class="box_title">作业时长/难度</div>
          <div class="homeworkBox">
            <div class="homeworkChart" id="homeworkChart"></div>
          </div>
        </div>
        <div class="course_school box_height4">
          <div class="box_title">题库资源统计</div>
          <div class="tiCharts" id="tiCharts"></div>
          <div class="conect">
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
              <div class="head">{{ index+1 }}</div>
              <div class="head heads">{{ item.file_name }}</div>
              <div class="head">{{ item.file_scan_count }}</div>
            </div>
          </div>
          <div class="conect">
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
              <div class="head">{{ index+1 }}</div>
              <div class="head heads">{{ item.file_name }}</div>
              <div class="head">{{ item.file_download_count }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Geo from "@/components/geo";
import M from "minimatch";
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
  get_task_visitors
} from "@/api/api";

export default {
  name: "",
  data() {
    return {
      dateArray: [],
      countArray: [],
      subjectArray: [],
      dateArray1: [],
      countArray1: [],
      countArray2: [],
      countArray3: [],
      countArray4: [],
      countArray5: [],
      tiList1:[],
      num1: "857",
      num2: "25",
      num3: "89",
      num4: "0",
      tableList: [
     
      ],
      hours:[],
      count1:[],
      count2:[],
      count3:[],
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
      vistor1:0,
      vistor2:0,
      vistor3:0,
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
  },
  created() {
    this.getContactList();
    this.getStarLevel();
    this.getTopic();
    this.getTaskTime();
    this.getSrcSum();
    this.getSrcView();
    this.getSrcDl()
    this.getContactRank()
    this.getTaskVisitors()
    this.getTaskVisitors1()
    
  },
  mounted() {
    // this.initHomeworkChart();
  },
  methods: {
    getTaskVisitors1(){
      get_task_visitors().then(res=>{
        this.vistor1 = res[0].cnt;
        this.vistor2 = res[1].cnt;
        this.vistor3 = res[2].cnt;
      })
    },
    getTaskVisitors(){
      get_task_visitors_day().then(res=>{
        res.forEach(item=>{

          if(item.wv_role==1){
            this.hours.push(item.wv_hour)
          this.count1.push(item.wv_cnt)

          }
          if(item.wv_role==2){
          this.count2.push(item.wv_cnt)

          }
          if(item.wv_role==3){
          this.count3.push(item.wv_cnt)
          }
        })
        this.initFangwenChart();


      })
    },
    getContactRank(){
      get_contact_rank().then(res=>{
        this.tableList = res
      })
    },
    getVisitorsDay(){
      get_visitors_day().then(res=>{
        console.log(res,'778899')
      })
    },
    getSrcDl(){
      get_src_dl().then(res=>{
        this.tiList1 = res
      })
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
        this.num3 = res[0].answer_per.toString();

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
            // name: "难",
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
          data: this.hours
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
          left: "8%",
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
.heads{
  width: 300px;
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
    height: 91px;
    background-image: url(../assets/img/bg_data_3.png);
    background-size: 100% 100%;
    .tit {
      margin-top: 23px;
    }
    .count {
      text-align: center;
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
.tableBox{
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
.barchart {
  width: 100%;
  height: 300px;
}
.fangwen {
  width: 100%;
  height: 300px;
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
    height: 300px;
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
.ti_box{
  display: flex;
  justify-content: space-between;
}
.tipai{
  margin-top: 15px;
  padding: 20px!important;
  box-sizing: border-box;
}
</style>
