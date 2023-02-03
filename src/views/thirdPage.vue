<template>
  <div class="home">
    <headers msg="人防数据大屏" />
    <div class="box">
      <div class="countItem">
        <div class="bg color1">
          <span class="iconfont icon-shenfenzheng"></span>
        </div>
        <div class="countBox">
          <div class="countTitle">已登记房东</div>
          <div class="count">99</div>
        </div>
      </div>
      <div class="countItem">
        <div class="bg color2">
          <span class="iconfont icon-34_kaisuo"></span>
        </div>
        <div class="countBox">
          <div class="countTitle">已装锁房间</div>
          <div class="count">99</div>
        </div>
      </div>
      <div class="countItem">
        <div class="bg color3">
          <span class="iconfont icon-fangzi"></span>
        </div>
        <div class="countBox">
          <div class="countTitle">在住房间</div>
          <div class="count">99</div>
        </div>
      </div>
      <div class="countItem">
        <div class="bg color4">
          <span class="iconfont icon-yonghu"></span>
        </div>
        <div class="countBox">
          <div class="countTitle">在住总人数</div>
          <div class="count">99</div>
        </div>
      </div>
      <div class="countItem">
        <div class="bg color5">
          <span class="iconfont icon-dengdaiwenjian"></span>
        </div>
        <div class="countBox">
          <div class="countTitle">历史入住</div>
          <div class="count">99</div>
        </div>
      </div>
      <div class="countItem">
        <div class="bg color6">
          <span class="iconfont icon-chartpie"></span>
        </div>
        <div class="countBox">
          <div class="countTitle">当前入住率</div>
          <div class="count">95%</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main_left">
        <div class="top">
          <div class="top_box">
            <div class="top_item">
              <div class="dot color1"></div>
              <div class="count">共86间</div>
            </div>
            <div class="top_item">
              <div class="dot color2"></div>
              <div class="count">在住房间：20</div>
            </div>
            <div class="top_item">
              <div class="dot color3"></div>
              <div class="count">访客数：115</div>
            </div>
            <div class="top_item">
              <div class="dot color4"></div>
              <div class="count">入住率：23.4%</div>
            </div>
          </div>
        </div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="main_box">
          <div
            class="mainItem"
            :class="{ bgColor1: item.into, bgColor2: !item.into }"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <div class="roomNumber">
              <div class="number">{{ item.roomNumber }}</div>
              <div class="name">房号</div>
              <div
                :class="{ dot_bg1: item.into, dot_bg2: !item.into }"
                class="dot"
              ></div>
            </div>
            <div class="heng"></div>
            <div class="main_bot">
              <div class="bot_left">
                <span v-if="!item.into">空置</span>
                <span v-if="item.into">{{ item.people }}</span>
                <span v-if="item.into" class="people">人</span>

                <div class="current">当前在住</div>
              </div>
              <img src="../assets/img/img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="main_right">
        <div class="search">
          <input placeholder="请输入房东姓名查询" type="text" />
          <img src="../assets/img/search.png" />
        </div>
        <div class="right_box">
          <div
            class="box_item"
            v-for="(item, index) in pepopleList"
            :key="index"
          >
            <div class="item_top">
              <div class="top_left">
                <div class="left_circle">房东</div>
                <div class="left_name">{{ item.name }}</div>
              </div>
              <div class="top_right">
                <span class="count">{{ item.people }}</span>
                <span class="danwei">间</span>
              </div>
            </div>
            <div class="address">{{ item.phone }}</div>
            <div class="address">{{ item.idcard }}</div>
            <div class="address">{{ item.address }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headers from "@/components/header.vue";

export default {
  components: {
    headers,
  },
  data() {
    return {
      pepopleList: [
        {
          name: "张**",
          phone: "131****1101",
          idcard: "3301*********1010",
          people: "68",
          address: "江干区白杨街道12号大街18号杭州出口加工生活服务区1幢",
        },
        {
          name: "张**",
          phone: "131****1101",
          idcard: "3301*********1010",
          people: "68",
          address: "江干区白杨街道12号大街18号杭州出口加工生活服务区1幢",
        },
        {
          name: "张**",
          phone: "131****1101",
          idcard: "3301*********1010",
          people: "68",
          address: "江干区白杨街道12号大街18号杭州出口加工生活服务区1幢",
        },
        {
          name: "张**",
          phone: "131****1101",
          idcard: "3301*********1010",
          people: "68",
          address: "江干区白杨街道12号大街18号杭州出口加工生活服务区1幢",
        },

        {
          name: "张**",
          phone: "131****1101",
          idcard: "3301*********1010",
          people: "68",
          address: "江干区白杨街道12号大街18号杭州出口加工生活服务区1幢",
        },
        {
          name: "张**",
          phone: "131****1101",
          idcard: "3301*********1010",
          people: "68",
          address: "江干区白杨街道12号大街18号杭州出口加工生活服务区1幢",
        },
      ],
      options: [
        {
          label: "江干区白杨街道12号大街18号杭州出口加工生活服务区1幢",
          value: 1,
        },
      ],
      dataList: [
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: false,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: false,
        },
        {
          roomNumber: 123,
          people: 8,
          into: false,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: true,
        },
        {
          roomNumber: 123,
          people: 8,
          into: false,
        },
      ],
      value: 1,
    };
  },
  methods: {},
};
</script>
<style scoped lang="less">
::-webkit-scrollbar {
  width: 8px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #023aff;
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}

.main_bot {
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    width: 80px;
    height: 100px;
  }
  .bot_left {
    padding: 15px 0;
    text-align: start;
    box-sizing: border-box;
    font-size: 25px;
    color: #fff;
    .people {
      font-size: 16px;
    }
    .current {
      font-size: 16px;
      margin-top: 20px;
    }
  }
}
.bgColor1 {
  background-color: #202046;
}
.bgColor2 {
  background-color: #2f2f32;
}
.heng {
  width: 100px;
  margin-top: 30px;
  height: 2px;
  background-color: #039ff7;
}
.main_box {
  display: flex;
  flex-wrap: wrap;
  height: 680px;
  overflow-y:scroll;
  width: 100%;
  justify-content: space-between;
  .mainItem {
    width: 18%;
    margin-top: 20px;
    height: 200px;
    padding: 15px;
    box-sizing: border-box;
    .roomNumber {
      width: 50%;
      color: #fff;
      display: flex;
      justify-content: space-between;

      align-items: center;
      .number {
        font-weight: 600;
        font-size: 30px;
      }
    }
  }
}
.el-select {
  width: 100%;
}
.el-select /deep/ .el-input .el-input__inner {
  background-color: #14142b !important;
  border: 0;
  height: 60px;
  color: #fff;
}
// .el-select /deep/ .el-select-dropdown{
//   background-color: #14142b;
// }
.home {
  padding: 0 80px;
  box-sizing: border-box;
}
.main {
  margin-top: 20px;
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: space-between;
  .main_left {
    width: 70%;
    height: 100%;
    .top {
      width: 100%;
      .top_box {
        width: 500px;
        float: right;
        display: flex;
        justify-content: space-between;
        .top_item {
          font-size: 16px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .count {
            margin-left: 10px;
          }
        }
      }
    }
  }
  .search {
    position: relative;
    img {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 20px;
      top: 5px;
    }
  }
  .main_right {
    width: 25%;
    height: 100%;
    input {
      padding: 0 20px;
      border: 0;
      width: 100%;
      box-sizing: border-box;
      height: 40px;
      border-radius: 10px;
      color: #fff;
      font-size: 16px;
      background-color: #14142b;
    }
    .right_box {
      width: 100%;
      margin-top: 20px;
      height: 700px;
      background-color: #14142b;
      padding: 15px;
      box-sizing: border-box;
      overflow-y:scroll;
      .box_item {
        width: 100%;
        margin-top: 20px;
        height: 200px;
        border-radius: 10px;
        padding: 15px;
        box-sizing: border-box;
        background-color: #202046;
        .address{
          font-size: 16px;
          color: #fff;
          margin-top: 15px;
          text-align: start;
          width: 100%;
        }
        .item_top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .top_left {
            display: flex;
            justify-content: space-between;
            .left_circle{
              width: 50px;
              height: 50px;
              border-radius: 50px;
              font-size: 16px;
              color: #fff;
              text-align: center;
              line-height: 50px;
              background-color: #023aff;
            }
            .left_name{
              font-size: 18px;
              color:#fff;
              height: 50px;
              line-height: 50px;
              margin-left: 20px;
            }
          }
          .top_right{
            color: #fff;
           .count{
            font-size: 30px;
           }
           .danwei{
            font-size: 16px;
           }
          }
        }
      }
    }
  }
}
.dot_bg1 {
  background-color: #039ff7 !important;
}
.dot_bg2 {
  background-color: #202046 !important;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 10px;
}
.color1 {
  background-color: #fd5353;
}
.color2 {
  background-color: #ff8f1f;
}
.color3 {
  background-color: #ffc300;
}
.color4 {
  background-color: #09bd3c;
}
.color5 {
  background-color: #991bfa;
}
.color6 {
  background-color: #023aff;
}

.iconfont {
  font-size: 30px;
  color: #fff;
}
.bg {
  width: 60px;
  border-radius: 10px;
  height: 60px;
  line-height: 60px;
}
.box {
  margin-top: 40px;
  padding: 0 200px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.countItem {
  display: flex;
  width: 180px;
  justify-content: space-between;
  .countBox {
    width: 100px;
    padding: 5px 0;
    color: #fff;
    box-sizing: border-box;
    text-align: start;
    .count {
      font-size: 30px;
    }
  }
}
</style>