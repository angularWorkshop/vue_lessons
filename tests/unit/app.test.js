import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('registration form v-model', () => {
  it('contains v-model bindings in the source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('v-model="form.fields.name"');
    expect(source).toContain('v-model="form.fields.email"');
    expect(source).toContain('v-model="form.agreementAccepted"');
  });

  it('syncs typed values into the rendered state', async () => {
    const wrapper = mount(App);
    const inputs = wrapper.findAll('input');
    await inputs[0].setValue('����');
    await inputs[1].setValue('masha@edutec.dev');
    expect(wrapper.text()).toContain('���: ����');
    expect(wrapper.text()).toContain('Email: masha@edutec.dev');
  });

  it('updates the submit status and result message', async () => {
    const wrapper = mount(App);
    await wrapper.get('form').trigger('submit');
    expect(wrapper.text()).toContain('������: submitted');
    expect(wrapper.text()).toContain('����������� ���������');
  });
});
