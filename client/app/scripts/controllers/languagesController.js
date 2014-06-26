Frenzli.LanguagesController = Ember.ArrayController.extend({
    lang: 'ukr',
    langModel: function() {
        var filter = this.lang;
        var model = this.get('model');
        return model.filterBy('lang', filter);
    }.property('model.@each', 'lang'),

    actions: {
        choose: function(lang) {
            this.set('lang', lang);
        }
    }
});