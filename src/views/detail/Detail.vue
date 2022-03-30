<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 账单详情 -->
    <MoneyDetail></MoneyDetail>
    <!-- 导航 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar/Tabbar";
import Header from "@/views/detail/Header";
import MoneyDetail from "@/views/detail/MoneyDetail";
export default {
  components: { Tabbar, Header, MoneyDetail },
};
</script>