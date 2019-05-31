import React from 'react';
import Field from '../_General/Field';
import Upload from '../_General/Upload';
import Form from '../_General/Form';

const AddDoc = ({ fileName, name, change, onSubmit }) => (
  <Form formClass="add-doc-form" onSubmit={onSubmit} title="новий документ" buttonText="додати документ">
    <Upload fileName={fileName} change={change} label="натисніть для завантаження" />
    <Field name="name" value={name} placeholder="назва документа" change={change} />
  </Form>
);

export default AddDoc;