import React from 'react';
import ControlButtons from '../_General/ControlButtons';

const Photo = ({ title, src, showControls, onRemove }) => (
  <div className="photo">
    <section className="image-overlay">
      <p className="image-title">{title}</p>
    </section>
    <img className="img" src={src} />
    { showControls && <ControlButtons remove onRemove={onRemove} /> }
  </div>
);

export default Photo;