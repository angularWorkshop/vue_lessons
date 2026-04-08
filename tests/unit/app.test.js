import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('derived state drift', () => {
  it('moves duplicated summary fields into computed values', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('computed');
    expect(source.includes('summary.total')).toBe(false);
  });

  it('renders the initial derived values', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Items: 1');
    expect(wrapper.text()).toContain('Total: 700');
    expect(wrapper.text()).toContain('Checkout (1 items)');
  });

  it('recalculates the values after adding the second item', async () => {
    const wrapper = mount(App);
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('Items: 2');
    expect(wrapper.text()).toContain('Total: 1100');
    expect(wrapper.text()).toContain('Checkout (2 items)');
  });
});
