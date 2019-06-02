import React from 'react';
import DocContainer from './DocContainer';

const DocList = ({ docs }) => 
  <ul className="doc-list">
    { docs.map((doc, i) => <DocContainer key={i} doc={doc} index={i} />) }
  </ul>

export default DocList;