'use strict';

sarasApp.controller('NavController',
    function NavController($scope) {
        $scope.logo = 'SC';

        $scope.nav = [
            {
                name: 'Home',
                href: '#/main',
                target: ''
            },
            {
                name: 'About',
                href: '#/about',
                target: ''
            },
            {
                name: 'Resume',
                href: '#/resume',
                target: ''
            },
            {
                name: 'Adobe',
                href: '#/adobe',
                target: ''
            },
            {
                name: 'UX',
                href: '#/userExperience',
                target: ''
            },
            {
                name: 'Web',
                href: '#/webWork',
                target: ''
            },
            {
                name: 'Film',
                href: '#/film',
                target: ''
            },
            {
                name: 'GIT',
                href: 'https://github.com/scassella',
                target: '_blank'
            },
            {
                name: 'Contact',
                href: '#/contact',
                target: ''
            }
        ];
    }
);