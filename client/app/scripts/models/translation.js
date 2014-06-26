Frenzli.Translation = DS.Model.extend({
    name: DS.attr('string'),
    productAvailable: DS.attr('string'),
    language: DS.belongsTo('language')
});

Frenzli.TranslationAdapter = DS.FixtureAdapter.extend({});

Frenzli.Translation.FIXTURES = [{
    id: 1,
    name: "nmav",
    productAvailable: "vdv",
    language: 1
},{
    id: 2,
    name: "vddfb",
    productAvailable: "cdsv",
    language: 2
}];