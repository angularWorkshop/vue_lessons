import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('nextTick focus management', () => {
  it('keeps nextTick in the source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('nextTick');
  });

  it('shows the input after click', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await wrapper.get('button').trigger('click');
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('focuses the new input after render', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await wrapper.get('button').trigger('click');
    expect(document.activeElement).toBe(wrapper.get('input').element);
  });
});
