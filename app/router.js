import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('discover');
  this.route('login');
  this.route('profile');
  this.route('add');
  this.route('home');
});

export default Router;
