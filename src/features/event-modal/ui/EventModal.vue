<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ t('calendar.addEvent') }}</h3>
        <button class="close-btn" @click="closeModal">×</button>
      </div>
      
      <form @submit.prevent="handleSubmit" class="form">
        <div class="form-field">
          <label>{{ t('event.title') }}</label>
          <input
            v-model="form.title"
            type="text"
            :placeholder="t('event.title')"
            class="input"
          />
        </div>

        <div class="form-field">
          <label>{{ t('event.description') }}</label>
          <textarea
            v-model="form.description"
            :placeholder="t('event.description')"
            class="input"
            rows="3"
          />
        </div>

        <div class="form-field">
          <label>{{ t('event.startTime') }}</label>
          <input
            v-model="form.start"
            type="datetime-local"
            class="input"
          />
        </div>

        <div class="form-field">
          <label>{{ t('event.endTime') }}</label>
          <input
            v-model="form.end"
            type="datetime-local"
            class="input"
          />
        </div>

        <div class="form-field">
          <label>{{ t('event.color') }}</label>
          <select v-model="form.className" class="input">
            <option value="blue-event">Blue</option>
            <option value="purple-event">Purple</option>
            <option value="orange-event">Orange</option>
            <option value="green-event">Green</option>
            <option value="pink-event">Pink</option>
          </select>
        </div>

        <div class="form-field">
          <label>{{ t('event.status') }}</label>
          <div class="status-toggle">
            <label class="switch">
              <input
                v-model="form.completed"
                type="checkbox"
                id="eventStatus"
              >
              <span class="slider"></span>
            </label>
            <span class="status-label">
              {{ form.completed ? t('event.completed') : t('event.inProgress') }}
            </span>
          </div>
        </div>

        <button type="submit" class="submit-btn">
          {{ t('event.save') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useEventStore } from '@/entities/event';
import type { CalendarEvent } from '@/entities/event';

const { t } = useI18n();
const eventStore = useEventStore();

const props = defineProps<{
  currentEvent?: CalendarEvent;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const form = ref({
  title: '',
  description: '',
  start: '',
  end: '',
  className: 'blue-event',
  completed: false
});

const title = computed(() => 
  props.currentEvent ? t('calendar.editEvent') : t('calendar.addEvent')
);

const closeModal = () => {
  emit('close');
};

const handleSubmit = () => {
  const eventData = {
    ...form.value,
    id: props.currentEvent?.id || crypto.randomUUID()
  };

  if (props.currentEvent) {
    eventStore.updateEvent(eventData);
  } else {
    eventStore.addEvent(eventData);
  }

  closeModal();
};

const handleDelete = () => {
  if (props.currentEvent) {
    eventStore.deleteEvent(props.currentEvent.id);
    closeModal();
  }
};
</script>

<style scoped>
.modal-overlay {
  @apply fixed inset-0 bg-black/30 flex items-center justify-center z-50;
}

.modal-content {
  @apply bg-white rounded-lg w-[450px] shadow-lg;
}

.modal-header {
  @apply flex justify-between items-center p-4 border-b;
}

.modal-header h3 {
  @apply text-lg font-medium text-gray-900;
}

.close-btn {
  @apply text-gray-400 hover:text-gray-500 text-2xl leading-none;
}

.form {
  @apply p-4 space-y-4;
}

.form-field {
  @apply space-y-2;
}

.form-field label {
  @apply block text-sm font-medium text-gray-700;
}

.input {
  @apply w-full px-3 py-2 border border-gray-200 rounded-lg text-sm
         focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500;
}

.status-toggle {
  @apply flex items-center gap-3 py-2;
}

.switch {
  @apply relative inline-block w-10 h-6;
}

.switch input {
  @apply opacity-0 w-0 h-0;
}

.slider {
  @apply absolute cursor-pointer inset-0 bg-gray-200 
         transition-all duration-300 rounded-full;
}

.slider:before {
  content: "";
  @apply absolute h-4 w-4 left-1 bottom-1 bg-white 
         transition-all duration-300 rounded-full;
}

input:checked + .slider {
  @apply bg-green-500;
}

input:checked + .slider:before {
  @apply translate-x-4;
}

.status-label {
  @apply text-sm text-gray-600 select-none;
}

.submit-btn {
  @apply w-full bg-blue-500 text-white py-2 px-4 rounded-lg 
         hover:bg-blue-600 transition-colors text-sm font-medium mt-6;
}
</style>