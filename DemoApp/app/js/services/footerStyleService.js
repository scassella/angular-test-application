sarasApp.factory('footerStyleService', function ($routeParams) {
    return {
        //don't user $ on your own services, you dont want to accidentally overwrite an angular service.
        backgroundUrl: function () {
            console.log('ROUTE', $routeParams);
            return 'red';
        }
    }
});