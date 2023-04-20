const { I } = inject();

const AbstractBasePage = require("../utils/AbstractBasePage");

class Login extends AbstractBasePage {

  constructor() {
    super({
      root: '#app > div > section.Login__login___3HOEm',
      elements: {
        title: 'div > div.flexboxgrid__col-xs-6___1DhV6.Login__card-box___1pKg0 > div > h2',
        description: 'div > div.flexboxgrid__col-xs-6___1DhV6.Login__card-box___1pKg0 > div > p',
        inputUserName: '#login > div:nth-child(1) > input',
        inputPassword: '#login > div:nth-child(2) > input',
        buttonSuccess: 'div > div.flexboxgrid__col-xs-6___1DhV6.Login__card-box___1pKg0 > div > nav > button.theme__button___1iKuo.LoginButton__button___1Sd3Q.theme__raised___ONZv6.LoginButton__raised___1fUxJ.theme__primary___2NhN1.LoginButton__primary___38GOe'
      },
      requiredElements: ['title'],
    });
  }

  accessLoginPage() {
    I.amOnPage('login');
    I.waitForElement(this.title);
  }

  completeUserInformation(username, password) {
    I.waitForEnabled(this.inputPassword);
    I.fillField(this.inputUserName, username);
    I.waitForEnabled(this.inputPassword);
    I.fillField(this.inputPassword, password);
    I.waitForClickable(this.buttonSuccess);
    I.click(this.buttonSuccess);
  }

  validateScreenElements({item}) {
    switch (item) {
      case 'title':
        I.waitForVisible(this.title);
        break;
      case 'description':
        I.waitForVisible(this.description);
        break;
      case 'input user name':
        I.waitForVisible(this.inputUserName);
        break;
      case 'input password':
        I.waitForVisible(this.inputPassword);
        break;
      case 'button success':
        I.waitForVisible(this.buttonSuccess);
        break;
      default:
        throw new Error(`Error item screen validation: ${item}`);
    }
  }
}

module.exports = Login;