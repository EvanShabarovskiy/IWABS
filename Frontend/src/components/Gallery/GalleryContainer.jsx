import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getImages } from '../../store/gallery/actions';
import Gallery from './Gallery';

const GalleryContainer = ({ images, getImages }) => {
  useEffect(() => getImages(), []);
  console.log(images);
  return <Gallery images={images} />
};


export default connect(
  ({ images }) => ({ images }), 
  { getImages }
)(GalleryContainer);