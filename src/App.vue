<script setup>
import { reactive } from 'vue';
import { settingsSeed } from './settings-seed.js';

const settingsForm = reactive({
  ...settingsSeed,
});
</script>

<template>
  <form class="settings-form">
    <h1>Workspace Settings</h1>
    <label>
      <input type="checkbox" />
      Notifications enabled
    </label>
    <fieldset>
      <label><input type="radio" value="compact" /> Compact</label>
      <label><input type="radio" value="comfortable" /> Comfortable</label>
    </fieldset>
    <label>
      Language
      <select>
        <option value="ru">�������</option>
        <option value="en">English</option>
      </select>
    </label>
    <p>�����������: {{ settingsForm.notificationsEnabled ? '���' : '����' }}</p>
    <p>�����: {{ settingsForm.layoutMode }}</p>
    <p>����: {{ settingsForm.language }}</p>
  </form>
</template>

<style scoped>
.settings-form {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: center;
  background: linear-gradient(180deg, #fff7ed 0%, #ffffff 100%);
  color: #9a3412;
  font-family: Arial, sans-serif;
}

fieldset {
  border: 1px solid #fdba74;
  border-radius: 16px;
  padding: 16px;
}
</style>
