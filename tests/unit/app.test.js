import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import { setMode } from '../../src/api.js';
function flushPromises() {
  return new Promise(resolve => setTimeout(resolve, 0));
}


describe('remote list composable', () => {
  it('keeps the composable usage in the page source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('useRemoteList');
  });

  it('renders empty branch after a successful empty load', async () => {
    setMode('empty');
    const wrapper = mount(App);
    await flushPromises();
    expect(wrapper.text()).toContain('Nothing found');
  });

  it('renders error branch after a failed load', async () => {
    setMode('error');
    const wrapper = mount(App);
    await flushPromises();
    expect(wrapper.text()).toContain('Error: network');
  });
});
