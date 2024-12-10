import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useEventStore } from '@/entities/event';
import { DEFAULT_CALENDAR_CONFIG } from '@/shared/config/calendar';

export function useCalendarOptions() {
  const { t, locale } = useI18n();
  const eventStore = useEventStore();

  return computed(() => ({
    ...DEFAULT_CALENDAR_CONFIG,
    locale: locale.value,
    events: eventStore.events,
    buttonText: {
      today: t('calendar.today'),
      day: t('calendar.day'),
      week: t('calendar.week'),
      month: t('calendar.month')
    },
    views: {
      timeGridDay: {
        titleFormat: { year: 'numeric', month: 'long', day: 'numeric' },
        dayHeaderFormat: { weekday: 'long' },
        scrollTime: '00:00:00'
      }
    }
  }));
}