<script setup>
defineProps({ rows: Array });
</script>
<template><table><tr v-for="row in rows" :key="row.id"><td>{{ row.title }}</td><td>{{ row.status }}</td></tr></table></template>