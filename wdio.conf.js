const { join } = require('path');
// const { remote } = require('webdriverio');

exports.config = {
  services: ['appium'],
  //services:['browserStak']
  hostName: 'localhost',
  port: 4723,
  path: '/wd/hub',
  //user: suelen_ObRQZj
  //key:xGriwqHRn6Fr3ZW65zYg
  specs: ['./test/specs/**/*.js'],
  framework: 'mocha',

  capabilities: [
    {
      platformName: 'Android',
      platformVersion: '11',
      deviceName: 'emulator-5554',
      automationName: 'UiAutomator2',
      app: join(process.cwd(), './app/android/wcandroid-12.6-Signed.apk'),
      appActivity: 'ui.main.MainActivity',
      appWaitActivity: 'ui.login.LoginActivity',
      appPackage: 'com.woocommerce.android',

      //'app': bs://7edd64e7791fdcb8f8d6dff628e3066e7e169360 (id:do Renato)
      //'device': 'Samsung Galax Note 20',
      //'os_version': '10.0,
      //'project': 'First NodeJS project',
      //'build': '1',
      //'name': 'First Name',
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
