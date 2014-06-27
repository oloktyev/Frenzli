Frenzli.ProductsController = Ember.ArrayController.extend({
    needs: ["languages"],
    languageController: Ember.computed.alias("controllers.languages"),

    categoryId: null,
    filteredByCategory: function() {
        var filter = this.categoryId;
        if (filter !== null) {
            filter = parseInt(filter, 10);
        }
        var model = this.get('model');
        return model.filterBy('categoryId', filter);
    }.property('model.@each', 'categoryId'),
});