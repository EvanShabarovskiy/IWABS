import React from 'react';
import AddPhotoContainer from '../../_Forms/NewPhotoContainer';

const PhotoGallery = () => {
  return (
    <section className="section photo-gallery">
      <h1 className="section-title">фотогалерея</h1>
      <AddPhotoContainer />
    </section>
  );
};

export default PhotoGallery;