var list = [
    'adlnet_experienced',
    'adlnet_attended',
    'adlnet_answered',
    'adlnet_attempted',
    'adlnet_completed',
    'adlnet_created',
    'adlnet_failed',
    'adlnet_imported',
    'adlnet_interacted',
    'adlnet_passed',
    'adlnet_shared',
    'adlnet_voided',
    'problemsolutions_goldstar'
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