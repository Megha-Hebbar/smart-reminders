

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReminders } from '../context/reminderContext';
import './addReminder.css';

export default function AddReminder() {
  const { addReminder } = useReminders();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !time) return alert('Please fill both fields');
    addReminder({ id: Date.now(), text, time: new Date(time).toISOString() });
    navigate('/all');
  };
  

  

return (
    <div className="add-reminder">
      <h2>Add Reminder</h2>
      <form onSubmit={handleSubmit}>
        <label>Reminder Text:</label>
        <div className="voice-input-wrapper">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} required />
          
        </div>
        <label>Time & Date:</label>
        <input type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
