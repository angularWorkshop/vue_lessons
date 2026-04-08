import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const childPath = resolve(currentDir, '../../src/components/ProfileNameField.vue');

describe('defineModel profile field', () => {
  it('uses defineModel in the child component', () => {
    const source = readFileSync(childPath, 'utf8');
    expect(source).toContain('defineModel');
  });

  it('updates the parent preview through the child input', async () => {
    const wrapper = mount(App);
    await wrapper.get('input').setValue('Мила');
    expect(wrapper.text()).toContain('Preview: Мила');
  });

  it('keeps the initial parent value before editing', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Preview: Аня');
  });
});
