import React from 'react';

import working from '../../assets/illustration-working.svg';

import Header from './Header/Header';
import Main from './Main/Main';

function Landing() {
  return (
    <div>
      <div className="overflow-hidden">
        <img src={working} alt="Illustration of someone working at a desk" className="relative left-16" />
      </div>
      <div>
        <Header />
      </div>
      <div className="bg-gray-100">
        <Main />
      </div>

    </div>
  );
}

export default Landing;
