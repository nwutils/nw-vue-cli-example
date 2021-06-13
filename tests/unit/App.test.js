import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';

describe('App.vue', () => {
  describe('Desktop', () => {
    test('Render default contents', () => {
      const wrapper = shallowMount(App);

      expect(wrapper)
        .toMatchSnapshot();
    });
  });

  describe('Web', () => {
    beforeEach(() => {
      window.webSetup();
    });

    test('Render default contents', () => {
      const wrapper = shallowMount(App);

      expect(wrapper)
        .toMatchSnapshot();
    });
  });
});
