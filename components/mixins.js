module.exports = {
  template: '<div>{{prop1}} {{prop2}} {{prop3}}</div>',
  data () { return { prop1: 'Let\'s' } },
  mixins: [{
    data () { return { prop2: 'Try' } },
    createdBe () {
      this.prop3 = 'Something else'
    }
  }]
}
