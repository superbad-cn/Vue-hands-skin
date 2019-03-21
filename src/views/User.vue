<template>
  <div class="user-page">
    <AppHeader title="我的" leftarrow></AppHeader>
    <markers></markers>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppBottom';
import markers from '../components/markers';
export default {
  mounted() {},
  created() {
    this.$store.dispatch('setIndex', 1);
  },
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppFooter,
    markers
  },
  methods: {}
};
</script>
<style lang="scss">
.user-page{
  padding-bottom: 50px;
}
</style>
