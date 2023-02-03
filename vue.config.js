const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions:{
          plugins: [
            require('postcss-pxtorem')({
              rootValue: 40, // lib-flexible 将屏幕分成10份(10rem)，这里设置表示设计图宽度为10*37.5=375px
              unitPrecision: 5,  // 保留rem小数点多少位
              propList: ['*', '!border'], // 存储将被转换的属性列表，'!font-size' 即不对字体进行rem转换
              selectorBlackList: ['.radius'], // 要忽略并保留为px的选择器，例如fs-xl类名，里面有关px的样式将不被转换，支持正则写法。
              replace: true,
              mediaQuery: false, //（布尔值）媒体查询( @media screen 之类的)中不生效
              minPixelValue: 4, // 设置要替换的最小像素值，px小于4的不会被转换
              exclude: /(node_module)/,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            })
          ]
        },
       
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://6.196.87.160:8000/',
        target: 'https://api.huizhujia.com/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  },
  publicPath: './',
})
