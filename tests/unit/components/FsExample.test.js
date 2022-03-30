import FsExample from '@/components/FsExample.vue';

import testHelpers from '@@/unit/test-helpers.js';

describe('FsExample.vue', () => {
  const shared = {
    renderDefaultContents: function () {
      const wrapper = testHelpers.shallowMount(FsExample);
      return wrapper;
    }
  };

  describe('Desktop', () => {
    test('Render default contents', () => {
      const wrapper = shared.renderDefaultContents();

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('Click button', async () => {
      const wrapper = testHelpers.shallowMount(FsExample);
      let domButton = wrapper.find('[data-test="fs-example-button"]');
      domButton.trigger('click');

      await wrapper.vm.$nextTick();

      expect(window.nw.require)
        .toHaveBeenCalledWith('fs');

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('Error state', async () => {
      window.nw.require.mockImplementation((module) => {
        if (module === 'fs') {
          return new Error();
        }
      });

      const wrapper = testHelpers.shallowMount(FsExample);
      let domButton = wrapper.find('[data-test="fs-example-button"]');
      domButton.trigger('click');

      await wrapper.vm.$nextTick();

      expect(window.nw.require)
        .toHaveBeenCalledWith('fs');

      expect(wrapper)
        .toMatchSnapshot();
    });
  });

  describe('Web', () => {
    beforeEach(() => {
      window.webSetup();
    });

    test('Render default contents', () => {
      const wrapper = shared.renderDefaultContents();

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('getCurrentDirectory', () => {
      const wrapper = testHelpers.shallowMount(FsExample);

      wrapper.vm.getCurrentDirectory();

      expect(wrapper.vm.contents)
        .toEqual(null);

      expect(wrapper.vm.error)
        .toEqual(false);
    });
  });
});
