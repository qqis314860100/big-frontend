import Vue from "vue";
import { extend, localize } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

// Install required rule.
extend("required", required);

// Install email rule.
extend("email", email);

// Install min rule.
extend("min", min);

// Install English and Arabic localizations.
localize({
  cn: {
    messages: {
      required: (field) => "请输入" + field,
      email: "请输入正确的邮箱",
    },
    names: {
      email: "邮箱",
      password: "密码",
      code: "验证码",
      username: "用户名",
    },
    fields: {
      password: {
        min: "密码不能小于6位",
      },
      code: {
        min: "验证码错误",
      },
    },
  },
});

let LOCALE = "cn";

// A simple get/set interface to manage our locale in components.
// This is not reactive, so don't create any computed properties/watchers off it.
Object.defineProperty(Vue.prototype, "locale", {
  get() {
    return LOCALE;
  },
  // 当更改locale值时就会调用这个set方法
  set(val) {
    LOCALE = val;
    localize(val);
  },
});
Vue.prototype.locale = "cn";
