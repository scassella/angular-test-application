'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
            name: 'Saras App',
            title: 'Welcome to the coolest App in the world!',
            date: 'February 6, 2018',
            location: 'San Francisco',
            imageUrl: '/img/angularjs-logo.png',
            address: {
                street: '829 Filbert Street',
                city: 'San Francisco',
                state: 'California',
                zip: '94133'
            },
            favoriteFoods: [
                {   name: 'Annies Mac & Cheese',
                    tastiness: 3,
                    upVoteCount: 0
                },
                {   name: 'Trader Joes Cheddar Sandwiches',
                    tastiness: 1,
                    upVoteCount: 0
                },
                {   name: 'buratta on toast with honey',
                    tastiness: 2,
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteFood = function(food) {
            food.upVoteCount++;
        };

        $scope.downVoteFood = function(food) {
            food.upVoteCount--;
        };

        $scope.snippet = '<span style="color:pink">Welcome, friends!</span>';
        //the pink color doesn't show up in this case because i am using this with ng-bind-html and angular sanitize removes anything that can be deemed unsafe.

        $scope.booleanValue = true;

        $scope.myStyle = {color: 'pink'};

        $scope.sortorder = 'name';
    }
);