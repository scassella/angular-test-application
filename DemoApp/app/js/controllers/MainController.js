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
            }
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
            window.location = "/index.html";
        };
    }
);