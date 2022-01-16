import { shallowMount, mount } from '@vue/test-utils';

import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const shared = {
    msg: 'new message',
    renderPropsMsg: function () {
      const wrapper = shallowMount(HelloWorld, {
        propsData: {
          msg: this.msg
        }
      });

      return wrapper;
    },
    renderDefaultContents: function () {
      const wrapper = mount(HelloWorld);
      return wrapper;
    }
  };

  describe('Desktop', () => {
    test('Render props.msg', () => {
      const wrapper = shared.renderPropsMsg();

      expect(wrapper.find('[data-test="message"]').text())
        .toEqual(shared.msg);
    });

    test('Render default contents', () => {
      const wrapper = shared.renderDefaultContents();

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('Activate dev tools', async () => {
      const wrapper = shallowMount(HelloWorld);

      const button = wrapper.find('[data-test="toggleDevTools"]');

      button.trigger('click');
      await wrapper.vm.$nextTick();

      expect(wrapper.find('[data-test="toggleDevTools"]').html())
        .toMatchSnapshot('hide');

      button.trigger('click');
      await wrapper.vm.$nextTick();

      expect(wrapper.find('[data-test="toggleDevTools"]').html())
        .toMatchSnapshot('show');
    });
  });

  describe('Web', () => {
    beforeEach(() => {
      window.webSetup();
    });

    test('Render props.msg', () => {
      const wrapper = shared.renderPropsMsg();

      expect(wrapper.find('[data-test="message"]').text())
        .toEqual(shared.msg);
    });

    test('Render default contents', () => {
      const wrapper = shared.renderDefaultContents();

      expect(wrapper)
        .toMatchSnapshot();
    });
  });
});
