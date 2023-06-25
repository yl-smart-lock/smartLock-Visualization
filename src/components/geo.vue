<style scoped lang="less">
.box {
  width: 100%;
  height: 495px;
  background-image: url(../assets/img/mapbg.png);
  background-size: 100% 100%;
  position: relative;
  flex-direction: column-reverse;
  align-items: center;
  display: flex;

  .geos {
    width: 518px;
    height: 495px;
  }
}
.top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.maptitle {
  font-size: 30px;
}

.back {
  font-size: 16px;
  cursor: pointer;
}
.el-select {
  width: 100%;
  position: absolute;
  left: 0;
  top: 60px;
  z-index: 99;
}
.el-select /deep/ .el-input .el-input__inner {
  background-color: #14142b !important;
  border: 0;
  height: 60px;
  color: #fff;
}
</style>
<template>
  <div class="box">
    <!-- <el-select v-model="value" placeholder="请选择" @change="mapChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="top">
      <div class="maptitle">{{ mapTitle }}区域地图</div>
      <div class="back" @click="back" v-if="mapTitle != '眉山市'">
        返回上一级
      </div>
    </div> -->
    <div id="map" class="geos"></div>
  </div>
</template>
<script>
import echarts from "echarts";
// import { get_user_info } from "../api/api";

function fontSize(res) {
  let docEl = document.documentElement,
    clientWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = 100 * (clientWidth / 1920);
  return res * fontSize;
}

const yuhangMapMoudle = require("@/libs/yuhangMap.js");
const yuhangMap = yuhangMapMoudle.yuhangMap;

// const schoolListMoudle = require("@/libs/schoolList.js");
// const schoolList = schoolListMoudle.schoolList;

// console.log(schoolList, "schoolListschoolListschoolList");
const getStreetGeoJson = function (name) {
  var item;
  for (var i in yuhangMap.features) {
    item = yuhangMap.features[i];
    if (item.properties.name == name) {
      break;
    }
  }
  return { type: "FeatureCollection", features: [item] };
  // {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"双塔街道"},"geometry":{"type":"Polygon","coordinates":
};

export default {
  props: ["datas", "schoolname"],
  watch: {
    render_random(value) {
      this.initGeo();
    },
  },
  data() {
    return {
      value: 1,
      mapTitle: "眉山市",
      reginData: [],
      is_street: false,
      tag: false,
      options: [
        {
          label: "眉山市",
          value: 1,
        },
        {
          label: "仁寿县",
          value: 2,
        },
      ],
    };
  },
  created() {},
  mounted: function () {
    this.initGeo();

    // this.getUserInfo();
    // let index = schoolList.findIndex((item) => {
    //   return item.name == this.schoolname;
    // });
  },

  methods: {
    back() {
      this.mapTitle = "眉山市";
      this.initGeo();
    },
    getUserInfo() {
      get_user_info().then((res) => {
        this.tag = res.tag;
        console.log(res, "4455");
        if (res.tag == "zone1") {
          this.value = 1;
        } else if (res.tag == "zone2") {
          this.value = 2;
        } else if (!res.tag) {
          this.value = 1;
        }
      });
    },
    mapChange() {
      this.initGeo();
    },
    resetGeo(e) {
      console.log("111223");
      if (this.is_street) {
        console.log(this.is_street);
        this.initGeo();
        this.is_street = false;
      }
    },
    initGeo(geojson, street_name) {
      if (this.myChart) {
        this.myChart.dispose();
      }

      this.myChart = this.$echarts.init(document.getElementById("map"));
      if (this.value == 1) {
        console.log("111");

        this.$echarts.registerMap("jiangshan", geojson ? geojson : yuhangMap);

        this.reginData = this.reginData3;
        this.mapTitle = "眉山市";
      } else {
        this.mapTitle = "仁寿县";
        this.$echarts.registerMap("jiangshan", geojson ? geojson : renshouMap);
        this.reginData = this.reginData2;
      }
    

      var option = {
        series: [
          {
            // name: "地点",
            type: "effectScatter",
            coordinateSystem: "geo",
            // zlevel: 2,

            // rippleEffect: {
            //   brushType: "fill",
            //   period: 7,
            //   scale: 26,
            // },
            symbolSize: 8,
            showEffectOn: "emphasis",
            itemStyle: {
              normal: {
                color: "green",
              },
            },
            showEffectOn: "render",
            zlevel: 2,
            rippleEffect: {
              period: 2.5, //波纹秒数
              brushType: "fill", //stroke(涟漪)和fill(扩散)，两种效果
              scale: 10, //波纹范围
            },
          },
        ],
        // toolbox: {
        //   //echart保存为图片
        //   show: true,
        //   feature: {
        //     mark: {
        //       show: true,
        //     },
        //     restore: {
        //       show: true,
        //     },
        //     saveAsImage: {
        //       show: true,
        //       pixelRatio: 1,
        //       title: "保存为图片",
        //       type: "png",
        //       lang: ["点击保存"],
        //     },
        //   },
        // },

        geo: {
          map: "jiangshan",
          label: {
            normal: {
              color: "rgba(255,255,255,1)",
              formatter: (params) => {
                // console.log(params, "67890");
                console.log(window.frames.location.href, 1112);
              },
              show: true,
            },
          },
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
            },
          },
          zlevel: 1,
          aspectScale: 1.0,
          selectedMode: "single", //选择类型,
          hoverable: false, //鼠标经过高亮
          roam: false, //鼠标滚轮缩放
          itemStyle: {
            normal: {
              shadowColor: "rgba(20,68,191,0.5)",
              shadowOffsetX: 0,
              shadowOffsetY: 15,
              borderWidth: 1,
              borderColor: "#7FF2F0", //区域边框色
              areaColor: "#436066", //区域背景色
              // shadowColor: "rgba(255,255,255,0.5)", // 省份边框阴影
              shadowBlur: 5, // 省份边框聚焦
              label: {
                show: true,
                textStyle: {
                  color: "#fff", //文字颜色
                  fontSize: fontSize(0.12),
                },
              },
              formatter: (params) => {}, //文字大小
            },

            emphasis: {
              // 选中样式
              borderWidth: 1,
              borderColor: "#00ffff",
              // color: '#ffffff',
              areaColor: "#77f5fa", //区域背景色
              label: {
                show: true,
                textStyle: {
                  color: "#ff0000",
                },
                formatter: (params) => {
                  console.log(params, "paramsparamsparams");
                },
              },
            },
          },
          // regions: [
          //   //对不同的区块进行着色
          //   {
          //     name: "百丈镇", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#517ff4",
          //       },
          //     },
          //   },
          //   {
          //     name: "鸬鸟镇", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#b3e6ee",
          //       },
          //     },
          //   },
          //   {
          //     name: "黄湖镇", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#7faff6",
          //       },
          //     },
          //   },
          //   {
          //     name: "径山镇", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#517ff4",
          //       },
          //     },
          //   },
          //   {
          //     name: "瓶窑镇", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#b3e6ee",
          //       },
          //     },
          //   },
          //   {
          //     name: "余杭街道", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#b3e6ee",
          //       },
          //     },
          //   },
          //   {
          //     name: "仓前街道", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#7faff6",
          //       },
          //     },
          //   },
          //   {
          //     name: "良渚街道", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#517ff4",
          //       },
          //     },
          //   },
          //   {
          //     name: "仁和街道", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#7faff6",
          //       },
          //     },
          //   },

          //   {
          //     name: "五常街道", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#517ff4",
          //       },
          //     },
          //   },
          //   {
          //     name: "闲林街道", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#b3e6ee",
          //       },
          //     },
          //   },
          //   {
          //     name: "中泰街道", //区块名称
          //     itemStyle: {
          //       normal: {
          //         areaColor: "#7faff6",
          //       },
          //     },
          //   },
          // ],
        },
      };
      this.myChart.setOption(option);
      var that = this;
      this.myChart.on("click", function (params) {
        let street_name = params.region.name;
        that.mapTitle = params.region.name;
        var geojson = getStreetGeoJson(street_name);
        that.initGeo(geojson, street_name);
        that.is_street = true;
        // this.$router.push({
        //   path: "/street",
        //   query: { params: params.data.name },
        // });
      });
    },
  },
};
</script>
