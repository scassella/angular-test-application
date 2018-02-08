'use strict';

eventsApp.controller('FilmController',
    function FilmController($scope) {

        $scope.film = {
            title: 'Video Editing',
            imageUrl: '/img/gallery/jakob-owens-smallest.jpg',
            intro: 'For IEEE\'s WCNC 2017 Conference I created a promotion video about San Francisco to help encourage people to attend the conference. The video was displayed on the conference website, which I built as part of an internship at Santa Clara University. All of the clips and music are royalty free.'
        };
    }
);