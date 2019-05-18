import React from 'react';

export const HistoryItem= ({ title, text }) => (
  <div className="history-item">
    <h5 className="history-item-title number">{title}</h5>
    <p className="history-item-text">{text}</p>
  </div>
);
