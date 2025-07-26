


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const loc = useLocation();
  return (
    <nav className="navbar">
      <div className="logo">🧠 Smart Reminders</div>
      <ul className="nav-links">
        <li className={loc.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
        <li className={loc.pathname === '/add' ? 'active' : ''}><Link to="/add">Add</Link></li>
        <li className={loc.pathname === '/all' ? 'active' : ''}><Link to="/all">All</Link></li>
      </ul>
    </nav>
  );
}
