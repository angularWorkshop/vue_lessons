import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import { router } from '../../src/router.js';
import { setMode } from '../../src/operations-api.js';

function flushPromises() {
  return new Promise(resolve => setTimeout(resolve, 0));
}

describe('operations async flow', () => {
  it('shows empty state cleanly', async () => {
    setMode('empty');
    await router.push('/');
    await router.isReady();
    const wrapper = mount(App, { global: { plugins: [router] } });
    await flushPromises();
    expect(wrapper.text()).toContain('Nothing in queue');
  });

  it('writes query to URL and keeps success state', async () => {
    setMode('success');
    await router.push('/');
    await router.isReady();
    const wrapper = mount(App, { global: { plugins: [router] } });
    await wrapper.get('input').setValue('alerts');
    await flushPromises();
    expect(router.currentRoute.value.query.q).toBe('alerts');
    expect(wrapper.text()).toContain('Review alerts');
  });
});
