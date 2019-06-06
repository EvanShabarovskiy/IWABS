import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getImages } from '../../store/images/actions';
import PhotoGallery from './PhotoGallery';

const PhotoGalleryContainer = ({ images, getImages }) => {
  useEffect(() => getImages(), []);
  return <PhotoGallery images={images} />
};


export default connect(
  ({ images }) => ({ images }), 
  { getImages }
)(PhotoGalleryContainer);