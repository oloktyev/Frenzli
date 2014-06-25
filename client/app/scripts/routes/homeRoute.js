Frenzli.HomeRoute = Ember.Route.extend({
    model: function(params) {
        // return Ember.RSVP.hash({
            // //user: $.get('/users/'+params.user_id+'.json'),
            // categories: this.store.find('category')
        // });
        return this.store.find('category');
    },
    setupController: function(controller, model) {
        //set up model for index controller
        controller.set('model', model);
        var store = this.get('store');
        var categoriesController = this.controllerFor('categories');
        categoriesController.set('content', model);
    }
});