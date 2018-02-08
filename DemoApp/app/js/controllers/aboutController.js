'use strict';

eventsApp.controller('AboutController',
    function AboutController($scope) {

        $scope.about = {
            title: 'About Me',
            imageUrl: '/img/gallery/james-donaldson-smallest.jpg',
            intro: 'I grew up on Bainbridge Island, outside of Seattle, Washington. I got my bachelors degree in Web Design and Engineering, with a dual minor in Computer Engineering and Communications from Santa Clara University, where I graduated in 2017. I am currently pursuing my Masters in Business Administration online at Indiana University\'s Kelly School of Business, while I work as a developer in the Bay Area for General Electric. I currently live in San Francisco, California. I love coding in JavaScript! I built this website on a node server, as a way to help teach myself the Angular Framework.',
            resumeUrl: '/img/Post-Graduate-Resume.pdf',
            resume: {
                education: [
                    {
                        schoolName: 'Santa Clara University',
                        dates: 'September, 2013 - June, 2017',
                        degree: 'Bachelor\'s of Science in Web Design and Engineering',
                        image: '',
                        description: ''
                    },
                    {
                        schoolName: 'Indiana University',
                        dates: 'February, 2018 - Present',
                        degree: 'Master\'s in Business Administration',
                        image: '',
                        description: ''
                    }
                ],
                experience: [
                    {
                        title: 'Software Developer - Digital Technology Leadership Program',
                        company: 'General Electric',
                        dates: 'June, 2017 - Present',
                        description: ''
                    },
                    {
                        title: 'Web Designer and Marketing Intern',
                        company: 'Miller Center for Social Entrepreneurship',
                        dates: 'June, 2016 - June, 2017',
                        description: ''
                    },
                    {
                        title: 'Web Designer and Developer',
                        company: 'IEEE',
                        dates: 'January, 2016 - March, 2017',
                        description: ''
                    }
                ],
                leadership: [
                    {
                        name: 'lorem',
                        description: 'ipsum'
                    },
                    {
                        name: 'lorem',
                        description: 'ipsum'
                    }
                ],
                skills: [
                    {   name: 'lorem',
                        proficiency: 'ipsum'
                    },
                    {   name: 'lorem',
                        proficiency: 'ipsum'
                    },
                    {   name: 'lorem',
                        proficiency: 'ipsum'
                    },
                    {   name: 'lorem',
                        proficiency: 'ipsum'
                    },
                    {   name: 'lorem',
                        proficiency: 'ipsum'
                    }
                ],
                hobbies: [
                    {
                        name: 'lorem'
                    }
                ]
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
            ],
            address: {
                street: '829 Filbert Street',
                city: 'San Francisco',
                state: 'California',
                zip: '94133'
            }
        };

        $scope.upVoteFood = function(food) {
            food.upVoteCount++;
        };

        $scope.downVoteFood = function(food) {
            food.upVoteCount--;
        };

        $scope.sortorder = 'name';
    }
);