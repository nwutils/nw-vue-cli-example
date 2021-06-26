import { shallowMount, mount } from '@vue/test-utils';
import applyPrototypes from '@/helpers/applyPrototypes.js';

export default {
  shallowMount: function (component, options) {
    options = options || {};
    applyPrototypes.toOptions(options);
    const wrapper = shallowMount(component, options);
    return wrapper;
  },
  mount: function (component, options) {
    options = options || {};
    applyPrototypes.toOptions(options);
    const wrapper = mount(component, options);
    return wrapper;
  }
};
