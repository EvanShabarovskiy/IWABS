import React from 'react';
import Field from '../../_General/Field';
import Upload from '../../_General/Upload';

const AddPost = ({ data: { title, text }, change, onSubmit, uploadOptions}) => (
  <form className="form add-post-form" onSubmit={onSubmit}>
    <Upload {...uploadOptions} label="натисніть для завантаження" />
    <Field name="title" value={title} placeholder="заголовок" change={change} />
    <Field isTextarea name="text" value={text} placeholder="текст" change={change} />
    <button type="submit" className="btn sub-btn">добавити</button>
  </form>
);

export default AddPost;