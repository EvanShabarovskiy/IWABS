import React from 'react';
import { stat } from '../../../assets/constants/api';
import { removePost } from '../../../store/news/actions';
import { connect } from 'react-redux'

const withPost = Component => {

  const Wrapper = ({ removePost, post }) => {

    const onRemove = id => {
      if(confirm('Ви дійсно хочете видалити цей запис?'))
      {
        removePost(id);
      }
    }
    post['src'] = stat + post.image;
    post['onRemove'] = () => onRemove(post.id);
    return (
      <Component post={post} />
    );
  }
  
  return connect(
    ({ news }) => ({ news }), 
    { removePost }
  )(Wrapper);
};

export default withPost;