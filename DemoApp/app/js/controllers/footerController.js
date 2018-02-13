'use strict';

sarasApp.controller('FooterController',
    function FooterController($scope) {

        $scope.footer = {
            copyright: 'Website built with Angular JS by Sara Cassella. 2018',
            social: [
                {
                    name: 'Github',
                    image: '/img/icons/github.png',
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
        };
    }
);
