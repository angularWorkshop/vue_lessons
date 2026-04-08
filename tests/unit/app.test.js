import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('dropdown event modifiers', () => {
  it('uses the expected event modifiers in the source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('@submit.prevent');
    expect(source).toContain('@keyup.enter');
    expect(source).toContain('@click.stop');
  });

  it('opens the dropdown on Enter', async () => {
    const wrapper = mount(App);
    await wrapper.get('input').trigger('keyup.enter');
    expect(wrapper.text()).toContain('������: open');
    expect(wrapper.find('.dropdown').exists()).toBe(true);
  });

  it('keeps the dropdown open when the inner button is clicked', async () => {
    const wrapper = mount(App);
    await wrapper.get('input').trigger('keyup.enter');
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('�����: Vue Fundamentals');
    expect(wrapper.find('.dropdown').exists()).toBe(true);
  });
});
