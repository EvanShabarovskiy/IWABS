import * as React from 'react';
import { banner_data } from '../../assets/constants/banner_data';

const { motivation, slogan } = banner_data;

export const Banner = () => (
  <section className="banner">
    <div className="motivation">
      <h2 className="motivation-title">{motivation.title}</h2>
      <span className="motivation-text">{motivation.text}</span>
      <button className="btn feedback-btn">напишіть нам</button>
    </div>
    <div className="slogan-wrap">
      <h1 className="title">{slogan}</h1>
    </div>
  </section>
);
