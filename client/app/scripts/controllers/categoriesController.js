Frenzli.CategoriesController = Ember.ArrayController.extend({
    filterParam: null,
    filtredModel: function() {
        var filter = this.filterParam;
        if (filter !== null) {
            filter = parseInt(filter, 10);
        }
        var model = this.get('model');
        return model.filterBy('parentID', filter);
    }.property('model.@each', 'filterParam'),

    actions: {
        routeTo: function(param) {
            this.get('target').transitionTo('category', param);
        }
    }
});