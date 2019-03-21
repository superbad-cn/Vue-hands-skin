<template>
  <div class="amap-page-container">
    <el-amap vid="amap" :center="center" :zoom="zoom" class="amap-container">
      <el-amap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :content="marker.content"
        :offset="[-25,-50]"
        :position="marker.position"
        :events="marker.events"
      ></el-amap-marker>
      <el-amap-info-window
        v-if="window"
        :position="window.position"
        :visible="window.visible"
        :content="window.content"
      ></el-amap-info-window>
    </el-amap>
    <div class="markers-list">
      <div v-show="!listVisible" class="nav">
        <button class="btn" href="javascript:;" @click="showList()">
          <van-icon name="location" size="30px"/>
          <span class="btn-text">更多</span>
        </button>
        <router-link to="#" class="markers-info-wrap">
          <div class="markers-info">
            <div class="title">{{ currentMarker.name }}</div>
            <p class="address">{{ currentMarker.address }}</p>
          </div>
          <div class="go-detail">查看详情 ></div>
        </router-link>
      </div>
      <van-picker
        v-show="listVisible"
        show-toolbar
        confirm-button-text="完成"
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      zoom: 15,
      center: ["31.249460928144", "121.45568870008"],
      markers: [],
      windows: [],
      window: "",
      currentMarker: {},
      columns: [],
      listVisible: false
    };
  },

  mounted() {
    let self = this;
    axios
      .get("/map")
      .then(function(response) {
        let markers = [];
        // let windows = [];
        let data = response.data.data;
        data.forEach((item, i) => {
          markers.push({
            id: item.id,
            name: item.name,
            address: item.address,
            position: [item.longitude, item.latitude],
            icon: item.image,
            content:
              '<img height="50px" width="50px" src="' + item.image + '">',
            events: {
              click() {
                self.center = [data[i].longitude, data[i].latitude];
                self.currentMarker = {
                  id: data[i].id,
                  name: data[i].name,
                  address: data[i].address,
                  position: [data[i].longitude, data[i].latitude]
                };
              }
            }
          });
          self.columns.push(item.name);
        });
        self.markers = markers;
        self.currentMarker = data[0];
        self.center = [
          self.currentMarker.longitude,
          self.currentMarker.latitude
        ];
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    showList() {
      this.listVisible = true;
    },
    onConfirm(value, index) {
      this.listVisible = false;
      this.currentMarker = this.markers[index];
      this.center = [
        this.markers[index].position[0],
        this.markers[index].position[1]
      ];
    },
    onCancel() {
      this.listVisible = false;
    }
  }
};
</script>
<style lang="scss">
.amap-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.markers-list {
  position: fixed;
  bottom: 50px;
  width: 100%;
  z-index: 999;
  .nav {
    background-color: #fff;
    padding: 15px;
    -moz-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
    -webkit-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
    -ms-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
    -o-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
    .btn {
      position: absolute;
      height: 70px;
      width: 70px;
      top: -80px;
      right: 10px;
      border: 0;
      -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
      -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
      -ms-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
      -o-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
      -webkit-border-radius: 35px;
      -moz-border-radius: 35px;
      -ms-border-radius: 35px;
      -o-border-radius: 35px;
      border-radius: 35px;
      background-color: #fff;
      color: #e73d74;
      .btn-text {
        display: block;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
  .title {
    font-size: 16px;
    line-height: 1.4;
    color: #000;
    margin: 0 0 5px;
    font-weight: bold;
  }
  .address {
    font-size: 12px;
    line-height: 1.4;
    color: #999;
    margin: 0;
  }
}

.markers-info-wrap {
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: box;
  display: flexbox;
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  -o-justify-content: space-between;
  justify-content: space-between;
  .markers-info {
    padding-right: 15px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
  .go-detail {
    width: 75px;
    text-align: right;
    font-size: 14px;
    color: #e73d74;
    font-weight: bold;
  }
}
.amap-marker-content img {
  border-radius: 100%;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
}
</style>