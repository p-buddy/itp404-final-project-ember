import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(params) {
    return params.id;
  },
  model: function(params) {
    console.log(params);
    var promise = Ember.$.ajax({
      type: 'get',
      url: 'https://parker-malachowsky-api.herokuapp.com/users',
    }, function() {
      alert('error');
    });
    return promise;
  }
});
