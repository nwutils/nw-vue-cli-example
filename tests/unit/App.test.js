import App from '@/App.vue';

import testHelpers from '@@/unit/test-helpers.js';

describe('App.vue', () => {
  describe('Desktop', () => {
    test('Render default contents', () => {
      const wrapper = testHelpers.shallowMount(App);

      expect(wrapper)
        .toMatchSnapshot();
    });
  });

  describe('Web', () => {
    beforeEach(() => {
      window.webSetup();
    });

    test('Render default contents', () => {
      const wrapper = testHelpers.shallowMount(App);

      expect(wrapper)
        .toMatchSnapshot();
    });
  });
});
