import React from 'react';
import { host } from '../../assets/constants/api';
import cx from 'classnames';

const Doc = ({ title, documentName, iconClass, isEven }) => (
  <li className={cx('doc', isEven ? 'even' : 'odd')}>
    <i className={iconClass}></i>
    <a href={host + 'static/documents/' + documentName} className="link doc-link" >{title}</a>
  </li>
);

export default Doc; 