import React from 'react';
import info from '../../assets/data/contraindications';
import List from '../_General/List';

const { title, sectionObjects } = info;

const Contraindications = () =>
  <section className="sub-section contraindications">
    <h1 className="section-title">протипоказання</h1>
    <section className="content-section">
      <h3 className="sub-title">{title}</h3>
      { sectionObjects.map((obj, i) => {
        const { list, preTitle } = obj;
        if (typeof(list) !== 'undefined') {
          return (
            <section className="content-section">
              <p className="text">{preTitle}</p>
              <List list={list} />
            </section>
          );
        } else {
          return <p className="text">{obj}</p>
        }
      }) }
    </section>
  </section>

export default Contraindications;