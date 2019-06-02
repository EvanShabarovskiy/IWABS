import React from 'react';
import { banner } from 'assets/constants/data/banner';

const { motivation } = banner;

const Banner = ({ onClick }) => (
  <section className="banner">
    <div className="motivation">
      <h2 className="motivation-title">{motivation.title}</h2>
      <span className="motivation-text">{motivation.text}</span>
      <button className="btn feedback-btn" onClick={onClick}>напишіть нам</button>
    </div>
  </section>
);

export default Banner;