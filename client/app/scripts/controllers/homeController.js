Frenzli.HomeController = Ember.ObjectController.extend({
    needs: ["categories", "products"],
    categoriesController: Ember.computed.alias("controllers.categories"),
    productsController: Ember.computed.alias("controllers.products"),
});