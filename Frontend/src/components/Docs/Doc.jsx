import React from 'react';
import cx from 'classnames';
import ControlButtons from '../_General/ControlButtons';

const Doc = ({ title, href, iconClass, isEven, showControls, onRemove }) =>
  <div className={cx('doc', isEven ? 'even' : 'odd')}>
    <i className={iconClass}></i>
    <a href={href} className="link doc-link" >{title}</a>
    { showControls && <ControlButtons remove onRemove={onRemove} /> }
  </div>

export default Doc; 