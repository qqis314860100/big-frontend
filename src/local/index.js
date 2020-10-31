import { Validator } from "vee-validate";

const dictionary = {
  "zh-CN": {
    message: {
      required: (field) => "请输入" + field,
      email: () => "请输入正确的邮箱格式",
    },
    attributes: {
      username: "用户名",
      email: "邮箱",
      password: "密码",
    },
  },
};

Validator.localize(dictionary);
