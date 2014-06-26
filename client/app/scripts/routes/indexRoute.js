Frenzli.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('home');
  }
});