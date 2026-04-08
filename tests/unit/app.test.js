import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const childPath = resolve(currentDir, '../../src/components/SearchBox.vue');

describe('search box v-model contract', () => {
  it('describes the child contract through props and emits', () => {
    const source = readFileSync(childPath, 'utf8');
    expect(source).toContain('defineProps');
    expect(source).toContain('defineEmits');
    expect(source).toContain('update:modelValue');
  });

  it('updates the parent query when the child input changes', async () => {
    const wrapper = mount(App);
    await wrapper.get('input').setValue('watch');
    expect(wrapper.text()).toContain('Watcher Pitfalls');
    expect(wrapper.text()).not.toContain('Vue Intro');
  });

  it('renders the full list when the query is empty', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Vue Intro');
    expect(wrapper.text()).toContain('Computed Basics');
    expect(wrapper.text()).toContain('Watcher Pitfalls');
  });
});
