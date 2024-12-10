import type { CalendarOptions } from '@fullcalendar/core';

export const DEFAULT_CALENDAR_CONFIG: Partial<CalendarOptions> = {
  initialView: 'timeGridDay',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'timeGridDay,timeGridWeek,dayGridMonth'
  },
  slotMinTime: '00:00:00',
  slotMaxTime: '24:00:00',
  slotDuration: '00:30:00',
  slotLabelFormat: {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  },
  firstDay: 1,
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekNumbers: true,
  nowIndicator: true,
  allDaySlot: false,
  buttonText: {
    today: 'Сегодня',
    day: 'День',
    week: 'Неделя',
    month: 'Месяц'
  },
};

export const CALENDAR_VIEW_OPTIONS = {
  timeGridDay: {
    titleFormat: { year: 'numeric', month: 'long', day: 'numeric' }
  },
  timeGridWeek: {
    titleFormat: { year: 'numeric', month: 'long' }
  },
  dayGridMonth: {
    titleFormat: { year: 'numeric', month: 'long' }
  },
};

export const EVENT_COLORS = [
  { value: 'purple-event', label: 'Purple' },
  { value: 'blue-event', label: 'Blue' },
  { value: 'orange-event', label: 'Orange' },
  { value: 'green-event', label: 'Green' },
  { value: 'pink-event', label: 'Pink' },
] as const;