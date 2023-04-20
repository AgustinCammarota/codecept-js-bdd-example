const { I } = inject();

const AbstractBaseComponent = require("../utils/AbstractBaseComponent");

class NavBar extends AbstractBaseComponent {

  constructor() {
    super({
      name: 'header .theme__appBar___wbg0y TopBar__appBar___2z5Ld',
      elements: {
        icon: '.flexboxgrid__row___1y_mg div:nth-child(1) > h1',
        buttonLogin: '.flexboxgrid__row___1y_mg div:nth-child(2) ul li.TopBar__navigation-item___2F1qc button.NavButton__nav-button___34wHC',
      },
      requiredElements: ['icon', 'buttonLogin']
    });
  }

  validateNavBarIsPresent() {
    I.waitForElement(this.icon);
    I.waitForElement(this.buttonLogin);
  }

  goToLoginPage() {
    I.click(this.buttonLogin);
  }
}

module.exports = NavBar;