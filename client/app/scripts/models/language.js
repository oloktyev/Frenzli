Frenzli.Language = DS.Model.extend({
    lang: DS.attr('string'),
    productAvailable: DS.attr('string'),
    productUnavailable: DS.attr('string'),
    productCurrency: DS.attr('string'),
    productAddCart: DS.attr('string')
});

Frenzli.LanguageAdapter = DS.FixtureAdapter.extend({});

Frenzli.Language.FIXTURES = [{
    id: 1,
    lang: 'ukr',
    productAvailable: "Є в наявності",
    productUnavailable: "Немає в наявності",
    productCurrency: " грн",
    productAddCart: "Додати в кошик"
},{
    id: 2,
    lang: 'rus',
    productAvailable: "Есть в наличии",
    productUnavailable: "Нет в наличии",
    productCurrency: "  грн",
    productAddCart: "Добавить в корзину"
}];