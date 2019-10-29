import { shallowMount } from '@vue/test-utils';
import FsExample from '@/components/FsExample.vue';

describe('FsExample.vue', () => {
  test('Render default contents', () => {
    const wrapper = shallowMount(FsExample);

    expect(wrapper.html())
      .toMatchSnapshot();
  });

  test('Click button', () => {
    const wrapper = shallowMount(FsExample);
    let domButton = wrapper.find('[data-test="fs-example-button"]');
    domButton.trigger('click');

    expect(window.nw.require)
      .toHaveBeenCalledWith('fs');

    expect(wrapper.html())
      .toMatchSnapshot();
  });

  test('Error state', () => {
    window.nw.require.mockImplementation((module) => {
      if (module === 'fs') {
        return new Error();
      }
    });

    const wrapper = shallowMount(FsExample);
    let domButton = wrapper.find('[data-test="fs-example-button"]');
    domButton.trigger('click');

    expect(window.nw.require)
      .toHaveBeenCalledWith('fs');

    expect(wrapper.html())
      .toMatchSnapshot();
  });
});
