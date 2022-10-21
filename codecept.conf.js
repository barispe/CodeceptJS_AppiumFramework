exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/baris/Desktop/projects/codecept/apk/nennosPizza.apk',
      platform: 'Android',
      device: 'emulator-5554',
      protocol: "http",
  host: "127.0.0.1",
  port: 4723,
  path: "/wd/hub",
  
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 7,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 7,
    },
    {
      pattern: 'amOnPage',
      timeout: 7,
    }
  ],
  tests: './*_test.js',
  name: 'codecept'
}