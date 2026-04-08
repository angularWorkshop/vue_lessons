import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

let observedElements;
let disconnectCalls;

class ResizeObserverMock {
  constructor(callback) {
    this.callback = callback;
  }

  observe(element) {
    observedElements.push(element);
    this.callback([{ contentRect: { width: 320 } }]);
  }

  disconnect() {
    disconnectCalls += 1;
  }
}

describe('resize observer lifecycle', () => {
  beforeEach(() => {
    observedElements = [];
    disconnectCalls = 0;
    global.ResizeObserver = ResizeObserverMock;
  });

  it('starts the observer through lifecycle hooks', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('onMounted');
    expect(source).toContain('ResizeObserver');
  });

  it('observes the panel and renders the measured width', async () => {
    const wrapper = mount(App);
    await nextTick();
    expect(observedElements.length).toBe(1);
    expect(wrapper.text()).toContain('Width: 320');
    expect(wrapper.text()).toContain('Status: Observer active');
  });

  it('disconnects the observer on unmount', () => {
    const wrapper = mount(App);
    wrapper.unmount();
    expect(disconnectCalls).toBe(1);
  });
});
