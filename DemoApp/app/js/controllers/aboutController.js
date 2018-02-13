'use strict';

sarasApp.controller('AboutController',
    function AboutController($scope) {

        $scope.about = {
            title: 'About Me',
            imageUrl: '/img/gallery/willian-justen-de-vasconcellos-ps.jpg',
            intro: 'I grew up on Bainbridge Island, outside of Seattle, Washington. I got my bachelors degree in Web Design and Engineering, with a dual minor in Computer Engineering and Communications from Santa Clara University, where I graduated in 2017. I am currently pursuing my Masters in Business Administration online at Indiana University\'s Kelly School of Business, while I work as a developer in the Bay Area for General Electric. I currently live in San Francisco, California. I love coding in JavaScript! I built this website on a node server, as a way to help teach myself the Angular Framework.'
        };
    }
);