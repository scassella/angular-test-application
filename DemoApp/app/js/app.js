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
        $routeProvider.when('/adobe', {
            name: 'adobe',
            templateUrl: 'templates/adobe.html',
            controller: 'AdobeController'
        });
        $routeProvider.when('/userExperience', {
            name: 'ux',
            templateUrl: 'templates/userExperience.html',
            controller: 'UserExperienceController'
        });
        $routeProvider.when('/webWork', {
            name: 'webWork',
            templateUrl: 'templates/webWork.html',
            controller: 'WebWorkController'
        });
        $routeProvider.when('/film', {
            name: 'film',
            templateUrl: 'templates/film.html',
            controller: 'FilmController'
        });
        $routeProvider.when('/contact', {
            name: 'contact',
            templateUrl: 'templates/contactPage.html',
            controller: 'ContactController'
        });
        $routeProvider.otherwise({redirectTo: '/main'});
        //$locationProvider.html5Mode(true);
    });
//dependant modules are loaded before the current module, so that anything it is using is accessible by the time this one is laoded. dependant ones are in the [] array.
