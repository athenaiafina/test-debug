/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://www.reg.ru/web-sites/website-builder',
      show: true,
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'test-debug'
}