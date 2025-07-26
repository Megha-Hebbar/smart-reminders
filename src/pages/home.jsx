


import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <h1><i>WELCOME TO SMART REMINDERS</i></h1>
      <p>Set reminders using form or voice — never forget anything again!</p>
      <Link className="cta-btn" to="/add">Add a Reminder</Link>
    </div>
  );
}
