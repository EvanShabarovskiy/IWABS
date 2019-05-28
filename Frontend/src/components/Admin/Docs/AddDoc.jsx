import React from 'react';
import Field from '../../_General/Field';
import Upload from '../../_General/Upload';

const AddDoc = ({ uploadOptions, data: { name }, change, onSubmit }) => (
  <form className="form add-doc-form" onSubmit={onSubmit}>
    <Upload {...uploadOptions} label="натисніть для завантаження" />
    <Field name="name" value={name} placeholder="назва документа" change={change} />
    <button className="btn sub-btn">додати</button>
  </form>
);

export default AddDoc;