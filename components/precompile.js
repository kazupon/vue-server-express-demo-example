const fs = require('fs')
const vueServer = require('vue-server')
const compile = vueServer.compiler
const serialize = vueServer.serializer

var tpl = serialize(compile('<pre>{{data | json}}</pre>'))
fs.writeFileSync(`${__dirname}/template.js`, `module.exports = ${tpl}`, 'utf8')
/*
fs.writeFileSync(__dirname + '/template.js', 'module.exports = ' + tpl, 'utf8')
*/


module.exports = {
  template: require('./template'),
  data () {
    return {
      data: {
        name: 'John',
        secondname: 'Smith'
      }
    }
  }
}
