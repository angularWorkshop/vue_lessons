import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('theme context via provide/inject', () => {
  it('contains provide/inject in the source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('provide(');
    expect(source).toContain('inject(');
  });

  it('renders the default theme', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Theme: light / sky');
  });

  it('updates the deep badge after a toggle', async () => {
    const wrapper = mount(App);
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('Theme: dark / amber');
    expect(wrapper.get('.badge').classes()).toContain('dark');
  });
});
