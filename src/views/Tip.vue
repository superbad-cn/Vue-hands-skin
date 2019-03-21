<template>
  <div class="tip-page">
    <div class="tip-icon">
      <img src="../assets/images/icons/tip-error.png" alt>
    </div>
    <div class="tip-title">无权访问</div>
    <div class="tip-text">无权访问当前页面, 请联系管理员!</div>
  </div>
</template>
<script>
export default {
  mounted() {},
  created() {},
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.tip-page {
  height: 100vh;
  background-color: #fff;
  text-align: center;
  .tip-icon {
    text-align: center;
    padding-top: 80px;
    img {
      max-height: 64px;
    }
  }
  .tip-title {
    font-size: 18px;
    line-height: 1;
    font-weight: bold;
    color: #000000;
    margin-top: 15px;
  }
  .tip-text {
    max-width: 280px;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    color: #999;
    margin: 15px auto 0;
  }
}
</style>