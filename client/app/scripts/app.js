window.Frenzli = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true
});
DS.RESTAdapter.reopen({
  host: 'http://localhost:3000'
});
/* Order and include as you please. */
require('scripts/store');
require('scripts/models/*');
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



