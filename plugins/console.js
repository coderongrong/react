const fs = require('fs')
function handleFiles(str) {
  fs.readdir(str, (_, data) => {
    data?.forEach((item) => {
      fs.readFile(str + '/' + item, 'utf8', (err, data) => {
        if (data) {
          // console.log('读到的文件-------->', data)
        } else {
          const _str = str + '/' + item
          handleFiles(_str)
        }
      })
    })
  })
}
const consoles = (data, file) => {
  const str = './zipCheck'
  handleFiles(str)
  fs.readFile('./src/a.js', 'utf8', (err, data) => {
    fs.writeFile('./src/sssmain.js', file, () => {
      console.log('success')
    })
  })
  fs.unlink('./zipCheck/d.js',(err,data)=>{
    if (err) {
      console.log(err);
    } else{
      // console.log('删除文件成功');
    }
  })
  fs.writeFile('./zipCheck/d.js', 'console.log("dddddddd")', (err,data)=>{
    if (err) {
      console.log(err);
    } else{
      // console.log('删除文件成功');
    }
  })
}

module.exports = {
  consoles,
}
