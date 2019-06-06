import React from 'react';
import { gallery } from '../../assets/constants/api';

const Photo = ({ title, imageName }) => (
  <div className="photo">
    <img className="img" src={gallery + imageName} />
  </div>
);

export default Photo;