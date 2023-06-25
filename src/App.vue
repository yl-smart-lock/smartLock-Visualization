<template>
  <div id="app" class="bg" ref="appRef">
    <router-view/>
  </div>
</template>
<script>
import drawMixin from "./utils/drawMixin";
export default {
  mixins: [drawMixin],
  name: "",
  data() {
    return {
    }}
};
</script>
<style lang="less">
#app {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  overflow: hidden;
  background-color:#070A33;

  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // width: 100vw;
  // height: 100vh;
  // color: #2c3e50;
  // background-color:#01040D;
  // width: 100%;
  // position:fixed;
  // height: 100%;
}

body{
  background-color:#070A33;

  // width: 100%;
  // position: relative;
  // height: 100%;
}


</style>
