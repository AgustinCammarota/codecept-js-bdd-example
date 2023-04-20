const { I } = inject();

Given('the user accesses the login page', () => {
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