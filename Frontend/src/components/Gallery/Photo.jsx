import React from 'react';
import { gallery } from '../../assets/constants/api';

const Photo = ({ title, imageName }) => (
  <div className="photo">
    <section className="image-overlay">
      <p className="image-title">{title}</p>
    </section>
    <img className="img" src={gallery + imageName} />
  </div>
);

export default Photo;