import React from 'react';
import MedicineItem from './MedicineItem';
import columns from '../../assets/data/medicineColumns';

const Medicine = ({ medicine }) => (
  <section className="section page">
    <h1 className="section-title">ліки</h1>
    <div className="medicine-container table">
      <MedicineItem {...columns} />
      { medicine.map((item, i) => <MedicineItem key={item.id} index={i + 1} {...item}/>) }
    </div>
  </section>
);

export default Medicine;