// log for node
const util = require('util')

export function log(x, depth) {
  depth = depth || null
  console.log(util.inspect(x, {showHidden: true, depth}))
}