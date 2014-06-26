Frenzli.HomeRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.RSVP.hash({
            categories: this.store.find('category'),
            languages: this.store.find('language')
        });
    },
    setupController: function(controller, model) {
        //set up model for index controller
        controller.set('model', model.categories);
        var store = this.get('store');
        var categoriesController = this.controllerFor('categories');
        categoriesController.set('content', model.categories);
        var languagesController = this.controllerFor('languages');
        languagesController.set('content', model.languages)
    }
});