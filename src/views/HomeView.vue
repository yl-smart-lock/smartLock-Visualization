<template>
  <div style="display: flex; flex-direction: column; width: 100%; height: 100%">
    <div class="headers">
      <div class="tab">
        <div
          @click="tabClick(index, item.path, item.type)"
          class="tabItem"
          :class="active == index + 1 ? 'active' : ''"
          v-for="(item, index) in tabList"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="title">余杭区乐学吧数字智治驾驶舱</div>
      <div class="banben">
        <el-select v-model="version" @change="versionChange" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="date">
        <div class="time">
          <div class="time_left">
            <div class="dates">{{ timeArry.timeDate }}</div>
            <div>{{ timeArry.week }}</div>
          </div>
          <div class="time_right">
            {{ timeArry.timeText }}
          </div>
        </div>
        <div class="user">
          <img src="../assets/img/img_1.png" alt="" />
          系统管理员
        </div>
      </div>
    </div>
    <router-view class="view" v-if="type == 1" />
    <div v-else style="flex: 1">
      <iframe
        :src="pageUrl"
        allowtransparency="true"
        frameborder="0"
        width="100%"
        height="100%"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>

<script>
import drawMixin from "../utils/drawMixin";

import { formatDate } from "@/utils/index2";

export default {
  mixins: [drawMixin],
  name: "",
  data() {
    return {
      options: [
        {
          value: '1',
          label: "V1.0",
        },
        {
          value: '2',
          label: "V2.0",
        },
      ],
      version: sessionStorage.getItem('version')?sessionStorage.getItem('version'):'1',
      nowDate: "",
      pageUrl: "",
      timeArry: "",
      active: sessionStorage.getItem("tabIndex")
        ? sessionStorage.getItem("tabIndex")
        : 1,
      type:1,
      tabList:[],
      tabList1: [
        {
          name: "首页",
          path: "/index",
          type: 1,
        },
        {
          name: "乐作业",
          path: "/lezuoye",
          type: 1,
        },
        {
          name: "乐研学",
          path: "/leyanxue",
          type: 1,
        },
        {
          name: "乐云校",
          path: "https://datav.aliyuncs.com/share/c7f66bfa7cc0e75efee92a4ab207991b",
          type: 2,
        },
        {
          name: "乐托服",
          path: "https://guanli-yuhang.h5.haoduo.vip/guanli-web/yhview?token=",
          type: 3,
        },
        {
          name: "乐学吧",
          path: "https://lxb.eyh.cn:9550/admin",
          type: 4,
        },
      ],
      tabList2: [
        {
          name: "首页",
          path: "/index",
          type: 1,
        },
        {
          name: "乐作业",
          path: "/lezuoye1",
          type: 1,
        },
        {
          name: "乐研学",
          path: "/leyanxue1",
          type: 1,
        },
        {
          name: "乐云校",
          path: "https://datav.aliyuncs.com/share/c7f66bfa7cc0e75efee92a4ab207991b",
          type: 2,
        },
        {
          name: "乐托服",
          path: "https://guanli-yuhang.h5.haoduo.vip/guanli-web/yhview?token=",
          type: 3,
        },
        {
          name: "乐学吧",
          path: "https://lxb.eyh.cn:9550/admin",
          type: 4,
        },
      ],
    };
  },
  components: {},
  created() {
    if(this.version=='1'){
      this.tabList = this.tabList1

    }else if(this.version=='2'){
      this.tabList = this.tabList2
    }

    this.timeArry = formatDate(new Date());
    this.timeStart();
  },
  methods: {
    versionChange(){
      this.type = 1
      if(this.version==1){
      this.tabList = this.tabList1
      sessionStorage.setItem('version',1)
      
    }else if(this.version==2){
      this.tabList = this.tabList2
      sessionStorage.setItem('version',2)
    }
    sessionStorage.setItem("tabIndex",1) 
    this.active = 1
    this.$router.push('/index')


    },
    tabClick(index, path, type) {
      sessionStorage.setItem("tabIndex", index + 1);
      this.active = index + 1;
      this.type = type;
      // sessionStorage.setItem('type')
      if (type == 1) {
        this.$router.push(path);
      } else if (type == 2) {
        this.pageUrl = path;
      } else if (type == 3) {
        this.pageUrl = path + sessionStorage.getItem("token");
      } else if (type == 4) {
        sessionStorage.setItem("tabIndex",  1);
        window.location.href = path;
      }
    },
    loginOut() {
      login_out().then((res) => {
        this.$router.push("/login");
      });
    },
    timeStart() {
      // 设置定时器
      this.timer = setInterval(() => {
        this.timeArry = formatDate(new Date());
      }, 1000);
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.view {
  flex: 1;
  // margin-top: 50px;
}
.date {
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 0 22px;
  box-sizing: border-box;
  line-height: 80px;
  .time {
    width: 200px;
    display: flex;
    justify-content: space-between;
    .time_left {
      font-size: 14px;
      line-height: 20px;
      .dates {
        margin-top: 20px;
      }
    }
    .time_right {
      font-size: 22px;
    }
  }
  .user {
    font-size: 16px;
    img {
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }
  }
}
.headers {
  display: flex;
  height: 80px;
  // margin-top: 20px;
  justify-content: space-between;
  // padding: 22px;
  // box-sizing: border-box;
  background-image: url(../assets/img/bg_top.png);
  background-size: 100% 100%;
}
.tab {
  display: flex;
  justify-content: space-between;
  width: 500px;
}
.tabItem {
  width: 80px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  line-height: 80px;
  color: #fff;
  cursor: pointer;
}

.active {
  color: #03ffff;
}
.homes {
  // position: relative;
}
.logout {
}
.logout {
  cursor: pointer;

  width: 100px;
  position: absolute;
  right: 20px;
  top: 20px;
  height: 30px;
  color: #01f1e3;
  font-size: 23px;
  text-align: center;
  line-height: 30px;
  border-radius: 50px;
  border: 2px solid #01f1e3;
}
.date {
  text-align: start;
  width: 400px;
  font-size: 16px;

  color: #fff;
}
.title {
  line-height: 80px;
  color: #fff;
  font-size: 36px;
  height: 80px;
  flex: 1;
  padding-right: 80px;
  text-align: center;
  font-family: "Adobe Heiti Std R";
}
.el-select{
  width: 80px;
  margin-top: 20px;
  
}
/deep/ .el-input__inner{
  background-color: #0A0C18;
  color: #fff;
  border: 2px solid #173F62;

}
</style>
