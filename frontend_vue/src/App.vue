<template>
  <div id="app">
    <!-- <dv-full-screen-container> -->
      <el-container class="container">
        <el-header class="header">
          <div><Clock /></div>
          <div class="layout-header-title">
              <div>新冠疫情模拟预测与多尺度舆情监测分析系统</div>
              <dv-decoration-5 class="title-decorate" />
          </div>
          <div class="layout-header-menu">
              <span><dv-border-box-7><span class="menu-item">
                  <router-link to="/">舆情信息</router-link>
              </span></dv-border-box-7></span>
              <span><dv-border-box-7><span class="menu-item">
                <router-link to="/analysis">疫情分析</router-link>
              </span></dv-border-box-7></span>
          </div>
        </el-header>
        <el-main class="main">
         <router-view/>
        </el-main>
      </el-container>
    <!-- </dv-full-screen-container> -->
  </div>
</template>

<script>
import Clock from '@/components/clock'
export default {
  components: {Clock}
}
</script>

<style lang="less" scoped>
  @import url(./assets/style/variable.less);
  .container {
    height: 100%;
  }
  .header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    color: inherit;
    &>div {
      width: 33%;
    }
    .layout-header-title {
      font-size: 16px;
      line-height: 2em;
      padding-top: 10px;
      text-align: center;
    }
    .title-decorate {
      height: @font-size-1 * 1.5;
    }
  }
  .layout-header-menu {
    display: flex;
    justify-content: flex-end;
    span {
        display: inline-block;
        margin: 0 5px;
        .menu-item {
            padding: 5px;
            a {
                font-size: @font-size-1;
                color: inherit;
                text-decoration: none;
            }
        }
    }
  }
  .main {
    // height: calc(100% -20px);
  }
</style>
