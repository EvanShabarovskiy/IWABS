import React, { useState } from 'react';
import AddPost from './AddPost';
import Axios from 'axios';
import { api } from '../../../assets/constants/api';

const AddPostContainer = () => {
  const [addPostData, setAddPostData] = useState({ title: '', text: '', file: null});
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
  const change = ({ target: { value, name }}) => {
    setAddPostData(data => ({
      ...data,
      [name]: value
    }))
  }
  const onSubmit = e => {
    e.preventDefault();
    Axios.post(api + 'news')
      .then(({ data }) => console.log('success', data))
  }
  return (
    <AddPost uploadOptions={uploadOptions} data={addPostData} change={change} onSubmit={onSubmit} />
  );
};

export default AddPostContainer;