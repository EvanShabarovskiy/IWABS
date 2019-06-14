import React from 'react';

const Donor = ({ index, name, email, bloodDonated, bloodGroup, dateOfBirth, address }) =>
  <ul className="donor">
    <li>{index}</li>
    <li>{name}</li>
    <li>{email}</li>
    <li>{bloodDonated}</li>
    <li>{bloodGroup}</li>
    <li>{dateOfBirth}</li>
    <li>{address}</li>
  </ul>    

export default Donor;