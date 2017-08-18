#How to set up environment

## Install node
brew update
brew install node
node -v

## Install protractor (remove -g to set a local setup)
npm install -g protractor

## Update webdriver-manager and engage the listener (check 'http://localhost:4444/wd/hub')

###global setup
~~~bash
    webdriver-manager update
~~~

###local setup
~~~bash
    .node_modules/.bin/webdriver-manager update
~~~

#How to run proctractor testing

##Setup listeners

###global
~~~bash
    webdriver-manager start
~~~

###local
~~~bash
    .node_modules/.bin/webdriver-manager start
~~~

##Run testing 

###all specs/suites
~~~bash
    protractor conf.js
~~~

###specific suite
~~~bash
    protractor conf.js --suites general
~~~

###all sepcs/suites with the parameter userName modified via bash
~~~bash
    protractor conf.js --params.global.userName=TestName
~~~
