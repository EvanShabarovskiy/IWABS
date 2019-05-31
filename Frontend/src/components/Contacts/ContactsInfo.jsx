import React from 'react';
import Department from './Department';

const ContactsInfo = () => 
  <div className="contacts-info">
    <h1 className="contact-info-title"></h1>
    
    <div className="emails">
      <p className="emails-title">потрібна допомога?</p>
      <p className="email">RivneOSPK@gmail.com</p>
      <p className="email">Obl.stancija.perel.krovi@icc.rv.ua</p>
    </div>
    <Department 
      name="відділ комплектування донорських кадрів" 
      mobile="+38(067)363-41-44" 
      stationary="(0362) 63-68-90" 
    />
    <Department 
      name="відділ керування запасами трансфузійних середників" 
      mobile="+38(067)363-30-76" 
      stationary="(0362) 63-68-68" 
    />
    <p className="address">
      <p className="address-title">адреса</p>
      <p className="address-value">
        <span className="number">33014</span>
        , м. Рівне, вул. Ст. Бандери, 
        <span className="number"> 31</span>
      </p>
    </p>
  </div>


export default ContactsInfo;