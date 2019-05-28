import React, { useState } from 'react';
import AddPost from './AddPost';
import Axios from 'axios';
import { api } from '../../../assets/constants/api';
import { message } from 'antd';

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
    let formData = new FormData();
    const { title, text, file } = addPostData;
    formData.append("title", title);
    formData.append("text", text);
    formData.append("file", file);
    console.log(formData);
    console.log(addPostData)
    Axios.post(api + 'news', formData)
      .then(({ data }) => console.log('success', data))
      .catch(error => console.log(error.response))
  }
  return (
    <AddPost uploadOptions={uploadOptions} data={addPostData} change={change} onSubmit={onSubmit} />
  );
};

export default AddPostContainer;