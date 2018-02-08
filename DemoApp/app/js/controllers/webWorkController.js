'use strict';

eventsApp.controller('WebWorkController',
    function WebWorkController($scope) {

        $scope.showPredix = true;
        $scope.showMc = false;
        $scope.showIeee = false;
        $scope.showPowerPlaylist = false;

        $scope.togglePredix = function() {
            $scope.showPredix = true;
            $scope.showMc = false;
            $scope.showIeee = false;
            $scope.showPowerPlaylist = false;
        };
        $scope.toggleMillerCenter = function() {
            $scope.showPredix = false;
            $scope.showMc = true;
            $scope.showIeee = false;
            $scope.showPowerPlaylist = false;
        };
        $scope.toggleIeee = function() {
            $scope.showPredix = false;
            $scope.showMc = false;
            $scope.showIeee = true;
            $scope.showPowerPlaylist = false;
        };
        $scope.togglePowerPlaylist = function() {
            $scope.showPredix = false;
            $scope.showMc = false;
            $scope.showIeee = false;
            $scope.showPowerPlaylist = true;
        };
        // $scope.toggleProject = function(project) {
        //
        // };

        $scope.webWork = {
            title: 'Web Design and Development',
            imageUrl: '/img/gallery/spencer-watson.jpg',
            intro: 'I love developing sites that provide a unique user experience, and strive to make the internet a better place! I have worked on sites for IEEE, General Electric, and built sites for Seeded Juice Company and Miller Center for Social Entrepreneurship. For my senior thesis, I designed and built a web application for collaborative playlists. I have also built my own site, using Angular JS Framework!',
            projects: [
                {
                    name: 'Predix.io',
                    url: 'www.predix.io',
                    description: 'During my 7 month rotation on the Predix.io team at General Electric, I helped build new features, improve old features, and fix bugs on the Predix.io site. Together, the team and I built the new console for monitoring applications from scratch, using the Vue.JS Framework and Polymer Web Components. To see the new console, create a free account on Predix.io.',
                    images: [

                    ]
                },
                {
                    name: 'IEEE WCNC 2017 Conference',
                    url: '',
                    description: 'Through my Junior and Senior year of college I built the website for the IEEE Wireless Communications and Networking Conference 2017 conference in San Francisco, CA. For this project I used drupal and the templates provided by IEEE. I also made promo videos and flyers to help advertise the conference, and constantly kept the site up to date with the latest posters, speakers, and sessions for the conference.',
                    images: [

                    ]
                },
                {
                    name: 'Miller Center for Social Entrepreneurship',
                    url: '',
                    description: 'As a student at Santa Clara University I worked as a marketing intern Miller Center for Social Entrepreneurship. During my time there, I added new features to their previous site, created flyers and other infographics using the Adobe Creative Suite, and created their 2016 Annual Report using Adobe InDesign. Through my senior year, I built the new Miller Center website to give a new look and feel to the company.',
                    images: [

                    ]
                },
                {
                    name: 'Power Playlist',
                    url: '',
                    description: 'For my Senior Thesis at Santa Clara University, 2 teammates and I built a web application for collaborativve playlists using a host\'s music library of choice. We built the front end application using JavaScript and JQuery, and the backend was built using PHP. We used Spotify\'s API to connect to user\'s libraries and play their music through the application. Friends could log in to the playlist with a PIN number and upvote and downvote songs on the playlist, as well as suggest new songs to be added. If the host did not want to create a playlist, music was played based on the guest\'s suggestions.',
                    images: [

                    ]
                }
            ]
        };
    }
);