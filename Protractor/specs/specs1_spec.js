//var AngularHomepage = new AngularHomepage();
var angularHomepage = require("../pages/AngularHomepage.js");
var PushCrewPage = require("../pages/PushCrewPage.js");
var DashboardPage = require("../pages/DashboardPage.js");

describe('angularjs homepage todo list', function () {
  xit('should add a todo', function () {
    console.log("***********");
    console.log("M trying to create POM");
    console.log("***********");
    //    AngularHomepage.get();
    angularHomepage.get();
    //   browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });

  xit('PushCrew Login Page Navigation', function () {
    console.log('I am in pushcrew login page it block');
    PushCrewPage.get();
    var LoginPage = PushCrewPage.clickLogin();
  });

  beforeEach(function () {
    return browser.ignoreSynchronization = true;
  });
  
  //consider below IT block for Dashboard_spec.js
  it('PushCrew Login Page Navigation', function () {
    console.log('I am in pushcrew login page it block');
    PushCrewPage.get();
    var LoginPage = PushCrewPage.clickLogin();
    LoginPage.setCredentials('gaurav.lad@wingify.com', 'yfgfc6kg');
    LoginPage.clickSignIn();
    //    var summary = DashboardPage.getSummary();
    LoginPage.reportPageNavigation();
    //   console.log("Summary: ", summary);
  });
});