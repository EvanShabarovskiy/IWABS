import React from 'react';

const List = ({ list }) =>
  <ul className="list">
    { list.map((item, i) => <li className="list-item">{item}</li>) }
  </ul>

export default List;