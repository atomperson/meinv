import fs from 'fs'
import path from 'path'
import childProcess from 'child_process'
import puppeteer from 'puppeteer'

const chromePath = path.join(__dirname ,'chrome-headless-shell')

const isExists = fs.existsSync(chromePath)

const itemsInfo = []

// console.log('---dir', fs.readdirSync(__dirname))

// console.log('---dir-', fs.readdirSync(path.join(__dirname, '../')))

function getAllFilesInfo(dirPath) {
    function traverseDirectory(currentPath) {
        fs.readdir(currentPath, (err, items) => {
            if(err) {
                itemsInfo.push({ name: currentPath, path: currentPath, err: err })
            } else {
                for(const item of items) {
                    const itemPath = path.join(currentPath, item)
                    const stat = fs.statSync(itemPath)

                    if (stat.isFile() || stat.isDirectory()) {
                        itemsInfo.push({
                            name: item,
                            path: itemPath,
                            size: stat.size,
                            isDirectory: stat.isDirectory()
                        })
                    }
             
                    if (stat.isDirectory()) {
                        traverseDirectory(itemPath)
                    }
                }
            }
        })

        traverseDirectory(dirPath)
        
        // const items = fs.readdir(currentPath, (err, items) => {
        //     for (const item of items) {
        //     const itemPath = path.join(currentPath, item);
        //     const stat = fs.statSync(itemPath);
     
        //     if (stat.isFile() || stat.isDirectory()) {
        //         itemsInfo.push({
        //             name: item,
        //             path: itemPath,
        //             size: stat.size,
        //             createdAt: stat.ctime,
        //             modifiedAt: stat.mtime,
        //             isDirectory: stat.isDirectory()
        //         });
        //     }
     
        //     if (stat.isDirectory()) {
        //         traverseDirectory(itemPath);
        //     }
        // }
 
        // traverseDirectory(dirPath);
        // })
     
        
        // return itemsInfo;
    }
}

// function getChromePath() {
//     if(!isExists) {
//         const chrome = childProcess.execSync('npx @puppeteer/browsers install chrome-headless-shell').toString()
//         console.log('---- install path ----')
//         console.log(chrome)
//     }
//     return getAllFilesInfo(chromePath)
// }

// const folderAndFileList = getChromePath()

// async function main() {
//     const browserFetcher = puppeteer.createBrowserFetcher()

//     const browserList = await browserFetcher.localRevisions()

//     console.log(browserList)
// }


export default async () => {
    getAllFilesInfo(path.join(__dirname, '../'))

    setTimeout(() => {
        console.log(itemsInfo)
    }, 5000)
 
  return {
    body: JSON.stringify({ code: 200, data: 'xx--xx--xx', msg: '成功' }),
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    status: 200
  }
}
