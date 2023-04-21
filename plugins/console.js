const fileRegex = /main\.js$/

const fs = require("fs")

const consoles = (data) => {
  console.log(data)
  fs.readFile('./src/main.js', 'utf8', (err, data) => {
    console.log(err, data.replace('aaaaa', 'bbbbb'))
    data = data.replace('aaaaa', 'bbbbb')
    fs.writeFile('./src/_main.js', data, () => {
        console.log('success')
    })
  })

  
}

module.exports = {
  consoles,
}
