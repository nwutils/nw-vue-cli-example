import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  test('Render default contents', () => {
    const wrapper = shallowMount(App);

    expect(wrapper)
      .toMatchSnapshot();
  });
});
