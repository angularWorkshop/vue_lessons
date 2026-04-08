import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import App from '../../src/App.vue';
import { resolveSearch } from '../../src/api.js';

function flushPromises() {
  return new Promise(resolve => setTimeout(resolve, 0));
}

describe('stale response guard', () => {
  it('keeps a request identity guard in source', async () => {
    const wrapper = mount(App);
    await wrapper.get('input').setValue('old');
    await wrapper.get('button').trigger('click');
    await wrapper.get('input').setValue('new');
    await wrapper.get('button').trigger('click');

    resolveSearch('new', [{ id: 'n1', title: 'New result' }]);
    await flushPromises();
    await nextTick();
    resolveSearch('old', [{ id: 'o1', title: 'Old result' }]);
    await flushPromises();
    await nextTick();

    expect(wrapper.text()).toContain('New result');
    expect(wrapper.text()).not.toContain('Old result');
  });
});
