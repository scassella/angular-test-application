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
            imageUrl: '/img/gallery/yousef-espanioly-smallest.jpg',
            address: {
                street: '829 Filbert Street',
                city: 'San Francisco',
                state: 'California',
                zip: '94133'
            },
            gallery: [
                {   imageUrl: '/img/gallery/gallery1.jpeg' },
                {   imageUrl: '/img/gallery/gallery2.jpeg' },
                {   imageUrl: '/img/gallery/gallery3.jpeg' },
                {   imageUrl: '/img/gallery/gallery4.jpeg' },
                {   imageUrl: '/img/gallery/gallery5.jpeg' },
                {   imageUrl: '/img/gallery/gallery6.jpeg' },
                {   imageUrl: '/img/gallery/gallery7.jpeg' },
                {   imageUrl: '/img/gallery/gallery8.jpeg' },
                {   imageUrl: '/img/gallery/gallery9.jpeg' },
                {   imageUrl: '/img/gallery/gallery10.jpeg' },
                {   imageUrl: '/img/gallery/gallery11.jpeg' },
                {   imageUrl: '/img/gallery/gallery12.jpeg' },
                {   imageUrl: '/img/gallery/gallery13.jpeg' },
                {   imageUrl: '/img/gallery/gallery14.jpeg' },
                {   imageUrl: '/img/gallery/gallery15.jpeg' },
                {   imageUrl: '/img/gallery/gallery17.jpeg' }
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