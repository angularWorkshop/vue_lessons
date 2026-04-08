import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import { router } from '../../src/router.js';

function flushPromises() {
  return new Promise(resolve => setTimeout(resolve, 0));
}

describe('operations workspace flow', () => {
  it('opens the editor route from the queue', async () => {
    await router.push('/');
    await router.isReady();
    const wrapper = mount(App, { global: { plugins: [router] } });
    await wrapper.get('button').trigger('click');
    await flushPromises();
    expect(router.currentRoute.value.path).toBe('/editor/op-1');
    expect(wrapper.text()).toContain('Editor op-1');
  });
});
