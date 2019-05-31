import React from 'react';
import Field from '../_General/Field';
import Upload from '../_General/Upload';
import Form from '../_General/Form';

const AddPhoto = ({ fileName, title, change, onSubmit }) => (
  <Form formClass="add-photo-form" onSubmit={onSubmit} title="нове фото" buttonText="додати фото">
    <Upload fileName={fileName} change={change} label="натисніть для завантаження" />
    <Field name="title" value={title} placeholder="заголовок зображення" change={change} />
  </Form>
);

export default AddPhoto;