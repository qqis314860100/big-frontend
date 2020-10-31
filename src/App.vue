<template>
  <div id="app">
    <div class="layui-container layui-form-pane">
      <form class="layui-form" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">账号</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码框</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="password"
              required
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="layui-form-mid layui-word-aux">辅助文字</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="verification"
              name="verification"
              required
              lay-verify="required"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="layui-form-mid layui-word-aux">验证码</div>
        </div>
        <button type="button" class="layui-btn">点击登录</button>
        <a class="btn-link layui-btn" href="">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.layui-container {
  padding: 30px 0 10px 0px;
  width: 400px;
  margin: 100px auto 0;
}
.layui-form-item:nth-child(4) {
  position: relative;
  text-align: center;
}
.layui-btn {
  width: 100px;
}
</style>
