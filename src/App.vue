<template>
  <div id="app">
    <div class="layui-container layui-form-pane">
      <ValidationObserver ref="form" class="layui-form">
        <div class="layui-form-item">
          <label class="layui-form-label"> 用户名 </label>
          <div class="layui-input-inline">
            <ValidationProvider
              name="username"
              rules="required|email"
              v-slot="{ errors }"
            >
              <input
                type="text"
                v-model="username"
                class="layui-input"
                placeholder="请输入用户名"
              />
              <span class="error-tip">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <ValidationProvider
              name="password"
              rules="required|min:6"
              v-slot="{ errors }"
            >
              <input
                type="password"
                name="password"
                v-model="password"
                placeholder="请输入密码"
                class="layui-input"
              />
              <span class="error-tip">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="layui-form-mid layui-word-aux">辅助文字</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <ValidationProvider
              name="code"
              rules="required|min:4"
              v-slot="{ errors }"
            >
              <input
                v-model="code"
                type="verification"
                name="verification"
                placeholder="请输入验证码"
                class="layui-input"
                vee-validate="'required|code'"
              />
              <span class="error-tip">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div
            v-html="svg"
            @click="getCaptcha"
            class="layui-form-mid layui-word-aux svg"
          ></div>
        </div>
        <button type="button" class="layui-btn">点击登录</button>
        <a class="btn-link layui-btn" href="">忘记密码</a> </ValidationObserver
      ><button @click="switchLoc">Switch Locale</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "app",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      svg: "",
      username: "",
      password: "",
      code: "",
    };
  },
  mounted() {
    this.getCaptcha();
    // this.locale = "cn";
    // this.$refs.form.validate();
  },
  methods: {
    switchLoc() {},
    getCaptcha() {
      axios.get("http://localhost:3000/demo").then((res) => {
        if (res.status === 200) {
          const obj = res.data;
          if (obj.code === 200) {
            this.svg = obj.data;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
.layui-container {
  padding: 30px 0 10px 0px;
  width: 500px;
  margin: 100px auto 0;
}

.layui-form-item:nth-child(4) {
  position: relative;
  text-align: center;
}

.layui-btn {
  width: 100px;
}

.error-tip {
  color: red;
}

.svg {
  position: relative;
  top: -15px;
}
</style>
