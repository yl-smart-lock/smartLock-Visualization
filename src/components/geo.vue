<template>
  <div class="home1">
    <div class="chinaMap" ref="chinaMap"></div>
  </div>
</template>
<script>
import "echarts/map/js/china.js";
import { provinces } from "../libs/nameList";
export default {
  mounted() {
    this.initCharts("china");
  },
  methods: {
    initCharts(name) {
      var that = this;
      console.log(that.name);
      let mapcharts = this.$echarts.init(this.$refs.chinaMap);
      mapcharts.on("click", async function (params) {
        console.log(provinces[params.name]);
        await import(`echarts/map/js/province/${provinces[params.name]}`);

        that.initCharts(params.name);
      });
      //窗口尺寸改变
      window.addEventListener("resize", function () {
        mapcharts.resize();
      });

      // 绘制图表
      mapcharts.setOption({
        series: [
          {
            type: "map",
            map: name,
            layoutCenter: ["50%", "50%"], // 地图布局中心点
            layoutSize: 500,
            label: {
              show: true,
              color: "#ffffff",
              fontSize: 10,
            },
            itemStyle: {
              areaColor: "#eee",
              borderColor: "#24dafe",
            },
            roam: true,
            zoom: 1.2,
            emphasis: {
              label: {
                color: "#fff",
                fontSize: 12,
                fontWeight: "bold",
              },
              itemStyle: {
                areaColor: "none",
                borderColor: "#77ebff",
                borderWidth: 2,
              },
            },
            data: [
              { name: "北京", value: 0 },
              { name: "天津", value: 0 },
              { name: "上海", value: 0 },
              { name: "重庆", value: 0 },
              { name: "河北", value: 0 },
              { name: "河南", value: 0 },
              { name: "云南", value: 0 },
              { name: "辽宁", value: 0 },
              { name: "黑龙江", value: 0 },
              { name: "湖南", value: 0 },
              { name: "安徽", value: 0 },
              { name: "山东", value: 0 },
              { name: "新疆", value: 0 },
              { name: "江苏", value: 0 },
              { name: "浙江", value: 14 },
              { name: "江西", value: 0 },
              { name: "湖北", value: 0 },
              { name: "广西", value: 0 },
              { name: "甘肃", value: 0 },
              { name: "山西", value: 0 },
              { name: "内蒙古", value: 0 },
              { name: "陕西", value: 0 },
              { name: "吉林", value: 0 },
              { name: "福建", value: 0 },
              { name: "贵州", value: 0 },
              { name: "广东", value: 0 },
              { name: "青海", value: 0 },
              { name: "西藏", value: 0 },
              { name: "四川", value: 0 },
              { name: "宁夏", value: 0 },
              { name: "海南", value: 0 },
              { name: "台湾", value: 0 },
              { name: "香港", value: 0 },
              { name: "澳门", value: 0 },
            ],
          },
        ],
        visualMap: [
          {
            type: "piecewise",
            show: true,
            pieces: [{ min: 0, max: 4 }, { min: 5, max: 14 }, { min: 14 }],
            textStyle: {
              color: "#828994",
            },
            itemWidth: 64, // 每个图元的宽度
            itemHeight: 12,
            top: "top",
            right: "0",
            inRange: {
              borderRadius: 4,
              color: ["#0045FF", "#0034F1", "#002FD9"],
            },
          },
        ],
        tooltip: {
          trigger: "item", //数据项图形触发
          backgroundColor: "#000",
          borderWidth: 0,
          formatter: "地区：{b}<br/>数据：{c}",
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          bottom: "0",
          feature: {
            restore: {},
            saveAsImage: {},
          },
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
.chinaMap {
  width: 100%;
  height: 800px;
}
</style>
