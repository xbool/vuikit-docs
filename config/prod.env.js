var version = require('../package.json').version

module.exports = {
  NODE_ENV: '"production"',
  banner:
    '/*!\n' +
    ' * Vuikit v' + version + ' (https://github.com/joolanders/vuikit)\n' +
    ' * (c) ' + new Date().getFullYear() + ' ZOOlanders\n' +
    ' * Released under the MIT License.\n' +
    ' */'
}
