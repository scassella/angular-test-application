'use strict';

sarasApp.controller('SolanoController',
    function SolanoController($scope) {

        $scope.solano = {
            title: 'Solano Labs',
            imageUrl: '/img/photos/userflowsolano.png',
            intro: 'For my fourth rotation in the DTLP program, team member Josh Vertes and I are working on a complete ' +
            'redesign of the post acquisition User Interface for solano labs. ',
            tools: [
                {
                    name: 'Invision',
                    img: '../img/icons/invision.svg',
                    url: 'https://www.invisionapp.com/',
                    alt: 'Invision'
                },
                {
                    name: 'Draw.IO',
                    img: '../img/icons/drawio.jpg',
                    url: 'https://www.draw.io/',
                    alt: 'Draw.IO'
                },
                {
                    name: 'Adobe Illustrator',
                    img: '../img/icons/adobeillustrator.svg',
                    url: 'https://www.adobe.com/products/illustrator.html',
                    alt: 'Adobe Illustrator'
                },
                {
                    name: 'Adobe XD',
                    img: '../img/icons/expdesign.svg',
                    url: 'https://www.adobe.com/products/xd.html',
                    alt: 'Adobe Experience Design'
                }
            ]
        };
    }
);