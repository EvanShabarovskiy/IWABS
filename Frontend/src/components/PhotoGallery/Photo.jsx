import React from 'react';
import { galery } from '../../assets/constants/api';

const Photo = ({ title, imageName }) => (
  <div className="photo">
    <img className="img" src={galery + imageName} />
  </div>
);

export default Photo;