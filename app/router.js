import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('assignments', function() {
    this.route('new');
    this.route('turned-in');
  });
  this.route('courses', function() {
    this.route('new');
    this.route('detail', { path: '/:course_id'});
  });

  this.route('teachers', function() {
    this.route('new');
  });
});

export default Router;
