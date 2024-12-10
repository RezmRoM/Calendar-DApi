import type { CalendarEvent } from '@/entities/event';

const API_URL = 'https://0d0cd99772057c91.mokky.dev/calendar';

export const calendarApi = {
  async fetchEvents(): Promise<CalendarEvent[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return response.json();
  },

  async createEvent(event: Omit<CalendarEvent, 'id'>): Promise<CalendarEvent> {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    if (!response.ok) {
      throw new Error('Failed to create event');
    }
    return response.json();
  },

  async updateEvent(id: string, event: Partial<CalendarEvent>): Promise<CalendarEvent> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    if (!response.ok) {
      throw new Error('Failed to update event');
    }
    return response.json();
  },

  async deleteEvent(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete event');
    }
  },
};