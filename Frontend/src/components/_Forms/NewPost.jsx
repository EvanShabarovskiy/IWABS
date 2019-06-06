import React from 'react';
import Field from '../_General/Field';
import Upload from '../_General/Upload';
import Form from '../_General/Form';
import Modal from '../_General/Modal';

const NewPost = ({ title, text, fileName, change, errors, onSubmit, toggled, handleToggled }) =>
  <>
    {console.log(errors)}
    <Modal open={toggled} onClose={handleToggled}>
      <Form formClass="new-post-form" onSubmit={onSubmit}  title="нова новина" buttonText="додати новину">
        <Upload fileName={fileName} error={errors.file} change={change} label="натисніть для завантаження" />
        <Field name="title" value={title} error={errors.title} placeholder="заголовок" change={change} />
        <Field isTextarea name="text" value={text} error={errors.text} placeholder="текст" change={change} />
      </Form>
    </Modal>
    <button className="btn toggle-btn" onClick={handleToggled}>додати новину</button>
  </>

export default NewPost;