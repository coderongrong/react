
const fs = require("fs")

const consoles = (data, file) => {
  console.log(data, file)
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
    fs.writeFile('./src/main.js', file, () => {
        console.log('success')
    })
  })
}

module.exports = {
  consoles
}
