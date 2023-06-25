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
      reginData1: [
        {
          name: "文林镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "汪洋镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "黑龙滩镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },

        {
          name: "富加镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "视高镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "满井镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "钟祥镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "彰加镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "北斗镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },

        {
          name: "珠嘉镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "禄加镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "大化镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "始建镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "文宫镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "龙正镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },

        {
          name: "清水镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "宝飞镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "龙马镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "禾加镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "方家镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "高家镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },

        {
          name: "中农镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "宝马镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "慈航镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "兴盛镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "四公镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "观寺镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },

        {
          name: "农旺镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "曲江镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "中岗镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "元通镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "玉龙镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "向家镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },

        {
          name: "识经镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "里仁镇", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "曹家乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "天峨乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "虞丞乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "鸭池乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },

        {
          name: "新店乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "谢安乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "涂家乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "松峰乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "石咀乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "青岗乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },

        {
          name: "藕塘乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "龙桥乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "景贤乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "洪峰乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "河口乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "合兴乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },

        {
          name: "古佛乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "凤陵乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "促进乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "兆嘉乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "城堰乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "板燕乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },

        {
          name: "双堡乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "板桥乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "鳌陵乡", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
      ],
      reginData3: [
        {
          name: "利州区", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "昭化区", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
      ],

      reginData2: [
        {
          name: "利州区", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
        {
          name: "昭化区", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#517ff4",
            },
          },
        },
        {
          name: "朝天区", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "旺苍县", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "青川县", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#85B1AE",
            },
          },
        },
        {
          name: "剑阁县", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#b3e6ee",
            },
          },
        },
        {
          name: "苍溪县", //区块名称
          itemStyle: {
            normal: {
              areaColor: "#0088FD",
            },
          },
        },
      ],

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
      // console.log(street_name, "street_namestreet_namestreet_name");
      // if (street_name) {
      //   var schoolList_tmp = schoolList.filter((i) => {
      //     // console.log(i.street);
      //     return i.street == street_name;
      //   });
      // } else {
      //   var schoolList_tmp = schoolList;
      // }
      // console.log(schoolList_tmp, "schoolList_tmp");

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
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
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
            // name: "地点",
            data: convertData(data),
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
                color: "rgba(244,233,37,0.4)",
              },
            },
            showEffectOn: "render",
            zlevel: 2,
            rippleEffect: {
              period: 2.5, //波纹秒数
              brushType: "fill", //stroke(涟漪)和fill(扩散)，两种效果
              scale: 10, //波纹范围
            },
          
            
            // data: schoolList_tmp.map((i) => {
            //   return {
            //     name: i.name,
            //     value: [i.latitude, i.longitude],
            //     label: {
            //       normal: {
            //         show: true,
            //         formatter: function (params) {
            //           //标签内容
            //           return params.name;
            //         },

            //         borderColor: "#80cffd",
            //         color: "#fff",
            //         position: "right",
            //         fontSize: 12,
            //         fontWeight: "normal",
            //       },
            //     },
            //     itemStyle: {
            //       normal: {
            //         color: "#77bbf9",
            //       },
            //     },
            //     emphasis: {
            //       label: {
            //         show: true,
            //         formatter: (params) => {
            //           return params.data.name;
            //         },
            //       },
            //     },
            //   };
            // }),
          },
         {
          name: '回收中心',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0,18)),//这里的0，13是水波纹显示的前几个
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                encode: {
                    value: 2
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                    color:'#fff',
                    fontWeight:700
                },
                itemStyle: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    },
                // 悬浮出现的框
                tooltip:{
                        formatter: '{b}'+ '回收中心'
                    },
                zlevel: 1
            }

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
              borderWidth: 0,
              borderColor: "#3199A0", //区域边框色
              areaColor: "#0045FF", //区域背景色
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
          regions: [
            //对不同的区块进行着色
            {
              name: "百丈镇", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#517ff4",
                },
              },
            },
            {
              name: "鸬鸟镇", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#b3e6ee",
                },
              },
            },
            {
              name: "黄湖镇", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#7faff6",
                },
              },
            },
            {
              name: "径山镇", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#517ff4",
                },
              },
            },
            {
              name: "瓶窑镇", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#b3e6ee",
                },
              },
            },
            {
              name: "余杭街道", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#b3e6ee",
                },
              },
            },
            {
              name: "仓前街道", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#7faff6",
                },
              },
            },
            {
              name: "良渚街道", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#517ff4",
                },
              },
            },
            {
              name: "仁和街道", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#7faff6",
                },
              },
            },

            {
              name: "五常街道", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#517ff4",
                },
              },
            },
            {
              name: "闲林街道", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#b3e6ee",
                },
              },
            },
            {
              name: "中泰街道", //区块名称
              itemStyle: {
                normal: {
                  areaColor: "#7faff6",
                },
              },
            },
          ],
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
