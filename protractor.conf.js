// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');

const headless = process.env.HEADLESS === 'true';

exports.config = {
  allScriptsTimeout: 120000,
  specs: [
    './e2e/**/*spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: headless,
    maxInstances: headless ? 10 : 1,
    chromeOptions: {
      args: headless ? [
        '--no-sandbox',
        '--headless',
        '--disable-gpu',
        '--window-size=1280,1024'] :
        [
          '--no-sandbox'
        ]
    }
  },
  chromeOnly:true,
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 120000,
    print: function () {
    }
  },
  onPrepare() {
    jasmine.getEnv().addReporter(
      new SpecReporter({spec: {displayStacktrace: 'pretty'}}));

    require('ts-node').register({project: 'e2e/tsconfig.e2e.json'});
  }
};
