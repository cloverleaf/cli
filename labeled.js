const cloverleaf = require('cloverleaf')
const yargs = require('yargs')

const argv = yargs

  .option('app', {
    alias: 'a',
    describe: 'Name of the app to generate a password for',
    type: 'string',
    demandOption: true
  })
  .option('password', {
    alias: 'p',
    describe: 'Your master password',
    type: 'string',
    demandOption: true
  })
  .option('length', {
    alias: 'l',
    describe: 'Length of the password to generate',
    type: 'number'
  })
  .option('nopreset', {
    alias: 'n',
    describe: 'Don\'t use the preset of the same name',
    type: 'boolean'
  })

  .help()
  .alias('help', 'h')
  .argv

const length = argv.length
const usePreset = !argv.nopreset
const app = argv.app
const password = argv.password
let toPass

if (length) {
  // If all args are provided
  toPass = [app, password, usePreset, length]
} else if (usePreset) {
  toPass = [app, password, usePreset]
} else {
  toPass = [app, password]
}

try {
  console.log(cloverleaf.process(...toPass))
  process.exit(0)
} catch (e) {
  console.error(e.message)
  process.exit(1)
}
