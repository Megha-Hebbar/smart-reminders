import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export function NotificationProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const showNotification = (text) => {
    const id = Date.now();
    setMessages((prev) => [...prev, { id, text }]);

    // Auto-dismiss after 5 sec
    setTimeout(() => {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="toast-container">
        {messages.map((msg) => (
          <div key={msg.id} className="toast">
            ⏰ {msg.text}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}
