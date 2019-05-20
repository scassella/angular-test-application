'use strict';

sarasApp.controller('FooterController',
    function FooterController($scope) {

        $scope.footer = {
            copyright: 'All Content Created and Coded by Sara Cassella. 2019',
            social: [
                {
                    name: 'Github',
                    image: '/img/icons/github.png',
                    url: 'https://github.com/scassella'
                },
                {
                    name: 'LinkedIn',
                    image: '/img/icons/linkedIn.png',
                    url: 'https://www.linkedin.com/in/sara-cassella/'
                },
                {
                    name: 'Portfolio 2018',
                    image: '/img/icons/web.png',
                    url: 'http://2018.saracassella.com.s3-website-us-west-1.amazonaws.com/#/main'
                }
            ]
        };
    }
);
