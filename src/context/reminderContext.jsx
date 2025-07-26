import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNotification } from './notificationContext';

const ReminderContext = createContext();
export const useReminders = () => useContext(ReminderContext);

export function ReminderProvider({ children }) {
  const [reminders, setReminders] = useState([]);
  const [notifiedIds, setNotifiedIds] = useState([]);
  const { showNotification } = useNotification();

  useEffect(() => {
    const stored = localStorage.getItem('smart-reminders');
    if (stored) {
      setReminders(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('smart-reminders', JSON.stringify(reminders));
  }, [reminders]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      reminders.forEach((reminder) => {
        const reminderTime = new Date(reminder.time);
        if (
          reminderTime <= now &&
          !notifiedIds.includes(reminder.id)
        ) {
          showNotification(reminder.text);
          setNotifiedIds((prev) => [...prev, reminder.id]);
        }
      });
    }, 10000); 

    return () => clearInterval(interval);
  }, [reminders, notifiedIds, showNotification]);

  const addReminder = (reminder) => {
    setReminders((prev) => [...prev, reminder]);
  };

  const deleteReminder = (id) => {
    setReminders((prev) => prev.filter((r) => r.id !== id));
    setNotifiedIds((prev) => prev.filter((nid) => nid !== id));
  };

  return (
    <ReminderContext.Provider value={{ reminders, addReminder, deleteReminder }}>
      {children}
    </ReminderContext.Provider>
  );
}
