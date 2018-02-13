'use strict';

sarasApp.controller('UserExperienceController',
    function UserExperienceController($scope) {

        $scope.userExperience = {
            title: 'User Experience',
            imageUrl: '/img/gallery/chris-holgersson-ps.jpg',
            intro: 'Through my internships, classes, and personal work, I have used the Adobe Creative Suite to' +
            ' produce infographics, artwork, and marketing materials for Miller Center at Santa Clara University.',
            url: '/img/uxEvaluation.pdf'
        };
    }
);