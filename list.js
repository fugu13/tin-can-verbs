var list = [
    'adlnet_experienced',
    'adlnet_attended'
];


define(list, function() {
    //don't use underscore due to how this works
    var with_js = [];
    for(var ii = 0; ii < list.length; ii++) {
        with_js[ii] = list[ii] + '.js';
    }
    return {
        names: with_js,
        modules: arguments
    };
});