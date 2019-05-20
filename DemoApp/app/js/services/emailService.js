sarasApp.factory('emailService', function () {
    return {
        //don't user $ on your own services, you dont want to accidentally overwrite an angular service.
        formatEmail: function (contactForm) {
            const emailTemplate = {
                name: contactForm.$$success.required[0].$viewValue,
                email: contactForm.$$success.required[1].$viewValue,
                message: contactForm.$$success.required[2].$viewValue
            };
            return "Hi Sara, I am reaching out to you from your website, saracassella.com. \n My" +
            " name is " + emailTemplate.name + ". Message: \n" + emailTemplate.message + '\n You can reach me at ' + emailTemplate.email + ". \n Thanks!";
        }
    };
});