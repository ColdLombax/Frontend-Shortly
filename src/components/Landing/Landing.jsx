import React from 'react';

import working from '../../assets/illustration-working.svg';
import GetStarted from './GetStarted';

function Landing() {
  return (
    <div>
      <div className="overflow-hidden">
        <img src={working} alt="Illustration of someone working at a desk" className="relative left-16" />
      </div>
      <GetStarted />
    </div>
  );
}

export default Landing;
