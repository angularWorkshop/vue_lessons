import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('reactive product card', () => {
  it('uses ref and reactive in the component source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toMatch(/ref\s*\(/);
    expect(source).toMatch(/reactive\s*\(/);
  });

  it('renders the real product card values', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Workshop Edition');
    expect(wrapper.text()).toContain('Vue Handbook');
    expect(wrapper.text()).toContain('Цена: 2400 ₽');
    expect(wrapper.text()).toContain('Скидка: 15%');
    expect(wrapper.text()).toContain('Количество: 2');
    expect(wrapper.text()).toContain('В наличии: да');
  });

  it('renders the discounted total from state and quantity', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Итог: 4080 ₽');
  });
});
