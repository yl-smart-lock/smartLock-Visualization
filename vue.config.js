// var webpack = require('webpack');
const path = require('path');

const webpack = require('webpack')
// const CompressionPlugin = require('compression-webpack-plugin')
// const zlib = require('zlib')

module.exports = {
  productionSourceMap: false,
  // chainWebpack: config => { //①这里是配置的部分
  //   config
  //     .plugin('webpack-bundle-analyzer')
  //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  // },
  // configureWebpack: { //这里是添加的部分
  //   plugins: [
  //     new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  //     // 下面两项配置才是 compression-webpack-plugin 压缩配置
  //     // 压缩成 .gz 文件
  //     new CompressionPlugin({
  //       filename: '[path][base].gz',
  //       algorithm: 'gzip',
  //       test: /\.js$|\.css$|\.html$/,
  //       threshold: 10240,
  //       minRatio: 0.8
  //     }),
  //     // 压缩成 .br 文件，如果 zlib 报错无法解决，可以注释这段使用代码，一般本地没问题，需要注意线上服务器会可能发生找不到 zlib 的情况。
  
  //   ],
  // },

  // css: {
  //   loaderOptions: {
  //     css: {},
  //     postcss: {
  //       plugins: [
  //         require('postcss-px2rem-exclude')({
  //           remUnit: 192,
  //           exclude: /node_modules|folder_name/i
  //         })
  //       ]
  //     }
  //   }
  // },

  devServer: {
    proxy: {
      
      '/apis': {
        // target: 'http://6.196.87.160:8000/',
        target: 'https://edu.aidanke.com/',
        // target: 'https://huilaodong.aidanke.com//hld/',

        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/apis": ""
        }
      },
      '/hld-media': {
        // target: 'http://6.196.87.160:8000/',
        target: 'https:/edu.aidanke.com//',
        // target: 'https://huilaodong.aidanke.com/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/hld-media": ""
        }
      },

    }
  },
  publicPath: './',
}