import chrome from 'chrome-aws-lambda'

// const browser = BrowserLess()

// console.log(browser)

console.log(11)

export default async () => {
    console.log(await chrome.executablePath)
    return {
        body: JSON.stringify({ code: 200, data: 'xx--xx--xx', msg: '成功' }),
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        status: 200
    }
}
