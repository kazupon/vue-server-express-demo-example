const vueServer = require('vue-server')
const Vue = new vueServer.renderer()

// register item component
Vue.component('item', require('./components/item'))

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.redirect('/hello')
  })

  app.get('/:commponents', (req, res, next) => {
    var component = req.params.commponents
    var vm = new Vue(require(`./components/${component}`))
    vm.$on('vueServer.htmlReady', (html) => {
      res.render('index', { type: component, content: html })
    })
  })
}
