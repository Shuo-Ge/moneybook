<template>
  <div class="bg">
    <div class="header">小拐拐记账</div>
    <div class="money">
      <div class="time">
        <span class="year color">{{ year == "" ? 2022 : year }}</span>
        <div class="time-month">
          <span class="time-number">{{ month == "" ? "03" : month }}</span
          ><span>月</span><i class="sanjiao" @click="showTime"></i>
        </div>
      </div>
      <div class="comeout">
        <div class="come">
          <div class="title color">收入</div>
          <div class="come-money"><strong>125</strong>.00</div>
        </div>
        <div class="out">
          <div class="title color">支出</div>
          <div class="come-money"><strong>0</strong>.00</div>
        </div>
      </div>
    </div>

    <!-- 选择年月 -->
    <van-datetime-picker
      v-if="showTimes"
      v-model="currentDate"
      type="year-month"
      title="选择年月"
      :loading="isLoadingShow"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
      :visible-item-count="3"
      @confirm="sureTime"
      @cancel="cancelTime(value)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: "",
      month: "",
      isLoadingShow: true,
      showTimes: false,
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
    };
  },
  methods: {
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return val;
    },
    // 显示时间选择器
    showTime() {
      this.showTimes = true;
      setTimeout(() => {
        this.isLoadingShow = false;
      }, 500);
    },
    // 取消按钮
    cancelTime() {
      setTimeout(() => {
        this.isLoadingShow = false;
      }, 500);
      this.showTimes = false;
    },
    sureTime(value) {
      let year = value.getFullYear();
      let month = value.getMonth() + 1;
      if (month >= 1 && month <= 9) {
        month = `0${month}`;
      }
      this.year = year;
      this.month = month;
      this.showTimes = false;
    },
  },
};
</script>

<style lang="less" scoped>
.van-datetime-picker {
  width: 100%;
  position: absolute;
  bottom: 50px;
}
.bg {
  width: 100%;
  height: 120px;
  background: #99ccff;
}
.header {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  font-weight: bold;
}
.money {
  width: 100%;
  height: 70px;
  border: 0;
  display: flex;
}
.time {
  flex: 1;
  text-align: center;
}
.comeout {
  flex: 3;
  display: flex;
  justify-content: space-around;
  strong {
    font-size: 30px;
    font-weight: 350;
  }
}
.time-month {
  border-right: 1px solid;
}
.sanjiao {
  display: inline-block;
  border-width: 10px 10px 0 10px;
  border-color: #000 transparent transparent transparent;
  border-style: solid;
}
.time-number {
  font-size: 30px;
  font-weight: bold;
}
</style>