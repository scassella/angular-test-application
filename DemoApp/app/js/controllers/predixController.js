'use strict';

sarasApp.controller('PredixController',
    function PredixController($scope) {

        $scope.predix = {
            title: 'Predix.io',
            imageUrl: '/img/photos/PredixConsole.png',
            intro: 'First rotation of the Digital Technology Leadership Program at GE Digital.' +
            'On Predix.io I worked with the team to refactor the registration service, help build the new Predix Console, ' +
            'and worked on bug fixes.',
            features: [
                {
                    name: 'Time Series Charts',
                    img: '/img/photos/timeseries.png',
                    imgAlt: 'Time Series Visualizations',
                    description: 'Timeseries visualizations for our GE Power and GE Renewables customers.',
                    impact: 'Allowed customers to effectively QA Data Science predictions to ensure our models were accurate.'
                }
            ],
            tools: [
                {
                    name: 'Angular',
                    img: '../img/icons/angular.png',
                    url: 'https://angular.io/',
                    alt: 'Angular'
                },
                {
                    name: 'Vue JS',
                    img: '../img/icons/vue.png',
                    url: 'https://vuejs.org/',
                    alt: 'Vue JS'
                },
                {
                    name: 'Java',
                    img: '../img/icons/java.png',
                    url: 'https://www.java.com/en/',
                    alt: 'Java'
                },
                {
                    name: 'InVision',
                    img: '../img/icons/invision.svg',
                    url: 'https://www.invisionapp.com/',
                    alt: 'Invision'
                }
            ]
        };
    }
);