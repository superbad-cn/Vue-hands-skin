<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  font-family: "PingFang SC", "Adobe Heiti Std", "Microsoft Yahei", arial, helvetica, "Hei Ti", "微软雅黑体", "FangSong", "仿宋", clean, sans-serif !important;
  margin: 0 auto;
  background-color: #f2f3f4;
  color: #666;
}
h1, h2, h3, h4, h5{
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
  line-height: 1.4;
}
h1{
  font-size: 24px;
}
h2{
  font-size: 20px;
}
h3{
  font-size: 18px;
}
h4{
  font-size: 16px;
}
h5{
  font-size: 14px;
}
p {
  font-size: 14px;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 20px;
}
p:last-child {
  margin-bottom: 0;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
