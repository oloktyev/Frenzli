Frenzli.CategoriesRoute = Ember.Route.extend({
    model: function(params) {
        var model = this.store.find('category', params.category_id);
        return model;
    }
});