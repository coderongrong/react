
const fs = require("fs")

const consoles = (data) => {
  console.log(data)
  fs.readdir('./src', (err, data) => {
    // console.log('data -------->', data)
    // data.forEach(file => {
    //   fs.readFile('./src/' + file, 'utf8', (err, data) => {
    //     if(data) {
    //       console.log('----------->', file, data)
    //     }
    //   })
    // })
  })
  fs.readFile('./src/a.js', 'utf8', (err, data) => {
    fs.writeFile('./src/main.js', 'console.log("data")', () => {
        console.log('success')
    })
  })
}

module.exports = {
  consoles
}
