'use strict';

sarasApp.filter('tastiness', function() {
    return function(tastiness) {
        switch (tastiness) {
            case 1:
                return "Pretty good";
            case 2:
                return "Really good";
            case 3:
                return "SO TASTY!!!";
            default:
                return "not sure what this is....";
        }
    }
});