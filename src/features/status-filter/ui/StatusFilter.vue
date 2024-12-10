<template>
  <div class="status-filter">
    <button
      v-for="status in statuses"
      :key="status.value"
      class="status-btn"
      :class="{ active: currentStatus === status.value }"
      @click="setStatus(status.value)"
    >
      {{ t(`calendar.${status.key}`) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const currentStatus = ref('all');

const statuses = [
  { value: 'all', key: 'allTasks' },
  { value: 'running', key: 'running' },
  { value: 'finished', key: 'finished' }
];

const setStatus = (status: string) => {
  currentStatus.value = status;
};
</script>

<style scoped>
.status-filter {
  @apply flex gap-3;
}

.status-btn {
  @apply px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors;
}

.status-btn.active {
  @apply bg-blue-500 text-white;
}
</style>