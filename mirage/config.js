export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'https://parker-malachowsky-api.herokuapp.com';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/artists/1', function(schema){
    //var artists = schema.artists.all();
    return {
      data: schema.db.artists,
      id: 1
    };
  });

  this.get('/users', function(schema){
    //var users = schema.users.all();
    return {
      data: schema.db.users
    };
  });

  this.get('/favorites/1', function(schema){
    //var users = schema.users.all();
    return {
      data: schema.db.favorites,
      id: 1
    };
  });

  /*
    Shorthand cheatsheet:


    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
