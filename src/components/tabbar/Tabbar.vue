<template>
  <div class="tabbar">
    <div class="tabbar-item">
      <div>
        <i
          class="iconfont"
          :class="{ yellow: $route.path.includes('/detail') }"
          @click="setActive('/detail')"
          >&#xe625;</i
        >
      </div>
      <div>明细</div>
    </div>
    <div class="tabbar-item" @click="setActive('/detailType')">
      <div class="addbook">+</div>
    </div>
    <div class="tabbar-item">
      <div>
        <i
          class="iconfont"
          :class="{ yellow: $route.path.includes('/echars') }"
          @click="setActive('/echars')"
          >&#xeb96;</i
        >
      </div>
      <div>图表</div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      active: false,
    };
  },
  methods: {
    setActive(path) {
      if (this.$route.path == path) return;
      this.$router.push(path);
      this.active = !this.active;
    },
  },
};
</script>

<style lang="less" scoped>
.yellow {
  color: yellowgreen;
}
.tabbar {
  background: #fff;
  z-index: 999;
  border-top: 1px solid #ccc;
  width: 100%;
  height: 52px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
}
.tabbar-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  i {
    font-size: 28px;
  }
}
.addbook {
  position: absolute;
  top: -25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffcc99;
  text-align: center;
  line-height: 47px;
  font-size: 30px;
  border-top: 2px solid #ccc;
  border-left: 2px solid #ccc;
  border-right: 2px solid #ccc;
}
</style>