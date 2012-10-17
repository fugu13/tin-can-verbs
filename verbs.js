requirejs.config({
    shim: {
        'lib/underscore-min.js': {
            exports: '_'
        },
        'http://cdn.jquerytools.org/1.2.7/all/jquery.tools.min.js': ['jquery']
    },
    baseUrl: 'verbs'
});


require(["jquery", "lib/underscore-min.js", "list.js", 'http://cdn.jquerytools.org/1.2.7/all/jquery.tools.min.js', "lib/domReady.js"], function($, _, verbs) {
    _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g,
        escape: /\{\{-(.+?)\}\}/g,
        evaluate: /\{\{=(.+?)\}\}/g
    };
    var template = _.template($('#verb-template').html());
    var container = $('#container');
    $(function() {
        var counter = 0;
        _.each(verbs.modules, function(verb) {
            verb.hidden = 'hidden' + counter++;
            $(template(verb)).appendTo(container);
        });
        $("div[rel]").overlay();
    });
});
