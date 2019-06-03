import React from 'react';
import info from '../../assets/data/howToBecomeADonor';
import List from '../_General/List';

const { basicRequirements, youCanBecomeADonorIf } = info;

const HowToBecomeADonor = () =>
  <section className="sub-section how-to-become-a-donor">
    <h1 className="section-title">як стати донором</h1>
    <section className="content-section">
      <h3 className="sub-title">що потрібно зробити</h3>
      <List list={basicRequirements} />
    </section>
    <section className="content-section">
      <p className="text">Ви можете стати донором, якщо:</p>
      <List list={youCanBecomeADonorIf} />
    </section>
  </section>

export default HowToBecomeADonor;