import * as React from 'react';

const Banner = () => (
  <div className="banner">
    <div className="motivation">
      <h2 className="title">бути донором – це благородно і корисно!</h2>
      <span className="motivation-text">
        У організмі людини міститься в середньому близько 5 літрів крові, тобто
        7% від ваги його тіла. Доза кроводачі абсолютно нешкідлива і безпечна
        для здоров’я донора, є 450 мл.
      </span>
      <button className="btn feedback-btn">напишіть нам</button>
    </div>
    <div className="slogan-wrap">
      <h1 className="title">врятуй чиєсь життя</h1>
    </div>
  </div>
);

export default Banner;
