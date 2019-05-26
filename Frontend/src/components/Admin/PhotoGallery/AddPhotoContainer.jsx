import React, { useState } from 'react';
import AddPhoto from './AddPhoto';
import { message } from 'antd';
import withForm from '../../withForm';


const AddPhotoContainer = ({ setValue, data }) => {
  const [file, setFile] = useState(null);
  const uploadOptions = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      setAddPostData(data => ({
        ...data,
        file: info.file.originFileObj
      }))
      if (info.file.status !== 'uploading') {
        console.log(info, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  }
  return (
    <AddPhoto uploadOptions={uploadOptions} change={setValue} data={data} onSubmit={onSubmit} />
  );
};

const initialState = { 
  title: ''
}

export default withForm(initialState, initialState)(AddPhotoContainer);