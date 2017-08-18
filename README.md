#1- Install node
brew update
brew install node
node -v

#2- Install protractor (remove -g to set a local setup)
npm install -g protractor

#3- Update webdriver-manager and engage the listener (check 'http://localhost:4444/wd/hub')

#   Global setup
        webdriver-manager update
        webdriver-manager start

#   Local setup
        .node_modules/.bin/webdriver-manager update
        .node_modules/.bin/webdriver-manager start

#4- run in bash protractor command line

#   run all specs/suites
        $bash protractor conf.js
#   run specific suite
        $bash protractor conf.js --suites general
#   run all sepcs/suites with the parameter userName modified via bash
        $bash protractor conf.js --params.global.userName=TestName
