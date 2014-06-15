Frenzli.Product = DS.Model.extend({
    name: DS.attr(),
    parentID: DS.attr(),
    hasChildren: DS.attr()
});

Frenzli.Product.FIXTURES = [{
  id: 1,
  name: 'cat1',
  hasChildren: true,
  parentID: null
}, {
  id: 2,
  name: 'cat2',
  hasChildren: false,
  parentID: null
}, {
  id: 21,
  name: 'cat2.1',
  hasChildren: false,
  parentID: 1
}, {
  id: 22,
  name: 'cat2.2',
  hasChildren: true,
  parentID: 1
},{
  id: 23,
  name: 'cat2.2.1',
  hasChildren: false,
  parentID: 22
}]