import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('student profile sfc', () => {
  it('keeps script setup and scoped styles in the component source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('<script setup>');
    expect(source).toContain('<style scoped>');
  });

  it('renders the student name, role and current track', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Аня');
    expect(wrapper.text()).toContain('Frontend Student');
    expect(wrapper.text()).toContain('Текущий трек: Single File Components');
  });

  it('shows the learning goal, skill focus and button label', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Главная цель: Научиться читать SFC сверху вниз');
    expect(wrapper.text()).toContain('Фокус навыков: template, script setup, scoped styles');
    expect(wrapper.get('button').text()).toBe('Открыть профиль');
  });
});
