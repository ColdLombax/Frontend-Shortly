import React from 'react';

import working from '../../assets/illustration-working.svg';
import Header from './Header';

function Landing() {
  return (
    <div>
      <div className="overflow-hidden">
        <img src={working} alt="Illustration of someone working at a desk" className="relative left-16" />
      </div>
      <Header />
    </div>
  );
}

export default Landing;
