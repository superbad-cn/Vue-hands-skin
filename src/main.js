import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import mock from './mock'
import 'amfe-flexible';
import VueAMap from 'vue-amap';

Vue.config.productionTip = false

import { List, NavBar, Tabbar, TabbarItem, Toast, Icon, Picker } from 'vant';
Vue.use(List).use(NavBar).use(Tabbar).use(TabbarItem).use(Toast).use(Icon).use(Picker);
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
    key: 'b549803a6dc7381bdffe8682c1e2ad24',
    plugin: ['AMap.MarkerClusterer', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});

new Vue({
  store,
  router,
  mock,
  render: h => h(App)
}).$mount('#app')
