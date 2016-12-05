import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var id = params.id;
    var promise = Ember.$.ajax({
      type: 'get',
      url: 'https://parker-malachowsky-api.herokuapp.com/favorites/' + id,
    }, function() {
      alert('error');
    });
    console.log(promise);
    this.set('refresh', true);
    return promise;
  }
});
