import React from 'react';
import Donor from './Donor';

const Donors = ({ donors }) =>
  <section className="section page">
    <h1 className="section-title">донори</h1>
    <div className="donors-container">
      <Donor index="№" name="ім'я донора" email="емейл" bloodDonated="крові здано" bloodGroup="група крові" dateOfBirth="дата народження" address="адреса" />
      { donors.map((donor, i) => <Donor key={donor.id} index={i + 1} {...donor}/>) }
    </div>
  </section>

export default Donors;