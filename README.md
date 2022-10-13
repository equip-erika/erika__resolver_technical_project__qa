# Welcome to Erika's technical assessment project
Please see the site > guide.html page for the technical assessment requirements.

## Notes
* Any _Test #_ prefixed points in _Things left TO DO_ are beyond the immediate requirements. I'm noting them because they are areas of testing I would wish to tackle if I had time. 
* If this were not an assessment, I would choose a different method to access appropriate email/password test data for Test 1. I am making an assumption that this assessment does not require the complexity of secure data handling.

## Things left TO DO
* Investigate baseUrl in wdio.conf.js not pre-appending.
* Test 1: test email validation errors
* Test 1: test empty field validation errors

## Things fixed outside of scope
* On site/guide.html, updated misspelling "choise" to correct spelling "choice". 

## How to run the tests
First, Git and Node must be installed on the device you will run these tests from. Then you can follow the steps below.

1. In the folder you wish to run these tests from, use the command `git init`
2. Pull the repo in the manner you wish to.
3. Use the command `NPM install` - this will set up your local repo.
4. Use the command `npx wdio run ./wdio.conf.js` - this will run all the tests.