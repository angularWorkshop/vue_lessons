import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('interval and listener cleanup', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: 800,
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('shows lifecycle setup and cleanup in the source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('onMounted');
    expect(source).toContain('onUnmounted');
  });

  it('ticks while mounted and reacts to resize events', async () => {
    const wrapper = mount(App);
    vi.advanceTimersByTime(3000);
    await Promise.resolve();
    expect(wrapper.text()).toContain('Ticks: 3');

    window.innerWidth = 1200;
    window.dispatchEvent(new Event('resize'));
    await Promise.resolve();
    expect(wrapper.text()).toContain('Viewport: wide');
  });

  it('cleans up the interval and the resize listener on unmount', () => {
    const clearSpy = vi.spyOn(globalThis, 'clearInterval');
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const wrapper = mount(App);
    wrapper.unmount();
    expect(clearSpy).toHaveBeenCalledTimes(1);
    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
