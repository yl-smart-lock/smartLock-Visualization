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
    width: 100%;
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
  <div class="box" ref="vantaRef">
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
import "echarts-gl";
import * as THREE from "three";
import BIRDS from "vanta/src/vanta.net";
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

  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
  mounted() {
    this.vantaEffect = BIRDS({
      el: this.$refs.vantaRef,
      THREE: THREE,
    });
    VANTA.NET({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x88f4f9,
      backgroundColor: 0x061025,
      spacing: 18.0,
    });

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
        this.$echarts.registerMap("jiangshan", geojson ? geojson : yuhangMap);

        this.reginData = this.reginData3;
        this.mapTitle = "眉山市";
      } else {
        this.mapTitle = "仁寿县";
        this.$echarts.registerMap("jiangshan", geojson ? geojson : renshouMap);
        this.reginData = this.reginData2;
      }

      var geoCoordMap={
    '径山书院':[119.818659,30.351002],
    '研学旅行基地':[ 119.974216,30.400545],
    '麟海农学体验基地':[ 120.047543,30.421157],
   }
   var data = [
   { name: '径山书院', value: 9 },
   { name: '研学旅行基地', value: 10 },
   { name: '麟海农学体验基地', value: 29 },
   ]
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }

        return res;
      };
      var option = {
        geo3D: {
          map: "jiangshan",
          roam: true,
          // label: {
          //   normal: {
          //     color: "rgba(255,255,255,1)",
          //     formatter: (params) => {
          //       // console.log(params, "67890");
          //       console.log(window.frames.location.href, 1112);
          //     },
          //     show: true,
          //   },
          // },
          itemStyle: {
            color: "#436066",
            opacity: 0.8,
            borderWidth: 1,
            borderColor: "#7FF2F0",
            // areaColor: '#fff'
          },
          viewControl: {
            autoRotate: true,
            autoRotateAfterStill: 3,
            distance: 120,
            minAlpha: 5, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
            maxAlpha: 90, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
            minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
            maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
            animation: true, // 是否开启动画。[ default: true ]
            animationDurationUpdate: 100, // 过渡动画的时长。[ default: 1000 ]
            animationEasingUpdate: "cubicInOut", // 过渡动画的缓动效果。[ default: cubicInOut ]
          },

          emphasis: {
            disabled: true, //是否可以被选中
            label: {
              //移入时的高亮文本
              show: true,
              color: "#fff", //显示字体颜色变淡
              fontSize: 18, //显示字体变大
            },
            itemStyle: {
              color: "#173F62", //显示移入的区块变粉色
            },
          },
          label: {
            show: true,
            // position: "",
            color: "#fff", //地图初始化区域字体颜色
            fontSize: 40,
            lineHeight: 16,
            textStyle: {
              color: "#fff", //地图初始化区域字体颜色
              fontSize: 12,
              opacity: 1,
              backgroundColor: "rgba(0,23,11,0)",
            },
          },

          shading: "lambert",
          light: {
            //光照阴影
            main: {
              color: "#fff", //光照颜色
              intensity: 1, //光照强度
              shadowQuality: "high", //阴影亮度
              shadow: true, //是否显示阴影
              shadowQuality: "medium", //阴影质量 ultra //阴影亮度
              alpha: 55,
              beta: 10,
            },
            ambient: {
              intensity: 0.7,
            },
          },
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
