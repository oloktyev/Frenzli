Frenzli.Product = DS.Model.extend({
    name: DS.attr(),
    parentID: DS.attr(),
    hasChildren: DS.attr()
});

Frenzli.Product.FIXTURES = [{
  id: 1,
  name: 'product1',
  categoryID: 1
}, {
  id: 2,
  name: 'product2',
  categoryID: 1
}, {
  id: 3,
  name: 'product3',
  categoryID: 1
}, {
  id: 4,
  name: 'product1',
  categoryID: 23
}, {
  id: 5,
  name: 'product2',
  categoryID: 23
}, {
  id: 6,
  name: 'product3',
  categoryID: 23
}]