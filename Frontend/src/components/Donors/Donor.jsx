import React from 'react';
import ControlButtons from '../_General/ControlButtons';

const Donor = ({ index, name, email, bloodDonated, bloodGroup, dateOfBirth, address, onRemove, showControls }) =>
  <ul className="donor table-item">
    <li className="column">{index}</li>
    <li className="column">{name}</li>
    <li className="column">{email}</li>
    <li className="column">{bloodDonated}</li>
    <li className="column">{bloodGroup}</li>
    <li className="column">{dateOfBirth}</li>
    <li className="column">{address}</li>
    { showControls && <ControlButtons remove onRemove={onRemove} /> }
  </ul>    

export default Donor;