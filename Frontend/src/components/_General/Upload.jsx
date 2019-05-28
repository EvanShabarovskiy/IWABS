import React from 'react';
import { Icon } from 'antd';

const Upload = ({ fileName, label, disabled, fileChange }) => (
  <div className="upload-block">
    <label  className="upload">
      <input disabled={disabled} type="file" className="upload-input" onChange={fileChange}/>
      <span className="btn upload-btn"><Icon type="upload" className="upload-icon" />{label}</span>
    </label>
    {!!fileName && <span className="file-name">{fileName}</span>}
  </div>
);

export default Upload;