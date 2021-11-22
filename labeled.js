const cloverleaf = require('cloverleaf')
const yargs = require('yargs');

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
    type: 'boolean',
  })

  .help()
  .alias('help', 'h')
  .argv;

let length = argv.length;
let usePreset = !argv.nopreset;
let app = argv.app;
let password = argv.password;

if (length) {
  // If all args are provided
  to_pass = [app, password, usePreset, length]
} else if (usePreset) {
  to_pass = [app, password, usePreset]
} else {
  to_pass = [app, password]
}

try {
  console.log(cloverleaf.process(...to_pass))
} catch (e) {
  console.log(e.message)
}
