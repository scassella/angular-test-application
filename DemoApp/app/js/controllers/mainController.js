'use strict';

sarasApp.controller('MainController',
    function MainController($scope, saraData, emailService) {

        $scope.main = {
            name: 'Saras App',
            title: 'Sara Cassella',
            subheading: 'UI/UX Developer @ GE Digital',
            subsubheading: 'Digital Technology Leadership Program',
            date: 'February 6, 2018',
            location: 'San Francisco',
            imageUrl: '/img/photos/malawi2.jpg',
            address: {
                street: '829 Filbert Street',
                city: 'San Francisco',
                state: 'California',
                zip: '94133'
            },
            about: '',
            keepingItSimple: 'My portfolio is clean and simple for a reason - to show any user visiting this site what ' +
            'projects I have worked on, and how my passion for design and development makes me an asset to any team.',
            projects: [
                {
                    name: 'Solano Labs (From GE Digital)',
                    img: '../img/photos/userflowsolano.png',
                    imageAlt: 'Solano Labs User Flow Diagram',
                    description: 'Empowering users to create CI/CD Pipelines in a feedback driven manner.',
                    projectLink: '#/solano#top'
                },
                {
                    name: 'Wise IO (From GE Digital)',
                    img: '../img/photos/image001.png',
                    imageAlt: 'Wise IO Scatter Plot Chart',
                    description: 'Providing charts and integrated graphics to test Data Science Predictions on industrial asset data.',
                    projectLink: '#/wise#top'
                },
                {
                    name: 'GE Digital',
                    img: '../img/photos/PredixConsole.png',
                    imageAlt: 'Predix IO Console UI',
                    description: 'Predix Console for managing applications and services on Cloud Foundry',
                    projectLink: '#/predix#top'
                },
                {
                    name: 'Miller Center for Social Entrepreneurship',
                    img: '../img/photos/MillerCenter.png',
                    imageAlt: 'Miller Center Website',
                    description: 'Web Designer, Annual Report creator, and marketing intern for Miller Center for Social Entrepreneurship',
                    projectLink: '#/millercenter#top'
                }
            ],
            portfolioUrl: 'http://2018.saracassella.com.s3-website-us-west-1.amazonaws.com/#/main',
        };

        $scope.contact = {
            form: {
                name: '',
                email: '',
                message: '',
                imageUrl: ''
            }
        };

        $scope.sara = saraData.sara;

        $scope.sendEmail = function(contact, contactForm) {
            if (contactForm.$valid) {
                const formattedBody = emailService.formatEmail(contactForm);
                window.location.href = "mailto:saracassella@gmail.com?body=" + encodeURIComponent(formattedBody);
            }
        };

        $scope.cancelThis = function () {
            window.location = "";
        };
    }
);