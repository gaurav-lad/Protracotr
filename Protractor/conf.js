
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/*_spec.js'],
  capabilities: {
    'browserName': 'firefox'
  },
  suites: {

  },
  //     multiCapabilities: [{
  //     'browserName': 'firefox'
  //   },
  //   {
  //     'browserName': 'chrome'
  //   }
  // ],
  framework: 'jasmine2',
  onPrepare: function () {
    //var jasmineReporters = require('jasmine-reporters');
    var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: 'Report/',
      //below two statement emplies to take screenshot only for failed test cases
      //it will take screenshot for every 'it' no matter if it pass or fail 
      //after we removing below two statements
      //takeScreenshots: true,
      //takeScreenshotsOnlyOnFailures: true
    }));
    //jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter('Report', true, true))

  },
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    "stopSpecOnExpectationFailure": false,
  }
};
