const fs = require('fs')
const path = require('path')
const fs = require('fs')

data = fs.readdirSync(__dirname)
    .filter(file => file.match(/^e\d+\.json$/g) !== null)
    .map(file => require(path.join(__dirname, file)))

    
fs.writeFileSync(path.resolve(__dirname, 'index.json'), JSON.stringify(data))
    