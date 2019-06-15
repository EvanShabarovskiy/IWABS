import React from 'react';
import cx from 'classnames';
import MedicineItem from './MedicineItem';
import columns from '../../assets/data/medicineColumns';
import MedicineItemContainer from './MedicineItemContainer';

const Medicine = ({ medicine, signedIn }) =>
  <section className="section page">
    <h1 className="section-title">ліки</h1>
    <div className={cx('medicine-container', 'table', signedIn && 'controlled')}>
      <MedicineItem {...columns} />
      { medicine.map((item, i) => <MedicineItemContainer key={item.id} index={i + 1} item={item}/>) }
    </div>
  </section>

export default Medicine;