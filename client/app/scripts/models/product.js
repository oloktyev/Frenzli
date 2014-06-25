Frenzli.Product = DS.Model.extend({
    name: DS.attr('string'),
    categoryId: DS.attr('string')
});

Frenzli.Product.FIXTURES = [{
  id: 1,
  name: 'product1',
  categoryId: 2
}, {
  id: 2,
  name: 'product2',
  categoryId: 2
}, {
  id: 3,
  name: 'product3',
  categoryId: 2
}, {
  id: 4,
  name: 'product1',
  categoryId: 23
}, {
  id: 5,
  name: 'product2',
  categoryId: 23
}, {
  id: 6,
  name: 'product3',
  categoryId: 23
}]