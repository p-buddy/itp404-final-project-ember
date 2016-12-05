import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$('#artist').hide();
    this.$(".toFloat").each( function() {
      var randLeft = Math.floor(Math.random() * 100) + 1;
      var randfontSize = Math.floor(Math.random() * 1) + 1;
      var randRotation = Math.floor(Math.random() * 60) - 30;
      var randDelay = Math.floor(Math.random() * 7) + 0;
      var randDuration = Math.floor(Math.random() * 5) + 20;
      Ember.$(this).attr("style",("left:" + randLeft + "vw; font-size:" + randfontSize + "vw; transform: rotate(" + randRotation +"deg); animation-delay: " + randDelay + "s; animation-duration: " + randDuration + "s;)"));
    });
  },
  actions: {
    Open(params){
      var id = Ember.$('#artist').val();
      console.log(id);
      window.open(params.link);
      var promise = Ember.$.ajax({
        type: 'post',
        url: 'https://parker-malachowsky-api.herokuapp.com/favorites',
        data: {
            userId: id,
            favoriteId: params.id,
            artists: params.artist,
            link: params.link
        }
      });
      console.log(promise);
    },
    itemMouseUp(e) {
      e.preventDefault();
      this.blur();
    }
  }
});
