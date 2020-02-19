import { shallowMount } from '@vue/test-utils';
import FsExample from '@/components/FsExample.vue';

describe('FsExample.vue', () => {
  test('Render default contents', () => {
    const wrapper = shallowMount(FsExample);

    expect(wrapper)
      .toMatchSnapshot();
  });

  test('Click button', async () => {
    const wrapper = shallowMount(FsExample);
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

    const wrapper = shallowMount(FsExample);
    let domButton = wrapper.find('[data-test="fs-example-button"]');
    domButton.trigger('click');

    await wrapper.vm.$nextTick();

    expect(window.nw.require)
      .toHaveBeenCalledWith('fs');

    expect(wrapper)
      .toMatchSnapshot();
  });
});
