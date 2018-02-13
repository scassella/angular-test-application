'use strict';

sarasApp.controller('WebWorkController',
    function WebWorkController($scope) {

        $scope.webWork = {
            title: 'Web Design and Development',
            imageUrl: '/img/gallery/benjamin-davies-ps.jpg',
            intro: 'I love developing sites that provide a unique user experience, and strive to make the internet a better place! I have worked on sites for IEEE, General Electric, and built sites for Seeded Juice Company and Miller Center for Social Entrepreneurship. For my senior thesis, I designed and built a web application for collaborative playlists. I have also built my own site, using Angular JS Framework!',
            projects: [
                {
                    name: 'Power Playlist',
                    url: 'https://github.com/apolatnick/Power-Playlist',
                    image: '/img/webWork/PowerPlaylist.png'
                },
                {
                    name: 'Predix.io',
                    url: 'www.predix.io',
                    image: '/img/webWork/PredixIo.png'
                },
                {
                    name: 'Predix Console',
                    url: 'www.predix.io',
                    image: '/img/webWork/PredixConsole.png'
                },
                {
                    name: 'Miller Center',
                    url: 'https://www.scu-social-entrepreneurship.org/#home',
                    image: '/img/webWork/MillerCenter.png'
                },
                {
                    name: 'IEEE WCNC 2017',
                    url: 'http://wcnc2017.ieee-wcnc.org/',
                    image: '/img/webWork/WCNC.png'
                }
            ]
        }
    }
);