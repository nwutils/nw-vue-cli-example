import { shallowMount } from '@vue/test-utils';

import LinkList from '@/components/LinkList.vue';

describe('LinkList.vue', () => {
  const link = {
    name: 'Site',
    url: 'https://nwjs.io'
  };

  const shared = {
    validateProps: function () {
      const wrapper = shallowMount(LinkList);
      const links = wrapper.vm.$options.props.links;
      return links;
    },
    renderDefaultContents: function () {
      const wrapper = shallowMount(LinkList, {
        propsData: { links: [link] }
      });
      return wrapper;
    },
    clickLink: function () {
      const wrapper = shallowMount(LinkList, {
        propsData: { links: [link] }
      });

      let domLink = wrapper.findAll('[data-test="link"]').at(0);
      domLink.trigger('click');
    }
  };

  describe('Desktop', () => {
    test('Validate props', () => {
      const links = shared.validateProps();

      expect(links.required)
        .toBeFalsy();

      expect(links.type)
        .toEqual(Array);

      expect(links.default)
        .toBeNull();

      expect(links.validator && links.validator([{ name: '', url: '' }]))
        .toBeFalsy();

      expect(links.validator && links.validator([link]))
        .toBeTruthy();
    });

    test('Render default contents', () => {
      const wrapper = shared.renderDefaultContents();

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('Click link', () => {
      shared.clickLink();

      expect(window.nw.Shell.openExternal)
        .toHaveBeenCalledWith('https://nwjs.io');
    });
  });

  describe('Web', () => {
    beforeEach(() => {
      window.webSetup();
    });

    test('Validate props', () => {
      const links = shared.validateProps();

      expect(links.required)
        .toBeFalsy();

      expect(links.type)
        .toEqual(Array);

      expect(links.default)
        .toBeNull();

      expect(links.validator && links.validator([{ name: '', url: '' }]))
        .toBeFalsy();

      expect(links.validator && links.validator([link]))
        .toBeTruthy();
    });

    test('Render default contents', () => {
      const wrapper = shared.renderDefaultContents();

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('Click link', () => {
      shared.clickLink();

      expect(window.open)
        .toHaveBeenCalledWith('https://nwjs.io', '_blank');
    });
  });
});
