import React from 'react';
import Field from '../_General/Field';
import Upload from '../_General/Upload';
import Form from '../_General/Form';
import Modal from '../_General/Modal';

const NewDoc = ({ fileName, name, errors, change, onSubmit, toggled, handleToggled }) =>
  <>
    <Modal open={toggled} onClose={handleToggled} >
      <Form formClass="new-doc-form" onSubmit={onSubmit} title="новий документ" buttonText="додати документ">
        <Upload fileName={fileName} error={errors.file} change={change} label="натисніть для завантаження" />
        <Field name="title" value={name} error={errors.title} placeholder="назва документа" change={change} />
      </Form>
    </Modal>
    <button className="btn toggle-btn" onClick={handleToggled}>додати документ</button>
  </>

export default NewDoc;