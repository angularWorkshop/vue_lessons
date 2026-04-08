import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('interactive catalog workspace', () => {
  it('keeps the screen composed from child components', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('<CatalogHero');
    expect(source).toContain('<SearchBox');
    expect(source).toContain('<ProductList');
  });

  it('filters the product list through the child search box', async () => {
    const wrapper = mount(App);
    await wrapper.get('input').setValue('router');
    expect(wrapper.text()).toContain('Router Lab');
    expect(wrapper.text()).not.toContain('Vue Intro');
  });

  it('shows the empty state when no product matches the search', async () => {
    const wrapper = mount(App);
    await wrapper.get('input').setValue('nuxt');
    expect(wrapper.text()).toContain('No products match the current search.');
    expect(wrapper.text()).not.toContain('Vue Intro');
  });
});
