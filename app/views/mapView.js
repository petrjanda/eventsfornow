module.exports = Em.View.extend({
  templateName: 'map',

  didInsertElement: function() {
    console.log(this.get('controller'))
  }
})