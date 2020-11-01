import Vue from "vue";
import { extend, localize } from "vee-validate";
import {
  required,
  email,
  min,
  length,
  max,
  name,
} from "vee-validate/dist/rules";
import zh from "vee-validate/dist/locale/zh_CN.json";
// Install required rule.
extend("required", required);

// Install email rule.
extend("email", email);

// Install min rule.
extend("min", min);
extend("length", length);
extend("max", max);

extend("name", {
  validate: (value) => {
    return !/^\d+/.test(value);
  },
  message: "昵称不能以数字开头",
});

// Install English and Arabic localizations.
localize("zh_CN", {
  messages: {
    ...zh.messages,
    required: (field) => "请输入" + field,
  },
  names: {
    email: "邮箱",
    password: "密码",
    code: "验证码",
    username: "用户名",
    name: "昵称",
  },
  fields: {
    password: {
      min: "密码不能小于6位",
    },
    catalog: {
      is_not: "请选择{_field_}",
    },
    email: {
      email: "请输入正确的{_field_}",
      required: "请输入{_field_}",
    },
    name: {
      min: (field, { length }) => {
        return `请在${field}输入至少${length}个字符`;
      },
    },
  },
});

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
