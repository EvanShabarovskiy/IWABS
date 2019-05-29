import React from 'react';
import Field from '../_General/Field';

const AddMedicine = ({ data: { name, releaseForm, unit, amount }, change, onSubmit}) => (
  <form className="form add-medicine-form" onSubmit={onSubmit}>
    <Field name="name" value={name} placeholder="назва" change={change} />
    <Field name="releaseForm" value={releaseForm} placeholder="форма випуску" change={change} />
    <Field name="unit" value={unit} placeholder="о. в." change={change} />
    <Field name="amount" value={amount} placeholder="кількість" change={change} />
    <button className="btn sub-btn">додати</button>
  </form>
);

export default AddMedicine;