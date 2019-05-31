import React from 'react';
import Field from '../_General/Field';
import Upload from '../_General/Upload';
import Form from '../_General/Form';

const AddPost = ({ title, text, fileName, change, onSubmit }) => (
  <Form formClass="add-post-form" onSubmit={onSubmit} title="нова новина" buttonText="додати новину">
    <Upload fileName={fileName} change={change} label="натисніть для завантаження" />
    <Field name="title" value={title} placeholder="заголовок" change={change} />
    <Field isTextarea name="text" value={text} placeholder="текст" change={change} />
  </Form>
);

export default AddPost;