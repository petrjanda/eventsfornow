module.exports = Ember.ArrayController.extend({

  _filteredContentUpdate: function() {
    var content = this.get('content');
    var searchedToken = this.get('searchedToken');

    if(!searchedToken) return this.set('filteredContent', content);

    var regex = new RegExp(searchedToken, 'i');

    var self = this;

    Ember.run(function() { 
      self.set('filteredContent', content.filter(function(item, index, enumerable) {
        return regex.test(item.title) || regex.test(item.address);
      }));
    })
  }.observes('content', 'searchedToken')
})