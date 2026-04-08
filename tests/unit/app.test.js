import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('catalog screen components', () => {
  it('composes the screen from three child components', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('<CatalogHero');
    expect(source).toContain('<FilterSummary');
    expect(source).toContain('<ProductList');
  });

  it('renders the hero block with title and subtitle', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Starter Product Library');
    expect(wrapper.text()).toContain('Split the workspace into readable component blocks.');
  });

  it('renders both products from the seed data', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Vue Kickoff');
    expect(wrapper.text()).toContain('State Clinic');
  });
});
