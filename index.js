const fs = require('fs')
const path = require('path')

data = fs.readdirSync(__dirname)
    .filter(file => file.match(/^e\d+\.json$/g) !== null)
    .map(file => require(path.join(__dirname, file)))

module.exports = data