


import React from 'react';
import { useReminders } from '../context/reminderContext';
import ReminderCard from '../components/reminderCard';
import './allReminders.css';

export default function AllReminders() {
  const { reminders, deleteReminder } = useReminders();
  return (
    <div className="all-reminders">
      <h2>Your Reminders</h2>
      {reminders.length === 0 ? (
        <p>No reminders yet. Use the Add page!</p>
      ) : (
        reminders.map((r) => (
          <ReminderCard key={r.id} reminder={r} onDelete={deleteReminder} />
        ))
      )}
    </div>
  );
}
