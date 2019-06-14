import React from 'react';

const MedicineItem = ({ index, name, releaseForm, unit, amount }) => 
  <ul className="medicine-item table-item">
    <li className="column">{index}</li>
    <li className="column">{name}</li>
    <li className="column">{releaseForm}</li>
    <li className="column">{unit}</li>
    <li className="column">{amount}</li>
  </ul>

export default MedicineItem;