'use strict';

sarasApp.controller('ResumeController',
    function ResumeController($scope) {

        $scope.resume = {
            title: 'Resume',
            imageUrl: '/img/gallery/ashim-d-silva-ps.jpg',
            resumeUrl: '/img/Post-Graduate-Resume.pdf',
            resume: {
                education: [
                    {
                        schoolName: 'Santa Clara University',
                        dates: 'September, 2013 - June, 2017',
                        degree: 'Bachelor\'s of Science in Web Design and Engineering',
                        image: '',
                        description: 'Majored in Web Design and Engineering, with a double minor in Computer Science' +
                        ' and Engineering and Communications. During my time there, I spent 4 months studying abroad' +
                        ' in Seville, Spain. I was also a member of Kappa Kappa Gamma Social Fraternity, and served' +
                        ' as Panhellenic Treasurer.'
                    },
                    {
                        schoolName: 'Indiana University',
                        dates: 'February, 2018 - Present',
                        degree: 'Master\'s in Business Administration',
                        image: '',
                        description: 'Currently pursuing my online MBA at Indiana University\'s Kelley School of' +
                        ' Business, while working at General Electric.'
                    }
                ],
                experience: [
                    {
                        title: 'Software Developer - Digital Technology Leadership Program',
                        company: 'General Electric',
                        dates: 'June, 2017 - Present',
                        description: 'Member of GE\'s Digital Technology Leadership Program - a leadership Program for new graduates where members rotate across four teams over the course of two years, gaining 6 months of experience on each team. My first rotation was on the Predix.io team in San Ramon, CA, from June, 2017 - January' +
                        ' 2018. I worked as a full stack developer on the team, contributed to design discussions,' +
                        ' bug fixes, building new features, and restructuring services for the Developer portal for' +
                        ' the Predix Platform. I also lead team scrum when our Product Owner was out of office. On' +
                        ' this rotation the technologies used were Java, JavaScript, and JavaScript Frameworks Vue' +
                        ' and Angular, Node, and SQL. My current rotation (second of four) is on the Digital Twin' +
                        ' team in San Francisco, CA, where I work as a full stack developer.'
                    },
                    {
                        title: 'Web Designer and Marketing Intern',
                        company: 'Miller Center for Social Entrepreneurship',
                        dates: 'June, 2016 - June, 2017',
                        description: 'Designer and creator of Miller Center\'s 2016 Annual Report, and designer and creator of Miller Center for Social Entrepreneurship\'s website.'
                        // THIS WOULD BE A GOOD PLACE FOR NG-BIND-HTML since i could add links to the sites!
                    },
                    {
                        title: 'Web Designer and Developer',
                        company: 'IEEE',
                        dates: 'January, 2016 - March, 2017',
                        description: 'Manager of the front end development and structure of the IEEE Wireless' +
                        ' Communications and Networking Conference, 2017.'
                    }
                ],
                leadership: [
                    {
                        name: 'BuildOn - General Electric',
                        description: 'Currently in fundraising period - This October, 14 of my coworkers and I' +
                        ' will be heading to Malawi, Africa to build a primary school with equal men and women' +
                        ' students through the GE Leadership Program member founded organization, BuildOn.'
                    },
                    {
                        name: 'Feedback Committee - General Electric DTLP Program',
                        description: 'Leader of the Feedback Committee for the Digital Technology Leadership Program.'
                        + 'Primary concerns are continually improving the program based on feedback from current' +
                        ' members and alumni'
                    },
                    {
                        name: 'Senior Thesis – Santa Clara University – Best in Session Award',
                        description: 'Online Web Application to create and manage collaborative playlists. Front-end' +
                        ' development done using CSS, HTML, JQuery and JavaScript. Continuing work with my team' +
                        ' members to make the application publicly available'
                    }
                ],
                skills: [
                    {   name: 'JavaScript',
                        proficiency: '~~~~~~~~~~'
                    },
                    {   name: 'JQuery',
                        proficiency: '~~~~~'
                    },
                    {   name: 'Angular',
                        proficiency: '~~~~~~~'
                    },
                    {   name: 'Vue',
                        proficiency: '~~~~~~~'
                    },
                    {   name: 'Java',
                        proficiency: '~~~~'
                    },
                    {   name: 'C',
                        proficiency: '~~~~'
                    },
                    {   name: 'HTML5',
                        proficiency: '~~~~~~~~~~'
                    },
                    {   name: 'CSS',
                        proficiency: '~~~~~~~~~~'
                    },
                    {   name: 'Mustache and Handlebars',
                        proficiency: '~~~~~'
                    },
                    {   name: 'Adobe Creative Suite - Photoshop, Illustrator, and InDesign',
                        proficiency: '~~~~~~~~'
                    }
                ],
                hobbies: [
                    {
                        name: 'Yoga'
                    },
                    {
                        name: 'Boxing'
                    }
                ]
            }
        };
    }
);