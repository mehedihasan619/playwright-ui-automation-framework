## Playwright UI Automation Framework using Page Object Model and Github Action

### Project requirements

#### Install NodeJs

Check if you already have Nodejs with `node -v`. If you already have Nodejs you will see the version printed in the terminal. If there's no version printed on the terminal this means you do not have Nodejs installed.

- You will need Nodejs to write and run the Javascript based Playwright. Download Nodejs from [Download Nodejs](https://nodejs.org/en/download). Nodejs comes with npm package manager which you will need further down the road.

#### Install Playwrigth Dependencies

- Run `npm install` on the project root directory to install the framework dependencies such as libraries.
- Install default browser with `npx playwright install` or install specific browser with `npx playwright install <browser_name>` where browser name can be any of [`chromium`, `firefox`, `webkit`, `msedge`] or install all browsers with system dependencies with `npx playwright install-deps`
- Verify browser installation with `npx playwright --version <browser_name>`

### Useful Terminal Commands

Following commands are the ones you would need the most:

- Run all tests on all projects: `npx playwright test`
- Run all tests on a specific project: `npx playwright test --project=<project_name>`
- Run specific test file: `npx playwright test tests/<name_of_the_test_file>`
- Run specific test from a test file: `npx playwright test tests/<name_of_the_test_file> -g '<test_name>'`
- Launch tests in UI mode: `npx playwright test --ui`
- Launch tests in debug mode: `npx playwright test --debug`
- Run test in head mode: `npx playwright test --headed`
- Launch playwright inspector: `npx playwright codegen`

### Playwright Documentation

#### Playwright Codegen

#### Playwright Debug Mode

#### Playwright UI Mode

### Github Action
