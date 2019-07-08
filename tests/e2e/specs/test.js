// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to your Vue.js Desktop App in NW.js!')
      .assert.containsText('[data-test="versions]"', 'You are using Vue.js (v2.6.10), NW.js (v0.39.2-sdk), Node.js (v12.4.0), and Chromium (v75.0.3770.100).')
      .assert.elementCount('img', 2)
      .end();
  }
};
