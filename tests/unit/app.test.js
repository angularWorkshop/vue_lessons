import { describe, expect, it, vi, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import { resetSearchCalls, searchCalls } from '../../src/api.js';

describe('debounced live search', () => {
  afterEach(() => {
    vi.useRealTimers();
    resetSearchCalls();
  });

  it('waits before calling the API', async () => {
    vi.useFakeTimers();
    const wrapper = mount(App);
    await wrapper.get('input').setValue('vu');
    await wrapper.get('input').setValue('vue');
    expect(searchCalls).toHaveLength(0);
    await vi.advanceTimersByTimeAsync(300);
    expect(searchCalls).toEqual(['vue']);
  });
});
