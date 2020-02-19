import { shallowMount, mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  test('Render props.msg', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });

    expect(wrapper.find('[data-test="message"]').text())
      .toEqual(msg);
  });

  test('Render default contents', () => {
    const wrapper = mount(HelloWorld);

    expect(wrapper)
      .toMatchSnapshot();
  });

  test('Activate dev tools', async () => {
    const wrapper = shallowMount(HelloWorld);

    const button = wrapper.find('[data-test="toggleDevTools"]');

    button.trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.find('[data-test="toggleDevTools').html())
      .toMatchSnapshot('hide');

    button.trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.find('[data-test="toggleDevTools').html())
      .toMatchSnapshot('show');
  });
});
