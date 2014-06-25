Frenzli.ProductsRoute = Ember.Route.extend({
    model: function(params, transition, queryParams) {
        var store = this.get('store');
        this.categoryId = transition.params.category_id;
        var products = store.find('product');
        return products;
    },
    actions: {
        willTransition: function(transition) {
            this.categoryId = transition.params.category_id;
        }
    },
    setupController: function(controller, model) {
        var categoryId = this.categoryId;
        controller.set('model', model.filter(function(item, index, enumerable) {
            //filter products by categoryId or return all products from database if no categoryId specified
            return categoryId === undefined || item.get('categoryId') === parseInt(categoryId, 10);
        }));
    }
});