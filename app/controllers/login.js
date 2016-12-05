import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    Authenticate: function(e) {
      e.preventDefault();
      var username = this.get('username');
      var password = this.get('password');
      var i = 0;
      var controller = this;
      var users = controller.get('model.data');
      var numberOfUsers = users.length;
      var success = "no";

      //var newUsername = promise.data[0].username;

      for (i = 0; i<numberOfUsers; i++){
        if (users[i].username === username && users[i].password === password){
            this.transitionToRoute('discover', users[i].id);
            success = "yes";
            break;
        }
      }
      if (success === "no") {
      alert("Error");
      }

    }
  }
});
