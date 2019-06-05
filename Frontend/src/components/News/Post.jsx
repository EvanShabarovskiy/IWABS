import React from 'react';
import ControlButtons from '../_General/ControlButtons';

const Post = ({ title, publishingDate, src, text, showControls, onRemove }) =>
  <div className="post">
    <h2 className="post-title">{title}</h2>
    <p className="publishing-date">{publishingDate}</p>
    <img className="img post-img" src={src} />
    <p className="post-text">{text}</p>
    <button className="read-more btn">читати далі</button>
    { showControls && <ControlButtons remove onRemove={onRemove} /> }
  </div>

export default Post;