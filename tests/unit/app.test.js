import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('catalog search composable', () => {
  it('uses the dedicated composable inside the screen', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('useCatalogSearch');
  });

  it('renders only the first page initially', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Page 1 / 3');
    expect(wrapper.text()).toContain('Vue Intro');
    expect(wrapper.text()).not.toContain('Pinia Board');
  });

  it('filters results and resets pagination when query changes', async () => {
    const wrapper = mount(App);
    await wrapper.get('input').setValue('pinia');
    expect(wrapper.text()).toContain('Page 1 / 1');
    expect(wrapper.text()).toContain('Pinia Board');
    expect(wrapper.text()).not.toContain('Vue Intro');
  });
});
