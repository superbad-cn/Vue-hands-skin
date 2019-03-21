<template>
  <div class="appBottom">
    <van-tabbar
      v-model="active"
      active-color="#2E5BBD"
      style="box-shadow: 0px 0px 12px rgba(0,0,0,0.16);"
    >
      <van-tabbar-item to="/" class="tabbar-text">
        <img slot="icon" slot-scope="props" :src="props.active ? icon01.active : icon01.normal">
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/user" class="tabbar-text">
        <img slot="icon" slot-scope="props" :src="props.active ? icon02.active : icon02.normal">
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  mounted() {},
  created() {
		this.active = this.tabbarIndex;
	},
  data() {
    return {
      active: this.tabbarIndex,
      icon01: {
        normal: require("../assets/images/icons/index.png"),
        active: require("../assets/images/icons/index-active.png")
      },
      icon02: {
        normal: require("../assets/images/icons/user.png"),
        active: require("../assets/images/icons/user-active.png")
      },
    };
  },
  computed: {
    ...mapGetters(["tabbarIndex"])
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.appBottom {
  position: fixed;
  bottom: 0;
  z-index: 999;
  .tabbar-text {
    color: #999;
    font-weight: bold;
  }
  .van-info{
    background-color: #2E5BBD;
  }
  .van-tabbar-item__text {
    font-weight: bold;
  }
}
</style>
