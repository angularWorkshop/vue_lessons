import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('action panel clicks', () => {
  it('renders the initial state and click handlers', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('@click="handlePrimaryAction"');
    expect(source).toContain('@click="handleSecondaryAction"');

    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Vue Control Center');
    expect(wrapper.text()).toContain('������: idle');
    expect(wrapper.text()).toContain('������: 0');
  });

  it('updates the panel on the primary action', async () => {
    const wrapper = mount(App);
    await wrapper.findAll('button')[0].trigger('click');
    expect(wrapper.text()).toContain('������: active');
    expect(wrapper.text()).toContain('������: 1');
    expect(wrapper.text()).toContain('��������� ��������: primary');
  });

  it('updates the panel on the secondary action', async () => {
    const wrapper = mount(App);
    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.text()).toContain('������: review');
    expect(wrapper.text()).toContain('��������� ��������: secondary');
  });
});
