Frenzli.CategoriesController = Ember.ArrayController.extend({
    filterParam: null,
    filtredModel: function() {
        var filter = this.filterParam;
        var model = this.get('model');
        return model.filterBy('parentId', filter);
    }.property('model.@each', 'filterParam'),

    actions: {
        routeTo: function(param) {
            this.get('target').transitionTo('category', param);
        }
    }
});