import React from 'react';
import { connect } from 'react-redux'

import { news } from '../../assets/constants/api';
import { removePost } from '../../store/news/actions';
import Post from './Post';

const PostContainer = ({ post, removePost, signedIn }) => {
  post['showControls'] = signedIn;
  post['onRemove'] = () => confirm('Ви дійсно хочете видалити цей запис?') && removePost(post.id);
  post['src'] = news + post.image;
  return <Post {...post} />
};

export default connect(
  ({ general: { signedIn }}) => ({ signedIn }),
  { removePost }
)(PostContainer);