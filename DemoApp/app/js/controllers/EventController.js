'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
            name: 'Saras App',
            title: 'Sara Cassella',
            subheading: 'Web Designer and Developer @ General Electric',
            subsubheading: 'Digital Technology Leadership Program',
            date: 'February 6, 2018',
            location: 'San Francisco',
            imageUrl: '/img/gallery/yousef-espanioly.jpg',
            address: {
                street: '829 Filbert Street',
                city: 'San Francisco',
                state: 'California',
                zip: '94133'
            },
            gallery: [
                {   imageUrl: '/img/gallery/alex-povolyashko.jpg' },
                {   imageUrl: '/img/gallery/justin-bisson-beck.jpg' },
                {   imageUrl: '/img/gallery/scott-webb.jpg' },
                {   imageUrl: '/img/gallery/sherman-yang.jpg' },
                {   imageUrl: '/img/gallery/spencer-watson.jpg' },
                {   imageUrl: '/img/gallery/vashishtha-jogi.jpg' }
            ],
            references: [
                {   name: '',
                    url: ''
                },
                {   name: '',
                    url: ''
                },
                {   name: '',
                    url: ''
                },
                {   name: '',
                    url: ''
                }
            ],
            social: [
                {   name: 'facebook',
                    image: '/img/icons/facebook.png',
                    url: ''
                },
                {   name: 'Github',
                    image: '/img/icons/github.svg',
                    url: ''
                },
                {   name: 'Instagram',
                    image: '/img/icons/instagram.png',
                    url: ''
                },
                {   name: 'LinkedIn',
                    image: '/img/icons/linkedIn.png',
                    url: ''
                }
            ]
        };

        $scope.snippet = '<span style="color:pink">Welcome, friends!</span>';
        //the pink color doesn't show up in this case because i am using this with ng-bind-html and angular sanitize removes anything that can be deemed unsafe.

        $scope.booleanValue = true;

        $scope.myStyle = {color: 'pink'};
    }
);