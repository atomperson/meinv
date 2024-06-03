import fs from 'fs'
import path from 'path'
import childProcess from 'child_process'
import puppeteer from 'puppeteer'

const chromePath = path.join(__dirname ,'chrome-headless-shell')

const isExists = fs.existsSync(chromePath)

// function getAllFilesInfo(dirPath) {
//     const itemsInfo = [];
 
//     function traverseDirectory(currentPath) {
//         const items = fs.readdirSync(currentPath);
 
//         for (const item of items) {
//             const itemPath = path.join(currentPath, item);
//             const stat = fs.statSync(itemPath);
 
//             if (stat.isFile() || stat.isDirectory()) {
//                 itemsInfo.push({
//                     name: item,
//                     path: itemPath,
//                     size: stat.size,
//                     createdAt: stat.ctime,
//                     modifiedAt: stat.mtime,
//                     isDirectory: stat.isDirectory()
//                 });
//             }
 
//             if (stat.isDirectory()) {
//                 traverseDirectory(itemPath);
//             }
//         }
//     }
 
//     traverseDirectory(dirPath);
//     return itemsInfo;
// }

function getChromePath() {
    if(!isExists) {
        const chrome = childProcess.execSync('@puppeteer/browsers install chrome-headless-shell').toString()
        console.log('---- install path ----')
        console.log(chrome)
    }
    return getAllFilesInfo(chromePath)
}

const folderAndFileList = getChromePath()

// async function main() {
//     const browserFetcher = puppeteer.createBrowserFetcher()

//     const browserList = await browserFetcher.localRevisions()

//     console.log(browserList)
// }


export default async () => {
  // await main()
 
  return {
    body: JSON.stringify({ code: 200, data: 'xx--xx--xx', msg: '成功' }),
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    status: 200
  }
}
