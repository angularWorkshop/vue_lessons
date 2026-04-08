import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const modalPath = resolve(currentDir, '../../src/components/EditorModal.vue');

describe('product editor modal', () => {
  it('keeps a local draft inside the modal component', () => {
    const source = readFileSync(modalPath, 'utf8');
    expect(source).toContain('reactive');
    expect(source).not.toContain('v-model="props.product.title"');
  });

  it('does not change the main list before save', async () => {
    const wrapper = mount(App);
    await wrapper.findAll('button')[0].trigger('click');
    const inputs = wrapper.findAll('input');
    await inputs[0].setValue('Vue Intro Reloaded');
    expect(wrapper.text()).toContain('Vue Intro');
    expect(wrapper.text()).not.toContain('Vue Intro Reloaded');
  });

  it('applies the edited values on save and closes the modal', async () => {
    const wrapper = mount(App);
    await wrapper.findAll('button')[0].trigger('click');
    const inputs = wrapper.findAll('input');
    await inputs[0].setValue('Vue Intro Reloaded');
    await inputs[1].setValue('1390');
    await wrapper.findAll('button')[2].trigger('click');
    expect(wrapper.text()).toContain('Vue Intro Reloaded');
    expect(wrapper.text()).toContain('1390 ₽');
    expect(wrapper.find('.modal').exists()).toBe(false);
  });
});
