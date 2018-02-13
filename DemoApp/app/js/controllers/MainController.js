'use strict';

sarasApp.controller('MainController',
    function MainController($scope) {

        $scope.main = {
            name: 'Saras App',
            title: 'Sara Cassella',
            subheading: 'Web Designer and Developer @ General Electric',
            subsubheading: 'Digital Technology Leadership Program',
            date: 'February 6, 2018',
            location: 'San Francisco',
            imageUrl: '/img/gallery/paul-earle-ps.jpg',
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
            ]
        };
    }
);