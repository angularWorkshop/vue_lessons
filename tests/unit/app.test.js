import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import { router } from '../../src/router.js';

const currentDir = dirname(fileURLToPath(import.meta.url));
const routerPath = resolve(currentDir, '../../src/router.js');

describe('nested router layout', () => {
  it('defines child routes in the router config', () => {
    const source = readFileSync(routerPath, 'utf8');
    expect(source).toContain('children');
  });

  it('keeps the layout visible for the nested child route', async () => {
    await router.push('/reports/detail');
    await router.isReady();
    const wrapper = mount(App, { global: { plugins: [router] } });
    expect(wrapper.text()).toContain('Reports Layout');
    expect(wrapper.text()).toContain('Detail');
  });
});
