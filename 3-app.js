// GLOBALS - NO WINDOW !!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alt-flavor')
require('./7-mind-grenade')

console.log(data)

sayHi(names.john)
sayHi(names.peter)