import testHelpers from '@@/unit/test-helpers.js';

import App from '@/App.vue';

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
