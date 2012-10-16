var vows = require('vows');
var assert = require('assert');

var fs = require('fs');
var _ = require('../lib/underscore-min.js');
var requirejs = require('requirejs');

requirejs.config({
    //nodeRequire: require,
    baseUrl: 'verbs'
});

requirejs(['list.js'], function(verbs) {
    vows.describe('Tin Can Verbs').addBatch({
        'The imported verbs': {

            topic: verbs,

            'include all files in the verbs directory': function(verbs) {
                var files = fs.readdirSync('verbs');
                var names = _.map(verbs.names, function(name) {
                    return name + '.js';
                });
                var missing = _.difference(files, names);
                assert.isEmpty(missing);
            },
            'do not have conflicting IDs': function(verbs) {
                var uris = _.pluck(verbs.modules, 'uri');
                var name_to_uri = _.object(verbs.names, uris);
                var uri_to_names = _.groupBy(verbs.names, function(name){
                    return name_to_uri[name];
                });
                var counts = _.countBy(uris, _.identity);
                var uri;
                for(uri in counts) {
                    assert.isTrue(counts[uri] == 1,
                        "Verb ID " + uri +
                        " is used in " + uri_to_names[uri].join(" and "));
                }
            }
        }

    }).run();
});