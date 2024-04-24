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

### Playwright Documentation (Must know before you start)

#### Playwright Codegen

Playwright Codegen can help you create code snippets to automate browser interactions. It allows you to record your browser activity and subsequently generate code that may be used.

This is very useful for quickly generating scripts for browser automation without having to manually write all of the code yourself. It can save a significant amount of time and work, especially when dealing with complex interactions or when you are unfamiliar with all of the Playwright library's methods and functions.

You can launch codegen with `npx playwright codegen` or with a url, google.com for example, `npx playwright codegen google.com`

#### Playwright Debug Mode

You can run your tests in debug mode to troubleshoot and identify what is causing them to fail. When debug mode is activated, you gain execution control, allowing you to run each line of code one at a time and see and understand what is going on under the hood.

#### Playwright UI Mode

UI mode is a one-stop solution that includes the following:

- The test findings provide a visual representation of the browser's interaction with the page and a timeline with screenshots.
- The execution time for each interaction, test, and action, including hooks.
- The test code that was or is being executed, which automatically follows the current action.
- Access attached artefacts for further information on user interactions, network requests, or console usage.

### Github Action
