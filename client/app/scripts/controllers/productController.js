Frenzli.ProductController = Ember.ObjectController.extend({
    availability: function() {
        var model = this.get('model');
        return model.get('isAvailable') ? 'Є в наявності' : 'Немає в наявності';
    }.property('isAvailable'),
    convertedPrice: function() {
        var model = this.get('model');
        return model.get('price') + ' грн';
    }.property('price')
});