import { shallowMount } from '@vue/test-utils';
import applyPrototypes from '@/helpers/applyPrototypes.js';

export default {
  shallowMount: function (component, options) {
    let wrapper = shallowMount(component, options);
    applyPrototypes(wrapper)
    return wrapper;
  }
}
