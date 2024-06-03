import fs from 'fs'
import path from 'path'
import childProcess from 'child_process'
import puppeteer from 'puppeteer'

const chromePath = path.join(puppeteer.configuration.cacheDirectory ,'chrome-headless-shell')

const isExists = fs.existsSync(chromePath)

function getAllFilesInfo(dirPath) {
    const itemsInfo = [];
 
    function traverseDirectory(currentPath) {
        const items = fs.readdirSync(currentPath);
 
        for (const item of items) {
            const itemPath = path.join(currentPath, item);
            const stat = fs.statSync(itemPath);
 
            if (stat.isFile() || stat.isDirectory()) {
                itemsInfo.push({
                    name: item,
                    path: itemPath,
                    size: stat.size,
                    createdAt: stat.ctime,
                    modifiedAt: stat.mtime,
                    isDirectory: stat.isDirectory()
                });
            }
 
            if (stat.isDirectory()) {
                traverseDirectory(itemPath);
            }
        }
    }
 
    traverseDirectory(dirPath);
    return itemsInfo;
}

function getChromePath() {
    if(!isExists) {
        const chrome = childProcess.execSync('node node_modules/puppeteer/install.mjs').toString()
        console.log('---- install path ----')
        console.log(chrome)
    }
    return getAllFilesInfo(chromePath)
}

const folderAndFileList = getChromePath()

export default () => {
  return {
    body: JSON.stringify(folderAndFileList),
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    status: 200
  }
}
