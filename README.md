# wizeline-challenge
This is my proposal for this wizeline challenge: https://www.wizeline.com/front-end-testing-automation-challenge/

I'm Using WebdriverIO with Javascrip implementing the following:


• The project is organized using Page Object Model (POM)

• All test cases must contains at least one assertion

• Meaningful validations

• Data provider for the test data.

• Test data reporter.

• Multi-browser testing.


HOW TO RUN:

prerequisites:

• nodeJS
• npm
• webdriverIO

To run the full Test Suite:

npx wdio wdio.conf.js --suite full

To run the just one Test:

npx wdio wdio.conf.js --spect TEST_CASE_NAME.js


To run multiple Tests:

npx wdio wdio.conf.js --spect TEST_CASE_NAME.js --spect TEST_CASE_NAME.js



HOW TO ENABLE MULTI BROWSER TESTTING:



By default webdriverio user chromedriver to run the tests.
In order to anable the multi browser testing with firefox, run geckodriver in a new terminal:

./geckodriver --binary 'FIREFOX_PATH'

then run the Tests.

Also you can use Selenium-standalone to enable multi browser testing.

HOW TO GENERATE TESTS REPORTS:



By default WebdriverIO is using spec reporter in the commandline.

In order to generate Allure reports:

prerequisites:
• allure-commandline
• java

Run the command:

allure generate allure-results/ && allure open
