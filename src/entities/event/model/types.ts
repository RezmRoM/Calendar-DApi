export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  description?: string;
  className: string;
  completed: boolean;
}

export type EventColor = 'purple-event' | 'blue-event' | 'orange-event' | 'green-event' | 'pink-event';

export interface EventFormData {
  title: string;
  description: string;
  start: string;
  end: string;
  className: EventColor;
  completed: boolean;
}