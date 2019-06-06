import React from 'react';
import AddPhotoContainer from '../_Forms/AddPhotoContainer';

const PhotoGallery = () => {
  return (
    <section className="section photo-gallery">
      <h1 className="section-title">фотогалерея</h1>
      {/* <AddPhotoContainer /> */}
      <div className="images-container">
        { sectionImages.map(image => 
            <Photo key={image.id} {...image}/>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;