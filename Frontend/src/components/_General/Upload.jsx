import React from 'react';
import { Icon } from 'antd';

const Upload = ({ fileName, label, change }) => (
  <div className="upload-block">
    <label  className="upload">
      <input disabled={!!fileName} type="file" name="file" className="upload-input" onChange={change}/>
      <span className="btn upload-btn"><Icon type="upload" className="upload-icon" />{label}</span>
    </label>
    {!!fileName && <span className="file-name">{fileName}</span>}
  </div>
);

export default Upload;