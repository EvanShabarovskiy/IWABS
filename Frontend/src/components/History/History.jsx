import React from 'react';

import { history } from '../../assets/constants/data/history';
import { HistoryItem } from './HistoryItem';

export const History = () => (
  <section className="section history">
    <h1 className="section-title">історія закладу</h1>
    {history.map(({ title, text }, i) => (
      <HistoryItem key={i} title={title} text={text} />
    ))}
  </section>
);
