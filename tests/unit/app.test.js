import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

describe('orders screen states', () => {
  it('uses v-show for the help panel and v-for with a stable key for success rows', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source).toContain('v-show="screen.helpVisible"');
    expect(source).toContain('v-for="order in screen.orders"');
    expect(source).toContain(':key="order.id"');
  });

  it('renders one clear branch for loading and success', async () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Загрузка...');
    await wrapper.get('button:nth-of-type(4)').trigger('click');
    expect(wrapper.text()).toContain('Angular Intensive');
    expect(wrapper.text()).toContain('Vue Practice Sprint');
  });

  it('switches to empty and error states without leaving success rows visible', async () => {
    const wrapper = mount(App);
    await wrapper.get('button:nth-of-type(2)').trigger('click');
    expect(wrapper.text()).toContain('Нет заказов');
    expect(wrapper.text()).not.toContain('Angular Intensive');
    await wrapper.get('button:nth-of-type(3)').trigger('click');
    expect(wrapper.text()).toContain('Не удалось загрузить данные');
  });
});
