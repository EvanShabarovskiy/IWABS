import React from 'react';
import { Upload, Button, Icon } from 'antd';
import Field from '../../_General/Field';

const AddPhoto = ({ uploadOptions, data: { title }, change, onSubmit }) => (
  <form className="form add-photo-form" onSubmit={onSubmit}>
    <Upload {...uploadOptions}>
      <Button size="large" className="upload">
        <Icon type="upload" /> натисніть для завантаження
      </Button>
    </Upload>
    <Field name="title" value={title} placeholder="заголовок зображення" change={change} />
    <button className="btn sub-btn">додати</button>
  </form>
);

export default AddPhoto;