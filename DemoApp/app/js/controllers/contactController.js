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
                const emailTemplate = {
                    name: contactForm.$$success.required[0].$viewValue,
                    date: contactForm.$$success.required[1].$viewValue,
                    email: contactForm.$$success.required[2].$viewValue,
                    message: contactForm.$$success.required[3].$viewValue
                };
                const formattedBody = "Hi Sara, I am reaching out to you from your website, saracassella.com. \n My" +
                    " name is " + contactForm.$$success.required[0].$viewValue + ", and the date is " + contactForm.$$success.required[1].$viewValue + ". Here is my message: \n" + contactForm.$$success.required[3].$viewValue + '\n You can reach me at ' + contactForm.$$success.required[2].$viewValue + ". \n Thanks!";
                window.location.href = "mailto:saracassella@gmail.com?body=" + encodeURIComponent(formattedBody);
            }
        };

        $scope.cancelThis = function () {
            window.location = "/index.html";
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