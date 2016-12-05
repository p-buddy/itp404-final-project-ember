import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(e) {
      e.preventDefault();
      var artist = this.get('artist');
      var information = this.get('information');
      var link = this.get('link');
      var isPicture = this.get('remember_me');
      if (isPicture === undefined) {
        isPicture = false;
      }
      var typeCode = 1;

      var controller = this;
      var id = controller.get('model.id');

      var promise = Ember.$.ajax({
        type: 'post',
        url: 'https://parker-malachowsky-api.herokuapp.com/artists',
        data: {
            artist: artist,
            information: information,
            link: link,
            typeCode: typeCode,
            isPicture: isPicture
        }
      }, function() {
        alert('error');
      });

      console.log(promise);
      alert("Success!");
      this.transitionToRoute('discover', id);

    }
  }
});
