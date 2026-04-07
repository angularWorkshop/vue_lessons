import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('profile form state', () => {
  it('uses one reactive profile form object', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toMatch(/reactive\s*\(/);
    expect(source).toMatch(/profileForm\.fields/);
    expect(source).toMatch(/profileForm\.agreement/);
  });

  it('renders the student profile values', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Аня');
    expect(wrapper.text()).toContain('anya@edutec.dev');
    expect(wrapper.text()).toContain('Трек: Vue Fundamentals');
    expect(wrapper.text()).toContain('Статус: draft');
  });

  it('shows agreement state and CTA label', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Согласие: подтверждено');
    expect(wrapper.get('button').text()).toBe('Продолжить регистрацию');
  });
});
