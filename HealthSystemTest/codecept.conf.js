const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'Tests',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    girisPagePage: "./pages/GirisPage.js",
    kayitkabulPage: "./pages/kayitkabul.js",
    hizliAramaFragment: "./fragments/hizliArama.js",
    kayitKabulFragment: "./fragments/kayitKabul.js",
    solPanelFragment: "./fragments/solPanel.js",
  },
  name: 'HealthSystemTest'
}