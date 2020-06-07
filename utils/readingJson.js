const fs = require('fs')

let readingJson = () => {

    let dataBuffer = fs.readFileSync(`${__dirname}/../JSON/formData.json`)
    return JSON.parse(dataBuffer)
}

module.exports = readingJson