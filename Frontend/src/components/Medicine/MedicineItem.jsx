import React from 'react';
import ControlButtons from '../_General/ControlButtons';

const MedicineItem = ({ index, name, releaseForm, unit, amount, showControls, onRemove }) => 
  <ul className="medicine-item table-item">
    <li className="column">{index}</li>
    <li className="column">{name}</li>
    <li className="column">{releaseForm}</li>
    <li className="column">{unit}</li>
    <li className="column">{amount}</li>

    { showControls && <ControlButtons remove onRemove={onRemove} /> }
  </ul>

export default MedicineItem;