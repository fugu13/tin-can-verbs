requirejs.config({
    shim: {
        'lib/underscore-min.js': {
            exports: '_'
        }
    },
    baseUrl: 'verbs'
});

require(["jquery", "lib/underscore-min.js", "list.js", "lib/domReady.js"], function($, _, verbs) {
    _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g,
        escape: /\{\{-(.+?)\}\}/g,
        evaluate: /\{\{=(.+?)\}\}/g
    };
    var template = _.template($('#verb-template').html());
    var container = $('#container');
    $(function() {
        _.each(verbs.modules, function(verb) {
            $(template(verb)).appendTo(container);
        });
    });
});