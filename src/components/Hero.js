import React from 'react';
import heroMobile from '../images/image-hero-mobile.png';
import heroDesktop from '../images/image-hero-desktop.png';
import client1 from '../images/client-databiz.svg';
import client2 from '../images/client-audiophile.svg';
import client3 from '../images/client-meet.svg';
import client4 from '../images/client-maker.svg';

import './Hero.css';

function Hero() {
  return (
    <div className="Hero-container">
      <div className="Hero-image">
        <img src={heroMobile} alt="Hero image" />
        <img src={heroDesktop} alt="Hero image" />
      </div>
      <div className="Hero-content">
        <h1> Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button> Learn more </button>
        <div className="Hero-client">
          <img src={client1} />

          <img src={client2} />

          <img src={client3} />

          <img src={client4} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
