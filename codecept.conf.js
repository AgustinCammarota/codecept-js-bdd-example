const path = require('path');
const glob = require('glob');

global.pageObjects = {};

const stepsPath = path.join(__dirname, './step_definitions/**/*.js');
const stepFiles = glob.sync(stepsPath);

const featuresPath = path.join(__dirname, './features/*.feature');
const featuresFiles = glob.sync(featuresPath);

function loadPageObjects() {
  const pagesPath = path.join(__dirname, './pages/**/*.js');
  const pageFiles = glob.sync(pagesPath);

  pageFiles.forEach((pageFile) => {
    const pageObjectName = path.basename(pageFile, '.js');
    const PageObject = require(pageFile);
    global.pageObjects[pageObjectName] = new PageObject();
  });
}

exports.config = {
  output: './output',
  grep: /@regression/,
  helpers: {
    Puppeteer: {
      url: 'https://demo.testim.io/',
      windowSize: '1200x900',
      show: true,
      restart: false,
      waitForNavigation: ['domcontentloaded', 'networkidle0'],
      waitForAction: 500
    },
    AbstractPage: {
      require: "./utils/abstractPage.js",
    }
  },
  include: {
    I: './steps_file.js',
    pageObjects: './pages/**/*.js',
  },
  mocha: {},
  bootstrap: function () {
    loadPageObjects();
  },
  timeout: [
    10,
    {
      grep: '@slow',
      Feature: 500
    },
  ],
  teardown: null,
  hooks: [],
  gherkin: {
    features: featuresFiles,
    steps: stepFiles
  },
  plugins: {
    screenshotOnFail: {
      enabled: false
    },
    retryFailedStep: {
      enabled: true,
      retries: 3,
      maxTimeout: 50000
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'puppeteer-bdd-example'
}