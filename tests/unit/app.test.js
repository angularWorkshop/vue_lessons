import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(currentDir, '../../src/App.vue');

import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('shared composable usage', () => {
  it('uses the shared composable twice instead of one accidental shared instance', () => {
    const source = readFileSync(appPath, 'utf8');
    expect(source.match(/useDirectoryFilter\(/g)?.length ?? 0).toBeGreaterThanOrEqual(2);
  });

  it('filters the courses list without touching mentors', async () => {
    const wrapper = mount(App);
    const [coursesInput] = wrapper.findAll('input');
    await coursesInput.setValue('router');
    const sections = wrapper.findAll('section');
    expect(sections[0].text()).toContain('Router Lab');
    expect(sections[1].text()).toContain('Anna Vue');
  });

  it('filters the mentors list independently', async () => {
    const wrapper = mount(App);
    const [, mentorsInput] = wrapper.findAll('input');
    await mentorsInput.setValue('roman');
    const sections = wrapper.findAll('section');
    expect(sections[1].text()).toContain('Roman Router');
    expect(sections[0].text()).toContain('Vue Intro');
  });
});
