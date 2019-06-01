import React from 'react';
import ContactUsContainer from '../_Forms/ContactUsContainer';
import ContactsInfo from './ContactsInfo';

const Contacts = () => (
  <section className="section contacts">
    <h1 className="section-title">контакти</h1>
    <ContactsInfo />
    <ContactUsContainer />
  </section>
);

export default Contacts;