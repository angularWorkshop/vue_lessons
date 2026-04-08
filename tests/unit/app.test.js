import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import { resetWidgetStats, widgetStats } from '../../src/widget-sdk.js';

describe('external widget bridge', () => {
  it('creates the widget and keeps source hooks for update and cleanup', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('createWidget');
    expect(source).toContain('onMounted');
  });

  it('updates the widget after label changes', async () => {
    resetWidgetStats();
    const wrapper = mount(App);
    await wrapper.get('button').trigger('click');
    expect(widgetStats.updateCalls).toContain('beta');
  });

  it('destroys the widget on unmount', () => {
    resetWidgetStats();
    const wrapper = mount(App);
    wrapper.unmount();
    expect(widgetStats.destroyCount).toBe(1);
  });
});
