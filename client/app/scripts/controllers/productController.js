Frenzli.ProductController = Ember.ObjectController.extend({
    needs: ["languages"],
    languageController: Ember.computed.alias("controllers.languages"),

    availability: function() {
        var model = this.get('model');
        var langModel = this.get('languageController.langModel');
        var available = langModel.get('productAvailable');
        var unavailable = langModel.get('productUnavailable');
        return model.get('isAvailable') ? available : unavailable;
    }.property('isAvailable', 'languageController.langModel'),

    convertedPrice: function() {
        var model = this.get('model');
        var langModel = this.get('languageController.langModel');
        var currency = langModel.get('productCurrency');
        return model.get('price') + currency;
    }.property('price', 'languageController.langModel')
});