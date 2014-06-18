Frenzli.ProductsController = Ember.ArrayController.extend({
    categoryID: null,
    filteredByCategory: function() {
        var filter = this.categoryID;
        if (filter !== null) {
            filter = parseInt(filter, 10);
        }
        var model = this.get('model');
        return model.filterBy('categoryID', filter);
    }.property('model.@each', 'categoryID'),
});