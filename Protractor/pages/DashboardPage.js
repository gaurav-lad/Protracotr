var DashbaordPage = function () {
    var summary = element(by.css('a[href="dashboard.php"]'));
    var reportPage = element(by.css('a[href="data-reporting.php"] span'));
    this.getSummary = function () {
        return summary.getText();
    };
    
    this.reportPageNavigation = function () {
        reportPage.click();
    //    return ('./LoginPage.js');
    }
};
module.exports = new DashbaordPage();