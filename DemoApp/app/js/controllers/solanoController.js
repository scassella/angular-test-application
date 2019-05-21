'use strict';

sarasApp.controller('SolanoController',
    function SolanoController($scope) {

        $scope.solano = {
            title: 'Solano Labs',
            imageUrl: '/img/photos/userflowsolano.png',
            intro: 'Solano Labs is a CI/CD company acquired by GE in 2017. Their pipeline creation tool allows ' +
            'users to test and deploy applications in any number of different configurations, depending on the ' +
            'customer’s use case.',
            sections: [
                {
                    title: 'Objective',
                    body: 'Redesign the user interface to support GE internal customers and existing pre-acquisition ' +
                    'customers, while improving the existing pipeline creation process and reducing confusion for ' +
                    'new users.'
                    // img: '../img/photos/solano.png',
                    // imgAlt: 'Existing Solano UI'
                },
                {
                    title: 'Team',
                    body: 'Joshua Vertes'
                },
                {
                    title: 'Process',
                    body: 'Start small, and isolate problem areas. \n' +
                    'Since we had an existing ui to work with, we started with what was working currently and what ' +
                    'needed immediate attention. We interviewed users and had them perform simple tasks throughout the ' +
                    'website to gauge their expectations of how things should be done and where those expectations were ' +
                    'not met or confusing. \n' +
                    'For more complicated workflows we started from scratch, whereas for simpler workflow we found that updating' +
                    'semantics, terminology, and help text was all that was needed to allow the user to achieve their goal easily.\n' +
                    'We followed Nielsen\'s Hueristics as we created our new UI.',
                    img: '',
                    imgAlt: ''
                },
                // {
                //     title: '',
                //     body: 'We then took those problem areas and broke them down into workflow diagrams:',
                //     img: '../img/photos/userflowsolano.png',
                //     imgAlt: 'Solano User Flow Diagram'
                // },
                {
                    title: 'Challenges',
                    body: 'With only a few internal users there were not as many people to test with as we would have liked. ' +
                    'We brought on new users and users familiar with other CI/CD tools to help remedy this issue.',
                    img: '',
                    imgAlt: ''
                },
                {
                    title: 'Result',
                    body: 'This is an ongoing project, so stay posted for more updates',
                    img: '',
                    imgAlt: ''
                }
            ],
            tools: [
                {
                    name: 'Invision',
                    img: '../img/icons/invision.svg',
                    url: 'https://www.invisionapp.com/',
                    alt: 'Invision'
                },
                {
                    name: 'Draw.IO',
                    img: '../img/icons/drawio.jpg',
                    url: 'https://www.draw.io/',
                    alt: 'Draw.IO'
                },
                {
                    name: 'Adobe Illustrator',
                    img: '../img/icons/adobeillustrator.svg',
                    url: 'https://www.adobe.com/products/illustrator.html',
                    alt: 'Adobe Illustrator'
                },
                {
                    name: 'Adobe XD',
                    img: '../img/icons/expdesign.svg',
                    url: 'https://www.adobe.com/products/xd.html',
                    alt: 'Adobe Experience Design'
                }
            ]
        };
    }
);