import React from 'react';

const Post = ({ post: { title, publishingDate, image, text } }) => (
  <div className="post">
    <h2 className="post-title">{title}</h2>
    <p className="publishing-date">дата публікації: <span className="number bold">{publishingDate}</span></p>
    <img className="img post-img" src={image} />
    <p className="post-text">{text}</p>
    <button className="learn-more-btn">Більше</button>   
  </div>
);

export default Post;