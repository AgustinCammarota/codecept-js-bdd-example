const { I } = inject();

const AbstractBasePage = require("../utils/AbstractBasePage");
const NavBar = require("../components/NavBar");

class Dashboard extends AbstractBasePage {
  constructor() {
    super({
      root: '#app',
      elements: {
        sectionHeroTitle: 'section.Hero__hero___1FDXn > div:nth-child(1) > h1',
        sectionHeroSubTitle: 'section.Hero__hero___1FDXn > div:nth-child(2) > h2',
        sectionHeroDateDeparting: 'section.Hero__hero___1FDXn > div:nth-child(3) > div > div:nth-child(1) > div > div > input',
        sectionHeroDateReturning: 'section.Hero__hero___1FDXn > div:nth-child(3) > div > div:nth-child(2) > div > div > input',
        sectionHeroDateAge: 'section.Hero__hero___1FDXn > div:nth-child(3) > div > div:nth-child(3) > div > input',
        sectionHeroDateChildren: 'section.Hero__hero___1FDXn > div:nth-child(3) > div > div:nth-child(4) > div > input',
        sectionButtonDestination: 'section.Hero__hero___1FDXn > div:nth-child(4) > button',
        dateOption: 'body > div:nth-child(4) > div > div.theme__dialog___1f3Zg.theme__active___3rz6t.theme__dialog___1RQhu > section > div > div > div > span > div > div.theme__days___3kAIy > div.theme__day___3cb3g.theme__active___2k63V > span',
        dateOptionSelect: 'body > div:nth-child(4) > div > div.theme__dialog___1f3Zg.theme__active___3rz6t.theme__dialog___1RQhu > nav > button:nth-child(2)',
        navBar: {
          component: {
            ComponentClass: NavBar,
          }
        },
      },
      requiredElements: ['sectionHeroTitle', 'sectionHeroSubTitle'],
    });
  }

  validatePage() {
    I.waitForElement(this.sectionHeroTitle);
    I.waitForElement(this.sectionHeroSubTitle);
    I.waitForElement(this.sectionHeroDateDeparting);
    I.waitForElement(this.sectionHeroDateReturning);
    I.waitForElement(this.sectionHeroDateAge);
    I.waitForElement(this.sectionHeroDateChildren);
  }

  selectDestination() {
    // await this.onClick(this.sectionHeroDateDeparting);
    // await this.onClick(this.dateOption);
    // await this.onClick(this.dateOptionSelect);
    I.click(this.sectionHeroDateAge);
    I.click(this.sectionHeroDateChildren);
    I.click(this.sectionButtonDestination);
  }
}

module.exports = Dashboard;