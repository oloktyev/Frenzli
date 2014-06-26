Frenzli.CategoryRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.RSVP.hash({
            categories: this.store.find('category'),
            category: this.store.find('category', params.category_id)
        });
        // var model = this.store.find('category', params.category_id);
        // return model;
    },
    afterModel: function(model, transition) {
        if (model.category.get('hasChildren')) {
            //this.set('allCategories', this.modelFor('categories'));
        } else {
            this.transitionTo('products', model.category.get('id'));
        }
    },
    setupController: function(controller, model) {
        //set up model for index controller
        controller.set('model', model.category);
        var categories = this.modelFor('categories');
        var id = model.category.get('id');
        var childrenCat = model.categories.filter(function(item, index, self) {
            return item.get('parentId') === id;
        });
        controller.set('subcategories', childrenCat);
        controller.set('categories', categories);
    }
});