<template>
  <div id="topbar">
      <div class="log">
          VueResumer
      </div>
      <div class="actions">
          <el-button>注册</el-button>
          <el-button type="primary">登录</el-button>
      </div>
  </div>
</template>

<style lang="scss">
    #topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;//约定用8的倍数
        font-size: 20px;
    }
</style>
