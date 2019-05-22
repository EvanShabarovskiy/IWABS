import React from 'react';

const withPost = Component => ({ post }) => {

  const onEdit = post => {
    console.log('edit');
  }

  const onRemove = id => {
    console.log('remove');
  }

  post['image'] = stat + post.image;
  post['onEdit'] = onEdit(post);
  post['onEdit'] = onRemove(post.id);
  console.log('post', post);
  return (
    <Component post={post} />
  );
};

export default withPost;