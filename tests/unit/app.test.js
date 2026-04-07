import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const mainPath = resolve(currentDir, '../../src/main.js');

describe('starter recovery', () => {
  it('restores the App import and mounts into #app', () => {
    const mainSource = readFileSync(mainPath, 'utf8');
    expect(mainSource).toMatch(/import\s+App\s+from\s+['"]\.\/App\.vue['"]/);
    expect(mainSource).toMatch(/createApp\s*\(\s*App\s*\)\s*\.mount\(\s*['"]#app['"]\s*\)/);
  });

  it('renders the repaired root screen instead of placeholders', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('EduTec Vue');
    expect(wrapper.text()).toContain('Starter Recovery');
    expect(wrapper.text()).toContain('Статус проекта: repaired');
  });

  it('shows the owner, note and action button', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Владелец: Denis');
    expect(wrapper.text()).toContain('Точка входа снова связана с корневым экраном.');
    expect(wrapper.get('button').text()).toBe('Проверить старт');
  });
});
