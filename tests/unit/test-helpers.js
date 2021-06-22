import { shallowMount, mount } from '@vue/test-utils';
import applyPrototypes from '@/helpers/applyPrototypes.js';

export default {
  shallowMount: function (component, options) {
    options = options || {};
    const wrapper = shallowMount(component, options);
    console.log(0, { component });
    applyPrototypes(wrapper);
    return wrapper;
  },
  mount: function (component, options) {
    options = options || {};
    const wrapper = mount(component, options);
    console.log(1, { component });
    applyPrototypes(wrapper);
    return wrapper;
  }
};
