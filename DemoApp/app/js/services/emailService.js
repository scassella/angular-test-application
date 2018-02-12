sarasApp.factory('emailService', function () {
    return {
        //don't user $ on your own services, you dont want to accidentally overwrite an angular service.
        formatEmail: function (contactForm) {
            const emailTemplate = {
                name: contactForm.$$success.required[0].$viewValue,
                date: contactForm.$$success.required[1].$viewValue,
                email: contactForm.$$success.required[2].$viewValue,
                message: contactForm.$$success.required[3].$viewValue
            };
            return "Hi Sara, I am reaching out to you from your website, saracassella.com. \n My" +
            " name is " + emailTemplate.name + ", and the date is " + emailTemplate.date + ". Here is my message: \n" + emailTemplate.message + '\n You can reach me at ' + emailTemplate.email + ". \n Thanks!";
        }
    }
});