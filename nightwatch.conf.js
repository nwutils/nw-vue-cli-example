// eslint-disable-next-line no-unused-vars
let nwBinary = 'nwjs/nw.exe';
let driver = 'nwjs/chromedriver.exe';

if (process.platform === 'linux') {
  nwBinary = 'nwjs/nw';
  driver = 'nwjs/chromedriver';
}
if (process.platform === 'darwin') {
  nwBinary = 'nwjs.app/contents/MacOS/nwjs';
  driver = 'chromedriver';
}

nwBinary = './node_modules/nw/' + nwBinary;
driver = './node_modules/nw/' + driver;

module.exports = (function (settings) {
  console.log(nwBinary);
  settings.webdriver.server_path = driver;
  settings.selenium.cli_args['webdriver.chrome.driver'] = driver;
  return settings;
})(require('./nightwatch.json'));
