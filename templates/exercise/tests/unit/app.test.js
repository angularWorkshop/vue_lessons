import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../../src/App.vue';

describe('template placeholder', () => {
  it('renders the placeholder title', () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain('Replace this component');
  });
});
