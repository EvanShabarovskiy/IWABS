import React from 'react';
import Doc from './Doc';

const DocList = ({ docs }) => {
  return (
    <ul className="doc-list">
      {
        docs.map((doc, i) => <Doc key={i} {...doc} />)
      }
    </ul>
  );
};

export default DocList;