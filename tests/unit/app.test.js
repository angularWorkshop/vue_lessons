import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('workspace from several sfc files', () => {
  it('uses separate hero and checklist components in App.vue', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain("import WorkspaceHero from './components/WorkspaceHero.vue'");
    expect(source).toContain("import WorkspaceChecklist from './components/WorkspaceChecklist.vue'");
    expect(source).toContain('<WorkspaceHero />');
    expect(source).toContain('<WorkspaceChecklist />');
  });

  it('renders the hero block with the workspace title', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Workspace Split into Components');
    expect(wrapper.text()).toContain('Добро пожаловать, Аня');
    expect(wrapper.text()).toContain('Текущий трек: Single File Components');
  });

  it('renders the checklist block with both items and the action button', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Отдельный hero-блок с главным экраном');
    expect(wrapper.text()).toContain('Отдельный checklist-блок с текущим прогрессом');
    expect(wrapper.findAll('li')).toHaveLength(2);
    expect(wrapper.get('button').text()).toBe('Открыть дерево компонентов');
  });
});
