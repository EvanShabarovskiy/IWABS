import React from 'react';
import { connect } from 'react-redux'

import Photo from './Photo';
import { gallery } from '../../assets/constants/api';
import { removeImage } from '../../store/gallery/actions'

const PhotoContainer = ({ image, signedIn, removeImage }) => {
  image['showControls'] = signedIn;
  image['onRemove'] = () => confirm('Ви дійсно хочете видалити це зображення?') && removeImage(image.id);
  image['src'] = gallery + image.imageName; 
  return <Photo {...image} />
};

export default connect(
  ({ general: { signedIn }}) => ({ signedIn }),
  { removeImage }
)(PhotoContainer);