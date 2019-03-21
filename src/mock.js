import Mock from 'mockjs'
const Random = Mock.Random
const homeMock = Mock.mock(RegExp("/api/home.*"), 'post', (options) => {
  let page = JSON.parse(options.body).page;
  let data1 = [],
      data2 = [],
      data3 = [];
  for (let i = 0; i < 20; i++) {
    let newArticleObject = {
      id: i + 1,
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      status: '待审批',
      excerpt: Random.csentence(80),
      img: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    if (i <= 7){
      data1.push(newArticleObject)
    } else if (7< i <= 15) {
      data2.push(newArticleObject)
    } else if (16 < i) {
      data3.push(newArticleObject)
    }
  }
  if(page == 1){
    return {
      data: data1,
      meta: {
        current_page: 1,
        from: 1,
        last_page: 3,
        per_page: 8,
        to: 8,
        total: 20
      }
    }
  } else if(page == 2){
    return {
      data: data1,
      meta: {
        current_page: 2,
        from: 9,
        last_page: 3,
        per_page: 8,
        to: 16,
        total: 20
      }
    }
  } else if(page == 3){
    return {
      data: data1,
      meta: {
        current_page: 3,
        from: 17,
        last_page: 3,
        per_page: 8,
        to: 20,
        total: 20
      }
    }
  }
});

const mapMock = Mock.mock(RegExp("/api/map.*"), 'get', () => {
  let data = [];
  for (let i = 0; i < 10; i++) {
    let mapItem = {
      id: i + 1,
      name: Random.csentence(5, 20), //  Random.csentence( min, max )
      address: Random.county(true),
      latitude: '31.249460928144',
      longitude: "121.45568870008",
      image: Random.dataImage('100x100', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    data.push(mapItem)
  }
  return {
    data: data
  }
});
export default {
  homeMock,
  mapMock
}