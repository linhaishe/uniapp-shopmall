<template>
  <view class="recommend">
    <view class="recommend-item">
      <image class="item-big" src="../../static/images/swiperImgs/bg1.jpeg"></image>
      <view class="item-small">
        <image class="item-img" src="../../static/images/swiperImgs/22.jpeg"></image>
        <image class="item-img" src="../../static/images/swiperImgs/22.jpeg"></image>
        <image class="item-img" src="../../static/images/swiperImgs/22.jpeg"></image>
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style scoped>
.recommend {
  padding: 20rpx;
}
.recommend-item {
  display: flex;
  flex-flow: column;
  border-radius: 20rpx;
  border: 2rpx solid #CCCCCC;
  overflow: hidden;
}
.item-big {
  width: 100%;
  height: 300rpx;
}
.item-small {
  height: 240rpx;
  width: 100%;
}

.item-img {
  width: 33.33%;
  height: 240rpx;
}
</style>
