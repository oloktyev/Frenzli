Frenzli.CategoriesRoute = Ember.Route.extend({
    model: function() {
        var store = this.get('store');
        var categories = store.find('category');
        return categories;
    }
});