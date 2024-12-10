<template>
  <div class="dashboard">
    <AppHeader />
    <div class="calendar-header">
      <h2>{{ t('calendar.title') }}</h2>
      <StatusFilter />
      <button class="add-btn" @click="openModal">+ {{ t('calendar.addEvent') }}</button>
    </div>
    <FullCalendar :options="calendarOptions" />
    <EventModal v-if="showModal" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { AppHeader } from '@/widgets/header';
import { StatusFilter } from '@/features/status-filter';
import { EventModal } from '@/features/event-modal';
import { FullCalendar } from '@/widgets/calendar';
import { useCalendarOptions } from '../lib/useCalendarOptions';

const { t } = useI18n();
const showModal = ref(false);
const calendarOptions = useCalendarOptions();

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  width: 95%;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.add-btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors;
}
</style>