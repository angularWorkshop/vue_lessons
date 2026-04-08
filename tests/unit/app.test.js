import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const childPath = resolve(currentDir, '../../src/components/OfferCard.vue');
const appPath = resolve(currentDir, '../../src/App.vue');

describe('presentational offer card', () => {
  it('keeps policy imports out of the child component', () => {
    const childSource = readFileSync(childPath, 'utf8');
    expect(childSource.includes('offer-policy')).toBe(false);
    expect(childSource).toContain('badgeText');
    expect(childSource).toContain('priceText');
  });

  it('prepares the view model in the parent', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('formatOfferView');
    expect(source).toContain(':badge-text="offerView.badgeText"');
    expect(source).toContain(':price-text="offerView.priceText"');
  });

  it('renders the prepared badge and price', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('VIP offer');
    expect(wrapper.text()).toContain('1290 ₽');
  });
});
