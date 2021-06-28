import React from 'react';

import working from '../../assets/illustration-working.svg';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function Landing() {
  return (
    <div>
      <div className="overflow-hidden">
        <img src={working} alt="Illustration of someone working at a desk" className="relative left-16" />
      </div>
      <div>
        <Header />
      </div>
      <div className="bg-custom-white">
        <Main />
        <Footer />
      </div>

    </div>
  );
}

export default Landing;
