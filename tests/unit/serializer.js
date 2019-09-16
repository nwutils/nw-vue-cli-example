// Based on jest-serializer-vue

const beautify = require('pretty');

function isHtmlString (received) {
  return received && typeof(received) === 'string' && received.startsWith('<');
}

function isVueWrapper (received) {
  return received && typeof(received) === 'object' && typeof(received.isVueInstance) === 'function';
}

// This removes data-test="whatever" from your snapshots
// If you also want to remove them from your production builds, see:
// https://forum.vuejs.org/t/how-to-remove-attributes-from-tags-inside-vue-components/24138
function removeDataTestAttributes (html) {
  // [-\w]+ will catch 1 or more instaces of a-z, A-Z, 0-9, hyphen (-), or underscore (_)
  return html.replace(/ data-test="[-\w]+"/g, '');
}

module.exports = {
  test: function (received) {
    return isHtmlString(received) || isVueWrapper(received);
  },
  print: function (received) {
    let html = received || '';
    if (isVueWrapper(received)) {
      html = received.html();
    }
    html = removeDataTestAttributes(html);
    // To see available options: https://github.com/beautify-web/js-beautify/blob/master/js/src/html/options.js
    const options = {
      indent_size: 2,
      unformatted: ['code', 'pre'],
      inline: [],
      indent_inner_html: true,
      indent_char: ' ',
      sep: '\n'
    };
    return beautify(html, options);
  }
};
