

import React from 'react';
import './reminderCard.css';

export default function ReminderCard({ reminder, onDelete }) {
  return (
    <div className="reminder-card">
      <div>
        <h3>{reminder.text}</h3>
        <small>{new Date(reminder.time).toLocaleString()}</small>
      </div>
      <button className="delete-btn" onClick={() => onDelete(reminder.id)}>🗑</button>
    </div>
  );
}
