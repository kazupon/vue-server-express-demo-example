module.exports = {
  template: [
    '<ul>',
    '<item v-for="model in models" :model="model"></item>',
    '</ul>'
  ].join(''),
  data: {
    models: [{
      first: true, name: 'White'
    }, {
      first: false, name: 'Horse'
    }]
  }
}
