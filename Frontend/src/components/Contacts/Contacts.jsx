import React from 'react';
import ContactUsContainer from '../_Forms/ContactUsContainer';
import ContactsInfo from './ContactsInfo';

const Contacts = () => (
  <section className="section contacts" id="contacts">
    <h1 className="section-title">замовлення</h1>
    <ContactsInfo />
    <ContactUsContainer />
  </section>
);

export default Contacts;