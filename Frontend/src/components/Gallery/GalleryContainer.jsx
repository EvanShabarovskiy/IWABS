import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getImages } from '../../store/gallery/actions';
import Gallery from './Gallery';

const GalleryContainer = ({ signedIn, images, getImages }) => {
  useEffect(() => getImages(), []);
  return <Gallery images={images} signedIn={signedIn} />
};

export default connect(
  ({ images, general: { signedIn } }) => ({ images, signedIn }), 
  { getImages }
)(GalleryContainer);