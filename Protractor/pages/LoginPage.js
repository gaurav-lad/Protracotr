require('../pages/DashboardPage.js');
var LoginPage = function () {
    var loginId = element(by.css('input[type="email"]'));
    var password = element(by.css('input[type="password"]'));
    var signInButton = element(by.css('button[type="submit"] span'));
    var reportPage = element(by.css('a[href="data-reporting.php"] span'));

    this.setCredentials = function (id, pass) {
        loginId.sendKeys(id);
        password.sendKeys(pass);
    };

    this.clickSignIn = function () {
        signInButton.click();
       // browser.driver.wait(3000);
       var EC = protractor.ExpectedConditions;
       browser.wait(EC.visibilityOf(reportPage), 5000);
//       browser.driver.wait(protractor.until.elementIsVisible(element(by.css('a[href="data-reporting.php"] span'))));
        //    browser.driver.findElement(by.css('button[type="submit"]')).click();
        console.log("Click is done");
        return require('./DashboardPage.js');
    };

    this.reportPageNavigation = function () {
        reportPage.click();
        //    return ('./LoginPage.js');
    }
};
module.exports = new LoginPage();