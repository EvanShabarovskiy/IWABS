import React from 'react';
import cx from 'classnames';

import history from '../../assets/data/history';
import { HistoryItem } from './HistoryItem';

export const History = ({ hidden, toggleHidden }) => (
  <section className={cx('section', 'history', { hidden })} id="history">
    <h1 className="section-title">історія закладу</h1>
    <div className="history-list">
      { history.map((item, i) => <HistoryItem key={i} {...item} /> ) }
    </div>
    <button className="btn show-more-btn" onClick={toggleHidden}>{hidden ? 'більше' : 'меньше'} історії</button>
  </section>
);
