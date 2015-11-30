module.exports = {
  template: [
    '<li v-show="isVisible">',
    '<strong>{{ header | fancyfy }}</strong>',
    '</li>'
  ].join(''),
  props: {
    model: Object
  },
  data () {
    return {
      isVisible: true
    }
  },
  computed: {
    header () {
      var postfix
      if (this.model.first) {
        postfix = ' is FIRST'
      } else {
        postfix = ' is LAST'
      }
      return this.model.name + postfix
    }
  },
  filters: {
    fancyfy (value) {
      return '--=' + value + '=--'
    }
  }
}
