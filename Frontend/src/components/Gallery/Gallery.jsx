import React from 'react';
import Photo from './Photo';
//import AddPhotoContainer from '../_Forms/AddPhotoContainer';

const Gallery = ({ images }) => {
  return (
    <section className="section photo-gallery">
      <h1 className="section-title">фотогалерея</h1>
      {/* <AddPhotoContainer /> */}
      <div className="images-container">
        { images.map(image => 
            <Photo key={image.id} {...image}/>
        )}
      </div>
    </section>
  );
};

export default Gallery;