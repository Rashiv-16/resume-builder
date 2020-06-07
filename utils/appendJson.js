const savingJson = require('./savingJson')

let appendJson = (oldJson, newJson) => {
    Object.keys(newJson).forEach((key) => {
        oldJson[key] = newJson[key]
    })
    savingJson(oldJson)
}

module.exports = appendJson;