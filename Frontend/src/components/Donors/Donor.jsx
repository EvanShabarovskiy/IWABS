import React from 'react';

const Donor = ({ name, email, bloodDonated, bloodGroup, dateOfBirth, address }) => (
    <div className="donor">
        <ul>
            <li>{name}</li>
            <li>{email}</li>
            <li>{bloodDonated}</li>
            <li>{bloodGroup}</li>
            <li>{dateOfBirth}</li>
            <li>{address}</li>
        </ul>    
    </div>
);

export default Donor;