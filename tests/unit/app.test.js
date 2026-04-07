import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const mainPath = resolve(currentDir, '../../src/main.js');

describe('first vue screen', () => {
  it('mounts the app into #app in main.js', () => {
    const mainSource = readFileSync(mainPath, 'utf8');
    expect(mainSource).toMatch(/createApp\s*\(\s*App\s*\)\s*\.mount\(\s*['"]#app['"]\s*\)/);
  });

  it('renders the workspace title and welcome texts', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('EduTec Vue');
    expect(wrapper.text()).toContain('Vue Bootcamp Workspace');
    expect(wrapper.text()).toContain('Добро пожаловать, Аня');
  });

  it('shows the current track, next lesson and CTA label', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Текущий трек: First Contact with Vue');
    expect(wrapper.text()).toContain('Следующий шаг: Single File Components');
    expect(wrapper.get('button').text()).toBe('Открыть workspace');
  });
});
