import { test } from 'qunit';
import moduleForAcceptance from 'itp404-final-project-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login', {
  beforeEach(){
    window.server.createList('artist', 10);
    window.server.createList('favorites', 5);
  },
  afterEach(){
    window.server.shutdown();
  }
});

test('visiting / redirects to /login', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('visiting /discover outputs 10 floating items to page', function(assert) {
  visit('/discover/1');

  andThen(function() {
    assert.equal(find('.toFloat').length, 10);
  });
});

test('visiting / profile outputs 5 pieces of user history', function(assert) {
  visit('/profile/1');

  andThen(function() {
    assert.equal(find('.history').length, 5);
  });
});
