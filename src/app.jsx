


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import AddReminder from './pages/addReminder';
import AllReminders from './pages/allReminders';
import { ReminderProvider } from './context/reminderContext';
import { NotificationProvider } from './context/notificationContext';
import './app.css';

function App() {
  return (
    <NotificationProvider>
      <ReminderProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddReminder />} />
                <Route path="/all" element={<AllReminders />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ReminderProvider>
    </NotificationProvider>
  );
}

export default App;
