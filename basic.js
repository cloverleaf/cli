const cloverleaf = require('cloverleaf')

const args = process.argv.slice(2)


// Make sure there are
while (args.length < 3) {
  const arg = args.push("")
}

const appName = args[0]
const password = args[1]
const usePreset = (args[2].toLowerCase() === 'true' || args[2].toLowerCase() === 'yes' || args[2].toLowerCase() === 'y')
const length = Number(args[3])
let to_pass;

if (length) {
  // If all args are provided
  to_pass = [appName, password, usePreset, length]
} else if (usePreset) {
  to_pass = [appName, password, usePreset]
} else {
  to_pass = [appName, password]
}

try {
  console.log(cloverleaf.process(...to_pass))
} catch (e) {
  console.log(e.message)
}
