import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import { router } from '../../src/router.js';

function flushPromises() {
  return new Promise(resolve => setTimeout(resolve, 0));
}

describe('router query sync', () => {
  it('restores state from the route query', async () => {
    await router.push('/?q=vue&level=advanced');
    const wrapper = mount(App, { global: { plugins: [router] } });
    expect(wrapper.get('input').element.value).toBe('vue');
    expect(wrapper.get('select').element.value).toBe('advanced');
  });

  it('writes new values back to the query string', async () => {
    await router.push('/');
    const wrapper = mount(App, { global: { plugins: [router] } });
    await wrapper.get('input').setValue('pinia');
    await flushPromises();
    await wrapper.get('select').setValue('beginner');
    await flushPromises();
    expect(router.currentRoute.value.query).toMatchObject({ q: 'pinia', level: 'beginner' });
  });
});
