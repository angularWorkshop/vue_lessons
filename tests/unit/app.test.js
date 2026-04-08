import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('watch filters autosave', () => {
  beforeEach(() => {
    localStorage.clear();
    document.title = 'Initial';
  });

  it('uses watch for external synchronization', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('watch');
    expect(source).toContain('localStorage.setItem');
  });

  it('writes the initial filters into localStorage and document title', () => {
    mount(App);
    expect(localStorage.getItem('catalog-filters')).toBe(JSON.stringify({ query: 'Vue', level: 'all' }));
    expect(document.title).toBe('Catalog: Vue');
  });

  it('keeps storage and document title in sync after field changes', async () => {
    const wrapper = mount(App);
    await wrapper.get('input').setValue('Router');
    await wrapper.get('select').setValue('advanced');
    expect(localStorage.getItem('catalog-filters')).toBe(JSON.stringify({ query: 'Router', level: 'advanced' }));
    expect(document.title).toBe('Catalog: Router');
  });
});
