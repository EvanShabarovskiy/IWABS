import * as React from 'react';
import History from './History';
import { history } from '../../assets/data/history';

const HistoryContainer = () => (
  <History>
    {history.map(item => (
      <p className="history-item">{item}</p>
    ))}
  </History>
);

export default HistoryContainer;
