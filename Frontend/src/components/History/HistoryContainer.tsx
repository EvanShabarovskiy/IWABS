import * as React from 'react';
import { History } from './History';
import { history } from '../../assets/constants/history';
import { HistoryItem } from './HistoryItem';

export const HistoryContainer = () => (
  <>
    <h1 className="title">історія закладу</h1>
    <History>
      {history.map(({ title, text }, i) => (
        <HistoryItem key={i} title={title} text={text} />
      ))}
    </History>
  </>
);