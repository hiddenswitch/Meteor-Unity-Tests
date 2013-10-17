/**
 * @author Benjamin Berman
 * © 2012 All Rights Reserved
 **/
SdkServices = {};

SdkServices.configure = function (options) {

};

// Login with Facebook token
SdkServices.getMeteorTokenFromFacebookToken = function (fbId, name, email, accessToken, options) {
    var serviceData = {
        id: fbId,
        accessToken: accessToken,
        email: email
    };

    var options = _.extend({
        profile: {
            name: name
        }
    }, options);

    return Accounts.updateOrCreateUserFromExternalService('facebook', serviceData, options);
};

Meteor.methods({
    getMeteorTokenFromFacebookToken: SdkServices.getMeteorTokenFromFacebookToken
});