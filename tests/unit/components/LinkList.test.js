import { shallowMount } from '@vue/test-utils';
import LinkList from '@/components/LinkList.vue';

describe('LinkList.vue', () => {
  const link = {
    name: 'Site',
    url: 'https://nwjs.io'
  };

  test('Validate props', () => {
    const wrapper = shallowMount(LinkList);
    const links = wrapper.vm.$options.props.links;

    expect(links.required)
      .toBeFalsy();

    expect(links.type)
      .toBe(Array);

    expect(links.default)
      .toBeNull();

    expect(links.validator && links.validator([{ name: '', url: '' }]))
      .toBeFalsy();

    expect(links.validator && links.validator([link]))
      .toBeTruthy();
  });

  test('Render default contents', () => {
    const wrapper = shallowMount(LinkList, {
      propsData: { links: [link] }
    });

    expect(wrapper)
      .toMatchSnapshot();
  });

  test('Click link', () => {
    const wrapper = shallowMount(LinkList, {
      propsData: { links: [link] }
    });

    let domLink = wrapper.findAll('[data-test="link"]').at(0);
    domLink.trigger('click');

    expect(window.nw.Shell.openExternal)
      .toHaveBeenCalledWith('https://nwjs.io');
  });
});
