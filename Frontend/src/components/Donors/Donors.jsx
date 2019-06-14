import React from 'react';
import Donor from './Donor';

const Donors = ({ donors }) =>
  <section className="section page">
    <h1 className="section-title">донори</h1>
    <div className="donors-container">
      { donors.map(donor => <Donor key={donor.id} {...donor}/>) }
    </div>
  </section>

export default Donors;