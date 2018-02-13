'use strict';

sarasApp.controller('ContactController',
    function ContactController($scope, saraData, emailService) {

        $scope.contact = {
            title: 'Contact Me',
            imageUrl: '/img/gallery/larm-rmah-ps.jpg',
            intro: '', //NOTE: Can add ng-style for intro depending on if it is empty or not.
            form: {
                name: '',
                date: '',
                email: '',
                message: '',
                location: {
                    street: '',
                    city: '',
                    state: '',
                    zip: ''
                },
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