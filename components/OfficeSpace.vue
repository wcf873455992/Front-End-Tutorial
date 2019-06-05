<template>
  <div>
    <text >搜索......</text>
    <office/>
  </div>
</template>
<script>
import office from '@/components/office'

export default {
  // name: 'App',
  components: {
    office
  },
}
</script>

<style scoped>
  .message{    
    /* position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center; */
  }
</style>


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
