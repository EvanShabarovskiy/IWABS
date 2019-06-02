import React from 'react';
import Banner from './Banner';

const speed = .25;

const BannerContainer = () => {
  const onClick = (e) => {
    e.preventDefault();
    const w = window.pageYOffset;
    const hash = '#contacts';
    const distanceToTheElement = document.querySelector(hash).getBoundingClientRect().top;
    let start = null;
    const step = time => {

      if (start === null) start = time;

      const progress = time - start;
      const r = (distanceToTheElement < 0 ? Math.max(w - progress/speed, w + t) : Math.min(w + progress/speed, w + distanceToTheElement));
      window.scrollTo(0, r);
      r != w + distanceToTheElement ? requestAnimationFrame(step) : location.hash = hash;
    }
    requestAnimationFrame(step);
  }
  
  return (
    <Banner onClick={onClick} />
  );
};

export default BannerContainer;