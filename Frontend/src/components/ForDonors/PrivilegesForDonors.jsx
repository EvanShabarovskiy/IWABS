import React from 'react';
import info from '../../assets/data/privilegesForDonors';
import List from '../_General/List';

const { donorRightsProtection, privileges, additionalPrivileges, certificateOfADonor, privilegesOfHonoraryDonors, rank } = info;

const PrivilegesForDonors = () =>
  <section className="sub-section privileges-for-donors">
    <h1 className="section-title">пільги донорам</h1>
    <section className="content-section">
      <h3 className="sub-title">захист державою прав донора</h3>
      <p className="text">{donorRightsProtection}</p>
    </section>
    <section className="content-section">
      <h3 className="sub-title">пільги, що надаються донорам</h3>
      <List list={privileges} />
    </section>
    <section className="content-section">
      <h3 className="sub-title">додаткові пільги, що надаються у зв'язку з систематичним безоплатним здаванням крові та її компонентів</h3>
      <List list={additionalPrivileges} />
    </section>
    <section className="content-section">
      <h3 className="sub-title">умови набуття статусу почесного донора україни</h3>
      <p className="text">{certificateOfADonor}</p>
    </section>
    <section className="content-section">
      <h3 className="sub-title">пільги для осіб, які мають статус почесного донора україни</h3>
      <p className="text">{privilegesOfHonoraryDonors.preTitle}</p>
      <List {...privilegesOfHonoraryDonors} />
    </section>
    <section className="content-section">
      <h3 className="sub-title">звання "заслужений донор україни"</h3>
      <p className="text">{rank}</p>
    </section>
  </section>

export default PrivilegesForDonors;