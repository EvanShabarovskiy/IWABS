import React from 'react';
import Field from '../_General/Field';
import Upload from '../_General/Upload';
import Form from '../_General/Form';
import Modal from '../_General/Modal';

const NewPhoto = ({ fileName, title, change, errors, onSubmit, toggled, handleToggled }) =>
  <>
    <Modal open={toggled} onClose={handleToggled}>
      <Form formClass="new-photo-form" onSubmit={onSubmit} title="нове фото" buttonText="додати фото">
        <Upload fileName={fileName} change={change} error={errors.file} label="натисніть для завантаження" />
        <Field name="title" value={title} error={errors.title} placeholder="заголовок зображення" change={change} />
      </Form>
    </Modal>
    <button className="btn toggle-btn" onClick={handleToggled}>додати фото</button>
  </>

export default NewPhoto;