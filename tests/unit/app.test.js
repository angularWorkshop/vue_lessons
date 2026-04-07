import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('baseline app', () => {
  it('renders the baseline title', () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain('vue_lessons baseline');
  });
});

