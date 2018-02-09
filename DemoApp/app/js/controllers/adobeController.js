'use strict';

eventsApp.controller('AdobeController',
    function AdobeController($scope) {

        $scope.showPhotoshop = true;
        $scope.showIndesign = true;
        $scope.showIllustrator = true;

        $scope.togglePhotoshop = function() {
            $scope.showPhotoshop = true;
            $scope.showIndesign = false;
            $scope.showIllustrator = false;
        };
        $scope.toggleIndesign = function() {
            $scope.showPhotoshop = false;
            $scope.showIndesign = true;
            $scope.showIllustrator = false;
        };
        $scope.toggleIllustrator = function() {
            $scope.showPhotoshop = false;
            $scope.showIndesign = false;
            $scope.showIllustrator = true;
        };

        $scope.adobe = {
            title: 'Adobe Creative Suite',
            imageUrl: '/img/gallery/aaron-burden-smallest.jpg',
            intro: 'Through my internships, classes, and personal work, I have used the Adobe Creative Suite to' +
            ' produce infographics, artwork, and marketing materials for Miller Center at Santa Clara University.' +
            ' Click on an image title below to download the pdf.',
            photoshop: {
                intro: 'For a final project I created an image of me hanging off the side of an on campus building. This project was done entirely using photoshop and an IPhone 6 camera. ',
                imageUrl: '/img/adobe/testPhoto.png',
                photos: [
                    {   name: 'Step 1',
                        description: 'Original Photo (Taken from 5th floor of Santa Clara University Dorm)',
                        imageUrl: '/img/adobe/testPhoto.png'
                    },
                    {   name: 'Step 2',
                        description: 'Change the percieved angle by expanding the base of the railing',
                        imageUrl: '/img/adobe/testPhoto.png'
                    },
                    {   name: 'Step 3',
                        description: 'Insert my image (hanging from a first floor balcony) with a mask to crop out the background',
                        imageUrl: '/img/adobe/testPhoto.png'
                    },
                    {   name: 'Step 4',
                        description: 'Adjust my fingers on the railing so they are all complete',
                        imageUrl: '/img/adobe/testPhoto.png'
                    },
                    {   name: 'Step 5',
                        description: 'Add a color mask so the images appear as though they were taken in the same lighting',
                        imageUrl: '/img/adobe/testPhoto.png'
                    },
                    {   name: 'Step 6',
                        description: 'Add a subtle shadow from the green on my shirt to the railing, as well as other small details so the image appears as realistic as possible for the final photo',
                        imageUrl: '/img/adobe/testPhoto.png'
                    }
                ]
            },
            inDesign: {
                intro: 'During my internship at Miller Center for Social Entrepreneurship I used Adobe InDesign to' +
                ' create their Annual Report and other booklet marketing materials. For the Annual report, I worked' +
                ' with a copywriter for 4 months, and designed the layout personally. The booklet for the GE' +
                ' healthymagiation Conference in Nairobi was created for a Miller Center conference in partnership' +
                ' with GE.',
                projects: [
                    {   name: 'Annual Report for Miller Center for Social Entrepreneurship',
                        description: 'For Miller Center for Social Entrepreneurship, I used Adobe InDesign to create their Annual Report for 2016.'
                    },
                    {   name: 'GE healthymagination Nairobi Conference',
                        description: 'For Miller Center for Social Entrepreneurship, I created a program for the GE healthymagination Mother and Child Program conference in Nairobi, Kenya.'
                    }
                ]
            },
            illustrator: {
                intro: 'I have a lot of experience with Adobe Illustrator through my internships and through my' +
                ' classwork at Santa Clara University. Since graduating, I also use Illustrator to make infographics' +
                ' for the Feedback Committee that I am the lead of for the DTLP program at GE. The two examples' +
                ' below are both from my coursework at Santa Clara University.',
                projects: [
                    {   name: 'Earth Day Brochure',
                        description: '...',
                        photos: [
                            {   imageUrl: '' },
                            {   imageUrl: '' }
                        ]
                    },
                    {   name: 'Infographic and Poster Design',
                        description: '...',
                        photos: [
                            {   imageUrl: '' },
                            {   imageUrl: '' }
                        ]
                    }
                ]
            },
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