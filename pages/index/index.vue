<template>
  <view class="index">
    <!--    微信小程序适配-->
    <!-- #ifdef MP-WEIXIN-->
    <view class="wx-nav">
      <view class="iconfont icon-fangdajing"></view>
      <text>百年奥莱</text>
      <view class="iconfont icon-xiaoxi"></view>
    </view>
    <!-- #endif -->
    <IndexSwiper></IndexSwiper>
    <Recommend></Recommend>
    <Card cardTitle="猜你喜欢"></Card>
    <CommodityList></CommodityList>
  </view>
</template>

<script>
import $http from '../../common/request/http.js'
import IndexSwiper from "../../components/index/IndexSwiper";
import Recommend from "../../components/index/Recommend";
import Card from "../../components/common/Card";
import CommodityList from '../../components/common/CommodityList'

export default {
  data() {
    return {}
  },
  components: {
    IndexSwiper,
    Recommend,
    Card,
    CommodityList
  },
  onLoad() {
    $http.request(
        {
          url: '/123',
        }
    ).then((res) => {
      console.log(res);
    }).catch(() => {
      console.log('请求失败');
    });
  },
  methods: {}
}
</script>

<style>
.wx-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
