Frenzli.LanguagesController = Ember.ObjectController.extend({
    lang: 'ukr',
    langModel: function() {
        var filter = this.lang;
        var model = this.get('model');
        var filteredModel = model.filterBy('lang', filter);
        return filteredModel[0];
    }.property('model.@each', 'lang'),

    actions: {
        choose: function(lang) {
            this.set('lang', lang);
        }
    }
});