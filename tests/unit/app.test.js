import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('comments list keys', () => {
  it('renders list rows with comment.id as the key', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('v-for="comment in visibleComments()"');
    expect(source).toContain(':key="comment.id"');
  });

  it('shows only published comments by default', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Анна — Отличный старт');
    expect(wrapper.text()).toContain('Ира — Полезный пример');
    expect(wrapper.text()).not.toContain('Макс — Жду доработку');
  });

  it('shows all comments after toggling the filter', async () => {
    const wrapper = mount(App);
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('Макс — Жду доработку');
    expect(wrapper.text()).toContain('Фильтр: all');
  });
});
