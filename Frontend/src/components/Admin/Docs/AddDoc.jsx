import React from 'react';
import Field from '../../_General/Field';
import { Upload, Button, Icon } from 'antd';

const AddDoc = ({ uploadOptions, data: { name }, change, onSubmit }) => (
  <form className="form add-doc-form" onSubmit={onSubmit}>
    <Upload {...uploadOptions}>
      <Button size="large" className="upload">
        <Icon type="upload" /> Click to Upload
      </Button>
    </Upload>
    <Field name="name" value={name} placeholder="назва документа" change={change} />
    <button className="btn sub-btn">додати</button>
  </form>
);

export default AddDoc;