import React from 'react';
import info from '../../assets/data/informationForADonor';
import List from '../_General/List';

const { whatADonorShouldKnow, recommendationsToDonors, intervalsBetweenDonationsOfBlood } = info;

const InformationForADonor = () =>
  <section className="sub-section information-for-a-donor">
    <h1 className="section-title">інформація для донора</h1>
    <section className="content-section">
      <h3 className="sub-title">що повинен знати донор</h3>
      <p className="text">{whatADonorShouldKnow}</p>
    </section>
    <section className="content-section">
      <h3 className="sub-title">рекомендації донорам</h3>
      <List list={recommendationsToDonors} />
    </section>
    <section className="content-section">
      <h3 className="sub-title">дотримуйте покладені інтервали між дацами крові та її компонентів</h3>
      <p className="text">{intervalsBetweenDonationsOfBlood.preTitle}</p>
      <List {...intervalsBetweenDonationsOfBlood} />
    </section>
  </section>

export default InformationForADonor;