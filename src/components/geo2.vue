
<template>
  <div class="box">
   <img class="map1" src="../assets/img/lbx.png" />
   <img class="map2" src="../assets/img/jt.png" />
    <img class="map3" src="../assets/img/map.png" />
    <div id="map" class="map4"></div>
  </div>
</template>
<script>
const yuhangMapMoudle = require("@/libs/yuhangMap.js");
const yuhangMap = yuhangMapMoudle.yuhangMap;
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
      /*大屏*/
      var geoCoordMap = {
        径山书院: [119.818659, 30.351002],
        研学旅行基地: [119.974216, 30.400545],
        麟海农学体验基地: [120.047543, 30.421157],
      };

      var BJData = [
        [
          {
            name: "径山书院",
          },
          {
            name: "研学旅行基地",
            value: 200,
          },
        ],
        [
          {
            name: "径山书院",
          },
          {
            name: "麟海农学体验基地",
            value: 200,
          },
        ],
        [
          {
            name: "麟海农学体验基地",
          },
          {
            name: "径山书院",
            value: 200,
          },
        ],
      ];

      var planePath =
        "path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705";

      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push([
              {
                coord: fromCoord,
              },
              {
                coord: toCoord,
              },
            ]);
          }
        }
        console.log(res, "456");

        return res;
      };

      var option = {
        title: {
          text: "乐研学资源地图",
          // subtext:'',
          x: "center",
          y: "px",
          textStyle: {
            color: "#fff",
            fontSize: 14,
          },
          textAlign: "left",
        },
        series: [
          {
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "#fff",
              symbolSize: 3,
            },
            lineStyle: {
              normal: {
                color: "#a6c84c",
                width: 0,
                curveness: 0.2,
              },
            },
            data: convertData(BJData),
          },
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15,
            },
            lineStyle: {
              normal: {
                color: "#a6c84c",
                width: 1,
                opacity: 0.4,
                curveness: 0.2,
              },
            },
            data: convertData(BJData),
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke",
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}",
              },
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: "#a6c84c",
              },
            },
            data: BJData.map(function (dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([
                  dataItem[1].value,
                ]),
              };
            }),
          },
        ],

        geo: {
          map: "jiangshan",
          label: {
            normal: {
              color: "rgba(255,255,255,1)",
              formatter: (params) => {
                // console.log(params, "67890");
              },
              show: true,
            },
          },
          itemStyle: {
            normal: {
              color: "#3DC4FF",
            },
          },
          zlevel: 1,
          aspectScale: 1.0,
          zoom: 1.25,
          selectedMode: "single", //选择类型,
          hoverable: false, //鼠标经过高亮
          roam: false, //鼠标滚轮缩放
          itemStyle: {
            normal: {
              borderWidth: 1,
              areaColor: "#142957",
              borderColor: "#0692a4", //区域背景色
              label: {
                show: true,
                textStyle: {
                  color: "#fff", //文字颜色
                },
              },
              formatter: (params) => {}, //文字大小
            },

            emphasis: {
              // 选中样式
              borderWidth: 1,
              areaColor: "#54D6FF",
              borderColor: "#0692a4", //区域背景色
              label: {
                show: true,
                textStyle: {
                  color: "#3DC4FF",
                },
                formatter: (params) => {
                  console.log(params, "paramsparamsparams");
                },
              },
            },
          },
        },
      };
      this.myChart.setOption(option);

      this.myChart.on("click", function (params) {
        var clickedRegion = params.name; // 获取点击的区域名称
        // 判断是否为初始状态，即点击了已选择的区域，需要返回初始状态
        if (option.geo.selected && option.geo.selected[clickedRegion]) {
          option.geo.selected = {}; // 清空选择状态
        } else {
          option.geo.selected = {
            [clickedRegion]: true, // 设置点击区域为选择状态
          };
        }

        // 更新地图配置
        this.myChart.setOption(option);
      });
    },
  },
};
</script>
<style scoped lang="less">
.box {
  width: 100%;
  background-image: url(../assets/img/mapbg.png);
  background-size: 100% 100%;
  position: relative;
  flex-direction: column-reverse;
  align-items: center;
  display: flex;
  .geos {
    width: 100%;
    height: 455px;
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
.box {
  position: relative;
  height: 500px;
  z-index: 9;
}
.map4 {
  width: 100%;
  height: 475px;
  position: relative;
  z-index: 5;
}
.map1,
.map2,
.map3 {
  position: absolute;
  opacity: 1;
}
.map1 {
  width: 520px;
  top: -20px;
  z-index: 2;
  animation: myfirst2 15s infinite linear;
}
.map2 {
  width: 480px;
  z-index: 3;
  top: 5px;

  animation: myfirst 10s infinite linear;
}
.map3 {
  width: 450px;
  z-index: 1;
}
@keyframes myfirst2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes myfirst {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}
</style>