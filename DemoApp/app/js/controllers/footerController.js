'use strict';

sarasApp.controller('FooterController',
    function FooterController($scope, footerStyleService, $routeParams, $route) {

        $scope.backgroundColor = 'url(\'/img/gallery/yousef-espanioly-smallest.jpg\')';
        // $scope.$route = $route;
        //
        // $scope.$watch(function() {
        //     return $route.current;
        // },function(newValue, oldValue) {
        //     console.log('NEWVALUE: ', newValue.name);
        //     switch(newValue.name) {
        //         case 'main':
        //             $scope.backgroundColor = 'red';
        //             console.log('hey');
        //             break;
        //         case 'about':
        //             $scope.backgroundColor = 'purple';
        //             console.log('hey1');
        //             break;
        //         case 'resume':
        //             $scope.backgroundColor = 'yellow';
        //             console.log('hey2');
        //             break;
        //         case 'adobe':
        //             $scope.backgroundColor = 'green';
        //             console.log('hey3');
        //             break;
        //     }
        // });

        $scope.footer = {
            copyright: 'Website built with Angular JS by Sara Cassella. 2018',
            social: [
                {
                    name: 'Github',
                    image: '/img/icons/github.svg',
                    url: 'https://github.com/scassella'
                },
                {
                    name: 'Instagram',
                    image: '/img/icons/instagram.png',
                    url: 'www.instagram.com/scassella'
                },
                {
                    name: 'LinkedIn',
                    image: '/img/icons/linkedIn.png',
                    url: 'https://www.linkedin.com/in/sara-cassella/'
                }
            ]
        };

        $scope.footerBackground = {'background-image' : $scope.backgroundColor}
    }
);
