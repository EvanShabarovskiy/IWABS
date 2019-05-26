import React from 'react';
import { Upload, Button, Icon } from 'antd';
import Field from '../../_General/Field';

const AddPost = ({ data: { title, text }, change, onSubmit, uploadOptions }) => (
  <form className="form add-post-form" onSubmit={onSubmit}>
    <Upload {...uploadOptions}>
      <Button size="large" className="upload">
        <Icon type="upload" /> Click to Upload
      </Button>
    </Upload>
    <Field name="title" value={title} placeholder="заголовок" change={change} />
    <Field isTextarea name="text" value={text} placeholder="текст" change={change} />
    <button type="submit" className="btn sub-btn">добавити</button>
  </form>
);

export default AddPost;