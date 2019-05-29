import React from 'react';
import Field from '../_General/Field';
import Form from '../_General/Form';

const AddMedicine = ({ data: { name, releaseForm, unit, amount }, change, onSubmit}) => (
  <Form formClass="add-medicine-form" onSubmit={onSubmit}  title="нові ліки" buttonText="додати ліки">
    <Field name="name" value={name} placeholder="назва" change={change} />
    <Field name="releaseForm" value={releaseForm} placeholder="форма випуску" change={change} />
    <Field name="unit" value={unit} placeholder="о. в." change={change} />
    <Field name="amount" value={amount} placeholder="кількість" change={change} />
  </Form>
);

export default AddMedicine;