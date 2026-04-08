import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('self-updating watcher fix', () => {
  beforeEach(() => {
    document.title = 'Initial';
  });

  it('uses computed for the normalized query instead of rewriting the source field', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('computed');
    expect(source.includes('query.value = value.trim()')).toBe(false);
  });

  it('keeps the input raw value while showing a normalized preview', () => {
    const wrapper = mount(App);
    expect(wrapper.get('input').element.value).toBe('  Vue  ');
    expect(wrapper.text()).toContain('Normalized: Vue');
    expect(wrapper.text()).toContain('Status: ready');
  });

  it('updates the document title from the normalized query without rewriting the input', async () => {
    const wrapper = mount(App);
    await wrapper.get('input').setValue('  Router Lab  ');
    expect(wrapper.get('input').element.value).toBe('  Router Lab  ');
    expect(wrapper.text()).toContain('Normalized: Router Lab');
    expect(document.title).toBe('Search: Router Lab');
  });
});
