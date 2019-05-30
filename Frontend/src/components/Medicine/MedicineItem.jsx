import React from 'react';

const MedicineItem = ({ item: { name, releaseForm, unit, amount } }) => (
  <li className="medicine-item">
    <span className="item-name">{name}</span>
    <span className="release-form">{releaseForm}</span>
    <span className="unit">{unit}</span>
    <span className="amount">{amount}</span>
  </li>
);

export default MedicineItem;