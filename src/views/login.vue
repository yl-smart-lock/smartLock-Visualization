<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title"></div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="username">
            <el-button slot="prepend" icon="el-icon-user"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="param.password"
            @keyup.enter.native="submitForm()"
          >
            <el-button slot="prepend" icon="el-icon-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/api";

export default {
  data: function () {
    return {
      param: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      login(this.param).then((response) => {
        console.log(response, "111");
        if (response.code == 0) {
          // sessionStorage.setItem("username", response.results.username);
          // sessionStorage.setItem("user_type", response.results.user_type);
          this.$message.success("登录成功");
          this.$router.push("/HomeView");
        } else {
          this.$message.error("用户名或密码不正确");
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.login-btn span {
  color: #fff;
  font-size: 12px;
  cursor: pointer;
}
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  // background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #000;
  border-bottom: 1px solid #ddd;
}
.ceshi {
  width: 100px;
  height: 100px;
  background-color: #fff;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
.el-form-item {
  margin-bottom: 22px;
}
.el-button {
  padding-left: 12px;
}
</style>