
const fs = require("fs")

const consoles = (data) => {
  console.log(data)
  fs.readFile('./src/mymain.js', 'utf8', (err, data) => {
    console.log(err, data.replace('aaaaa', 'bbbbb'))
    data = data.replace('aaaaa', 'bbbbb')
    fs.writeFile('./src/main.js', data, () => {
        console.log('success')
    })
  })

  
}

module.exports = {
  consoles
}
