import { ref } from 'vue';

interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

const notifications = ref<Notification[]>([]);
let nextId = 1;

export function useNotifications() {
  const show = (message: string, type: Notification['type'] = 'info') => {
    const id = nextId++;
    const notification: Notification = {
      id,
      message,
      type,
    };
    
    notifications.value.push(notification);
    
    setTimeout(() => {
      const index = notifications.value.findIndex(n => n.id === id);
      if (index !== -1) {
        notifications.value.splice(index, 1);
      }
    }, 5000);
  };

  const remove = (id: number) => {
    const index = notifications.value.findIndex(n => n.id === id);
    if (index !== -1) {
      notifications.value.splice(index, 1);
    }
  };

  return {
    notifications,
    showNotification: show,
    removeNotification: remove,
  };
}