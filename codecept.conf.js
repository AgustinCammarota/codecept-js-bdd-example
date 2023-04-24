const path = require('path');
const glob = require('glob');
const fs = require('fs');

global.pageObjects = {};

const stepsPath = path.join(__dirname, './step_definitions/**/*.js');
const stepFiles = glob.sync(stepsPath);

const featuresPath = path.join(__dirname, './features/*.feature');
const featuresFiles = glob.sync(featuresPath);

function cleanCoverage() {
  const outputDir = path.join(__dirname, './output');
  if (fs.existsSync(outputDir)) {
    fs.readdirSync(outputDir).forEach((file) => {
      const filePath = path.join(outputDir, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        fs.rmdirSync(filePath, { recursive: true });
      } else {
        fs.unlinkSync(filePath);
      }
    });
  }
}

function cleanScreenshots() {
  const screenshotsDir = path.join(__dirname, './screenshots/diff/');
  if (fs.existsSync(screenshotsDir)) {
    fs.readdirSync(screenshotsDir).forEach((file) => {
      const filePath = path.join(screenshotsDir, file);
      fs.unlinkSync(filePath);
    });
    fs.rmdirSync(screenshotsDir);
  }
}

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
  grep: /@LO001/,
  helpers: {
    Puppeteer: {
      url: 'https://platzi.com/',
      windowSize: '1200x900',
      show: true,
      restart: false,
      waitForNavigation: ['domcontentloaded', 'networkidle0'],
      waitForAction: 500,
      chrome: {
        args: [
          '--disable-web-security',
        ],
      },
    },
    AbstractPage: {
      require: './utils/abstractPage.js',
    },
    ResembleHelper : {
      require: 'codeceptjs-resemblehelper',
      screenshotFolder : './output/',
      baseFolder: './screenshots/base/',
      diffFolder: './screenshots/diff/',
      prepareBaseImage: true
    },
    MockRequestHelper: {
      require: '@codeceptjs/mock-request',
      mode: process.env.MOCK_MODE || 'replay',
      recordIfMissing: true,
      recordFailedRequests: true,
      expiresIn: null,
      persisterOptions: {
        fs: {
          recordingsDir: './data/requests',
        },
      },
    },
  },
  include: {
    I: './steps_file.js',
    pageObjects: './pages/**/*.js',
  },
  mocha: {},
  bootstrap: function () {
    loadPageObjects();
    cleanCoverage();
    cleanScreenshots();
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
    testomatio: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: process.env.TESTOMATIO,
    },
    autoDelay: {
      enabled: true
    },
    coverage: {
      enabled: true,
      reporters: ['html', 'text-summary'],
    },
    screenshotOnFail: {
      enabled: false
    },
    retryFailedStep: {
      enabled: true,
      retries: 3,
      maxTimeout: 5000,
      ignoredSteps: [
        'scroll*', // ignore all scroll steps
        /Cookie/, // ignore all steps with a Cookie in it (by regexp)
      ]
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