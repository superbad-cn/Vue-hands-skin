<template>
  <div id="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <slot></slot>
    </van-list>
  </div>
</template>
<script>
export default {
  props:{
    loadStatus: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    }
  },
  mounted() {},
  created() {},
  data() {
    return {
      loading: false
    };
  },
  components: {},
  methods: {
    onLoad() {
      this.loading = true;
      this.$emit('loadData');
      this.loading = false;
    }
  }
};
</script>