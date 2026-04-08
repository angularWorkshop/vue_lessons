import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('click outside directive', () => {
  it('keeps the directive in source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('vClickOutside');
  });

  it('does not close when clicking inside the dropdown', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await wrapper.get('button').trigger('click');
    await wrapper.find('.dropdown button').trigger('click');
    expect(wrapper.find('.dropdown').exists()).toBe(true);
  });

  it('closes when clicking outside the dropdown', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await wrapper.get('button').trigger('click');
    document.body.click();
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.dropdown').exists()).toBe(false);
  });
});
