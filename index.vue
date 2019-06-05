<template>
  <div class="container">
    <router-view/>
    <!-- <image :src="logo" class="logo" /> -->
    <!-- <text class="greeting">The environment is ready!</text> -->
    <div class="panel">
      <text class='link' @click='linkTo("/")'>办公空间</text>
      <text class='link' @click='linkTo("/service")'>服务</text>
      <text class='link' @click='linkTo("/homerange")'>圈子</text>
      <text class='link' @click='linkTo("/my")'>我的</text>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  methods: {
    linkTo (path) {
      // 点击后改变路由
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }

  .container {
    background-color:#f4f4f4;
  }

  .panel {
    position: fixed;
    bottom: 0px;
    left: 0px;
    height: 100px;
    width: 750px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    /* position: fixed;
    bottom: 0px;
    left: 0px;
    flex-direction: row;
    height: 100px;
    border-bottom-width: 1px;
    justify-content: space-between; */
}
  .titlePanel {
    justify-content: center;
    background-color: #ededed;
  }
  .title {
    height: 100px;
    line-height: 100px;
  }
  .link{
    line-height: 100px;
    text-align: center;
    flex: 1
  }
</style>
