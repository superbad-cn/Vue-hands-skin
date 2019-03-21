<template>
  <div class="home">
    <AppHeader title="首页"></AppHeader>
    <list class="list" v-bind:finished="finished" @loadData="loadData">
      <div class="item" v-for="(item, index) in list" :key="index">
        <img :src="item.img" alt="">
        <div class="item-info">
          <div class="title">{{ item.title}}</div>
          <div class="excerpt">{{ item.excerpt}}</div>
          <div class="date">{{ item.date}}</div>
        </div>
      </div>
    </list>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import { getMockList } from '../http/api';
import list from '../components/List';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppBottom';
export default {
  name: 'home',
  components: {
    AppHeader,
    AppFooter,
    list
  },
  created(){
    this.$store.dispatch('setIndex', 0);
  },
  data(){
    return {
      list: [],
      currentPage: 1,
      finished: false
    }
  },
  methods: {
    loadData() {
      let that = this
      getMockList({ page: this.currentPage }).then(res => {
        if (res.meta.total == 0) {
          that.finished = true;
        }
        if (res.meta.to == res.meta.total) {
          that.finished = true;
        }
        this.list = [...this.list, ...res.data];
        this.currentPage += 1;
        // console.log(this.list)
      });
    }
  },
}
</script>
<style lang="scss">
.home{
  padding-bottom: 60px;
  .list{
    .item{
      background-color: #fff;
      padding: 15px;
      margin-bottom: 2px;
      display: flex;
      img{
        max-height: 90px;
        margin-right: 15px;
      }
      .item-info{
        .title{
          font-weight: bold;
          font-size: 16px;
          line-height: 1.4;
          color: #000;
          margin-bottom: 10px;
        }
        .excerpt,
        .date {
          font-size: 12px;
          line-height: 1.4;
          color: #999;
          margin-bottom: 10px;
        }
        .date{
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>