import React from 'react';
import NewPhotoContainer from '../_Forms/NewPhotoContainer';
import PhotoContainer from './PhotoContainer';

const Gallery = ({ images, signedIn }) =>
  <section className="section page photo-gallery">
    <h1 className="section-title">фотогалерея</h1>
    { signedIn && <NewPhotoContainer /> }
    <div className="images-container">
      { images.map(image => <PhotoContainer key={image.id} image={image}/>) }
    </div>
  </section>

export default Gallery;