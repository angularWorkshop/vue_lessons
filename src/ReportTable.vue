<script setup>
defineProps({ rows: Array });
</script>
<template><table><tr v-for="row in rows" :key="row.id"><td><slot name="cell-title" :row="row">{{ row.title }}</slot></td><td><slot name="cell-status" :row="row">{{ row.status }}</slot></td></tr></table></template>