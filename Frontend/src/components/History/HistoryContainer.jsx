import React, { useState } from 'react';
import { History } from './History';

const HistoryContainer = () => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);
  return (
    <History hidden={hidden} toggleHidden={toggleHidden} />
  );
};

export default HistoryContainer;