import React from 'react';
import Field from '../_General/Field';
import Form from '../_General/Form';
import Modal from '../_General/Modal';

const NewMedicine = ({ name, releaseForm, unit, amount, change, onSubmit, toggled, handleToggled }) =>
  <>
    <Modal open={toggled} onClose={handleToggled}>
      <Form formClass="new-medicine-form" onSubmit={onSubmit}  title="нові ліки" buttonText="додати ліки">
        <Field name="name" value={name} placeholder="назва" change={change} />
        <Field name="releaseForm" value={releaseForm} placeholder="форма випуску" change={change} />
        <Field name="unit" value={unit} placeholder="о. в." change={change} />
        <Field name="amount" value={amount} placeholder="кількість" change={change} />
      </Form>
    </Modal>
    <button className="btn toggle-btn" onClick={handleToggled}>додати ліки</button>
  </>

export default NewMedicine;