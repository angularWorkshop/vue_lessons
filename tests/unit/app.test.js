import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import { MockIntersectionObserver } from '../../src/observer.js';

describe('viewport directive', () => {
  it('keeps the custom directive in source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('vViewport');
  });

  it('marks a card active when observer reports intersection', async () => {
    const wrapper = mount(App);
    const cards = wrapper.findAll('article');
    MockIntersectionObserver.lastInstance.emit(cards[1].element, true);
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Active: card-2');
  });

  it('disconnects observer on unmount', () => {
    const wrapper = mount(App);
    const instance = MockIntersectionObserver.lastInstance;
    wrapper.unmount();
    expect(instance.disconnected).toBe(true);
  });
});
