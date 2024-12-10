export function formatDateTimeForInput(date: Date | string): string {
  const d = new Date(date);
  return d.toISOString().slice(0, 16);
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d);
}

export function createTimeSlots(start: Date, end: Date, intervalMinutes: number = 30): Date[] {
  const slots: Date[] = [];
  const current = new Date(start);
  
  while (current < end) {
    slots.push(new Date(current));
    current.setMinutes(current.getMinutes() + intervalMinutes);
  }
  
  return slots;
}