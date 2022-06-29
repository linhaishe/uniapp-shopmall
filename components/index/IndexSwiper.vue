<template>
  <view class="index">
	  <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
	  	<swiper-item>
	  		<view class="swiper-item">
          <image class="swiper-img" src="../../static/images/swiperImgs/22.jpeg" mode=""></image>
        </view>
	  	</swiper-item>
	  	<swiper-item>
	  		<view class="swiper-item">
          <image class="swiper-img" src="../../static/images/swiperImgs/bg1.jpeg" mode=""></image>
        </view>
	  	</swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image class="swiper-img" src="../../static/images/swiperImgs/WechatIMG87.jpeg" mode=""></image>
        </view>
      </swiper-item>
	  </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {

  },
  methods: {

  }
}
</script>

<style scoped>
swiper {
  width: 100%;
  height: 400rpx;
}
.swiper-img {
  width: 100%;
  height: 400rpx;
}
</style>
