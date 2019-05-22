import React from 'react';

import { history } from '../../assets/constants/data/history';
import { HistoryItem } from './HistoryItem';

export const History = () => (
  <section className="section history">
    <h1 className="section-title">історія закладу</h1>
    <div className="history-list">
      {history.map(({ title, text }, i) => (
        <HistoryItem key={i} title={title} text={text} />
      ))}
    </div>
    <button className="btn show-more-btn">більше історії</button>
  </section>
);
