import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('pinia preferences store', () => {
  it('updates theme and density together', async () => {
    const wrapper = mount(App);
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('dark / compact');
  });
});
