<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  .geos {
    width: 100%;
    height: 100%;
  }
}
</style>
<template>
  <div class="box">
    <div id="map" class="geos" @click="resetGeo"></div>
  </div>
</template>
<script>
import echarts from "echarts";
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

const renshouMapMoudle = require("@/libs/renshou.js");
console.log(renshouMapMoudle,'88')
const renshouMap = renshouMapMoudle.renshouMap;

// const schoolListMoudle = require("@/libs/schoolList.js");
// const schoolList = schoolListMoudle.schoolList;

// console.log(schoolList, "schoolListschoolListschoolList");

const getStreetGeoJson = function (name) {
  var item;
  for (var i in renshouMap.features) {
    item = renshouMap.features[i];
    if (item.properties.name == name) {
      break;
    }
  }
  return { type: "FeatureCollection", features: [item] };
  // {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"双塔街道"},"geometry":{"type":"Polygon","coordinates":
};

// const schoolList = [{
//     name: '江山市城东实验学校',
//     latitude: 118.6277,
//     longitude: 28.728427,
//     addr: '衢州市江山市虎山街道江东二区48-1号',
//     street: '虎山街道'
// },
// {
//     name: '浙江省江山实验中学',
//     latitude: 118.634995,
//     longitude: 28.753206,
//     addr: '衢州市江山市双塔街道书院里220号',
//     street: '双塔街道'
// }]

export default {
  props: ["datas", "schoolname"],
  watch: {
    render_random(value) {
      this.initGeo();
    },
  },
  data() {
    return {
      is_street: false,
    };
  },
  created() {},
  mounted: function () {
    this.initGeo();
    // let index = schoolList.findIndex((item) => {
    //   return item.name == this.schoolname;
    // });
    console.log(index, "datas");
  },
  methods: {
    resetGeo(e) {
      console.log(e, "asdasd");
      if (this.is_street) {
        this.initGeo();
        this.is_street = false;
      }
    },
    initGeo(geojson, street_name) {
      console.log('124')
      if (this.myChart) {
        this.myChart.dispose();
      }
      this.myChart = this.$echarts.init(document.getElementById("map"));
      console.log(renshouMap,'999')
      this.$echarts.registerMap("jiangshan",renshouMap);
      console.log('125')

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

      var option = {
        series: [
          {
            name: "地点",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "fill",
              period: 7,
              scale: 26,
            },
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
        ],
        toolbox: {
          //echart保存为图片
          show: true,
          feature: {
            mark: {
              show: true,
            },
            restore: {
              show: true,
            },
            saveAsImage: {
              show: true,
              pixelRatio: 1,
              title: "保存为图片",
              type: "png",
              lang: ["点击保存"],
            },
          },
        },

        geo: {
          map: "jiangshan",
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
              borderColor: "#000", //区域边框色
              areaColor: "#2d68f1", //区域背景色
              label: {
                show: true,
                textStyle: {
                  color: "#fff", //文字颜色
                  fontSize: fontSize(0.12),
                },
              },
              formatter: (params) => {
                console.log(params, "67890");
              }, //文字大小
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
      this.myChart.on("click", (params) => {
        // console.log(params, 'paramsparamsparams');
        // componentSubType: "effectScatter"
        // : "geo"
        // series
        console.log(1);
        let componentType = params.componentType;
        if (componentType == "series") {
          if (this.$route.path == "/thirdpage") {
            this.$parent.set_schoolname(params.data.name);
            this.$parent.search1();
            this.schoolname = params.data.name;
            this.initGeo();
          } else {
            this.$router.push({
              path: "/thirdpage",
              query: {
                name: params.data.name,
              },
            });
          }
        } else if (componentType == "geo") {
          let street_name = params.region.name;
          var geojson = getStreetGeoJson(street_name);
          this.initGeo(geojson, street_name);
          this.is_street = true;
        }
        params.event.event.stopPropagation();
      });
    },
  },
};
</script>
