<template>
  <div class="money-detail wrapper">
    <div class="content">
      <div class="money-item">
        <div class="time color">
          <span class="left">03月06日 星期日</span>
          <span class="right">支出: 57</span>
        </div>
        <div class="details">
          <ul>
            <li>
              <div class="detail-title">
                <div class="icon"><i class="iconfont">&#xe660;</i></div>
                <span class="detail-name">零食 </span>
              </div>
              <div class="detail-money">-34</div>
            </li>
            <li>
              <div class="detail-title">
                <div class="icon"><i class="iconfont">&#xe660;</i></div>
                <span class="detail-name">零食</span>
              </div>
              <div class="detail-money">-34</div>
            </li>
            <li>
              <div class="detail-title">
                <div class="icon"><i class="iconfont">&#xe660;</i></div>
                <span class="detail-name">零食</span>
              </div>
              <div class="detail-money">-34</div>
            </li>
            <li>
              <div class="detail-title">
                <div class="icon"><i class="iconfont">&#xe660;</i></div>
                <span class="detail-name">零食</span>
              </div>
              <div class="detail-money">-34</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.wrapper {
  overflow: scroll;
}

.money-detail {
  width: 100%;
  height: 76vh;
}
.time {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid #ccc;
}
.details li {
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  border-bottom: 1px solid rgb(236, 236, 236);
  .detail-money {
    line-height: 25px;
  }
}
.detail-title {
  display: flex;
  align-items: center;
  .icon {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: rgb(236, 236, 236);
    text-align: center;
    line-height: 35px;
    color: #99ccff;
    margin-right: 10px;
  }
}
</style>