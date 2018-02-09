'use strict';

eventsApp.controller('ContactController',
    function ContactController($scope) {

        $scope.contact = {
            title: 'Contact Me',
            imageUrl: '/img/gallery/larm-rmah-smallest.jpg',
            intro: '', //NOTE: Can add ng-style for intro depending on if it is empty or not.
            meImage: '/img/gallery/gallery5.jpeg',
            address: {
                street: '829 Filbert St',
                city: 'San Francisco',
                state: 'California',
                zip: '94133'
            },
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

        $scope.sendEmail = function(contact, contactForm) {
            console.log('FORM DATA: ', contactForm);
            if (contactForm.$valid) {
                window.alert('sent an email to me! Thanks, ' + contact.email);
            }
        };

        $scope.cancelThis = function () {
            window.location = "/EventDetails.html";
        };

        $scope.subheaderStyle = function () {
            if (contact.intro !== '') {
                return {
                    'text-align': 'center',
                    'font-size': '1.2rem',
                    'line-height': '2.5rem',
                    'font-weight': '300',
                    'color': 'black',
                    'margin': '50px 70px'
                }
            } else {
                return {};
            }
        };
    }
);