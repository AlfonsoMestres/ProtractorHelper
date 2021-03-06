# How to set up environment

## Install node
~~~bash
    brew update
    brew install node
    node -v
~~~

## Install protractor
~~~bash
    npm install -g protractor
~~~

~~ remove -g to set a local setup ~~

## Update webdriver-manager and engage the listener 

### Global setup
~~~bash
    webdriver-manager update
~~~

### Local setup
~~~bash
    .node_modules/.bin/webdriver-manager update
~~~

~~ check http://localhost:4444/wd/hub to see if it's working ~~

# How to run proctractor testing

## Setup listeners

### Global
~~~bash
    webdriver-manager start
~~~

### Local
~~~bash
    .node_modules/.bin/webdriver-manager start
~~~

## Run testing 

### All specs/suites
~~~bash
    protractor conf.js
~~~

### Specific suite
~~~bash
    protractor conf.js --suites general
~~~

### All specs/suites with the parameter userName modified via bash
~~~bash
    protractor conf.js --params.global.userName=TestName
~~~
