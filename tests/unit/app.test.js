import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('reorder list identity', () => {
  it('uses task.id as the list key and connects the reorder button', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('v-for="task in board.tasks"');
    expect(source).toContain(':key="task.id"');
    expect(source).toContain('@click="moveLastToFirst"');
  });

  it('renders the initial task order', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Inbox');
    expect(wrapper.text()).toContain('Review');
    expect(wrapper.text()).toContain('Publish');
  });

  it('renders the new order after the reorder action', async () => {
    const wrapper = mount(App);
    await wrapper.get('button').trigger('click');
    const items = wrapper.findAll('li').map(item => item.text());
    expect(items).toEqual(['Publish', 'Inbox', 'Review']);
  });
});
