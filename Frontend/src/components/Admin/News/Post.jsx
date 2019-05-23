import React from 'react';
import withPost from './withPost';

const Post = ({ post: { title, publishingDate, src, text, onRemove } }) => (
  <div className="post">
    <h2 className="post-title">{title}</h2>
    <p className="publishing-date">{publishingDate}</p>
    <img className="img post-img" src={src} />
    <p className="post-text">{text}</p>
    <button className="btn remove-btn" onClick={onRemove}>+</button>
  </div>
);

export default withPost(Post);