import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('theme panel bindings', () => {
  it('uses class and style bindings in the source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toMatch(/:class=/);
    expect(source).toMatch(/:style=/);
  });

  it('renders the panel texts from state', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('light mode');
    expect(wrapper.text()).toContain('Theme Preview');
    expect(wrapper.text()).toContain('Текущая тема собрана только через state и bindings.');
    expect(wrapper.get('button').text()).toBe('Применить тему');
  });

  it('applies the expected class and inline styles', () => {
    const wrapper = mount(App);
    const panel = wrapper.get('section.theme-panel');
    expect(panel.classes()).toContain('theme-panel--light');
    expect(panel.element.style.backgroundColor).toBe('rgb(236, 253, 245)');
    expect(panel.element.style.color).toBe('rgb(18, 53, 36)');
    expect(panel.element.style.borderColor).toBe('rgb(66, 184, 131)');
    expect(wrapper.get('button').element.style.backgroundColor).toBe('rgb(66, 184, 131)');
  });
});
