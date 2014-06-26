Frenzli.ProductRoute = Ember.Route.extend({
    model: function(params, transition, queryParams) {
        var model = this.store.find('product', params.product_id);
        return model;
    }
});