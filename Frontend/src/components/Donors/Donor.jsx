import React from 'react';
import ControlButtons from '../_General/ControlButtons';

const Donor = ({ index, name, email, bloodDonated, bloodGroup, dateOfBirth, address, onRemove, showControls }) =>
  <ul className="donor">
    <li>{index}</li>
    <li>{name}</li>
    <li>{email}</li>
    <li>{bloodDonated}</li>
    <li>{bloodGroup}</li>
    <li>{dateOfBirth}</li>
    <li>{address}</li>
    { showControls && <ControlButtons remove onRemove={onRemove} /> }
  </ul>    

export default Donor;