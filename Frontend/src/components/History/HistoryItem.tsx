import * as React from 'react';
import { StatelessComponent } from 'react';

import { IHistoryItemProps } from '../../interfaces/IHistoryItemProps';

export const HistoryItem: StatelessComponent<IHistoryItemProps> = ({ title, text }) => (
  <div className="history-item">
    <h5 className="history-item-title number">{title}</h5>
    <p className="history-item-text">{text}</p>
  </div>
);
