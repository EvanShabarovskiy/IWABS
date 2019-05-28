import React from 'react';
import Field from '../../_General/Field';
import Upload from '../../_General/Upload';

const AddPhoto = ({ uploadOptions, data: { title }, change, onSubmit }) => (
  <form className="form add-photo-form" onSubmit={onSubmit}>
    <Upload {...uploadOptions} label="натисніть для завантаження" />
    <Field name="title" value={title} placeholder="заголовок зображення" change={change} />
    <button className="btn sub-btn">додати</button>
  </form>
);

export default AddPhoto;