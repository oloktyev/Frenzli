window.Frenzli = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true
});
DS.RESTAdapter.reopen({
  host: 'http://localhost:3000'
});
Frenzli.Router.reopen({
  location: 'history'
});

/* Order and include as you please. */
require('scripts/store');
require('scripts/models/translation');
require('scripts/models/category');
require('scripts/models/product');
require('scripts/models/language');
require('scripts/views/*');
require('scripts/controllers/*');
require('scripts/components/*');
require('scripts/routes/*');
require('scripts/router');
require('../bower_components/elevatezoom/*');



// window.Frenzli.FixtureAdapter = DS.FixtureAdapter.extend({
  // queryFixtures: function(records, query, type) {
    // return records.filter(function(record) {
        // for(var key in query) {
            // if (!query.hasOwnProperty(key)) { continue; }
            // var value = query[key];
            // if (record[key] !== value) { return false; }
        // }
        // return true;
    // });
  // }
// });