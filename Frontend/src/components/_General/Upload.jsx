import React from 'react';
import { Icon } from 'antd';

const Upload = ({ fileName, label, change }) => (
  <div className="upload-block">
    <label htmlFor="upload-input" className="upload">
      <input id="upload-input" type="file" className="upload-input" onChange={change}/>
      <button type="button" className="btn upload-btn"><Icon type="upload" /> {label}</button>
    </label>
    {!!fileName && <span className="file-name">{fileName}</span>}
  </div>
);

export default Upload;