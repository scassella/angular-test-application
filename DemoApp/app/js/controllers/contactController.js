'use strict';

eventsApp.controller('ContactController',
    function ContactController($scope) {

        $scope.contact = {
            name: '',
            date: '',
            email: '',
            message: '',
            location: {
                city: ''
            },
            imageUrl: ''
        };

        $scope.sendEmail = function(contact, contactForm) {
            console.log('FORM DATA: ', contactForm);
            if (contactForm.$valid) {
                window.alert('sent an email to me! Thanks, ' + contact.email);
            }
        };

        $scope.cancelThis = function () {
            window.location = "/EventDetails.html";
        }
    }
);