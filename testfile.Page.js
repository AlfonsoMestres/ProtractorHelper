var AngularHomePage = function(){

    var nameInput = element(by.model("yourName"));
    var greeting = element(by.binding("yourName"));

    this.writeName = function(name){
        nameInput.sendKeys(name);
    };

    this.getGreeting = function(){
        return greeting.getText();
    };

};

module.exports = AngularHomePage;