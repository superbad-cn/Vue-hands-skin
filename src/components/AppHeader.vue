<template>
  <div class="nav-bar-wrap">
    <van-nav-bar
      class="nav-bar"
      :title="title"
      :left-text="lefttext"
      :left-action="leftaction"
      :right-text="righttext"
      :left-arrow="leftarrow"
      fixed
      @click-left="onClickLeft"
      :z-index='999'
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "Title"
    },
    lefttext: {
      type: String,
      default: ""
    },
    leftaction: {
      type: Boolean,
      default: false
    },
    righttext: {
      type: String,
      default: ""
    },
    leftarrow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickLeft() {
      //如果不能后退，跳转到首页
      if (window.history.length <= 1) {
        this.$router.push("/");
      } else {
        if (this.leftaction) {
          this.$emit("backto");
        } else {
          this.$router.back();
        }
      }
    }
  }
};
</script>
<style lang="scss">
.nav-bar-wrap {
  padding-bottom: 46px;
  .nav-bar {
    background-color: #fff;
    color: #000;
    .van-nav-bar__left,
    .van-nav-bar__right {
      .van-nav-bar__text,
      .van-icon {
        font-weight: bold;
        color: #000;
      }
    }
  }
}
</style>
