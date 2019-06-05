<template>
  
  <list class="list">
    <cell class="card-cell" v-for="item in boxes">
      <div class="card">
        <!-- <text class="A-title">{{item.title}}</text> -->
        <!-- <text class="A-desc" lines="2">{{item.desc}}</text> -->
        <div class="row" style="padding-bottom:18px">
          <div class="card-side">
            <image class="card-poster" :src="source" v-for="(source, i) in item.pictures" :key="i" />
              <!-- <image class="card-poster" :src="item.poster"></image> -->
          </div>
          <div class="card-message">
            <text class="card-title">{{item.building}}  可租{{item.quantity}}套</text>
            <text class="card-line">面积:{{item.area}}</text>
            <text class="card-line">地区:{{item.region}}  {{item.price}}元/㎡·天</text>
            <text class="card-line">地址:{{item.addr}}</text>
          </div>
        </div>
      </div>
    </cell>
  </list>
</template>

<style scoped>
  .list {
    width: 750px;
    background-color: rgb(240, 247, 242);
  }
  .row {
    flex-direction: row;
  }
  .card {
    width:800;
    margin: 5px;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
  }
  .card-banner {
    width: 222px;
    height: 60px;
  }
  .card-side {
    padding: 20px;
  }
  .card-poster {
    width: 260px;
    height: 230px;
    margin-right: 20px;
  }
  .card-title {
    font-size: 30px;
    color: #181616;
    /* margin-top: 10px; */
    padding-bottom: 5px;
  }
  .card-line {
    align-items: left;
    font-size: 25px;
    padding-top: 5px;
    /* padding-bottom: 5px; */
  }
  .card-icon {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
  .card-subtitle {
    font-size: 28px;
    color: #38eb14;
  }
  .card-progress {
    flex-direction: row;
    align-items: center;
    width: 230px;
    height: 30px;
    background-color: #FEC1C1;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .card-progress-inner {
    position: absolute;
    height: 30px;
    left: 0;
    border-radius: 20px;
    background-color: #ff3c32;
  }
  .card-got {
    position: absolute;
    left: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px
  }
  .card-remain {
    position: absolute;
    right: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px;
  }
  .card-info {
    width: 400px;
    flex-direction: row;
    align-items: flex-end;
  }
  .card-price {
    font-size: 52px;
    color: #ff3c32;
    margin-bottom: -10px;
    margin-top: 10px;
    margin-right: 8px;
  }
  .card-sale-price {
    font-size: 28px;
    color: #999999;
    text-decoration: line-through;
  }
  .card-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #ff5d62;
    border-radius: 8px;
    width: 125px;
    height: 52px;
    justify-content: center;
  }
  .card-btn-text {
    color: #FFFFFF;
    font-size: 32px;
    text-align: center;
  }

</style>

<script>
  export default {
    data () {
      return {
        boxes: [{
          building: '华一·东朔商务中心',
          icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png',
          region:'闵行区-闵行',
          area:'90~200㎡',
          addr:'上海市闵行区莲花路1555号',
          quantity:50,
          price:3.5,

          title: '就造专属感，给孩子寻个座椅好玩伴',
          desc: '犹记得儿时的风筝带着斑斓的色彩在天空飘过；那小河里躲迷藏的鱼虾，还待着小伙伴们一起去捕捉，如今的孩童没有了这些简单且纯粹的娱乐项目，生活在高楼城市中的他们，该当怎样度过自己的童年才是美好的？',
          pictures: [
            'https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg',
            ],
          count: 237,
        }, {
          building: '华二·东朔商务中心',
          icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png',
          region:'闵行区-闵行',
          area:'90~200㎡',
          addr:'上海市闵行区莲花路1555号',
          quantity:50,
          price:3.5,
          title: '睡袍穿不对，脱光也不媚！',
          desc: '“Ihatemynightgown（我讨厌我的睡袍）.”经典电影《罗马假日》中，赫本饰演的安妮公主躺在梦幻的宫廷大床上，抱怨她身上那华丽的大睡袍臃肿不便，为公主的浪漫逃逸埋下伏笔。想象一下，男朋友刚刚',
          pictures: [
            'https://gw.alicdn.com/imgextra/i3/3044653839/TB2a_nAXgsSMeJjSspdXXXZ4pXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
            // 'https://gw.alicdn.com/imgextra/i1/3044653839/TB2qrPCXiERMeJjSspiXXbZLFXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
            // 'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'
          ],
          count: 876,
        }, {
          building: '华三·东朔商务中心',
          icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png',
          region:'闵行区-闵行',
          area:'90~200㎡',
          addr:'上海市闵行区莲花路1555号',
          quantity:50,
          price:3.5,
          title: '上天入海？运动相机帮你搞定',
          desc: '现如今相机好像成为了我们每个人必不可少的装备，不管是专业的相机还是我们可拍照的手机，我们使用到它的频率也越来越高。为了追求更好的拍摄质量，人们似乎也愿意花更多的钱去购买好的拍摄装备',
          pictures: [
            'https://gw.alicdn.com/tfscom/i3/462856946/TB2VzQswB4lpuFjy1zjXXcAKpXa_!!462856946.jpg_250x250q90s200.jpg',
            // 'https://gw.alicdn.com/tfscom/i2/2811920170/TB2rCqHpVXXXXcZXpXXXXXXXXXX_!!2811920170.png_250x250.jpg',
            // 'https://gw.alicdn.com/imgextra/i4/836552381/TB2c1q3aZSfF1JjSsplXXbrKFXa_!!836552381-0-beehive-scenes.jpg_250x250q90s200.jpg'
          ],
          count: 59,
        }, {
          building: '华四·东朔商务中心',
          icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png',
          region:'闵行区-闵行',
          area:'90~200㎡',
          addr:'上海市闵行区莲花路1555号',
          quantity:50,
          price:3.5,
          title: '关于培根的那些事，教你吃得门清',
          desc: '培根一直被认为是早餐的头盘，早上烤两片面包，平底锅煎一片培根、一个鸡蛋，和生菜一起夹在面包中，有荤有素，就是一顿丰富美味的西式早餐。培根的英文名是“Bacon”，原意是烟熏的猪肋条肉，或烟熏背脊肉',
          pictures: [
            'https://gw.alicdn.com/imgextra/i2/603964020/TB24zFbarwTMeJjSszfXXXbtFXa_!!603964020-0-daren.jpg_250x250q90s200.jpg',
            // 'https://gw.alicdn.com/imgextra/i2/603964020/TB2txtdarsTMeJjy1zcXXXAgXXa_!!603964020-0-daren.jpg_250x250q90s200.jpg',
            // 'https://gw.alicdn.com/tfscom/i3/1635378022/TB2plKDbFXXXXaTXpXXXXXXXXXX-1635378022.jpg_250x250q90s200.jpg'
          ],
          count: 3576,
        }, {
          building: '华五·东朔商务中心',
          icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png',
          region:'闵行区-闵行',
          area:'90~200㎡',
          addr:'上海市闵行区莲花路1555号',
          quantity:50,
          price:3.5,
          title: '轻奢风来袭，皮艺床打造典雅居室',
          desc: '对于追求生活高品质感的小伙伴来说，皮艺家具是展现其高格调的途径之一。想要营造出奢华质感的卧室环境，大气庄重的皮床当然是不错的选择。特别是简欧风或是美式古典风格的家居环境，如果配以皮艺床简直就是点睛之笔',
          pictures: [
            'https://gw.alicdn.com/imgextra/i2/787557947/TB2erNKawoQMeJjy0FoXXcShVXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg',
            // 'https://gw.alicdn.com/imgextra/i1/787557947/TB2KANyaBUSMeJjy1zkXXaWmpXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg',
            // 'https://gw.alicdn.com/imgextra/i3/787557947/TB2lwdGayERMeJjy0FcXXc7opXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg'
          ],
          count: 36,
        }]
      }
    }
  }
</script>
