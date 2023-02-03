<template>
  <div id="app" class="bg">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(./assets/bg.jpg);
  background-size: 100% 100%;
  width: 100%;
  position: fixed;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
  margin: 0;
}


</style>
