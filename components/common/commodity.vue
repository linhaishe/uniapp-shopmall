<template>
  <view class="commodity">
    <view v-for="(item, index) in itemList"
          :key="index"
          class="commodity-item"
    >
      <image :src="item.imgUrl" class="commodity-img"></image>
      <view class="commodity-content">
        <text class="commodity-name">{{ item.name }}</text>
        <view>
          <text class="pprice">${{ item.pprice }}</text>
          <text class="oprice">${{ item.oprice }}</text>
        </view>
        <text class="discount">${{ item.discount }} off</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    itemList: Array
  }
}
</script>

<style scoped>
.commodity {
  display: flex;
  flex-wrap: wrap;
}

.commodity-item {
  width: 355rpx;
  padding-bottom: 20rpx;
  margin: 0 10rpx;
}

.commodity-img {
  width: 100%;
  height: 375rpx;
}

.commodity-content {
  text-align: center;
}

.commodity-name {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #333333;
  word-break: break-all;
  padding: 6rpx 20rpx;
}

.oprice {
  text-decoration: line-through;
  font-size: 24rpx;
  color: #999999;
}

.discount {
  border-radius: 4rpx;
  border: 1rpx solid #FF3333;
  padding: 2rpx 10rpx;
  font-size: 20rpx;
  color: #ff3333;
}
</style>
