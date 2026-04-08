import { describe, expect, it, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import { setMode } from '../../src/api.js';
function flushPromises() {
  return new Promise(resolve => setTimeout(resolve, 0));
}


describe('fetch screen states', () => {
  beforeEach(() => {
    setMode('success');
  });

  it('shows loading first', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Loading...');
  });

  it('shows empty state when backend returns an empty list', async () => {
    setMode('empty');
    const wrapper = mount(App);
    await flushPromises();
    expect(wrapper.text()).toContain('Nothing found');
  });

  it('shows error state when request fails', async () => {
    setMode('error');
    const wrapper = mount(App);
    await flushPromises();
    expect(wrapper.text()).toContain('Error: network');
  });
});
