import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('modal conditions', () => {
  it('uses v-show for the frame and v-if for the inner content', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('class="modal-frame" v-show="modal.isOpen"');
    expect(source).toContain('class="modal-card" v-if="modal.hasContent"');
  });

  it('opens and closes the modal frame predictably', async () => {
    const wrapper = mount(App);
    expect(wrapper.find('.modal-frame').exists()).toBe(true);
    expect(wrapper.find('.modal-frame').element.style.display).toBe('none');
    await wrapper.get('button:nth-of-type(1)').trigger('click');
    expect(wrapper.find('.modal-frame').element.style.display).not.toBe('none');
    await wrapper.get('button:nth-of-type(2)').trigger('click');
    expect(wrapper.find('.modal-frame').element.style.display).toBe('none');
  });

  it('keeps the frame mounted but can remove the inner content', async () => {
    const wrapper = mount(App);
    await wrapper.get('button:nth-of-type(1)').trigger('click');
    expect(wrapper.find('.modal-card').exists()).toBe(true);
    await wrapper.get('button:nth-of-type(3)').trigger('click');
    expect(wrapper.find('.modal-frame').exists()).toBe(true);
    expect(wrapper.find('.modal-card').exists()).toBe(false);
  });
});
