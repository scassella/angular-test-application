'use strict';

sarasApp.controller('AdobeController',
    function AdobeController($scope) {

        $scope.adobe = {
            title: 'Adobe Creative Suite',
            imageUrl: '/img/gallery/aaron-burden-ps.jpg',
            intro: 'Through my internships, classes, and personal work, I have used the Adobe Creative Suite to' +
            ' produce infographics, artwork, and marketing materials for Miller Center at Santa Clara University.' +
            ' Click on an image title below to download the pdf.',
            images: [
                {
                    name: 'Brochure Cover',
                    type: 'Illustrator',
                    url: '/img/adobe/Brochure.png',
                    pdf: '/img/adobe/Brochure.pdf'
                },
                {
                    name: 'Brochure Inner',
                    type: 'Illustrator',
                    url: '/img/adobe/Brochure2.png',
                    pdf: '/img/adobe/Brochure.pdf'
                },
                {
                    name: 'Final Project',
                    type: 'Photoshop',
                    url: '/img/adobe/testPhoto.png',
                    pdf: ''
                },
                {
                    name: 'Poster',
                    type: 'Illustrator',
                    url: '/img/adobe/FinalPoster.png',
                    pdf: '/img/adobe/FinalPoster.pdf'
                },
                {
                    name: 'Infographic',
                    type: 'Illustrator',
                    url: '/img/adobe/Infographic.png',
                    pdf: '/img/adobe/Infographic.pdf'
                },
                {
                    name: 'Miller Center Annual Report',
                    type: 'InDesign',
                    url: '/img/adobe/AnnualReport.png',
                    pdf: '/img/adobe/Annual Report.pdf'
                }
            ]
        };
    }
);