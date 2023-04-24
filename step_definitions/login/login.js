const { I } = inject();

Given(/^the user the login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
  pageObjects.login.accessLoginPage();
  I.seeInCurrentUrl('login');
  pageObjects.login.completeUserInformation(username, password);
});

Given(/^the user the login with (.+) and (.+)$/, async (username, password) => {
  pageObjects.login.accessLoginPage();
  I.seeInCurrentUrl('login');
  pageObjects.login.completeUserInformation(username, password);
});

Given(/^the user the login with {string} and {string}$/, async (username, password) => {
  pageObjects.login.accessLoginPage();
  I.seeInCurrentUrl('login');
  pageObjects.login.completeUserInformation(username, password);
});

Given('the user accesses the login page', async () => {
  pageObjects.login.accessLoginPage();
});

When('the user is on login page', () => {
  I.seeInCurrentUrl('login');
});

When(/^the user complete login process with (.+) and (.+)$/, (username, password) => {
  pageObjects.login.completeUserInformation(username, password);
});

Then('the user is on home page', () => {
  I.seeInCurrentUrl('');
});