const { join } = require('path');
// const { remote } = require('webdriverio');

exports.config = {
  hostName: 'localhost',
  port: 4723,
  path: '/wd/hub',
  specs: ['./test/specs/**/*.js'],
  framework: 'mocha',

  capabilities: [
    {
      platformName: 'Android',
      platformVersion: '11',
      deviceName: 'emulator-5554',
      automationName: 'UiAutomator2',
      app: join(process.cwd(), './app/android/loja-ebac2.apk'),
      appActivity: 'ui.main.MainActivity',
      appWaitActivity: 'ui.login.LoginActivity',
      appPackage: 'com.woocommerce.android',
      // fullReset: true,
      // clearSystemFiles: true,
    },
  ],
  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  mochaOpts: {
    ui: 'bdd',
    timeout: 100000,
  },
  waitForTimeout: 200000,
  reporters: [
    'dot',
    [
      'junit',
      {
        outputDir: './',
      },
    ],
  ],
};

// (async () => {
//   const driver = await remote(config);

//   // Clear the app storage and cache
//   await driver.execute('mobile: clearSystemFiles', {
//     packageNames: ['com.woocommerce.android'],
//   });

//   // Close the driver instance
//   await driver.deleteSession();
// })();
