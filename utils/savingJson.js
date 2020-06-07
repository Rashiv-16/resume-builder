const fs = require('fs')

let savingJson = (formData = {}) => {

    fs.writeFileSync(`${__dirname}/../JSON/formData.json`, JSON.stringify(formData))
}

module.exports = savingJson