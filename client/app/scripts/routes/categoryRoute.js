Frenzli.CategoryRoute = Ember.Route.extend({
    model: function(params) {
        var model = this.store.find('category', params.category_id);
        return model;
    },
    afterModel: function(model, transition) {
        if (model.get('hasChildren')) {
            //this.set('allCategories', this.modelFor('categories'));
        } else {
            this.transitionTo('products');
        }
    },
    setupController: function(controller, model) {
        //set up model for index controller
        controller.set('model', model);
        var categories = this.modelFor('categories');
        var id = model.get('id');
        var childrenCat = categories.filter(function(item, index, self) {
            return item.get('parentId') === model.get('id');
        });
        controller.set('subcategories', childrenCat);
        controller.set('categories', categories);
    }
});