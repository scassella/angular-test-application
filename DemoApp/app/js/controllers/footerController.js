'use strict';

eventsApp.controller('FooterController',
    function FooterController($scope) {

        $scope.footer = {
            social: [
                // {
                //     name: 'facebook',
                //     image: '/img/icons/facebook.png',
                //     url: ''
                // },
                {
                    name: 'Github',
                    image: '/img/icons/github.svg',
                    url: 'https://github.com/scassella'
                },
                {
                    name: 'Instagram',
                    image: '/img/icons/instagram.png',
                    url: 'www.instagram.com/scassella'
                },
                {
                    name: 'LinkedIn',
                    image: '/img/icons/linkedIn.png',
                    url: 'https://www.linkedin.com/in/sara-cassella/'
                }
            ]
        }
    }
);
