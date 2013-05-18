module.exports = Em.View.extend({
  templateName: 'map',
  
  contentBinding: 'controller.content',

  _update: function() {
  }.observes('content'),

  init: function() {
  }
})