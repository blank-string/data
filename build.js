const fs = require('fs')
const path = require('path')
const data = require('.')

fs.writeFileSync(path.resolve(__dirname, 'all.json'), JSON.stringify(data))
