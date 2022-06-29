<template>
  <view>
<!--  这个组件用于接受不同的值，展示不同的商品。因为在不同的地方需要展示不一样格式的图片列表-->
  <Commodity :itemList="commodityLists"></Commodity>
  </view>
</template>

<script>
import Commodity from '../common/Commodity';
export default {
  data() {
    return {
      commodityLists: [
        {
          id: 1,
          imgUrl: '../../static/images/swiperImgs/bg1.jpeg',
          name: '111',
          pprice: '299',
          oprice: '499',
          discount: '5.2'
        },
        {
          id: 2,
          imgUrl: '../../static/images/swiperImgs/bg1.jpeg',
          name: '222',
          pprice: '299',
          oprice: '499',
          discount: '5.2'
        },
        {
          id: 3,
          imgUrl: '../../static/images/swiperImgs/bg1.jpeg',
          name: '444',
          pprice: '299',
          oprice: '499',
          discount: '5.2'
        },
      ]
    }
  },
  components: {
    Commodity
  }
}
</script>

<style scoped>
</style>
