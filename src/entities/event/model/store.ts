import { defineStore } from 'pinia';
import { calendarApi } from '@/shared/api/calendar';
import type { CalendarEvent } from './types';

export const useEventStore = defineStore('events', {
  state: () => ({
    events: [] as CalendarEvent[],
    isLoading: false,
    error: null as string | null,
  }),
  
  actions: {
    async fetchEvents() {
      this.isLoading = true;
      this.error = null;
      try {
        this.events = await calendarApi.fetchEvents();
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch events';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    
    async addEvent(event: Omit<CalendarEvent, 'id'>) {
      try {
        const newEvent = await calendarApi.createEvent(event);
        this.events.push(newEvent);
        return newEvent;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to create event';
        throw error;
      }
    },
    
    async updateEvent(id: string, eventData: Partial<CalendarEvent>) {
      try {
        const updatedEvent = await calendarApi.updateEvent(id, eventData);
        const index = this.events.findIndex(e => e.id === id);
        if (index !== -1) {
          this.events[index] = updatedEvent;
        }
        return updatedEvent;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to update event';
        throw error;
      }
    },
    
    async deleteEvent(id: string) {
      try {
        await calendarApi.deleteEvent(id);
        const index = this.events.findIndex(e => e.id === id);
        if (index !== -1) {
          this.events.splice(index, 1);
        }
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to delete event';
        throw error;
      }
    }
  }
});