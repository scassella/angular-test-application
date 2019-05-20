'use strict';

var sarasApp = angular.module('sarasApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            name: 'main',
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
        $routeProvider.when('/main', {
            name: 'main',
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
        $routeProvider.when('/about', {
            name: 'about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        });
        $routeProvider.when('/resume', {
            name: 'resume',
            templateUrl: 'templates/resume.html',
            controller: 'ResumeController'
        });
        $routeProvider.when('/solano', {
            name: 'Solano Labs',
            templateUrl: 'templates/solano.html',
            controller: 'SolanoController'
        });
        $routeProvider.when('/wise', {
            name: 'Wise.IO',
            templateUrl: 'templates/wise.html',
            controller: 'WiseController'
        });
        $routeProvider.when('/predix', {
            name: 'Predix.IO',
            templateUrl: 'templates/predix.html',
            controller: 'PredixController'
        });
        $routeProvider.when('/millercenter', {
            name: 'Miller Center for Social Entrepreneurship',
            templateUrl: 'templates/millercenter.html',
            controller: 'McController'
        });
        $routeProvider.otherwise({redirectTo: '/main'});
        //$locationProvider.html5Mode(true);
    });
//dependant modules are loaded before the current module, so that anything it is using is accessible by the time this one is laoded. dependant ones are in the [] array.
