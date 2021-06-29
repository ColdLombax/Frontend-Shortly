import React from 'react';

import working from '../../assets/illustration-working.svg';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function Landing() {
  return (
    <div>
      <div />
      <div className="overflow-hidden lg:flex flex-row-reverse lg:mt-20">
        <img src={working} alt="Illustration of someone working at a desk" className="relative left-16 lg:w-3/6" />
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
