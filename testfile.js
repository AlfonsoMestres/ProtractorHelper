var AngularHomePage = require('./testfile.Page');

var angularPage = new AngularHomePage();
var userName = browser.params.global.userName;

describe("Prueba web angular", function(){

    it("should say hello", function(){
        browser.get("https://angularjs.org/");
        angularPage.writeName("Immfly");
        expect(angularPage.getGreeting()).toEqual("Hello Immfly!");
    });

    it("should say hello with parameters", function(){
        browser.get("https://angularjs.org/");
        angularPage.writeName(userName);
        expect(angularPage.getGreeting()).toEqual("Hello "+userName+"!");
    });

});
