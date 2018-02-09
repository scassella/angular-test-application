'use strict';

eventsApp.controller('NavController',
    function NavController($scope) {
        $scope.logo = 'SC';

        $scope.nav = [
            {
                name: 'Home',
                href: '/index.html',
                target: ''
            },
            {
                name: 'About',
                href: '/about.html',
                target: ''
            },
            {
                name: 'Resume',
                href: '/resume.html',
                target: ''
            },
            {
                name: 'Adobe',
                href: '/adobe.html',
                target: ''
            },
            {
                name: 'UX',
                href: '/userExperience.html',
                target: ''
            },
            {
                name: 'Web',
                href: '/webWork.html',
                target: ''
            },
            {
                name: 'Film',
                href: '/film.html',
                target: ''
            },
            {
                name: 'GIT',
                href: 'https://github.com/scassella',
                target: '_blank'
            },
            {
                name: 'Contact',
                href: '/contactPage.html',
                target: ''
            }
        ];
    }
);