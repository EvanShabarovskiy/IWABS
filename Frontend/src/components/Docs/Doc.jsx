import React from 'react';
import { host } from '../../assets/constants/api';

const Doc = ({ title, documentName }) => (
  <li className="doc">
    <a href={host + 'static/documents/' + documentName} className="link doc-link" >{title}</a>
  </li>
);

export default Doc; 