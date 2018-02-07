'use strict';

eventsApp.controller('FooterController',
    function FooterController($scope) {

        $scope.footer = {
            social: [
                {
                    name: 'facebook',
                    image: '/img/icons/facebook.png',
                    url: ''
                },
                {
                    name: 'Github',
                    image: '/img/icons/github.svg',
                    url: ''
                },
                {
                    name: 'Instagram',
                    image: '/img/icons/instagram.png',
                    url: ''
                },
                {
                    name: 'LinkedIn',
                    image: '/img/icons/linkedIn.png',
                    url: ''
                }
            ]
        }
    }
);
