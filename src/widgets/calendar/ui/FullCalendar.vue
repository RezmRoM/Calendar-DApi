<template>
  <div class="calendar-wrapper">
    <FullCalendar
      ref="calendarRef"
      :options="calendarOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useEventStore } from '@/entities/event';

const props = defineProps<{
  options: any;
}>();

const calendarRef = ref();
const eventStore = useEventStore();

const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'timeGridDay',
  ...props.options
}));

watch(() => eventStore.events, (events) => {
  if (calendarRef.value) {
    const api = calendarRef.value.getApi();
    api.removeAllEvents();
    api.addEventSource(events);
  }
}, { deep: true });
</script>

<style>
.calendar-wrapper {
  @apply w-full h-full;
}
</style>