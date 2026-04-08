import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('pinia auth store', () => {
  it('shows guest first and profile after login', async () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Guest');
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('Nina');
  });
});
