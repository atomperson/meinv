import puppeteer from 'puppeteer'

export default (req, res) => {
  console.log('----- meizi project ----')
  
  res.write(JSON.stringify({
    code: 200,
    data: puppeteer.configuration.cacheDirectory,
    msg: '成功'
  }))
}
