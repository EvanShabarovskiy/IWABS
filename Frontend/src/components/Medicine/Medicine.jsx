import React from 'react';
import MedicineItem from './MedicineItem';

const Medicine = ({ medicine }) => (
  <section className="section">
    <h1 className="section-title">ліки</h1>
    <div className="medicine-container">
      { medicine.map((item, i) => <MedicineItem key={item.id} index={i + 1} {...item}/>) }
    </div>
  </section>
);

export default Medicine;