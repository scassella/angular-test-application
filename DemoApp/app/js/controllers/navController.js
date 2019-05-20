'use strict';

sarasApp.controller('NavController',
    function NavController($scope) {
        $scope.logo = '';

        $scope.nav = [
            {
                name: 'Welcome',
                href: '#/main',
                target: ''
            },
            {
                name: 'Projects',
                href: '#/main#projects',
                target: ''
            },
            {
                name: 'Resume',
                href: '#/main#resume',
                target: ''
            },
            {
                name: 'Contact',
                href: '#/main#contact',
                target: ''
            }
        ];
    }
);