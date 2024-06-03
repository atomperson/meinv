import puppeteer from 'puppeteer'

export default (req, res) => {
  console.log('----- meizi project ----')

  console.log(puppeteer.configuration.cacheDirectory)

  // res.setHeader("Content-Type", "application/json")
  
  // res.write(JSON.stringify({
  //   code: 200,
  //   data: '测试文本', // puppeteer.configuration.cacheDirectory,
  //   msg: '成功'
  // }))

  return {
    body: JSON.stringify({
      code: 200,
      data: '测试文本',
      msg: '成功'
    }),
    status: 200
  }
}
