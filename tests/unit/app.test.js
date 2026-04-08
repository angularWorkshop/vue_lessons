import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('cart computed totals', () => {
  it('uses computed for the derived cart values', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('computed');
  });

  it('renders the initial subtotal, discount, and total', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Subtotal: 1000');
    expect(wrapper.text()).toContain('Discount: 200');
    expect(wrapper.text()).toContain('Total: 800');
  });

  it('recalculates totals after quantity changes', async () => {
    const wrapper = mount(App);
    const plusButtons = wrapper.findAll('button').filter(button => button.text() === '+');
    await plusButtons[1].trigger('click');
    expect(wrapper.text()).toContain('Subtotal: 1500');
    expect(wrapper.text()).toContain('Total: 1300');
  });
});
