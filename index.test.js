const {urlTypeFilter} = require('./util')



test('basic',  () => {
  const url =
    'https://bbu.hk'
  const output =urlTypeFilter("https://bbu.hk/wp-content/themes/generatepress/fonts/generatepress.eot",url)

  expect(output).toEqual(false)

})


test('basic check',  () => {
  const url =
    'https://bbu.hk'
  const output =urlTypeFilter("https://bbu.hk",url)

  expect(output).toEqual(true)

})




test('basic',  () => {
  const url =
    'https://bbu.hk/image/upload/q_auto:low/w_800/v1568188579/mgtmqq91ekj6xplf6pxm.png'
  const output =urlTypeFilter(url,"https://bbu.hk")

  expect(output).toEqual(false)

})


test('basic',  () => {
  const url =
    'https://bbu.hk/image/upload/q_auto:low/w_800/v1568188579/mgtmqq91ekj6xplf6pxm.html'
  const output =urlTypeFilter(url,"https://bbu.hk")
  expect(output).toEqual(true)
})

test('basic failse',  () => {
  const url =
    'https://est.hk/image/upload/q_auto:low/w_800/v1568188579/mgtmqq91ekj6xplf6pxm.png'
  const output =urlTypeFilter(url,"https://bbu.hk")

  expect(output).toEqual(false)
})
test('basic',  () => {
  const url =
    'https://bbu.h1/image/upload/q_auto:low/w_800/v1568188579/mgtmqq91ekj6xplf6pxm.html'
  const output =urlTypeFilter(url,"https://bbu.hk")
  expect(output).toEqual(false)

})


test('basic',  () => {
  const url =
    'https://bbu.hk/wp-content/themes/generatepress/fonts/generatepress.eot'
  const output =urlTypeFilter(url,"https://bbu.hk")
  expect(output).toEqual(false)
})


test('basic same domain no extension',  () => {
  const url =
    'https://bbu.hk/how-to-buy-watch-in-us/'
  const output =urlTypeFilter(url,"https://bbu.hk")
  expect(output).toEqual(true)
})


test('basic same domain no extension',  () => {
  const url =
    'https://bbu.hk/%e5%a6%82%e4%bd%95%e7%b3%bb%e7%be%8e%e5%9c%8bamazon%e5%85%8d%e9%81%8b%e8%b2%bb%e9%81%8b%e9%a6%99%e6%b8%af/'
  const output =urlTypeFilter(url,"https://bbu.hk")
  expect(output).toEqual(true)
})



test('basic no extension outside',  () => {
  const url =
    'https://fonts.googleapis.com/css?family=Catamaran:100,200,300,regular,500,600,700,800,900%7CPlayfair+Display:regular,italic,700,700italic,900,900italic%7CLato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic'
  const output =urlTypeFilter(url,"https://bbu.hk")
  expect(output).toEqual(false)
})


test('basic outside',  () => {
  const url =
    'https://cdn.shortpixel.ai/client/q_lossy'
  const output =urlTypeFilter(url,"https://bbu.hk")
  expect(output).toEqual(false)
})