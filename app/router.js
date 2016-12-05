import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('discover', {path: '/discover/:id'}, function() {});
  this.route('login');
  this.route('profile', {path: '/profile/:id'});
  this.route('add', {path: '/add/:id'});
});

export default Router;
