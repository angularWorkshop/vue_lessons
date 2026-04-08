import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('multiple stores in one flow', () => {
  it('enables edit only after selection and advanced filter', async () => {
    const wrapper = mount(App);
    await wrapper.findAll('button')[0].trigger('click');
    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.text()).toContain('can edit');
  });
});
