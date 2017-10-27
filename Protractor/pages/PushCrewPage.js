require('../pages/LoginPage.js');
var PushCrewPage = function () {
    //   var nameInput = element(by.model('yourName'));
    //   var greeting = element(by.binding('yourName'));
    var loginButton = element(by.css('a[href="https://pushcrew.com/admin"]'));

    this.get = function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://pushcrew.com/');
    };

    this.clickLogin = function () {
        loginButton.click();
        return require('./LoginPage.js');
    };

    //   this.setName = function(name) {
    //     nameInput.sendKeys(name);
    //   };

    //   this.getGreeting = function() {
    //     return greeting.getText();
    //   };
};
module.exports = new PushCrewPage();