import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    uiSetup: function(){
   Ember.$('#table').show();
    }.on('didInsertElement').observes('model'),
    Delete: function(params) {
      console.log(params);
      var promise = Ember.$.ajax({
        type: 'delete',
        url: 'https://parker-malachowsky-api.herokuapp.com/favorites/' + params
      }, function() {
        alert('error');
      });

      var controller = this;

      promise.then(function(response){
        var artists = controller.get('model.data');
        var id = controller.get('model.id');
        var string = "#";
        var res = string.concat(response.id);
        console.log(id);
        var index = response.id - 1;
        /*
        var newSongs = songs.concat(response.song);
        this.set('model.songs', newSongs);
        */
        artists.splice(index, 1);


        Ember.$(res).hide();
        Ember.$('#table').hide().fadeIn('fast');
        controller.transitionToRoute('profile', id);
      }, function() {
        alert('error');
      });
    }
  }
});
