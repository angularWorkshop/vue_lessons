import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('store cycle fix', () => {
  it('permissions store no longer imports auth store directly', () => {
    const source = readFileSync('src/stores/permissions-store.js', 'utf8');
    expect(source.includes('useAuthStore')).toBe(false);
  });

  it('updates summary after role promotion', async () => {
    const wrapper = mount(App);
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('editor / can edit');
  });
});
