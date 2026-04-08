import { describe, expect, it, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import { router } from '../../src/router.js';
import { resetAuth } from '../../src/auth.js';

function flushPromises() {
  return new Promise(resolve => setTimeout(resolve, 0));
}

describe('guard redirect flow', () => {
  beforeEach(() => {
    resetAuth();
  });

  it('redirects to login and preserves the target', async () => {
    await router.push('/admin');
    await router.isReady();
    mount(App, { global: { plugins: [router] } });
    expect(router.currentRoute.value.path).toBe('/login');
    expect(router.currentRoute.value.query.redirect).toBe('/admin');
  });

  it('returns to admin after login', async () => {
    await router.push('/admin');
    await router.isReady();
    const wrapper = mount(App, { global: { plugins: [router] } });
    await wrapper.get('button').trigger('click');
    await flushPromises();
    expect(router.currentRoute.value.path).toBe('/admin');
    expect(wrapper.text()).toContain('Admin Area');
  });
});
