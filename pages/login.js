const { I } = inject();

const AbstractBasePage = require("../utils/AbstractBasePage");

class Login extends AbstractBasePage {

  constructor() {
      super({
      root: '.LoginView #login-v2 .Loginv2',
      elements: {
        facebookLogin: '.Loginv2-container .LoginSocial .LoginSocial-facebook a',
        googleLogin: '.Loginv2-container .LoginSocial .LoginSocial-twitter a',
        twitterLogin: '.Loginv2-container .LoginSocial .LoginSocial-google a',
        inputUserName: '.Loginv2-container .LoginWithEmail form .FormInput input[name="email"]',
        inputPassword: '.Loginv2-container .LoginWithEmail form .FormInput input[name="password"]',
        buttonSuccess: '.Loginv2-container .LoginWithEmail form button.btn-Green.btn--md'
      },
      requiredElements: ['inputUserName', 'inputPassword', 'buttonSuccess'],
    });
  }

  accessLoginPage() {
    I.amOnPage('login');
    I.waitForElement(this.inputUserName);
    I.waitForElement(this.inputPassword);
    I.waitForElement(this.buttonSuccess);
  }

  completeUserInformation(username, password) {
    I.waitForEnabled(this.inputPassword);
    I.fillField(this.inputUserName, username);
    I.waitForEnabled(this.inputPassword);
    I.fillField(this.inputPassword, secret(password));
    I.waitForClickable(this.buttonSuccess);
    I.click(this.buttonSuccess);
  }

  validateScreenElements({item}) {
    switch (item) {
      case 'facebook login':
        I.waitForVisible(this.facebookLogin);
        break;
      case 'google login':
        I.waitForVisible(this.googleLogin);
        break;
      case 'twitter login':
        I.waitForVisible(this.twitterLogin);
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