import React from 'react';
import withPost from './withPost';

const Post = ({ post: { title, publishingDate, image, text, onEdit, onRemove } }) => (
  <div className="admin-post">
    <h2 className="post-title">{title}</h2>
    <p className="publishing-date">{publishingDate}</p>
    <img className="img post-img" src={image} />
    <p className="post-text">{text}</p>
    <div className="btns-wrap">
      <button className="btn" onClick={onEdit}>редагувати</button>
      <button className="btn" onClick={onRemove}>видалити</button>
    </div>
  </div>
);

export default withPost(Post);