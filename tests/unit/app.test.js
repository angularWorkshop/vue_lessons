import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('settings form controls', () => {
  it('uses v-model for checkbox, radio, and select', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('v-model="settingsForm.notificationsEnabled"');
    expect(source).toContain('v-model="settingsForm.layoutMode"');
    expect(source).toContain('v-model="settingsForm.language"');
  });

  it('updates checkbox and radio values in the summary', async () => {
    const wrapper = mount(App);
    const checkbox = wrapper.find('input[type="checkbox"]');
    const radios = wrapper.findAll('input[type="radio"]');
    await checkbox.setValue(false);
    await radios[1].setValue();
    expect(wrapper.text()).toContain('�����������: ����');
    expect(wrapper.text()).toContain('�����: comfortable');
  });

  it('updates the selected language in the summary', async () => {
    const wrapper = mount(App);
    await wrapper.get('select').setValue('en');
    expect(wrapper.text()).toContain('����: en');
  });
});
