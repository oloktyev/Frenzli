Frenzli.Category = DS.Model.extend({
    name: DS.attr(),
    parentID: DS.attr(),
    hasChildren: DS.attr()
});

Frenzli.Category.FIXTURES = [{
  id: 1,
  name: 'Тільда',
  hasChildren: true,
  parentID: null
}, {
  id: 2,
  name: 'Скрапбукінг',
  hasChildren: false,
  parentID: null
}, {
  id: 21,
  name: 'Печворк',
  hasChildren: false,
  parentID: 1
}, {
  id: 22,
  name: 'Декупаж',
  hasChildren: true,
  parentID: 1
},{
  id: 23,
  name: 'Полімерна глина',
  hasChildren: false,
  parentID: 22
}]