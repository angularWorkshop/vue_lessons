import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('status card bindings', () => {
  it('uses class and attribute bindings in the source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toMatch(/:class=/);
    expect(source).toMatch(/:data-status=/);
    expect(source).toMatch(/:aria-label=/);
  });

  it('renders the card text from state', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Нужно проверить привязки');
    expect(wrapper.text()).toContain('Vue Section 2');
    expect(wrapper.text()).toContain('Состояние: warning');
  });

  it('applies the expected attributes and classes', () => {
    const wrapper = mount(App);
    const card = wrapper.get('section.status-card');
    expect(card.attributes('data-status')).toBe('warning');
    expect(card.attributes('aria-label')).toBe('Карточка состояния секции Vue');
    expect(card.classes()).toContain('status-card--warning');
    expect(card.classes()).toContain('status-card--pinned');
    expect(card.classes()).not.toContain('status-card--compact');
  });
});
