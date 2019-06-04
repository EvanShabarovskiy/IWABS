import React from 'react';
import Department from './Department';

const ContactsInfo = () => 
  <div className="contacts-info">
    <h1 className="contacts-info-title">ви можете зв'язатися з нами за цією інформацією</h1>
    
    <div className="emails">
      <p className="emails-title">потрібна допомога?</p>
      <p className="email">
        <i class="fas fa-at icon"></i>
        RivneOSPK@gmail.com
      </p>
      <p className="email">
        <i class="fas fa-at icon"></i>
        Obl.stancija.perel.krovi@icc.rv.ua
      </p>
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
      <span className="address-title">адреса</span>
      <span className="address-value">
        <i class="fas fa-map-marker-alt icon"></i>
        <span className="number">33014</span>
        , м. Рівне, вул. Ст. Бандери, 
        <span className="number"> 31</span>
      </span>
    </p>
  </div>


export default ContactsInfo;