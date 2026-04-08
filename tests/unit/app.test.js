import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('form group via provide/inject', () => {
  it('contains provide/inject in the source', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('provide(');
    expect(source).toContain('inject(');
  });

  it('renders the empty fallback first', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Preview: Guest / missing@example.com');
  });

  it('updates preview after typing into the shared form state', async () => {
    const wrapper = mount(App);
    const inputs = wrapper.findAll('input');
    await inputs[0].setValue('Nina');
    await inputs[1].setValue('nina@example.com');
    expect(wrapper.text()).toContain('Preview: Nina / nina@example.com');
  });
});
