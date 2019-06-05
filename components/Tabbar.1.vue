<template>
  <div>
    <div class="tabbar">
      <div class="tab active" :style="{ left: activeTab * 150 + 'px'}"></div>
      <div v-for="(tab, i) in tabs" :key="i" class="tab" @click="activeTab = i">
        <image class="icon" :src="tab.icon"></image>
        <text class="title">{{tab.title}}</text>
      </div>
    </div>
    <div class="tab-panels" :style="{ left: activeTab * -750 + 'px'}">
      <div class="panel" v-for="(panel, pi) in panels" :key="pi">
        <text class="content">{{panel.content}}</text>
      </div>
    </div>
  </div>
</template>

<script>
// import Item from '@/components/theitem'
// import My from '@/components/My'
// import router from '@/components/router'
export default {
  components:{
    // Item,
    // My
  },
  data:function() {
    return {
      activeTab: 0,
      selected:'skin',
      tabs: [{
      // tabbarDes: [{
        page:'/OfficeSpace',
        title: '办公空间',
        txt: '办公空间',
        icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png',
        normalImg:'//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png',
        activeImg:'//gw.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png'
      }, {
        page:'/Service',
        title: '服务及认证',
        txt: '服务及认证',
        icon: '//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png',
        normalImg:'//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png',
        activeImg:'//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png'
      }, {
        page:'/HomeRange',
        title: '圈子',
        txt: '圈子',
        icon: '//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png',
        normalImg:'//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png',
        activeImg:'//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png'
      }, {
        page:'/My',
        title: '我的',
        txt: '我的',
        icon: '//img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png',
        normalImg:'//gw.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png',
        activeImg:'//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png'
      }]
    }
  },
  methods: {
    linkTo (path) {
      // 点击后改变路由
      this.$router.push(path)
      // this.$router.push("/my")
    }
  },
  // methods:{
  //   getVal:function(res){
  //     this.selected = res;
  //   }
  // },
  computed: {
    panels () {
      return this.tabs.map(tab => ({ content: tab.page }))
    }
  },
  // computed:{
	// 		bol: function(){
	// 			if(this.sel == this.page){
	// 				return true;
	// 			}
	// 			return false;
	// 		}
	// 	},
	// methods:{
	// 	changePage:function(){
	// 		//点击跳转对应的页面
	// 		this.$router.push('/components'+this.page);
	// 		this.$emit('change',this.page)
  //   },
  //   jump:function() {
  //       router.push('/components/My')
  //     }
	// }
}
</script>

<style scoped>
  .tabbar {
    position: fixed;
    bottom:0px;
    flex-direction: row;
    background-color: #FF4563;
  }
  .tab {
    height: 120px;
    width: 180px;
    justify-content: center;
    align-items: center;
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(218, 59, 85);
    transition: left 0.2s ease-in-out;
  }
  .icon {
    width: 45px;
    height: 45px;
  }
  .title {
    font-size: 28px;
    color: #FFF;
    margin-top: 10px;
  }
  .tab-panels {
    
    /* position: fixed; */
    position: relative;
    /* bottom:120px; */
    width: 3750;
    flex: 1;
    flex-direction: row;
    align-items: stretch;
    background-color: #F5F5F5;
    transition: left 0.2s ease-in-out;
  }
  .tabberWarp img{
		margin-top: 10px;
		margin-bottom: 5px;
 
	}
	.tabberWarp{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding-bottom: 5px;
		background: rgb(233, 71, 71);
	}
  .warp{
		width: 100%;
		border-top: 1px solid #eee;
		background: rgb(42, 230, 98);
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 0;
	}
	.warp img{
		width: 20px;
		height: 20px;
	}

  .container {
    background-color:#f4f4f4;
  }
  .panel {
    flex-direction: row;
    height: 100px;
    border-bottom-width: 1px;
    justify-content: space-between;
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
