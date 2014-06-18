Frenzli.ProductsRoute = Ember.Route.extend({
    model: function() {
        var store = this.get('store');
        var products = store.find('product');
        return products;
    }
});