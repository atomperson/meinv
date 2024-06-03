import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'

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

const folderAndFileList = getAllFilesInfo(path.join(puppeteer.configuration.cacheDirectory ,'chrome-headless-shell'))

export default () => {
  return {
    body: JSON.stringify(folderAndFileList),
    status: 200
  }
}
