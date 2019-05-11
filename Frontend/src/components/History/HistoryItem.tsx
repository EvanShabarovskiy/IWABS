import * as React from 'react';
import { StatelessComponent } from 'react';

import { IHistoryItemProps } from '../../interfaces/IHistoryItemProps';

export const HistoryItem: StatelessComponent<IHistoryItemProps> = ({ title, text }) => (
  <div className="history-item">
    <h6 className="history-item-title">{title}</h6>
    <p className="history-item-text">{text}</p>
  </div>
);
