'use strict';

sarasApp.controller('WiseController',
    function WiseController($scope) {

        $scope.wise = {
            title: 'Wise.IO',
            imageUrl: '/img/photos/image001.png',
            intro: 'Wise IO is a machine learning company that pulls data from industrial assets into ' +
            'data science models to make predictions on alerts or maintenance needs for those assets. From the customer' +
            'standpoint, this work was previously done by experienced analysts, so new customers needed to validate ' +
            'wise predictions before a switch to full automation. My role on wise was to create ' +
            'dynamic charts for quality assurance of these predictions, as well as overall improvements to the UI for ' +
            'our customers and our team.',
            features: [
                {
                    name: 'Time Series Charts',
                    img: '/img/photos/timeseries.png',
                    imgAlt: 'Time Series Visualizations',
                    description: 'Timeseries visualizations for our GE Power and GE Renewables customers.',
                    impact: 'Allowed customers to effectively QA Data Science predictions to ensure our models were accurate.'
                },
                {
                    name: 'Integrated Login with Single Sign On',
                    img: '/img/photos/wiselogins.png',
                    imgAlt: 'Time Series Visualizations',
                    description: 'Since Wise was an aquired company, the login for the application did not use the GE ' +
                    'Integrated Single Sign On. Using the Flask OIDC library, I was able to integrate our login system ' +
                    'so that External customers and our team could log in to all 5 customer applications using only their SSO,' +
                    'and not have to manage separate user credentials for each app.',
                    impact: 'Saved Time, and reduced mental strain for developers working across applications.'
                },
                {
                    name: 'Scatter Plot Charts',
                    img: '/img/photos/image001.png',
                    imgAlt: 'Scatter Plot Visualizations',
                    description: 'Scatter Plots for our GE Renewables customer.',
                    impact: 'Allowed Renewables customers to effectively QA predictions made on wind turbines alerts.'
                },
                {
                    name: 'UI Error Handling',
                    img: '/img/photos/errorhandling.png',
                    imgAlt: 'UI Error Handling',
                    description: 'Navigational error handling in the UI to keep users on the right track and redirect' +
                    'them if they are not allowed to view a page or have entered an incorrect URL.',
                    impact: 'Previously users were able to see default browser error messages in the browser and were able' +
                    'to navigate to pages that did not exist or should not be accessible. By adding the UI Error handling it ' +
                    'allowed users to navigate in a cleaner, less intrusive way.'
                },
                {
                    name: 'S3 Build Visualization',
                    img: '/img/photos/buildview.png',
                    imgAlt: 'S3 Build Visualizations',
                    description: 'Integrated S3 File interface in our UI to allow the Data Science team to easily access' +
                    'the output build information associated with each prediction made. It was built using the Boto3 API.',
                    impact: 'Streamlined the process of debugging predictions by making the build output easily accessible ' +
                    'from the prediction given.'
                },
                {
                    name: 'Application Switcher',
                    img: '/img/photos/appswitcher.png',
                    imgAlt: 'Application Switcher',
                    description: 'Application switcher for Wise Admin users (specifically the team) to allow them to' +
                    'easily switch between application interfaces to monitor all projects they are working on at once.' +
                    'This feature was added after SSO integration allowed users to not have to maintain credentials' +
                    'between all the different applications',
                    impact: 'Allowed developers on the team to easily access different applications across all customers they' +
                    'may be working with.'
                }
            ],
            tools: [
                {
                    name: 'Python',
                    img: '../img/icons/python.png',
                    url: 'https://www.python.org/',
                    alt: 'Python'
                },
                {
                    name: 'Flask',
                    img: '../img/icons/flask.png',
                    url: 'http://flask.pocoo.org/',
                    alt: 'Flask'
                },
                {
                    name: 'Polymer',
                    img: '../img/icons/polymer.png',
                    url: 'https://www.polymer-project.org/',
                    alt: 'Polymer'
                },
                {
                    name: 'JQuery',
                    img: '../img/icons/jquery.png',
                    url: 'https://jquery.com/',
                    alt: 'JQuery'
                }
            ]
        };
    }
);