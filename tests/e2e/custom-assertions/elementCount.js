// A custom Nightwatch assertion.
// The assertion name is the filename.
// Example usage:
//
//   browser.assert.elementCount(selector, count)
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide#writing-custom-assertions

exports.assertion = function elementCount (selector, count) {
  this.message = 'Testing if element "' + selector + '" has count: ' + count;
  this.expected = count;
  this.pass = (value) => {
    return value === count;
  };
  this.value = (result) => {
    return result.value;
  };
  function evaluator (_selector) {
    return document.querySelectorAll(_selector).length;
  }
  this.command = (cb) => {
    return this.api.execute(evaluator, [selector], cb);
  };
};
