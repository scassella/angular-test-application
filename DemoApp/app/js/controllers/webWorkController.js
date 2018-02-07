'use strict';

eventsApp.controller('WebWorkController',
    function WebWorkController($scope) {

        $scope.webWork = {
            title: 'Web Design and Development',
            imageUrl: '/img/gallery/aaron-burden.jpg',
            intro: 'Through my internships, classes, and personal work, I have used the Adobe Creative Suite to' +
            ' produce infographics, artwork, and marketing materials for Miller Center at Santa Clara University.'
        };
    }
);