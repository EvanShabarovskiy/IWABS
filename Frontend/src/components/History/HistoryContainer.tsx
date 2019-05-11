import * as React from 'react';
import History from './History';
import { history } from '../../assets/data/history';
import { HistoryItem } from './HistoryItem';

const HistoryContainer = () => (
  <>
    <h1 className="title">історія закладу</h1>
    <History>
      {history.map(({ title, text }) => (
        <HistoryItem title={title} text={text} />
      ))}
    </History>
  </>
);

export default HistoryContainer;
